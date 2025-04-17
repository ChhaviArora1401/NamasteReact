import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
      }
    };

  // this.setCount = () => {
  //   this.setState({count: this.state.count + 1})
  // }

  // console.log("Child Constructor");
  // console.log(this.props);
  }

  async componentDidMount() {
    // console.log("Child Component Did Mount");
    const data = await fetch("https://api.github.com/users/ChhaviArora1401");
    const json = await data.json();
    // console.log(json);

    this.setState({
      userInfo: json,
    })

  }

  componentDidUpdate() {
    // console.log("component did update")
  }

  componentWillUnmount() {
    // disappers from the UI
    // console.log("Component will unmount")
  }

  render() {
    // console.log("Child Render");
    // console.log(this.state)
    // const {name, location} = this.props;

    const {name, location, avatar_url} = this.state.userInfo;
    return (
      <div className="user-card">
        <span><img src={avatar_url} /></span>
        <h2>Name: {name}</h2>
        <h3>Loaction: {location}</h3>
        <h4>Contact: @chhavi1401</h4>
    </div>
    );
  }
}

export default UserClass

/***
 * 
 * 
 * ----MOUNTING----
 * 
 * Constructer ()
 * render 
 * <HTML >
 * Component Did Monunt
 * <API call>
 * <this.setState> ->  State variable is updated
 * 
 * ----- UPDATE
 * 
 * render(APi data)
 * <HTML (new APi Data)>
 * 
 * component Did Update
 * 
 * 
 * 
 * ----- UNMOUNTING-----
 * disappering from UI
 * component will Unmount
 * 
 * 
 */
