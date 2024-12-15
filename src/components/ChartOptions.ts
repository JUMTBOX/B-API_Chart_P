export default class ChartOptions {
  static options = {
    width: 600,
    height: 400,
    layout: {
      textColor: "#d1d4dc",
      background: { color: "#16161a" },
    },
    grid: {
      vertLines: {
        color: "#2b2b43", // 어두운 회색
      },
      horzLines: {
        color: "#2b2b43", // 어두운 회색
      },
    },
    timeScale: {
      timeVisible: true,
      secondsVisible: true,
      borderColor: "#2b2b43",
    },
    rightPriceScale: {
      borderColor: "#2b2b43", // 가격 스케일 경계선 색상
    },
  };

  static candleStickSeriesOptions = {
    upColor: "#26a69a", // 상승(양봉): 초록색
    downColor: "#ef5350", // 하락(음봉): 빨간색
    borderUpColor: "#26a69a", // 양봉 테두리
    borderDownColor: "#ef5350", // 음봉 테두리
    wickUpColor: "#26a69a", // 양봉 꼬리
    wickDownColor: "#ef5350", // 음봉 꼬리
  };
}
