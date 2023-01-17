import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAttack = this.handleAttack.bind(this);
    this.defendeAttack = this.defendeAttack.bind(this);
    this.state = {
      count: 0,
    };
  }

  handleAttack() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }

  defendeAttack() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
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
