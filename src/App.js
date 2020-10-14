import React from 'react';
// import Form from './Tugas-9/form';
// import Timer from './Tugas-11';
// import Table from './Tugas-12';
import Table from './Tugas-13';
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
      {/* <div className="timer">
        <Timer />
      </div>
      <div className="form">
        <Form />
      </div> */}
      <div className="table-fruit-list">
        <Table allData={dataHargaBuah} />
      </div>
    </div>
  );
}

export default App;
