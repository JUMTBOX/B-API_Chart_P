import Chart from "@/components/Chart";
import { ParsedUrlQueryInput } from "querystring";

export default async function Symbol({
  params,
}: {
  params: ParsedUrlQueryInput;
}) {
  const { symbol } = await params;

  return (
    <div>
      <div>{symbol}</div>
      <Chart symbol={symbol as string} />
    </div>
  );
}
