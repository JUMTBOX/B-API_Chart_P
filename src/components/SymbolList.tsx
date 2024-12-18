"use client";
import { useEffect, useState } from "react";
import SymbolLink from "./SymbolLink";

export default function SymbolList({ symbolArr }: { symbolArr: string[] }) {
  const [streamArr, setStreamArr] = useState<any[]>();

  useEffect(() => {
    const WS_URL = process.env.NEXT_PUBLIC_BINANCE_WS_MARKET_STREAM_URL!;
    const socket = new WebSocket(`${WS_URL}/!ticker@arr`);

    socket.onmessage = (event) => {
      const { data } = event;

      console.log(
        symbolArr,
        (JSON.parse(data) as any[]).filter((item) => symbolArr.includes(item.s))
      );
      //   setStreamArr(());
    };

    setTimeout(() => {
      socket.close();
    }, 5000);

    return () => {
      socket.close();
    };
  }, []);
  return (
    <>
      <ul>
        {symbolArr.map((item, _i) => (
          <SymbolLink key={_i} symbol={item} price={1} />
        ))}
      </ul>
    </>
  );
}
