import React, { Component } from "react";
import listItem from './listItem';


class listContainer extendes Component {

  constructor(){
    super();

    this.state = {
      repos
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
