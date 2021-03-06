import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionTypes from '../../../../store/actions';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavItem,
  NavLink
} from 'shards-react';

class UserActions extends Component {
  state = {
    visible: false
  };

  toggleUserActions = () => {
    this.setState({
      visible: !this.state.visible
    });
  };

  logoutHandler = () => {
    // Remove from local storage
    localStorage.removeItem('x-auth-token');
    localStorage.removeItem('user');
    // Remove token from store
    this.props.onLogout();
    // Redirect to signin
    // this.props.history.push('/signin');
  };

  render() {
    return (
      <NavItem tag={Dropdown} caret toggle={this.toggleUserActions}>
        <DropdownToggle caret tag={NavLink} className="text-nowrap px-3">
          <img
            className="user-avatar rounded-circle mr-2"
            src={require('./../../../../images/avatars/0.jpg')}
            alt="User Avatar"
          />{' '}
          <span className="d-none d-md-inline-block">Sierra Brooks</span>
        </DropdownToggle>
        <Collapse tag={DropdownMenu} right small open={this.state.visible}>
          <DropdownItem tag={Link} to="user-profile">
            <i className="material-icons">&#xE7FD;</i> Profile
          </DropdownItem>
          <DropdownItem tag={Link} to="edit-user-profile">
            <i className="material-icons">&#xE8B8;</i> Edit Profile
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem
            tag={Link}
            to="/"
            onClick={this.logoutHandler}
            className="text-danger"
          >
            <i className="material-icons text-danger">&#xE879;</i> Logout
          </DropdownItem>
        </Collapse>
      </NavItem>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch({ type: actionTypes.LOG_OUT })
  };
};

export default withRouter(connect(null, mapDispatchToProps)(UserActions));
