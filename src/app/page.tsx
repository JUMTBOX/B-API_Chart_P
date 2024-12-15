"use client";
import Chart from "@/components/Chart";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [onOff, setOnOff] = useState<boolean>(true);

  const handleOnOff = () => {
    setOnOff((cur) => !cur);
  };

  return (
    <div>
      <div>{onOff ? <Chart /> : "종료"}</div>
      <button
        className="mt-4 border-cyan-50 border-2 p-1 rounded-lg"
        onClick={handleOnOff}
      >
        ON / OFF
      </button>
    </div>
  );
}
