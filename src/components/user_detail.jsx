import React from 'react';
import Perms from './perms';

const UserDetail = ({user}) => {

  if (!user) {
    return <div>Loading...</div>;
  }


  const perms = user.role.permissions

  console.log(perms, 'perms1121212')

  const items = perms.map((item) => {
    return (
       <Perms
        key={item.id}
        item={item} />
    );
  });

  return (
    <div className="user-detail col-md-8">
      <div className="details">
        <div className="details-title">{user.first_name + ' '+ user.last_name + ' - ' +user.role.label}</div>
        <div>{items}</div>
      </div>
    </div>
  );
};

export default UserDetail;




