import React from 'react'

class SearchPlugin extends React.Component {
    constructor(props) {
      super(props);
  
      this.onTextChanged = this.onTextChangedHandler.bind(this);
      this.search = this.searchHandler.bind(this);
    }
  
    onTextChangedHandler(e) {
      let searchString = e.target.value.trim();
      this.search(searchString);
    }
  
    searchHandler(searchString) {
      let filteredList = this.props.items.filter(item => {
        return item.node.name.toLowerCase().search(searchString.toLowerCase()) !== -1;
      });
  
      this.props.updateList(filteredList);
    }
  
    render() {
      return (
        <input placeholder="Search" onChange={this.onTextChanged} />
      );
    }
  }


  export default SearchPlugin