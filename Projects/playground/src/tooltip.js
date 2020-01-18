import React, { useState, useEffect, useCallback } from "react";
import "./tooltip.css";

export default function Tooltip({ data }) {
  const { rect, text } = data;
  const [mRect, setmRect] = useState();
  const [renderRect, setRenderRect] = useState(2);

  useEffect(() => {
    if (rect && mRect) {
      let x = 0,
        y = 0;

      const docWidth = document.documentElement.clientWidth,
        docHeight = document.documentElement.clientHeight;

      let rx = rect.x + rect.width, // most right x
        lx = rect.x, // most left x
        ty = rect.y, // most top y
        by = rect.y + rect.height; // most bottom y

      let bRight = rx + mRect.width <= window.scrollX + docWidth;
      let bLeft = lx - mRect.width >= 0;

      let bAbove = ty - mRect.height >= 0;
      let bBellow = by + mRect.height <= window.scrollY + docHeight;

      if (bRight) {
        x = rx;

        y = ty + (rect.height - mRect.height);

        if (y < 0) {
          y = ty;
        }
      } else if (bBellow) {
        y = by;

        x = lx + (rect.width - mRect.width);

        if (x < 0) {
          x = lx;
        }
      } else if (bLeft) {
        x = lx - mRect.width;

        y = ty + (rect.height - mRect.height);

        if (y < 0) {
          y = ty;
        }
      } else if (bAbove) {
        y = ty - mRect.height;

        x = lx + (rect.width - mRect.width);

        if (x < 0) {
          x = lx;
        }
      }
      setRenderRect({ x, y });
    } else {
      setRenderRect(null);
    }
  }, [rect, mRect]);

  const measuredRef = useCallback(node => {
    if (node !== null) {
      setmRect(node.getBoundingClientRect());
    }
  }, []);

  const style = {
    left: `${renderRect && renderRect.x + window.scrollX}px`,
    top: `${renderRect && renderRect.y + window.scrollY}px`
  };

  return (
    <>
      {renderRect && (
        <div
          ref={measuredRef}
          id="tooltip"
          className={"tooltip top"}
          style={style}
        >
          <div className="tooltip-arrow"></div>
          <div className="tooltip-inner">{text}</div>
        </div>
      )}
    </>
  );
}
