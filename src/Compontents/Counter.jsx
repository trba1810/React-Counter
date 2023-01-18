import React from "react";
import attack from "../images/attack.png";
import defend from "../images/defend.png";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAttack = this.handleAttack.bind(this);
    this.handleDefense = this.handleDefense.bind(this);
    this.state = {
      count: 0,
      status: "",
      lastPlay: "",
    };
  }

  handleAttack = () => {
    this.setState((prevState) => {
      let newCount = prevState.count + Math.round(Math.random() * 10);
      return {
        count: newCount,
        status: newCount > 10 ? "Pobeda!" : prevState.status,
        lastPlay: "Napad",
      };
    });
  };

  handleDefense = () => {
    this.setState((prevState) => {
      let newCount = prevState.count - Math.round(Math.random() * 10);
      return {
        count: newCount,
        status: newCount < -10 ? "Poraz!" : prevState.status,
        lastPlay: "Odbrana",
      };
    });
  };

  handleRandomPlay = () => {
    let playMode = Math.round(Math.random());
    if (playMode === 0) {
      this.handleAttack();
    } else {
      this.handleDefense();
    }
  };

  handleReset = () => {
    this.setState(() => {
      return {
        count: 0,
        status: "",
        lastPlay: "",
      };
    });
  };

  render() {
    return (
      <div className="row text-white text-center mt-3">
        <h1>Rezultat: {this.state.count}</h1>
        <p>Pobeda na +10 i poraz na -10</p>
        <p>Poslednji potez:{this.state.lastPlay}</p>
        <p>Status:{this.state.status}</p>
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
            onClick={this.handleDefense}
          />
        </div>
        <div className="col-12 col-md-4 offset-md-4 mt-4">
          <button
            className="btn btn-secondary w-100 mt-2"
            onClick={this.handleRandomPlay}
          >
            Random Play
          </button>
          <button
            className="btn btn-warning w-100 mt-2"
            onClick={this.handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
