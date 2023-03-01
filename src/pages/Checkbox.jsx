import React, { useState } from 'react';

const Checkbox = () => {

    const [cat, setCat] = useState([
        "Men",
        "Women",
        "Baby",
        "Electronic",
        "Game",
    ]);

    const [selected, setSelected] = useState([]);

    const handleCatChange = (e) => {
        const value = e.target.value;

        const oldSelectedCatList = [...selected];

        if (selected.includes(value)) {
            oldSelectedCatList.splice(selected.indexOf(value), 1);
        } else {
            oldSelectedCatList.push(value);
        }

        setSelected(oldSelectedCatList);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Checkbox Issue</h1>
                    <hr />
                    <ul>
                        {cat.map((item, index) => (
                            <li><label htmlFor={index}><input type="checkbox" id={ index } value={item} onChange={handleCatChange} checked={selected.includes(item)} />&nbsp; {item }</label></li>
                        )) }
                    </ul>
                </div>
            </div>
       </div>
    )
};

export default Checkbox;