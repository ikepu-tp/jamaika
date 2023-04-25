import { useEffect, useState } from "react";
import "./index.css";

export type DicePropsType = {
  seconds?: number;
  res?: boolean;
  ratio?: number;
  done?: () => void;
};
const positions = ["top", "left", "bottom", "right", "front", "back"];
export default function Dice({
  seconds = undefined,
  res = false,
  ratio = 1,
  done = undefined,
}: DicePropsType): JSX.Element {
  const [Position, setPosition] = useState<string>(
    positions[Math.floor(Math.random() * 6)]
  );

  useEffect(() => {
    if (seconds === undefined) return;

    setPosition("animation");
    setTimeout(() => {
      setPosition(positions[Math.floor(Math.random() * 6)]);
      if (done !== undefined) done();
    }, seconds * 800);
  }, [seconds, done]);

  return (
    <div className="dice">
      <div className={`space ${res ? "res" : "moto"}`}>
        <div className={`box ${Position}`}>
          <div className="face top">{1 * ratio}</div>
          <div className="face bottom">{2 * ratio}</div>
          <div className="face front">{3 * ratio}</div>
          <div className="face back">{4 * ratio}</div>
          <div className="face right">{5 * ratio}</div>
          <div className="face left">{6 * ratio}</div>
        </div>
      </div>
    </div>
  );
}
