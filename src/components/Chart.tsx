"use client";
import { CandlestickData, createChart } from "lightweight-charts";
import { useEffect, useRef } from "react";
import ChartOptions from "./ChartOptions";

const Chart = ({ symbol: s }: { symbol: string }) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const wsUrl: string = process.env.NEXT_PUBLIC_BINANCE_WS_MARKET_STREAM_URL!;

  useEffect(() => {
    if (chartContainerRef.current) {
      /*create chart */
      const chart = createChart(
        chartContainerRef.current,
        ChartOptions.options
      );

      const candlestickSeries = chart.addCandlestickSeries(
        ChartOptions.candleStickSeriesOptions
      );

      // ws stream
      const socket = new WebSocket(wsUrl + `/${s.toLowerCase()}@kline_1m`);

      socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        const {
          k: {
            s: symbol,
            i: interval,
            o: openPrice,
            c: closePrice,
            h: highPrice,
            l: lowPrice,
            v: baseAssetVolume,
            t: startTime,
            T: endTime,
          },
        } = data;

        const newDate = Math.floor(new Date(startTime).getTime() / 1000);

        const candleStick = {
          time: newDate,
          open: parseFloat(openPrice),
          high: parseFloat(highPrice),
          low: parseFloat(lowPrice),
          close: parseFloat(closePrice),
        };

        candlestickSeries.update(candleStick as CandlestickData);
      };

      return () => {
        socket.close();
        chart.remove();
      };
    }
  }, []);

  return <div ref={chartContainerRef} />;
};

export default Chart;
