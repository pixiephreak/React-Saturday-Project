// Include React
import React, { Component } from "react";
import ListContainer from './ListContainer';


// here is where the header and input box go
class Main extends Component {
  constructor() {
    super();
    this.state = {
      // put the values returned by the input box here;
    };
    // We need to bind our handleInput method to our component with this syntax in the constructor since we'll be passing it to child components
    // this.handleInput = this.handleInput.bind(this);
  }
  // handleInput(e){
  //
  // }
  render() {
    return(
      <div>
        <h1>GitHubster</h1>
        <ListContainer/>
      </div>
    );
  }
}
export default Main;
