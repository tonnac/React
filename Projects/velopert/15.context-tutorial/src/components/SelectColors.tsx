import React from "react";
import { ColorConsumer } from "../contexts/color";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

export default function SelectColors() {
  return (
    <div>
      <h2>색상 선택</h2>
      <ColorConsumer>
        {({ actions }) => (
          <div style={{ display: "flex" }}>
            {colors.map(color => (
              <div
                key={color}
                style={{
                  background: color,
                  width: "24px",
                  height: "24px",
                  cursor: "pointer"
                }}
                onClick={() => {
                  if (actions.setcolor !== undefined) {
                    actions.setcolor(color);
                  }
                }}
                onContextMenu={e => {
                  e.preventDefault();
                  if (actions.setsubcolor !== undefined) {
                    actions.setsubcolor(color);
                  }
                }}
              />
            ))}
          </div>
        )}
      </ColorConsumer>
      <hr />
    </div>
  );
}
