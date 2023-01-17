import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleAttack() {
    alert("Attack clicked");
  }

  defendeAttack() {
    alert("Defend clicked");
  }

  render() {
    return (
      <div className="row text-white">
        <h1>Brojac: {this.state.count}</h1>
        <button onClick={this.handleAttack} style={{ width: "200px" }}>
          +1
        </button>
        <button onClick={this.defendeAttack} style={{ width: "200px" }}>
          -1
        </button>
      </div>
    );
  }
}

export default Counter;
