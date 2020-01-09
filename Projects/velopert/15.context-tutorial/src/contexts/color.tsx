import React from "react";
import { createContext, useState } from "react";

class stateprops {
  constructor(color: string, subcolor: string) {
    this.color = color;
    this.subcolor = subcolor;
  }
  public color: string;
  public subcolor: string;
}

class setprops {
  constructor(
    setcolor: React.Dispatch<React.SetStateAction<string>> | undefined,
    setsubcolor: React.Dispatch<React.SetStateAction<string>> | undefined
  ) {
    this.setcolor = setcolor;
    this.setsubcolor = setsubcolor;
  }
  public setcolor?: React.Dispatch<React.SetStateAction<string>>;
  public setsubcolor?: React.Dispatch<React.SetStateAction<string>>;
}

class ColorProps {
  constructor(
    color: string,
    subcolor: string,
    setcolor?: React.Dispatch<React.SetStateAction<string>>,
    setsubcolor?: React.Dispatch<React.SetStateAction<string>>
  ) {
    this.state = new stateprops(color, subcolor);
    this.actions = new setprops(setcolor, setsubcolor);
  }
  public state: stateprops;
  public actions: setprops;
}

const ColorContext = createContext(
  new ColorProps("black", "red", undefined, undefined)
);

function ColorProvider(props: any) {
  const [color, setColor] = useState<string>("black");
  const [subcolor, setSubcolor] = useState<string>("red");

  const value = new ColorProps(color, subcolor, setColor, setSubcolor);

  return (
    <ColorContext.Provider value={value}>
      {props.children}
    </ColorContext.Provider>
  );
}

const { Consumer: ColorConsumer } = ColorContext;

export { ColorProvider, ColorConsumer };

export default ColorContext;
