import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateItemPhone } from "../../services/database";
import { stateDashboardCompAction } from "../../redux/actions/stateDashboardCompAction";

import "./EditContacts.scss";

function EditContacts() {
  const [phoneToEdit, setPhoneToEdit] = useState("");
  const idToEdit = useSelector((state) => state.dataUserToEdit.idToEdit);
  const nameToEdit = useSelector((state) => state.dataUserToEdit.nameToEdit);
  const dispatch = useDispatch();

  //COGEMOS EL VALOR DE PHONECONTACT
  const handlePhoneToEdit = (event) => {
    setPhoneToEdit(event.target.value);
  };

  const handleEditContact = () => {
    event.preventDefault();
    dispatch(stateDashboardCompAction(false));
    updateItemPhone("contacts", idToEdit, phoneToEdit);
  };

  return (
    <div className="form-edit-contact-style">
      <p>
        You are editing <strong>{nameToEdit}</strong>
      </p>
      <form onSubmit={handleEditContact}>
        <input
          type="text"
          maxLength="9"
          placeholder="Phone contact"
          onChange={handlePhoneToEdit}
        />
        <input type="submit" value="Edit" />
      </form>
    </div>
  );
}

export default EditContacts;
