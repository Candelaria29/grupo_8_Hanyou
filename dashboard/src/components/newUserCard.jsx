import newStyle from '../css/new.module.css';
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
    <article className= {newStyle.newCard}>
      <p className= {newStyle.newTitle}> Ultimo usuario </p>
      <picture className= {newStyle.newImg}>
        <img src={`http://localhost:8000${user.avatar}`}></img>
      </picture>
      <div className= {newStyle.info}>
        <p className= {newStyle.userName}> {`${user.firstName} ${user.lastName}`} </p>
        <p className= {newStyle.rol}>
          <b>Rol:</b> {user.adminType === 1 ? "Administrador" : "Usuario"}
        </p>
        <p className= {newStyle.email}>
          <b>Email:</b> {user.email}
        </p>
      </div>
    </article>
  );
}

export default NewUserCard;
