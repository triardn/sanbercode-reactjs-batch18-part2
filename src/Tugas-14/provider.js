import React, {useState, createContext} from 'react';

export const FruitListContext = createContext();

export const FruitListProvider = props => {
    const [fruitList, setFruitList] = useState(null);
    const [inputNama, setInputNama] = useState("");
    const [inputHarga, setInputHarga] = useState("");
    const [inputBerat, setInputBerat] = useState("");
    const [editedIndex, setEditedIndex] = useState("");

    return (
        <FruitListContext.Provider value={[fruitList, setFruitList, inputNama, setInputNama, inputHarga, setInputHarga, inputBerat, setInputBerat, editedIndex, setEditedIndex]}>
            {props.children}
        </FruitListContext.Provider>
    );
};