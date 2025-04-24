import React from 'react';
import { useLocation } from 'react-router-dom';
import MessageUi from '../Component/MessageUi';

const Profilepages = () => {
  const location = useLocation();
  const path = location.pathname;

  if (path === "/profile/message") {
     return <div><MessageUi/></div>
  } else if (path === "/profile/setting"){
    return <div>Setting</div>;
  } else {
    return window.history.back();
  }
};

export default Profilepages;
