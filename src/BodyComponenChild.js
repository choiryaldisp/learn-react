import { Component } from "react";

class BodyComponentChild extends Component{

    render(){
      console.log(this.props);
      return(
        <>
          <h5 class="card-title">{this.props.name}</h5>
          <p class="card-text">{this.props.address}</p>
        </>
      );
    }
    
  }

export default BodyComponentChild 