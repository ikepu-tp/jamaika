import Dice, { DicePropsType } from "component/Dice";
import { useState } from "react";
import "./index.css";

export default function Jamaika(): JSX.Element {
  const [Second, setSecond] = useState<number | undefined>(undefined);

  function start() {
    setSecond(2);
  }
  function done() {
    setSecond(undefined);
  }
  return (
    <div className="jamaika">
      <h1>ジャマイカ</h1>
      <p>
        黒のサイコロの和になるように白のサイコロ全ての数字を1回ずつ四足演算しよう！
      </p>
      <div>
        <button
          onClick={start}
          className="button"
          disabled={Second !== undefined}
        >
          start
        </button>
      </div>
      <div className="jamaika-element top">
        <DiceComponent seconds={Second} done={done} />
      </div>
      <div className="jamaika-element bottom">
        <DiceComponent seconds={Second} done={done} />
      </div>
      <div className="jamaika-element left">
        <DiceComponent seconds={Second} done={done} />
      </div>
      <div className="jamaika-element right">
        <DiceComponent seconds={Second} done={done} />
      </div>
      <div className="jamaika-element front">
        <DiceComponent res seconds={Second} done={done} />
      </div>
      <div className="jamaika-element back">
        <DiceComponent seconds={Second} done={done} />
      </div>
      <div className="jamaika-element center">
        <DiceComponent res ratio={10} seconds={Second} done={done} />
      </div>
    </div>
  );
}

function DiceComponent({
  res = false,
  seconds = undefined,
  ratio = 1,
  done = undefined,
}: DicePropsType): JSX.Element {
  return <Dice res={res} ratio={ratio} seconds={seconds} done={done} />;
}
