import React from "react";
import { useState } from "react";

// CSS  
import styles from './favoritos.module.css'

const Favoritos = () => {

  // Favoritos
  const [github, setGithub] = useState("omariosouto");

  const [favoritos, setFavoritos] = useState([
    { name: "dassatavares", git_foto: "https://github.com/dassatavares.png" },
  ]);

  const adduser = (e) => {
    setFavoritos([...favoritos, { name: `${github}`, git_foto: `https://github.com/${github}.png` }])
  }

  const deleteUser = (index) => {
    favoritos.splice(index, 1);
    setFavoritos([...favoritos]);
    
  }


  return (
    <>

      <button type="submit" onClick={adduser}>X</button>
      <input type="text" onChange={(e)=> setGithub(e.target.value)} />
      

      <div className={styles.favoritos}>
        {favoritos.map(
          (favorito, index) => (
            <div className={styles.user} key={index}>
              <img src={favorito.git_foto} alt="" />
              <h4>{favorito.name}</h4>
              <button onClick={() => deleteUser(index)}>X</button>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default Favoritos;
