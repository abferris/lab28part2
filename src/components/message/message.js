import React from "react";

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "Hello World!" };
  }
  render() {
    return <span>{this.state.text}</span>;
  }
}

export default Message;
