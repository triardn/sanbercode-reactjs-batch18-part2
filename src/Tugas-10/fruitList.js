import React from 'react';
import './style.css';

const convertWeight = (weight) => {
    return `${weight/1000} kg`
}

function Table({data}) {
    const dataHargaBuah = data;

    return(
        <div className="container">
            <div className="list-title">
                <h1>Table Harga Buah</h1>
            </div>
            <table className="border-table">
                <thead>
                    <td style={{width: 350, textAlign: 'center', backgroundColor: '#AAAAAA', fontWeight: 'bold'}}>Nama</td>
                    <td style={{width: 200, textAlign: 'center', backgroundColor: '#AAAAAA', fontWeight: 'bold'}}>Harga</td>
                    <td style={{width: 200, textAlign: 'center', backgroundColor: '#AAAAAA', fontWeight: 'bold'}}>Berat</td>
                </thead>
                {dataHargaBuah.map(el=> {
                    return (
                        <tr>
                            <td style={{backgroundColor: '#FF7F4F'}}>{el.nama}</td>
                            <td style={{backgroundColor: '#FF7F4F'}}>{el.harga}</td>
                            <td style={{backgroundColor: '#FF7F4F'}}>{convertWeight(el.berat)}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );
}

export default Table;