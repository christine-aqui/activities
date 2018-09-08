import React from "react";

class Counter extends React.Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  //
  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
    if(this.state.count <= 0 ){
      this.setState({count: 0});
    }
  };

  render() {
    return (
      <div className="card text-center">
        <div className="card-header bg-primary text-white">
          <h3 className="card-title">Click Counter!</h3>
        </div>
        <div className="card-body">
          <p className="card-text">Click Count: {this.state.count}</p>
          <button className="btn btn-primary" onClick={this.handleIncrement}>
            Increment
          </button>
          <br></br>
          <br></br>
          <button className="btn btn-primary" onClick={this.handleDecrement}>
            Increment
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
