import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import UserList from './components/user_list';
import UserDetail from './components/user_detail';
import request from 'superagent';
import Appbar from 'muicss/lib/react/appbar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      selectedUser: null
    };

    this.userInfo();
  }

  userInfo() {

    request
      .get('https://staging-gems.keypr.com/users')
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer: XXXXXXXXXXXX')
      .end((function(err, res) {
          if (err) throw err;
          this.setState({
            users: res.body.entities,
            selectedUser: res.body.entities[0]
          });
        })
        .bind(this));
  }

  render() {
    const userInfo = this.userInfo
    return (

      <div>
      <Appbar> </Appbar> <UserDetail user = { this.state.selectedUser } /> <UserList onUserSelect = { selectedUser => this.setState({ selectedUser }) }
      users = { this.state.users }
      />  </div>
    );
  }
}

ReactDOM.render( <App /> , document.querySelector('.container'));
