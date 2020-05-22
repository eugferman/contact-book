import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRealTime, deleteItem } from "../../services/database";
import { stateDashboardCompAction } from "../../redux/actions/stateDashboardCompAction";
import { userToEditAction } from "../../redux/actions/userToEditAction";
import EditContacts from "../EditContacts/EditContacts";

import "./Contacts.scss";

function Contacts() {
  const [dataContacts, setDataContacts] = useState([]);
  const dataLoginUser = useSelector((state) => state.dataLoginUser.email);
  const stateDashboard = useSelector((state) => state.dataDashboard);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      getAllRealTime({
        collection: "contacts",
        filters: { field: "user", condition: "==", value: dataLoginUser },
        callback: (collectionData) => {
          const results = [];
          collectionData.forEach((document) => {
            const data = document.data();
            results.push(data);
          });
          setDataContacts(results);
        },
      });
    };
    fetchData();
  }, []);

  const handleEditContact = (id, name) => {
    const userToEdit = {
      idToEdit: id,
      nameToEdit: name,
    };
    dispatch(stateDashboardCompAction(true));
    dispatch(userToEditAction(userToEdit));
  };

  return (
    <div className="main-contacts">
      {stateDashboard && <EditContacts />}
      <div className="list-contacts">
        <ul>
          {dataContacts.map((contacts) => (
            <li className="contacts" key={contacts.id}>
              <div>
                <p>{contacts.nameContact}</p>
                <p>{contacts.numContact}</p>
                <button
                  onClick={() =>
                    handleEditContact(contacts.id, contacts.nameContact)
                  }
                >
                  Edit contact
                </button>
                <button onClick={() => deleteItem("contacts", contacts.id)}>
                  Delete contact
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Contacts;
