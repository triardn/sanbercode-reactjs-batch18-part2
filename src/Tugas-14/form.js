import React, {useContext, useState, useEffect} from 'react';
import {FruitListContext} from './provider';
import axios from 'axios';

const FruitListForm = () => {
    const [data, setData, inputNama, setInputNama, inputHarga, setInputHarga, inputBerat, setInputBerat, editedIndex, setEditedIndex] = useContext(FruitListContext);

    useEffect(() => {
        if (data === null) {
            axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
                .then(res => {
                    let allData = [];
                    for (let i = 0; i < res.data.length; i++) {
                        const newObj = {
                            id: res.data[i].id,
                            name: res.data[i].name,
                            price: res.data[i].price,
                            weight: res.data[i].weight,
                        };

                        allData.push(newObj);
                    }

                    setData(allData);
                }).catch (err => {
                    console.log(`error when fetch fruit data: ${err}`)
                });
        }
    }, [data, setData]);

    const handleChange = (event) => {
        switch (event.target.id) {
            case "nama":
                setInputNama(event.target.value);
                break;
            case "harga":
                setInputHarga(event.target.value);
                break;
            case "berat":
                setInputBerat(event.target.value);
                break;
            default:
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (editedIndex !== "") { // edit data
            axios.put(`http://backendexample.sanbercloud.com/api/fruits/${editedIndex}`, {
                name: inputNama,
                price: inputHarga,
                weight: inputBerat
            })
                .then(res => {
                    console.log(`success updated fruit data with id ${editedIndex}`);
                    setData(null);
                })
                .catch(err => {
                    console.log(`error when post data to api: ${err}`)
                });

            setInputNama("");
            setInputHarga("");
            setInputBerat("");
            setEditedIndex("");
        } else { // insert new data
            axios.post(`http://backendexample.sanbercloud.com/api/fruits`, {
                name: inputNama,
                price: inputHarga,
                weight: inputBerat
            })
                .then(res => {
                    console.log("berhasil")
                    setData(null);
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
        <div className="form-input-fruits">
            <div className="form-container">
                <h1>Form Harga Buah</h1>
                <form onSubmit={handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td style={{width: 280, fontWeight: 'bold'}}>
                                    <label>
                                        Masukkan nama buah:
                                    </label>
                                </td>
                                <td>
                                    <input id="nama" type="text" style={{width: 150}} value={inputNama} onChange={handleChange} required />
                                </td>
                            </tr>
                            <tr>
                                <td style={{width: 280, fontWeight: 'bold'}}>
                                    <label>
                                        Masukkan harga buah (dalam rupiah):
                                    </label>
                                </td>
                                <td>
                                    <input id="harga" type="number" style={{width: 150}} value={inputHarga} onChange={handleChange} required />
                                </td>
                            </tr>
                            <tr>
                                <td style={{width: 280, fontWeight: 'bold'}}>
                                    <label>
                                        Masukkan berat buah (dalam gram):
                                    </label>
                                </td>
                                <td>
                                    <input id="berat" type="number" style={{width: 150}} value={inputBerat} onChange={handleChange} required />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button style={{marginTop: 10}}>submit</button>
                </form>
            </div>
        </div>
    );
};

export default FruitListForm;