import { useState } from "react";
import Image from "next/image";

// Imports
import buttonPlus from '../../../public/images/mais.png'

// CSS
import styles from "./favoritos.module.css";

const Favoritos = () => {
  // Favoritos
  const [github, setGithub] = useState();

  const [search, setSearch] = useState('');

  const [favoritos, setFavoritos] = useState([
    { name: "", gitFoto: "" },
  ]);

  const addUser = (e) => {
    setFavoritos([
      ...favoritos,
      { name: `${github}`, gitFoto: `https://github.com/${github}.png`, url: `https://github.com/${github}`},
    ]);
  };

  const deleteUser = (index) => {
    favoritos.splice(index, 1);
    setFavoritos([...favoritos]);
  };

  const [toggle, setToggle] = useState(false);

  return (
    <>
      <input
        type="text"
        placeholder="Procurar..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Popup Github */}
      {toggle ? (
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Digite seu usuario do Github"
            onChange={(e) => setGithub(e.target.value)}
          />
          <button type="submit" className="button-delete" onClick={addUser}>
            OK
          </button>
          <button
            type="submit"
            className="button-delete"
            onClick={() => setToggle(false)}
          >
            X
          </button>
        </form>
      ) : (
        ""
      )}

      {/* Popup Github */}
      <div className={styles.favoritos}>
        <h2>Canais Recomendados</h2>
        {favoritos.filter((fav) => (
          fav.name.includes(`${search}`)
        )).map((favorito, index) => (
            <a href={favorito.url} target='_blank' >
              <div className={styles.user} key={index}>
                <img src={favorito.gitFoto} alt="" />
                <button
                  onClick={() => deleteUser(index)}
                  className={styles.button_delete}
                > X
                </button>
                <h4>{favorito.name}</h4>
              </div>
            </a>
          ))}

        <div className={styles.user}>
          <Image
            className={styles.add_button}
            src={buttonPlus}
            alt=""
            onClick={() => setToggle(true)}
          />
          <h4>Adicionar</h4>
        </div>
      </div>
    </>
  );
};

export default Favoritos;
