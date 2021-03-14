import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addItem, } from './redux/actions'; 
// deleteItem


//AddItem Component
class AddItem extends Component {
  constructor(props) {
    super(props)
    this.state = { item: "" };
  }

  updateItem = item => {
    this.setState({ item });
  }

  handleAddItem = () => {
    this.props.addItem(this.state.item)
    this.setState({ item: "" })
  }

  render() {
    return (
      <div>
        <input 
          onChange={e => this.updateItem(e.target.value)}
          value={this.state.item}
        />
        <button onClick={this.handleAddItem}>
          Add
        </button>
      </div>
    )
  }
} 

//Item Component
class Item extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: this.props.addItem.item,
      completed: this.props.addItem.completed, 
    }
  }

  handleComplete() {
    this.props.actions.CompleteItem(this.props.item.id)
    this.setState({
      checked: !this.state.checked
    })
  }

  handleRemove() {
    this.props.actions.deleteItem(this.props.item.id)
  }

  render() {
    return (
      <div>
        <li>
          <input 
            defaultChecked={this.state.completed}
            required={true}
            onClick={this.handleComplete.bind(this)}
          />
          <button onClick={this.handleRemove.bind(this)}>Remove</button>
        </li>
      </div>
    )
  }
}

//Item List component 
class ItemList extends Component {
  render() {
    return (
      <div>
        <ul>
          {
            this.props.items.map((item) => {
              if(item.display === true) {
                return <Item key={item.id} item={item} />
              }
            })
          }
        </ul>
      </div>
    );
  }
}

//App component
class App extends Component {
  render () {
    return (
      <div>
        <h1>My Wishlist</h1>
        <AddItem addItem={this.props.addItem}/>
        <ItemList actions={this.props.items} wishList={this.props.wishList}/>
      </div>
    );
  } 
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddItem: (item) => {
      dispatch(addItem(item))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);