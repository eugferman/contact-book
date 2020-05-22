import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { logout } from "../../services/auth";
import { addItemWithId } from "../../services/database";
import { stateWelcomeCompAction } from "../../redux/actions/stateWelcomeCompAction";
import { loginUserAction } from "../../redux/actions/loginUserAction";
import "./AddContacts.scss";

function AddContacts() {
  const [nameContactToDb, setNameContactToDb] = useState("");
  const [phoneContactToDb, setPhoneContactToDb] = useState("");
  const dispatch = useDispatch();

  const dataLoginUser = useSelector((state) => state.dataLoginUser.email);
  console.log("DATALOGINUSER: ", dataLoginUser);

  //COGEMOS EL VALOR DE NAMECONTACT
  const handleNameContact = (event) => {
    setNameContactToDb(event.target.value);
  };

  //COGEMOS EL VALOR DE PHONECONTACT
  const handlePhoneContact = (event) => {
    setPhoneContactToDb(event.target.value);
  };

  //BOTÓN PARA CERRAR SESIÓN DE USUARIO Y CAMBIAMOS DE COMPONENTE
  const handleLogout = (event) => {
    event.preventDefault();
    logout();
    const userToLogin = {
      email: "",
      password: "",
    };

    dispatch(loginUserAction(userToLogin));
    dispatch(stateWelcomeCompAction(false));
    console.log("LOGOUT");
  };

  const handleAddContact = () => {
    event.preventDefault();
    const idToContact = uuidv4();
    const contactToAdd = {
      id: idToContact,
      user: dataLoginUser,
      nameContact: nameContactToDb,
      numContact: phoneContactToDb,
    };
    addItemWithId("contacts", contactToAdd, idToContact);
  };

  return (
    <div className="main-add-contacts">
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div className="form-style">
        <h1>Add contact</h1>
        <form onSubmit={handleAddContact}>
          <input
            type="text"
            name="field1"
            placeholder="Name contact"
            onChange={handleNameContact}
          />
          <input
            type="text"
            maxLength="9"
            name="field1"
            placeholder="Phone contact"
            onChange={handlePhoneContact}
          />
          <input type="submit" value="Add" />
        </form>
      </div>
    </div>
  );
}

export default AddContacts;
