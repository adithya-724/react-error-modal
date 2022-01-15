import React, { useState } from "react";
import AddUser from "./components/User/AddUser";
import UsersList from "./components/User/UsersList";

function App() {
  const [userData, setUserData] = useState([]);
  const dataHandler = (data) => {
    setUserData((prevData) => {
      return [...prevData, data];
    });
    console.log(userData);
  };
  return (
    <div>
      <AddUser fetchData={dataHandler} />
      <UsersList users={userData} />
    </div>
  );
}

export default App;
