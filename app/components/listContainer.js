import React, { Component } from "react";
import listItem from './listItem';


    const profiles = (props) => {

      return profiles.map(item => (
        <listItem>
          {item.props.userName}
          {item.props.publicRepos}
          {item.props.followers}
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
