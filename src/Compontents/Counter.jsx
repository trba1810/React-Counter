import React from "react";
import attack from "../images/attack.png";
import defend from "../images/defend.png";

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
      <div className="row text-white text-center">
        <h1>Rezultat: {this.state.count}</h1>
        <p>Pobeda na +10 i poraz na -10</p>
        <p>Poslednji potez:</p>
        <p>Status:</p>
        <div className="col-6 col-md-3 mx-auto">
          <img
            style={{
              width: "100%",
              cursor: "pointer",
              border: "1px solid green",
            }}
            alt="attack"
            className="p-4 rounded"
            src={attack}
            onClick={this.handleAttack}
          />
        </div>
        <div className="col-6 col-md-3 mx-auto">
          <img
            style={{
              width: "100%",
              cursor: "pointer",
              border: "1px solid red",
            }}
            alt="defend"
            className="p-4 rounded"
            src={defend}
            onClick={this.defendeAttack}
          />
        </div>
        <div className="col-12 col-md-4 offset-md-4">
          <button className="btn btn-secondary w-100 mt-2">Random Play</button>
          <button className="btn btn-warning w-100 mt-2">Reset</button>
        </div>
      </div>
    );
  }
}

export default Counter;
