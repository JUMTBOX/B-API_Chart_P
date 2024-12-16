import { getSymbolsInfo } from "../../server";
import SymbolLink from "@/components/SymbolLink";

export default async function Home() {
  const symbolArr = await getSymbolsInfo();

  return (
    <div>
      <div>HOME</div>
      <ul>
        {symbolArr.map((item) => (
          <SymbolLink symbol={item.symbol} />
        ))}
      </ul>
    </div>
  );
}
