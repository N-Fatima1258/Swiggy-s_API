import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
    };
    // console.log("Child constructor");
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("SetInterval");
    }, 1000);
    console.log("Child componentDidMount");
  }

  componentDidUpdate() {
    console.log("Child componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("child unmount");
    clearInterval(this.timer);
  }

  render() {
    console.log("Child Render");
    const { name } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <h1>Count2: {count2}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          Increase count
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: delhi</h3>
        <h4>Contact: 987654321</h4>
      </div>
    );
  }
}

export default UserClass;
