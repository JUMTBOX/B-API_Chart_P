import SymbolList from "@/components/SymbolList";
import { getSymbolsInfo } from "../../server";
import SymbolLink from "@/components/SymbolLink";

export default async function Home() {
  const symbolArr = await getSymbolsInfo();

  return (
    <div>
      <div>HOME</div>
      <SymbolList symbolArr={symbolArr} />
    </div>
  );
}
