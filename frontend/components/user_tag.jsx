import React from 'react';
// import Container from './/_container';

class UserTag extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="">
        <img src={this.props.avatar} alt=""/>
        <div className="avatar-text">
          <p>{this.props.title}</p>
          <span>by {this.props.author} on Sep 21, 2016</span>
        </div>
      </div>
    )
  }
}

export default UserTag;