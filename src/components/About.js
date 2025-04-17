import User from './User';
import UserClass from './UserClass';
import { Component } from 'react';

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent Component Did Mount");
  }

  render() {
    // console.log("Parent Render");
    return (
      <div>
          <h1>About  Us</h1>
          <h3>This is a react project</h3>
          <UserClass name={"Chhavi Arora"}  location={"India"} />
      </div>
    )
  }
}

export default About

// const About = () => {
//   return (
//     <div>
//         <h1>About  Us</h1>
//         <h3>This is a react project</h3>
//         <User name={"Chhavi"}/>
//         <UserClass name={"Chhavi Arora"}  location={"India"}/>
//     </div>
//   )
// }