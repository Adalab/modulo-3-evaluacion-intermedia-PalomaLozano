import { useState } from 'react';
import '../styles/_App.scss';
//import { useState } from 'react';

function App() {
  const firstTitle = 'Mis clubs';
  const secondTitle = 'Añadir nuevo club';
  const [clubList, setClubList] = useState([
    {
      name: 'Book club',
      openOnWeekdays: true,
      openOnWeekend: true,
    },
    {
      name: 'Chess club',
      openOnWeekdays: false,
      openOnWeekend: true,
    },
    {
      name: 'Escape room club',
      openOnWeekdays: false,
      openOnWeekend: false,
    },
    {
      name: 'Debate club',
      openOnWeekdays: true,
      openOnWeekend: false,
    },
  ]);

  const [newList, setNewList] = useState([
    {
      name: '',
      openOnWeekdays: '',
      openOnWeekend: '',
    },
  ]);

  const htmlFirstPainted = () => {
    return clubList.map((club, index) => {
      return (
        <li key={index}>
          <h3>{club.name}</h3>
          <p>
            Abierto entre semana: {club.openOnWeekdays === true ? 'Sí' : 'No'}
          </p>
          <p>
            Abierto el fin de semana:{' '}
            {club.openOnWeekend === true ? 'Sí' : 'No'}
          </p>
        </li>
      );
    });
  };

  const handleClick = (ev) => {
    ev.preventDefault();
    setClubList([...clubList, newList]);
  };

  const handleNewList = (ev) => {
    if (ev.currentTarget.id === 'club') {
      setNewList({
        ...newList,
        name: ev.currentTarget.value,
      });
    } else if (ev.currentTarget.checked === true) {
      setNewList({
        ...newList,
        openOnWeekdays: ev.currentTarget.checked,
        openOnWeekend: ev.currentTarget.checked,
      });
    } else if (ev.currentTarget.checked === false) {
      setNewList({
        ...newList,
        openOnWeekdays: ev.currentTarget.checked,
        openOnWeekend: ev.currentTarget.checked,
      });
    }
  };

  return (
    <div>
      <header>
        <h2>{firstTitle}</h2>
      </header>
      <main>
        <ul>{htmlFirstPainted()}</ul>

        <h2>{secondTitle}</h2>

        <form>
          <input
            type="text"
            name="club"
            id="club"
            placeholder="Añade un nuevo club"
            onChange={handleNewList}
          ></input>
          <p>¿Abre entre semana?</p>
          <input
            type="checkbox"
            name="week"
            id="week"
            value="week"
            onChange={handleNewList}
          ></input>
          <p>¿Abre los fines de semana?</p>
          <input
            type="checkbox"
            name="weekend"
            id="weekend"
            value="weekend"
            onChange={handleNewList}
          ></input>
          <input type="submit" onclick={handleClick}></input>
        </form>
      </main>
    </div>
  );
}

export default App;
