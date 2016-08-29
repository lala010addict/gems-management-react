import React from 'react';
import Panel from 'muicss/lib/react/panel';

const UserListItem = ({user, onUserSelect}) => {

  return (
    <li onClick={() => onUserSelect(user)}  className="list-group-item">
      <Panel>
        <div className="user-list media">
          <div className="media-body">
            <div className="media-heading">{user.first_name + ' ' + user.last_name}</div>
              <div>{user.role.label}</div>
          </div>
        </div>
      </Panel>
    </li>
  );
};

export default UserListItem;
