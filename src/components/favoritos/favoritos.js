import React from "react";
import { useState } from "react";

// CSS  
import styles from './favoritos.module.css'

const Favoritos = () => {

  // Favoritos
  const [github, setGithub] = useState();

  const [favoritos, setFavoritos] = useState([
    { name: "dassatavares", git_foto: "https://github.com/dassatavares.png" },
  ]);

  const addUser = (e) => {
    setFavoritos([...favoritos, { name: `${github}`, git_foto: `https://github.com/${github}.png` }])
  }

  const deleteUser = (index) => {
    favoritos.splice(index, 1);
    setFavoritos([...favoritos]);
  }

  const [toggle, setToggle] = useState(false)

  return (
    <>

      {toggle ?
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Digite seu usuario do Github" onChange={(e)=> setGithub(e.target.value)} />
          <button type="submit" className="button-delete" onClick={addUser}>OK</button>
          <button type="submit" className="button-delete" onClick={() => setToggle(false)}>X</button>
        </form> : ''
      }

      <div className={styles.favoritos}>
        <h2>Canais Recomendados</h2>
        {favoritos.map(
          (favorito, index) => (
            <div className={styles.user} key={index}>
              <img src={favorito.git_foto} alt="" />
              <button onClick={() => deleteUser(index)} className={styles.button_delete}>X</button>
              <h4>{favorito.name}</h4>
            </div>
          )
        )}
        
        <div className={styles.user}>
          <img src="https://cdn-icons-png.flaticon.com/512/7794/7794550.png" alt="" onClick={() => setToggle(true)} />
          <h4>Adicionar</h4>
        </div>
      </div>

    </>
  );
};

export default Favoritos;
