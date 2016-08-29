import React from 'react';
import Panel from 'muicss/lib/react/panel';

const Perms = ({ item }) => {

  if (!item) {
    return <div> Loading... </div>;
  }

  return (
  <Panel>
    <div className = "user-detail col-md-8">
    	<div className = "details">
   			<div> { item.label + ': ' + item.action } </div> 
    	</div> 
    </div> 
   </Panel>
  );
};

export default Perms;
