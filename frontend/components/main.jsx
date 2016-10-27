import React from 'react';
import UserTag from './user_tag';
import Screen from './screen';
import SideBar from './side_bar';
// import Container from './/_container';

class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  getInfo() {
    return {
      avatar: 'https://d13yacurqjgara.cloudfront.net/users/25804/avatars/small/markprokoudinepic.jpg?1388252570',
      title: 'deposit funds form',
      author: 'mark prokoudine',
    };
  }

  render() {
    let info = this.getInfo();
    return(
      <main className="main">
        <UserTag
          title={info['title']}
          avatar={info['avatar']}
          author={info['author']} />
        <Screen />
        <SideBar />
      </main>
    )
  }
}

export default Main;