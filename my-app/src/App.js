import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [names, setNames] = useState([]);

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleAddClick = () => {
    if (name.trim() !== '') {
      setNames([...names, name]);
      setName('');
    }
  };

  const handleChangeClick = (index) => {
    const newName = prompt('Введите новое имя:');
    if (newName !== null && newName.trim() !== '') {
      const updatedNames = [...names];
      updatedNames[index] = newName;
      setNames(updatedNames);
    }
  };

  return (
      <div>
        <input
            type="text"
            value={name}
            onChange={handleInputChange}
            placeholder="Введите имя"
        />
        <button onClick={handleAddClick} disabled={name.trim() === ''}>
          Добавить
        </button>
        {names.length === 0 ? (
            <p>Список пуст</p>
        ) : (
            <ul>
              {names.map((name, index) => (
                  <li key={index}>
                    {name}
                    <button onClick={() => handleChangeClick(index)} disabled={name.trim() === ''}>
                      Поменять
                    </button>
                  </li>
              ))}
            </ul>
        )}
      </div>
  );
}

export default App;