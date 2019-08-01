import React from 'react'
import SearchPlugin from "./SearchPlugin"
import Item from "./Item"
import directorsStyles from "./directors.module.scss"

class ItemsList extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {items: this.props.data.items};
  
      this.updateFilterList = this.updateFilterListHandler.bind(this);
    }
  
    updateFilterListHandler(filteredList) {
      this.setState({items: filteredList});
    }
  
    render() {
      return (
        <div>
          <h2>{this.props.data.title}</h2>
          <SearchPlugin items={this.props.data.items} updateList={this.updateFilterList} />
          <ol className={directorsStyles.posts}>
            {
              this.state.items.map(item => {
                return (
                  <Item key={`phone-id-${item}`} name={item} />
                );
              })
            }
          </ol>
        </div>
      );
    }
  }


  export default ItemsList