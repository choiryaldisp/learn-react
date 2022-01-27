import { Component } from "react";

class NavbarApp extends Component{
    render(){
        return(
            <div className="topnav">
                <a className="active" href="#profile">Profile</a>
                <a href="#activity">Activity</a>
                <a href="#education">Education</a>
                <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        )
    }
}

export default NavbarApp 