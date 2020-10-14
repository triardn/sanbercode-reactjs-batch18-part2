import React, {useState, useEffect} from 'react';
import './style.css';
import axios from 'axios';

const convertWeight = (weight) => {
    return `${weight/1000} kg`
}

const Table = () => {
    const [data, setData] = useState(null);
    const [inputNama, setInputNama] = useState("");
    const [inputHarga, setInputHarga] = useState("");
    const [inputBerat, setInputBerat] = useState("");
    const [editedIndex, setEditedIndex] = useState("");

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
    }, [data]);

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

    return(
        <div className="container">
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
                    {(data !== null) ?
                        <tbody>
                        {data.map((el, index)=> {
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
            {/* Form */}
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
        </div>
    );
}

export default Table;