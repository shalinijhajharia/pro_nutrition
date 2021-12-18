import React from "react";
import "./style.css";
import DisplayFood from "../components/DisplayFood";

class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { foodItems: this.props.details };
  }
  changeOnSearch = (e) => {
      console.log(this.props.details)
     if (e.target.value === "") {

       this.setState({ foodItems: this.props.details });
     } else {
        
       const searchedItems = this.state.foodItems.filter((item) =>
         item.name.toLowerCase().includes(e.target.value.toLowerCase())
       );
       this.setState({ foodItems: searchedItems });
       console.log(searchedItems)
     }
  };
  render() {
    return (
      <div className="search">
          <div className="search-content">
        <h4>Search</h4>
        <input
        id="searchbox"
          type="text"
          placeholder="Search for food"
          onChange={this.changeOnSearch}
        ></input>
        </div>
        <DisplayFood details={this.state.foodItems} />
      </div>
    );
  }
}
export default SearchComponent;