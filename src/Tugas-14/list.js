import React, {useContext} from 'react';
import {FruitListContext} from  "./provider";
import axios from 'axios';

const convertWeight = (weight) => {
    return `${weight/1000} kg`;
};

const FruitList = () => {
    const [fruit, setFruit, , setInputNama, , setInputHarga, , setInputBerat, , setEditedIndex] = useContext(FruitListContext);

    const editData = (index, data) => {
        setInputNama(data.name);
        setInputHarga(data.price);
        setInputBerat(data.weight);
        setEditedIndex(index);
    };

    const deleteData = (index) => {
        var r = window.confirm("Data ini akan dihapus secara permanen! Setuju?");
        
        if (r === true) {
            axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${index}`)
                .then(res => {
                    console.log(`success delete fruits with id ${index}`)
                    setFruit(null);
                })
                .catch(err => {
                    console.log(`error when post data to api: ${err}`)
                });

            setInputNama("");
            setInputHarga("");
            setInputBerat("");
            setEditedIndex("");
        }
    };

    return (
        <div className="table-wrapper">
            <div className="list-title">
                <h1>Table Harga Buah</h1>
            </div>
            <table className="border-table">
                <thead>
                    <tr>
                        <td style={{width: 350, textAlign: 'center', backgroundColor: '#AAAAAA', fontWeight: 'bold'}}>Nama</td>
                        <td style={{width: 200, textAlign: 'center', backgroundColor: '#AAAAAA', fontWeight: 'bold'}}>Harga</td>
                        <td style={{width: 200, textAlign: 'center', backgroundColor: '#AAAAAA', fontWeight: 'bold'}}>Berat</td>
                        <td style={{width: 150, textAlign: 'center', backgroundColor: '#AAAAAA', fontWeight: 'bold'}}>Action</td>
                    </tr>
                </thead>
                    {(fruit !== null) ?
                        <tbody>
                            {fruit.map((el, index)=> {
                                return (
                                    <tr key={index}>
                                        <td style={{backgroundColor: '#FF7F4F'}}>{el.name}</td>
                                        <td style={{backgroundColor: '#FF7F4F'}}>{el.price}</td>
                                        <td style={{backgroundColor: '#FF7F4F'}}>{convertWeight(el.weight)}</td>
                                        <td style={{backgroundColor: '#FF7F4F', textAlign: 'center'}}>
                                            <button onClick={() => editData(el.id, el)}>Edit</button>
                                            <button onClick={() => deleteData(el.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody> :
                    <tfoot></tfoot>}
            </table>
        </div>
    );
};

export default FruitList;