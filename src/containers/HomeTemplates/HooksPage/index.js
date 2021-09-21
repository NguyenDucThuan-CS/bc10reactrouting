import React, { useState, useEffect, useCallback, useMemo, useRef } from "react";
import Child from "./child";
import CustomHooks from "./custom-hooks";
import DemoUseReducer from "./useReducer";

export default function HooksPage() {
  const listUser = ["Nguyen", "Si", "Thanh"];
  const prevNumber = useRef(0);
  const [number, setNumber] = useState(0);
  useEffect(() => {
    console.log("useEffect nhu didmount neu tham so thu 2 la mang rong");
  }, []);

  useEffect(() => {
    console.log("useEffect nhu didupdate neu tham so thu 2 la khac rong");
  }, [number]);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("hello");
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  const showNumber = () => {
    console.log("showNumber");
  };

  const showNumberCallback = useCallback(showNumber, []);
  /*  const listUserMemo = useMemo(listUser, []); */

  const numberUp = () => {
    let i = 0;
    while (i < 1000) i++;
    return i;
  };

  const numberUpMemo = useMemo(() => numberUp(), []);
  return (
    <div>
      <h3>HooksPage</h3>
      <h1>Pre Number: {prevNumber.current}</h1>
      <h1>Number:{number}</h1>
      <button
        className="btn btn-success"
        onClick={() => {
          setNumber(number + 1);
          prevNumber.current = number;
        }}
      >
        Increment
      </button>
      <h1>Number Up: {numberUpMemo}</h1>
      <hr />
      <Child showNumber={showNumberCallback} />
      <hr />
      <DemoUseReducer />
      <hr />
      <CustomHooks />
    </div>
  );
}
