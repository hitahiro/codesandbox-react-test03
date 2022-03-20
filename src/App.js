import React from "react";
import { ChildArea } from "./ChildArea";
import { useState, useCallback, useMemo } from "react";
import "./styles.css";

export default function App() {
  console.log("App rendered!");

  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const onClickOpen = () => {
    setOpen(!open);
  };

  const onClickClose = useCallback(() => {
    console.log("onClickClose（useCallback) call");
    setOpen(false);
  }, [setOpen]);

  const temp = useMemo(() => {
    console.log("演算処理（useMemo） call");
    return 1 + 3;
  }, []);
  console.log(temp);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
