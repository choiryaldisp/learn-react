import React, {Component} from 'react'
import './MyStyle.css'
import './undraw_male_avatar_323b.svg' // with import
import 'bootstrap/dist/css/bootstrap.min.css'
//class
//function 

// option 1
// class App extends React.Component{

// }

// option 2
class App extends Component{

  getButtonName() {
    return "Kepencet"  
  }

  buttonClick = "Click Me";

  render(){

    return(
      <div>
          <h1 className="title">Enigmacamp X Sinamas Mining Trainee</h1>
          <div className="topnav">
              <a className="active" href="#profile">Profile</a>
              <a href="#activity">Activity</a>
              <a href="#education">Education</a>
          </div>
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

          <hr />
          <div className="content">
            <div>
              <h2>Article 1</h2>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias adipisci ut repellat error earum aliquam perferendis, quam culpa. Illum laudantium nulla quasi tempora quae, commodi reprehenderit! Esse voluptatibus officiis eligendi.
              </p>
            </div>
          </div>

          <hr />
          <div className="content">
            <div>
              <h2>Article 2</h2>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias adipisci ut repellat error earum aliquam perferendis, quam culpa. Illum laudantium nulla quasi tempora quae, commodi reprehenderit! Esse voluptatibus officiis eligendi.
              </p>
            </div>
          </div>

          <hr />
          <div className="content">
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput" className="form-label">Tittle</label>
              <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Write tittle..."/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1">Article content</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" placeholder='Write content...' rows="3"></textarea>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>

          <footer>
            <p>Email: asep@email.com <br />
              Phone: 08123456789
            </p>
          </footer>
      </div>
    );
  }
  
}

export default App;