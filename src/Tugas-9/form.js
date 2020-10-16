import React from 'react';
import './style.css';

function Form() {
    return(
        <div className="container">
            <div className="App">
                <h1>Form Pembelian Buah</h1>
                <div className="table">
                <table className="row-spacing">
                    <tr>
                    <td style={{width: '45%'}}><strong>Nama Pelanggan</strong></td>
                    <td><input type="text" style={{width: '200px'}} /></td>
                    </tr>
                    <tr>
                    <td style={{verticalAlign: 'bottom'}}><strong>Daftar Item</strong></td>
                    <td>
                        <input type="checkbox" id="fruits" name="fruits" value="watermelon" />
                        <label for="fruits">Semangka</label><br/>
                        <input type="checkbox" id="fruits" name="fruits" value="orange" />
                        <label for="fruits">Jeruk</label><br/>
                        <input type="checkbox" id="fruits" name="fruits" value="pineapple" />
                        <label for="fruits">Nanas</label><br/>
                        <input type="checkbox" id="fruits" name="fruits" value="Snakefruit" />
                        <label for="fruits">Salak</label><br/>
                        <input type="checkbox" id="fruits" name="fruits" value="grape" />
                        <label for="fruits">Anggur</label><br/>
                    </td>
                    </tr>
                </table>
                <button>Kirim</button>
                </div>  
            </div>
        </div>
    );
}

export default Form;