import React, { Component } from 'react';

class Navbar extends Component {
  render() {

    return(
      <nav>
        <ul>
          <li> <a href="https://www.pizzahut.com/">About Me</a> </li>
          <li> <a href="https://www.dominos.com/en/">Portfolio</a> </li>
          <li> <a href="https://littlecaesars.com/en-us/">Resume</a> </li>
          <li> <a href="https://www.hungryhowies.com/">Contact</a> </li>
        </ul>
      </nav>
    )
  }
}


export default Navbar;




// import React, { Component } from 'react';
//
// class Project extends Component {
//   render() {
//
//     let classes = this.props.imgName + " portfolio-img" ;
//
//     return(
//       <div>
//         <h2>{ this.props.title }</h2>
//         <div className={ classes } ></div>
//         <p>{ this.props.description }</p>
//       </div>
//     )
//   }
// }
//
// export default Project;
