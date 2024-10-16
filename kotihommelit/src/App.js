import React, {useEffect, useState} from 'react';
import './App.css';

function App() {

  const [checkedList, setCheckedList] = useState( () => {
    const saved =  localStorage.getItem('checkedList');
    return saved ? JSON.parse(saved) : [];
  });

  const LIST_DATA = [
    {id: "1", value: "Tiskit_1"},
    {id: "2", value: "Tiskit_2"},
    {id: "3", value: "Tiskit_3"},
    {id: "4", value: "Pyykit_1"},
    {id: "5", value: "Pyykit_2"},
    {id: "6", value: "Pyykit_3"},
    {id: "7", value: "Siivous_15min_1"},
    {id: "8", value: "Siivous_15min_2"},
    {id: "9", value: "Siivous_15min_3"},
    {id: "10", value: "Roskat_1"},
    {id: "11", value: "Roskat_2"},
    {id: "12", value: "Roskat_3"},
    {id: "13", value: "Ei_puhelinta"},
    {id: "14", value: "Käsipyyhkeet"},  
  ];

  useEffect(() => {
    localStorage.setItem('checkedList', JSON.stringify(checkedList));
  }, [checkedList]);


const handleSelect = (event) => {
const value = event.target.value;
const isChecked = event.target.checked;

if (isChecked) {
  setCheckedList([...checkedList, value]);
} else {
  const filteredList = checkedList.filter((item) => item !== value);
  setCheckedList(filteredList);
}
};

const completedCount = checkedList.reduce((count, item) => {
  return count + (item === "Ei_puhelinta" ? 2 : 1);
}, 0);

const goal = 10;

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <p className="title">Kotityöt</p>
        </div>

        <div className="card-body">
          {LIST_DATA.map((item, index) => {
            return (
              <div key={item.id} className="checkbox-container">
                <input
                type="checkbox"
                name="languages"
                value={item.value}
                onChange={handleSelect}
                checked={checkedList.includes(item.value)}
                />
                <label>{item.value}</label>
                </div>
            )
          })}
          </div>

            <div className="counter">
              <p>Suoritettu {completedCount} / {goal}</p>
              {completedCount >= goal && (
                <p className="success-message">Hommat tehty!</p>
              )}
            </div>
        </div>
      </div>
  );
};

export default App;