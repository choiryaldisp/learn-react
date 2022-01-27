import { Component } from "react";

class ProfileApp extends Component{
    render(){
        return(
            <div className="container">
                <div className="content">
                <div>
                <h2>Profile</h2>
                <div><br/>
                    <div>
                    <img className='profile-img' src={require('./undraw_male_avatar_323b.svg').default} alt='Avatar'/> <br/>
                        <h4>Asep Surasep</h4>
                    
                    </div>
                </div>
                <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi et est vitae sapien hendrerit mattis sit amet sed purus. 
                    Nunc commodo sapien risus, eget commodo libero molestie vel. 
                    Donec a tortor tincidunt, lacinia orci eget, feugiat leo. 
                    Etiam volutpat molestie tempor. Mauris id eros porttitor, hendrerit odio 
                    eget, laoreet mi. Vestibulum diam erat, scelerisque id eros nec, iaculis 
                    pulvinar arcu. Mauris vestibulum magna vitae molestie egestas. Vestibulum 
                    lobortis diam vel mauris rutrum, eget maximus purus lacinia. Sed et tellus 
                    vel nibh vestibulum pretium non sit amet tortor. Nulla in mattis ligula. 
                    Curabitur feugiat eros nec odio pretium ullamcorper.</p>
                </div>
                </div>
            </div>
          </div>
        )
    }
}

export default ProfileApp