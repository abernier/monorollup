import React from "react";

class HelloWorldA extends React.Component {
  constructor(props){
    super(props);
    this.state = { message: "Hello WorldA!" };
  }
  render() {
    return (
      <div>
        <h1>{this.state?.message}</h1>
        <style jsx>{`
          h1 {
            color: red;
            background: gray;
          }
        `}</style>
      </div>
    );
  }
}
export default HelloWorldA;