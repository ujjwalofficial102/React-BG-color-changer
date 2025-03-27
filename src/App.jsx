import { useState } from "react";
import "./App.css";
import { Button } from "./component/Button";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="h-screen duration-1000" style={{ backgroundColor: color }}>
      <div className="fixed bottom-12 inset-x-0 flex justify-center ">
        <div className="max-w-9/12 flex justify-center flex-wrap bg-slate-300 rounded-full gap-2 p-2 shadow-lg">
          <Button
            onClick={() => {
              setColor("red");
            }}
            title={"red"}
            text={"white"}
          ></Button>
          <Button
            onClick={() => {
              setColor("blue");
            }}
            title={"blue"}
            text={"white"}
          ></Button>
          <Button
            onClick={() => {
              setColor("green");
            }}
            title={"green"}
            text={"white"}
          ></Button>
          <Button
            onClick={() => {
              setColor("yellow");
            }}
            title={"yellow"}
          ></Button>
          <Button
            onClick={() => {
              setColor("cyan");
            }}
            title={"cyan"}
          ></Button>
          <Button
            onClick={() => {
              setColor("orange");
            }}
            title={"orange"}
          ></Button>
          <Button
            onClick={() => {
              setColor("purple");
            }}
            title={"purple"}
            text={"white"}
          ></Button>
          <Button
            onClick={() => {
              setColor("pink");
            }}
            title={"pink"}
          ></Button>
          <Button
            onClick={() => {
              setColor("black");
            }}
            title={"black"}
            text={"white"}
          ></Button>
          <Button
            onClick={() => {
              setColor("white");
            }}
            title={"white"}
          ></Button>
        </div>
      </div>
    </div>
  );
}

export default App;
