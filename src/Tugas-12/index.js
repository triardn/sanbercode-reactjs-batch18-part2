import React, {Component} from 'react';
import './style.css';

const convertWeight = (weight) => {
    return `${weight/1000} kg`
}

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            inputNama: "",
            inputHarga: "",
            inputBerat: "",
            editedIndex: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        switch (event.target.id) {
            case "nama":
                this.setState({inputNama: event.target.value});
                break;
            case "harga":
                this.setState({inputHarga: event.target.value});
                break;
            case "berat":
                this.setState({inputBerat: event.target.value});
                break;
            default:
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        // create new data
        const newData = {
            nama: this.state.inputNama,
            harga: this.state.inputHarga,
            berat: this.state.inputBerat,
        };

        if (this.state.editedIndex !== "") { // edit data
            let data = this.state.data;
            data.splice(this.state.editedIndex, 1, newData);

            this.setState({
                data: data,
                inputNama: "",
                inputHarga: "",
                inputBerat: "",
                editedIndex: "",
            });
        } else { // insert new data
            this.setState({
                data: [...this.state.data, newData],
                inputNama: "",
                inputHarga: "",
                inputBerat: "",
                editedIndex: "",
            });
        }
    }

    editData(index, data) {
        this.setState({
            inputNama: data.nama,
            inputHarga: data.harga,
            inputBerat: data.berat,
            editedIndex: index,
        });
    }

    delete(index) {
        var r = window.confirm("Data ini akan dihapus secara permanen! Setuju?");
        
        if (r === true) {
            let updatedData = this.state.data;
            updatedData.splice(index, 1);

            this.setState({
                data: updatedData,
                inputNama: "",
                inputHarga: "",
                inputBerat: "",
                editedIndex: "",
            });
        }
    }

    render() {
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
                    <tbody>
                        {this.state.data.map((el, index)=> {
                            return (
                                <tr key={index}>
                                    <td style={{backgroundColor: '#FF7F4F'}}>{el.nama}</td>
                                    <td style={{backgroundColor: '#FF7F4F'}}>{el.harga}</td>
                                    <td style={{backgroundColor: '#FF7F4F'}}>{convertWeight(el.berat)}</td>
                                    <td style={{backgroundColor: '#FF7F4F', textAlign: 'center'}}>
                                        <button onClick={() => this.editData(index, el)}>Edit</button>
                                        <button onClick={() => this.delete(index)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                {/* Form */}
                <div className="form-input-fruits">
                    <div className="form-container">
                        <h1>Form Harga Buah</h1>
                        <form onSubmit={this.handleSubmit}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td style={{width: 280, fontWeight: 'bold'}}>
                                            <label>
                                                Masukkan nama buah:
                                            </label>
                                        </td>
                                        <td>
                                            <input id="nama" type="text" style={{width: 150}} value={this.state.inputNama} onChange={this.handleChange} required />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{width: 280, fontWeight: 'bold'}}>
                                            <label>
                                                Masukkan harga buah (dalam rupiah):
                                            </label>
                                        </td>
                                        <td>
                                            <input id="harga" type="number" style={{width: 150}} value={this.state.inputHarga} onChange={this.handleChange} required />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{width: 280, fontWeight: 'bold'}}>
                                            <label>
                                                Masukkan berat buah (dalam gram):
                                            </label>
                                        </td>
                                        <td>
                                            <input id="berat" type="number" style={{width: 150}} value={this.state.inputBerat} onChange={this.handleChange} required />
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
}

export default Table;