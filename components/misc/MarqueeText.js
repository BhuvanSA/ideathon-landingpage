import React from "react";

function MarqueeText(props) {
  return (
    <div className="overflow-marquee">
      <span>{props.text}</span>
    </div>
  );
}

export default MarqueeText;
