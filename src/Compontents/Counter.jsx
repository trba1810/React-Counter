import React from "react";

class Counter extends React.Component {
  render() {
    return (
      <div className="row text-white">
        <h1>Brojac:</h1>
        <button style={{ width: "200px" }}>+1</button>
        <button style={{ width: "200px" }}>-1</button>
      </div>
    );
  }
}

export default Counter;
