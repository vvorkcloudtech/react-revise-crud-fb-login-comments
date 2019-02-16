import React, { Component } from "react";
import AppContext from "./Contex";

class Provider extends Component {
  state = {
    value: "",
    listItems: [],
    username: "",
    img: "",
    open: false,
    index: ""
  };
  handleUpdate = e => {
    e.preventDefault();
    let index = this.state.index;
    let items = this.state.listItems;
    items[index] = this.state.value;
    this.setState({
      listItems: items,
      open: false
    });
  };
  handleEdit = index => {
    let temp = this.state.listItems[index];
    this.setState({
      open: !this.state.open,
      value: temp,
      index: index
    });
  };
  handleClose = () => {
    this.setState({
      open: !this.state.open
    });
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
    return (
      <div>
        <AppContext.Provider
          value={{
            ...this.state,
            responseFacebook: this.responseFacebook,
            moveDown: this.moveDown,
            moveUP: this.moveUP,
            handleChange: this.handleChange,
            handleClick: this.handleClick,
            handleSubmit: this.handleSubmit,
            handleClose: this.handleClose,
            handleEdit: this.handleEdit,
            handleUpdate: this.handleUpdate
          }}
        >
          {this.props.children}
        </AppContext.Provider>
      </div>
    );
  }
}
export default Provider;
