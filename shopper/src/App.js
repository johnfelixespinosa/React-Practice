import React from 'react';
import Nav from './Nav';
import ItemPage from './ItemPage';
import { items } from './static-data';
import './App.css';

class App extends React.Component {
  state = {
    activeTab: 0,
    cart: []
  };

  handleTabChange = (index) => {
    this.setState({
      activeTab: index
    });
  }

  renderContent() {
    switch (this.state.activeTab) {
      default:
      case 0:
        return (
          <ItemPage
            items={items}
            onAddToCart={this.handleAddToCart} />
        );
      case 1:
        return <span>Cart</span>;
    }
  }

  handleAddToCart = (item) => {
    this.setState({
      cart: [...this.state.cart, item.id]
    });
  };

  render() {

    let activeTab = this.state

    return (
      <div className="App">
        <Nav activeTab={activeTab} onTabChange={this.handleTabChange} />
        <main className="App-content">
          <div>
            {this.state.cart.length} items
          </div>
          {this.renderContent()}
        </main>
      </div>
    )
  }
}

export default App;
