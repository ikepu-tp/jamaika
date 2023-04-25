import { useEffect, useState } from "react";
import "./index.css";

export type DicePropsType = {
  seconds?: number;
  res?: boolean;
};
const positions = ["top", "left", "bottom", "right", "front", "back"];
export default function Dice({
  seconds = undefined,
  res = false,
}: DicePropsType): JSX.Element {
  const [Position, setPosition] = useState<string>("");

  useEffect(() => {
    if (seconds === undefined) return;

    setPosition("animation");
    setTimeout(() => {
      setPosition(positions[Math.floor(Math.random() * 6)]);
    }, seconds * 1000);
  }, [seconds]);

  return (
    <div className={`space ${res ? "res" : "moto"}`}>
      <div className={`box ${Position}`}>
        <div className="face top">top</div>
        <div className="face bottom">bottom</div>
        <div className="face front">front</div>
        <div className="face back">back</div>
        <div className="face right">right</div>
        <div className="face left">left</div>
      </div>
    </div>
  );
}
