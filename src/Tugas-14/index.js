import React from 'react';
import {FruitListProvider} from './provider';
import FruitList from './list';
import FruitListForm from './form';

import './style.css';

const Fruit = () => {
    return (
        <FruitListProvider>
            <div className="container-14">
                <FruitList />
                <FruitListForm />
            </div>
        </FruitListProvider>
    );
}

export default Fruit;