import React from "react";
import Comments from "./Comments";
import FacebookLogin from "react-facebook-login";
import Home from "./Home";
import Search from "./Search";
import Modal from "react-responsive-modal";

class App extends React.Component {
  render() {
    console.log("props from provider wraper", this.props);
    let response = this.props.listItems.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item}</td>
          <td>
            {" "}
            <button
              className="btn btn-danger"
              onClick={() => this.props.handleClick(index)}
            >
              DELETE
            </button>
            <button
              className="btn btn-success"
              onClick={() => this.props.handleEdit(index)}
            >
              EDIT
            </button>
            <button
              className="btn btn-info"
              onClick={() => this.props.moveUP(index)}
            >
              MOVE-UP
            </button>
            <button
              className="btn btn-primary"
              onClick={() => this.props.moveDown(index)}
            >
              MOVE-DOWN
            </button>
          </td>
        </tr>
      );
    });

    return (
      <div style={{ marginLeft: "200px" }}>
        {!this.props.username ? (
          <FacebookLogin
            appId="1770338773262262"
            autoLoad={true}
            fields="name,email,picture"
            callback={this.props.responseFacebook}
          />
        ) : (
          <h1>Welcome {this.props.username}</h1>
        )}
        <div>
          <form onSubmit={this.props.handleSubmit}>
            <input
              type="text"
              value={this.props.value}
              onChange={this.props.handleChange}
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
            handleChange={this.props.handleChange}
            value={this.props.value}
            name={this.props.username}
            img={this.props.img}
          />
        </div>
        <Modal open={this.props.open} onClose={this.props.handleClose}>
          <div>
            <h1>You can update the value HERE!</h1>
            <form onSubmit={this.props.handleUpdate}>
              <input
                type="text"
                value={this.props.value}
                onChange={this.props.handleChange}
              />
              <br />
              <button>UPDATE</button>
            </form>
          </div>
        </Modal>
        <Home>
          <Search />
        </Home>
      </div>
    );
  }
}
export default App;
