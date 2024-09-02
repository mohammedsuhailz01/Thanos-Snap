import React, { useState } from 'react';
import Item from './Item';

const ThanosSnap = () => {
    const [items, setItems] = useState([
        { id: 1, name: 'Iron Man' },
        { id: 2, name: 'Captain America' },
        { id: 3, name: 'Thor' },
        { id: 4, name: 'Hulk' },
        { id: 5, name: 'Black Widow' },
        { id: 6, name: 'Hawkeye' }
    ]);

    const snap = () => {
        const newItems = items.filter(() => Math.random() > 0.5);
        setItems(newItems);
    };

    return (
        <div className="thanos-snap">
            <button onClick={snap}>Snap!</button>
            <div className="items-container">
                {items.map(item => <Item key={item.id} name={item.name} />)}
            </div>
        </div>
    );
};

export default ThanosSnap;
