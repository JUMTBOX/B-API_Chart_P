"use client";
import Link from "next/link";
import React from "react";

const SymbolLink = React.memo(
  ({ symbol, price }: { symbol: string; price: number }) => {
    return (
      <li className="flex justify-between items-center m-2 p-2 rounded-md  ">
        <div>
          <Link href={`/${symbol}`}>{symbol}</Link>
          <span className="bg-slate-700 m-2 rounded-sm p-1 text-xs">Perp</span>
        </div>
        <div className="flex justify-between">
          <span className="mr-1">{price}</span>
          <span className={`bg-green-600 rounded-md text-md`}>{5}%</span>
        </div>
      </li>
    );
  }
);

export default SymbolLink;
