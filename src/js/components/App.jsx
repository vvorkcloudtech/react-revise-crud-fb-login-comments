import React from "react";
import Comments from "./Comments";
import FacebookLogin from "react-facebook-login";

class App extends React.Component {
  state = {
    value: "",
    listItems: [],
    username: "",
    img: ""
  };
  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      listItems: [...this.state.listItems, this.state.value],
      value: ""
    });
  };
  handleClick = index => {
    let items = this.state.listItems;
    items.splice(index, 1);
    this.setState({
      listItems: items
    });
  };
  moveUP = index => {
    if (!index == 0) {
      let items = this.state.listItems;
      let temp = items[index];
      items[index] = items[index - 1];
      items[index - 1] = temp;
      this.setState({
        listItems: items
      });
    } else {
      alert("sorry");
    }
  };
  moveDown = index => {
    let items = this.state.listItems;

    if (index !== items.length - 1) {
      let temp = items[index];
      items[index] = items[index + 1];
      items[index + 1] = temp;
      this.setState({
        listItems: items
      });
    } else {
      alert("sorry");
    }
  };
  responseFacebook = res => {
    this.setState({
      username: res.name,
      img: res.picture.data.url
    });
  };

  render() {
    console.log(this.state);
    let response = this.state.listItems.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item}</td>
          <td>
            {" "}
            <button
              className="btn btn-danger"
              onClick={() => this.handleClick(index)}
            >
              DELETE
            </button>
            <button className="btn btn-success">UPDATE</button>
            <button className="btn btn-info" onClick={() => this.moveUP(index)}>
              MOVE-UP
            </button>
            <button
              className="btn btn-primary"
              onClick={() => this.moveDown(index)}
            >
              MOVE-DOWN
            </button>
          </td>
        </tr>
      );
    });

    return (
      <div style={{ marginLeft: "100px" }}>
        {!this.state.username ? (
          <FacebookLogin
            appId="1770338773262262"
            autoLoad={true}
            fields="name,email,picture"
            callback={this.responseFacebook}
          />
        ) : (
          <h1>Welcome {this.state.username}</h1>
        )}
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <button>ADD</button>
          </form>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>ITEMS</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>{response}</tbody>
        </table>
        <div>
          <Comments
            handleChange={this.handleChange}
            value={2}
            name={this.state.username}
            img={this.state.img}
            array={[
              {
                name: "",
                age: 20
              }
            ]}
          />
        </div>
      </div>
    );
  }
}
export default App;
