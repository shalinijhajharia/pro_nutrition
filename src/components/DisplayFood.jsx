import React from "react";
import "./style.css"

var new_list = [];
var new_value = 1;

class DisplayFood extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };
  }
  displayItems = () => {
    const list = this.props.details.map((item) => {
      return (
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={item.image} className="pic" alt="food"/>
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{item.name}</strong> <br />
                  <small>{item.cal} cal</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input
                    className="input"
                    type="number"
                    min="1"
                    defaultValue="1"
                    onChange={this.onChangeHandler}
                  />
                </div>
                <div className="control">
                  <button
                    className="button is-info"
                    onClick={() => this.addItems(item, new_value)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      );
    });
    return list;
  };

  onChangeHandler = (e) => {
    // this function will set the new_value to the value that you input in the inputbox
    new_value = e.target.value;
  };

   addItems = (val, val1) => {
     //this function will add the item to the output box when you click the input add button
     let flags = false;
    new_value = 1;
    new_list.forEach((item) => {
      if (item[0] === val.name) {
        flags = true;
        item[1] += val1 * val.cal;
      }
    });
    if (flags === false) {
      new_list.push([val.name, val1 * val.cal]);
    }
    this.setState({ list: new_list });
    console.log(val,val1)
  };

  displayCalories = () => {
    if (this.state.list === []) {
      return <div>Total 0 Calories of Food</div>;
    } else {
      const total = this.state.list.reduce((item, index) => {
          //console.log(item)
          //console.log(index[1])
        return item+index[1];

      }, 0);
      console.log(total)
      return (
        <div className="cal">
          <b>Today's Food: {total} cal</b>
          {this.state.list.map((element, index) => {
            return (
              <div className="list">
                <div>
                  {index + 1}.{element[0]}={element[1]}
                </div>
                <button className="remove" onClick={() => this.removeItemsFromList(element)}>
                  x
                </button>
              </div>
            );
          })}
        </div>
      );
    }
  };

  removeItemsFromList = (index) => {
    //when you click the exit button  the outputbox that item will get removed from calories list
    new_list = this.state.list.filter(elem => {
      if (elem[0] !== index[0]) {
        return elem;
      }
     
    });
    this.setState({ list: new_list });
  };

  render() {
    return (
      <div className="main">
        <div>{this.displayItems()}</div>
        <div>{this.displayCalories()}</div>
      </div>
    );
  }
}

export default DisplayFood;