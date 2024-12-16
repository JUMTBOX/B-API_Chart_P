import Link from "next/link";

export default function SymbolLink({ symbol }: { symbol: string }) {
  return (
    <li className="border-white-20 bg-slate-800 m-2 p-2 rounded-md">
      <Link href={`/${symbol}`}>{symbol}</Link>
    </li>
  );
}
