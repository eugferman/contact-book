import React from "react";

import AddContacts from "../../components/AddContacts/AddContacts";
import Contacts from "../../components/Contacts/Contacts";

function Dashboard() {
  return (
    <div>
      <AddContacts />
      <Contacts />
    </div>
  );
}

export default Dashboard;
