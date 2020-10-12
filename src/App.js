import React from 'react';
import Form from './Tugas-9/form';
import Table from './Tugas-10/fruitList';
import Timer from './Tugas-11';
import './App.css';

function App() {
  let dataHargaBuah = [
    {nama: "Semangka", harga: 10000, berat: 1000},
    {nama: "Anggur", harga: 40000, berat: 500},
    {nama: "Strawberry", harga: 30000, berat: 400},
    {nama: "Jeruk", harga: 30000, berat: 1000},
    {nama: "Mangga", harga: 30000, berat: 500}
  ];

  return (
    <div>
      <div className="timer">
        <Timer />
      </div>
      <div className="form">
        <Form />
      </div>
      <div className="table-fruit-list">
        <Table data={dataHargaBuah} />
      </div>
    </div>
  );
}

export default App;
