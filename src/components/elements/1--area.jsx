import React, { useState, useRef, useContext } from "react";
import img from '../images/plus.png';
import plus from '../images/add.png'
import classes from '../styles/item.module.css';
import Mod_elements from '../logic/items_context';

export default function Area(props) {
  const mtx = useContext(Mod_elements);
  const [currentDateTime, setCurrentDateTime] = useState('');
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  
  const [isActive, setIsActive] = useState(false);
  const formRef = useRef(null);
  const titleInputRef = useRef(null);
  const contentTextareaRef = useRef(null);


  const updateDateTime = () => {
    const now = new Date();
    const day = now.getDate();
    const month = now.toLocaleString('default', { month: 'long' });
    const hour = now.getHours();
    const minute = now.getMinutes();
    const formattedDateTime = `${day} ${month}, ${hour}:${minute < 10 ? '0' : ''}${minute}`;
    setCurrentDateTime(formattedDateTime);
  };

  function change(e) {
    const { name, value } = e.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  function submit(e) {
    e.preventDefault();
    updateDateTime();
    if (!(note.title || note.content)) {
      e.preventDefault();
      return;
    }else {
      const newNote = {
        title: titleInputRef.current.value,
        content: contentTextareaRef.current.value,
        hour: currentDateTime,
      };
      props.onAdd(newNote);
      setNote({
        title: null,
        content: null,
      });
      titleInputRef.current.value = null;
      contentTextareaRef.current.value = null;
    }
  }

  const open = () => {
    setIsActive(!isActive);
    setTimeout(() => {
      document.getElementById('form').style.overflow = isActive ? 'hidden' : 'visible';
    }, 100);
  };

  const close = () =>{
    setIsActive(false)
    document.getElementById('form').style.overflow='hidden';
  }


  return (
    <div>
      {mtx.folders.length !== 0 && (
        <form id="form" ref={formRef} className={isActive ? classes.active : classes.notactive}>
          <h2 onClick={open}>
            {!isActive ? 'Add Item' : 'Add Item' } 
            <img src={plus} className={classes.image2} alt="plus icon"/>
          </h2>
  
          <input
            ref={titleInputRef}
            placeholder="Title"
            name="title"
            onChange={change}
            onBlur={updateDateTime}
            onFocus={() => setIsActive(true)}
            className={classes.input}
          />
  
          <textarea
            ref={contentTextareaRef}
            placeholder="Content"
            name="content"
            rows="3"
            onChange={change}
            onBlur={updateDateTime}
            onFocus={() => setIsActive(true)}
          />
  
          <select defaultValue="default">
            <option value="default" disabled hidden>Wybierz folder</option>
            {mtx.folders.map((item, index) => (
              <option key={index} value={item.folder}>
                {item.folder}
              </option>
            ))}
          </select>
  
          <button id="sbutton" onClick={close} className={classes.button}>
            <img onClick={submit} src={img} className={classes.image} alt="plus icon" />
          </button>
        </form>
      )}
  
      {mtx.folders.length === 0 && <p className={classes.warn1}>To add a task, you must have at least 1 folder</p>}
    </div>
  );
  
}
