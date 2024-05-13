// Sidebar.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons"; 

const Sidebar = () => {
  return (
    <div className="h-screen bg-gray-800 text-white w-16 left-0 top-0 flex flex-col justify-between items-center rounded-lg fixed mt-2 ml-2 mb-2 mr-2"
    style={{background: 'linear-gradient(to bottom, #F2613F, #DD761C)'}}
    >
      <div className="py-4">
        <FontAwesomeIcon icon={faHome} size="lg" className="text-white" />
      </div>
      <div className="py-4">
        <FontAwesomeIcon icon={faList} size="lg" className="text-white" />
      </div>
      <div className="py-4">
        <FontAwesomeIcon icon={faCog} size="lg" className="text-white" />
      </div>
    </div>
  );
};

export default Sidebar;
