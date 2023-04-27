import { ChangeEvent, useEffect, useState } from "react";
import "./index.css";

export default function Patapata(): JSX.Element {
  const [Start, setStart] = useState<number>(1);
  const [End, setEnd] = useState<number>(40);
  const [Do, setDo] = useState<boolean>(false);
  const [FlipNum, setFlipNum] = useState<number[]>([]);

  useEffect(setRes, [Start, End]);

  function changeStart(e: ChangeEvent<HTMLInputElement>): void {
    setStart(Number(e.currentTarget.value));
  }
  function changeEnd(e: ChangeEvent<HTMLInputElement>): void {
    setEnd(Number(e.currentTarget.value));
  }
  function changeDo(): void {
    if (Do) {
      setRes();
    }
    setDo(!Do);
  }
  function setRes(): void {
    let flipNum = [];
    const res = getRes();
    console.log(res);

    for (let i = Start; i < res; ++i) {
      flipNum.push(i);
    }
    for (let i = res + 1; i <= End; ++i) {
      flipNum.push(i);
    }
    for (let i = Start; i < res; ++i) {
      flipNum.push(i);
    }
    flipNum.push(res);
    setFlipNum(flipNum.concat());
  }
  function getRes(): number {
    return Number(Math.floor(Math.random() * (End + 1 - Start)) + Start);
  }

  return (
    <div className="patapata">
      <h2>パタパタ</h2>
      <div className="setting">
        設定：
        <label>開始</label>
        <input type="number" value={Start} min={0} onChange={changeStart} />
        <label>終了</label>
        <input type="number" value={End} max={100} onChange={changeEnd} />
        <button type="button" className="button" onClick={changeDo}>
          {Do ? "reset" : "start"}
        </button>
      </div>
      <div className="board">
        <div className="row">
          <input
            type="checkbox"
            id="btn1"
            className="btn"
            checked={Do}
            readOnly
          />
          <label htmlFor="btn1"></label>
          <div className="frame">
            {FlipNum.map((num, idx) => (
              <div
                key={`${num}_${idx}`}
                className="flip"
                data-txt={
                  idx === FlipNum.length - 1 ? FlipNum[FlipNum.length - 1] : num
                }
                data-txt-next={FlipNum[idx + 1] || FlipNum[FlipNum.length - 1]}
              ></div>
            ))}
            <div className="flip open" data-txt={""}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
