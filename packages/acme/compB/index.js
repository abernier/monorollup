import React from "react";

import CompA from '@monorollup/compA'

class HelloWorldB extends React.Component {
  constructor(props){
    super(props);
    this.state = { message: "Hello WorldB!" };
  }
  render() {
    return (
      <div>
        <h1>{this.state?.message}</h1>
        <CompA />
      </div>
    );
  }
}
export default HelloWorldB;