import { useState } from 'react';
import '../styles/_App.scss';
import data from './data.json';

function App() {
  const firstTitle = 'Mis clubs';
  const secondTitle = 'Añadir nuevo club';
  const [clubList, setClubList] = useState(data);
  const [name, setName] = useState('');
  const [openOnWeekdays, setopenOnWeekdays] = useState(false);
  const [openOnWeekends, setopenOnWeekends] = useState(false);
  const [filterSelect, setFilterSelect] = useState('all');

  const handleName = (ev) => {
    setName(ev.target.value);
  };

  const handleOnWeekdays = (ev) => {
    setopenOnWeekdays(ev.target.checked);
  };

  const handleOnWeekends = (ev) => {
    setopenOnWeekends(ev.target.checked);
  };

  const handleSelect = (ev) => {
    setFilterSelect(ev.target.value);
  };
  const handleClub = (ev) => {
    ev.preventDefault();
    clubList.push({
      name: name,
      openOnWeekdays: openOnWeekdays,
      openOnWeekend: openOnWeekends,
    });
    setClubList([...clubList]);
    setName('');
    setopenOnWeekdays('');
    setopenOnWeekends('');
  };

  const htmlFirstPainted = () => {
    return clubList
      .filter((club) => {
        if (filterSelect === 'openOnWeekdays') {
          return club.openOnWeekdays === true;
        } else if (filterSelect === 'openOnWeekend') {
          return club.openOnWeekend === true;
        }
        return true;
      })
      .map((club, index) => {
        return (
          <li key={index}>
            <h3>
              #{index}
              {club.name}
            </h3>

            <p>
              Abierto entre semana: {club.openOnWeekdays === true ? 'Sí' : 'No'}
            </p>
            <p>
              Abierto el fin de semana:{' '}
              {club.openOnWeekend === true ? 'Sí' : 'No'}
            </p>
            <button>X</button>
          </li>
        );
      });
  };

  return (
    <div>
      <header>
        <h2>{firstTitle}</h2>
        <form action="">
          <select value={filterSelect} onChange={handleSelect}>
            <option value="all">Todos</option>
            <option value="openOnWeekdays">Abren entre diario</option>
            <option value="openOnWeekend">Abren en fin de semana</option>
          </select>
        </form>
      </header>
      <main>
        <ul>{htmlFirstPainted()}</ul>

        <form onSubmit={handleClub}>
          <label htmlFor="">{secondTitle}</label>

          <input
            type="text"
            name="club"
            id="club"
            placeholder="Añade nombre del club"
            value={name}
            onChange={handleName}
          ></input>
          <label htmlFor="">¿Abre entre semana?</label>
          <input
            type="checkbox"
            name="openOnWeekdays"
            id="openOnWeekdays"
            checked={openOnWeekdays}
            onChange={handleOnWeekdays}
          />
          <label htmlFor="">¿Abre los fines de semana?</label>
          <input
            type="checkbox"
            name="openOnWeekend"
            id="openOnWeekend"
            checked={openOnWeekends}
            onChange={handleOnWeekends}
          />

          <input
            type="submit"
            name="btn"
            id="btn"
            value="añadir un nuevo club"
          />
        </form>
      </main>
    </div>
  );
}

export default App;
