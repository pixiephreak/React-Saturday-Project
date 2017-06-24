import React, { Component } from "react";
import listItem from './listItem';


class ListContainer extends Component {

  constructor(){
    super();

    this.state = {
      //
    };
  }
  renderListItems(){

    const profiles = this.state.repos;

    return profiles.map(item => (
      <listItem>
        {item.userName}
        {item.publicRepos}
        {item.followers}
      </listItem>
    ));
  }

  render(){
    return(
      <div>

      </div>
    )
  }
}

export default ListContainer
