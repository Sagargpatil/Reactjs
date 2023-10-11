import React from "react";
import "./Slot.css";

function SlotMachin() {
  const Slot = (props) => {
    if (props.x == props.y && props.y == props.z) {
      return (
        <div className="slot_inner">
          <h1>😄 matchinig</h1>
        </div>
      );
    } else {
      return (
        <div className="slot_inner">
          <h1>🎅 Not matchinig</h1>
        </div>
      );
    }
  };

  return (
    <div>
      <h1 className="heading_style">
        🎰Welcome to{" "}
        <span style={{ fontWeight: "bold" }}>Slot Machine game</span>🎰
      </h1>
      <div className="slotmachine">
        <Slot x="😄" y="😄" z="😄" />
        <Slot x="🍎" y="😄" z="😄" />
        <Slot x="😄" y="😄" z="😄" />
      </div>
    </div>
  );
}

export default SlotMachin;
