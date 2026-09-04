"use client";

import { useEffect, useMemo, useState } from "react";

function pseudoRandom(index: number, salt: number) {
  const value = Math.sin(index * 12.9898 + salt * 78.233) * 43758.5453;
  return value - Math.floor(value);
}

function generateCandles(count: number, seed: number) {
  let price = seed;
  return Array.from({ length: count }, (_, index) => {
    const open = price;
    const change =
      Math.sin(index * 0.35 + seed) * 8 + (pseudoRandom(index, seed) - 0.5) * 4;
    const close = open + change;
    const high = Math.max(open, close) + pseudoRandom(index + 1, seed) * 5;
    const low = Math.min(open, close) - pseudoRandom(index + 2, seed) * 5;
    price = close;
    return { open, close, high, low, up: close >= open };
  });
}

export function HeroChartBackground() {
  const [offset, setOffset] = useState(0);
  const candles = useMemo(() => generateCandles(48, 120), []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setOffset((value) => (value + 1) % 48);
    }, 120);
    return () => window.clearInterval(timer);
  }, []);

  const visible = [...candles.slice(offset), ...candles.slice(0, offset)];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.12]">
      <svg
        viewBox="0 0 960 320"
        preserveAspectRatio="none"
        className="h-full w-[140%] -translate-x-[10%] animate-[drift_30s_ease-in-out_infinite_alternate]"
      >
        {visible.map((candle, index) => {
          const x = index * 18 + 8;
          const bodyTop = 160 - candle.close * 0.8;
          const bodyBottom = 160 - candle.open * 0.8;
          const wickTop = 160 - candle.high * 0.8;
          const wickBottom = 160 - candle.low * 0.8;

          return (
            <g key={index}>
              <line
                x1={x}
                x2={x}
                y1={wickTop}
                y2={wickBottom}
                stroke={candle.up ? "#00ff9c" : "#ff6b6b"}
                strokeWidth="1"
              />
              <rect
                x={x - 4}
                y={Math.min(bodyTop, bodyBottom)}
                width="8"
                height={Math.max(Math.abs(bodyBottom - bodyTop), 2)}
                fill={candle.up ? "#00ff9c" : "#ff6b6b"}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
