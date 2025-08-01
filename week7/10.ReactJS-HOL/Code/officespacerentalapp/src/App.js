import React from 'react';
import './App.css';

function App() {
  const office = {
    name: "DBS",
    rent: 50000,
    address: "Chennai"
  };

  const offices = [
    { id: 1, name: "Meeting BNB", rent: 58000, address: "Kolkata" },
    { id: 2, name: "Smart Work Hub", rent: 62000, address: "Sikkim" },
    { id: 3, name: "Elite Co-Work", rent: 45000, address: "Hyderabad" },
    { id: 4, name: "Podcast Spaces", rent: 70000, address: "Mumbai" }
  ];

  const getRentColor = (rent) => ({
    color: rent < 60000 ? "red" : "green"
  });

  return (
    <div className="App">
      <h1>Office Space Rental App</h1>
      <img
        src="https://t4.ftcdn.net/jpg/03/84/55/29/360_F_384552930_zPoe9zgmCF7qgt8fqSedcyJ6C6Ye3dFs.jpg"
        alt="Office Space"
        width="500"
        height="300"
      />
      <h2>Featured Office:</h2>
      <p><strong>Name:</strong> {office.name}</p>
      <p><strong>Rent:</strong> <span style={getRentColor(office.rent)}>₹{office.rent}</span></p>
      <p><strong>Address:</strong> {office.address}</p>

      <h2>All Available Offices:</h2>
      <ul>
        {offices.map(item => (
          <li key={item.id}>
            <strong>{item.name}</strong> - <span style={getRentColor(item.rent)}>₹{item.rent}</span> - {item.address}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
