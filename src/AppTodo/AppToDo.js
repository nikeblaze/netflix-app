import React, { Component } from "react";
import "./AppToDo.css";

class AppToDo extends Component {
  constructor() {
    super();
    this.state = {
      textValue: "",
      showItems: false,
      listItems: [],
    };
  }

  onClickHandler = () => {
    const { listItems, textValue } = this.state;
    // the value of the input has been stored in the variable
    // then the textvalue property value is emptied so that input is cleared
    this.setState({ textValue: "" });
    this.setState({
      showItems: true,
      listItems: [...listItems, { value: textValue }], // combine the empty array with the stored input value
    });
    console.log(this.state.listItems);
  };

  onAddInput = (event) => {
    this.setState({
      textValue: event.target.value,
    });
    console.log(event.target);
  };

  render() {
    const { listItems } = this.state;
    let items;
    if (this.state.showItems) {
      items = listItems.map((listItem) => <li>{listItem.value}</li>);
    } else {
      items = (
        <div>
          <p>List is empty. Please add items</p>
        </div>
      );
    }
    return (
      <div className="header">
        <input
          type="text"
          name="inputText"
          onChange={this.onAddInput}
          value={this.state.textValue}
          className="input"
        ></input>
        <button onClick={this.onClickHandler}>Click to Add Item</button>
        {items}
      </div>
    );
  }
}

export default AppToDo;
