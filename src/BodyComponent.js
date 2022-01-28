import { Component } from "react";
import BodyComponentChild from "./BodyComponenChild";

class BodyComponent extends Component{
    name = this.props.name
    address = this.props.address
    render(){
      console.log(this.props);
      return(
        <div class="card" style={{width: "18rem"}}>
          <div class="card-body">
              <BodyComponentChild name={this.name} address={this.address}/>
          </div>
        </div>
      );
    }
    
  }

export default BodyComponent