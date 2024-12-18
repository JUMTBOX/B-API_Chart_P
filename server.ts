"use server";
import axios from "axios";

export type SymbolVO = {
  symbol: string;
  pair?: string;
  baseAsset: string;
  quoteAsset: "USDT";
};

export async function getSymbolsInfo(): Promise<string[]> {
  const { BINANCE_REST_BASE_URL, ENDP_EXCHANGE_INFO } = process.env;

  const {
    data: { assets, symbols },
  } = await axios.get(BINANCE_REST_BASE_URL! + ENDP_EXCHANGE_INFO!);

  const entries: [string, unknown | SymbolVO][] = Object.entries(symbols).slice(
    0,
    10
  );

  return entries.map((item) => {
    const { symbol } = item[1] as SymbolVO;
    return symbol;
  });
}
