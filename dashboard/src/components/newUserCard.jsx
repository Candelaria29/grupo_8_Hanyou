import logo from "../img/logo4.png";
import { useState, useEffect } from "react";

function NewUserCard() {
  const [user, setUser] = useState([]);
  const API = "http://localhost:8000/api/users";

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        const lastUser = data.Usuarios.length - 1;
        setUser(data.Usuarios[lastUser]);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <article id="newCard">
      <p id="newTitle"> Ultimo usuario </p>
      <picture id="newImg">
        <img src={`http://localhost:8000${user.avatar}`}></img>
      </picture>
      <div id="info">
        <p id="userName"> {`${user.firstName} ${user.lastName}`} </p>
        <p id="rol">
          <b>Rol:</b> {user.adminType === 1 ? "Administrador" : "Usuario"}
        </p>
        <p id="email">
          <b>Email:</b> {user.email}
        </p>
      </div>
    </article>
  );
}

export default NewUserCard;
