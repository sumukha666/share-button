import React, { useState } from "react";
import ShareBtn from "./components/share-button/ShareBtn";
import { users, groups, accessProfiles } from "./system/config/default.values";

const App = () => {
  const [accessUsers, setAccessUsers] = useState(accessProfiles);
  const addToAccessUsers = (userInfo) => {
    const selectedUsers = [...accessUsers];
    selectedUsers.push(userInfo);
    setAccessUsers(selectedUsers);
  };

  return (
    <div className="App">
      <div className="mr-1-r">
        <ShareBtn
          accessUsers={accessUsers}
          users={users}
          groups={groups}
          addToAccessUsers={addToAccessUsers}
        />
      </div>
    </div>
  );
};

export default App;
