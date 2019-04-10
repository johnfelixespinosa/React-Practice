import React from 'react';
import { connect } from 'react-redux';

class Image extends React.Component {
  switchImageCat = () => {
    this.props.dispatch({ type: 'CHANGETOCAT' });
  };

  switchImageDog = () => {
    this.props.dispatch({ type: 'CHANGETODOG' });
  };

  render() {
    const whichAnimal = this.props.image
    
    return (
      <div className={whichAnimal}>
        the animal is <br/>
        <img src={whichAnimal} width="40" className="image-2" id="profile-pic" />
        <br />
        <button onClick={this.switchImageCat}>Cat</button>
        <button onClick={this.switchImageDog}>Dog</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    image: state.image
  };
}
export default connect(mapStateToProps)(Image);