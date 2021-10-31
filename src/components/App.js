import { useState, useEffect } from 'react';
import '../styles/_App.scss';
import data from './data.json';
import localStorage from '../services/local-storage';
import Header from './Header';

function App() {
  let dataUse = !localStorage.get('clubList', '')
    ? data
    : localStorage.get('clubList', '');
  const secondTitle = 'Añadir nueva nota';
  const [clubList, setClubList] = useState(dataUse);
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

  const handleDelete = (ev) => {
    const clickedId = ev.currentTarget.id;
    clubList.splice(clickedId, 1);
    setClubList([...clubList]);
  };

  useEffect(() => {
    localStorage.set('clubs', clubList);
  }, [clubList]);

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
          <section className="liStyle">
            <li key={index}>
              <h3>
                #{index}
                {club.name}
              </h3>
              <p>Es urgente: {club.openOnWeekdays === true ? 'Sí' : 'No'}</p>
              <p>
                Necesario incluso en fin de semana:{' '}
                {club.openOnWeekend === true ? 'Sí' : 'No'}
              </p>
              <button onClick={handleDelete}>Borrar nota</button>
            </li>
          </section>
        );
      });
  };

  return (
    <div>
      <header className="header">
        <Header />
      </header>

      <main>
        <section className="form">
          <form action="" className="formStyle">
            <select value={filterSelect} onChange={handleSelect}>
              <option value="all">Todos</option>
              <option value="openOnWeekdays">Urgente</option>
              <option value="openOnWeekend">
                ¿Es necesario incluso en fin de semana?
              </option>
            </select>
          </form>
        </section>
        <ul className="ulSection">{htmlFirstPainted()}</ul>

        <form onSubmit={handleClub} className="formSubmit">
          <label htmlFor="" className="addNote">
            {secondTitle}
          </label>

          <input
            type="text"
            name="club"
            id="club"
            placeholder="Añade una nueva nota"
            className="addInput"
            value={name}
            onChange={handleName}
          ></input>
          <label htmlFor="" className="input">
            ¿Es urgente?
          </label>
          <input
            type="checkbox"
            name="openOnWeekdays"
            id="openOnWeekdays"
            checked={openOnWeekdays}
            onChange={handleOnWeekdays}
          />
          <label htmlFor="" className="input">
            ¿Es necesario incluso en fin de semana?
          </label>
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
            value="añadir un nueva nota"
            className="button"
          />
        </form>
      </main>
    </div>
  );
}

export default App;
