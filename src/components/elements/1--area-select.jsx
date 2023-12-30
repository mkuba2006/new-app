import React, { useContext, forwardRef } from "react";
import classes from '../styles/item.module.css';
import Mod_elements from '../logic/items_context';

const Select = forwardRef(({ onSelectChange }, ref) => {
    const mtx = useContext(Mod_elements);

    const handleChange = () => {
        if (onSelectChange) {
            onSelectChange(ref.current.value);
        }
    };

    return (
        <select defaultValue="default" ref={ref} onChange={handleChange}>
            <option value="default" disabled hidden>Wybierz folder</option>
            {mtx.folders.map((item, index) => (
                <option key={index} value={item.folder}>
                    {item.folder}
                </option>
            ))}
        </select>
    );
});

export default Select;
