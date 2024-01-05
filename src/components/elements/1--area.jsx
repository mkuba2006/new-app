import React, { useState, useRef, useContext } from "react";
import classes from '../styles/item.module.css';
import Mod_elements from '../logic/items_context';
import H2 from "./1--area-h2";
import Close from "./1--area-close";
import Select from "./1--area-select";





export default function Area(props) {
  const mtx = useContext(Mod_elements);
  const [currentDateTime, setCurrentDateTime] = useState('');
  const [note, setNote] = useState({title: "",content: "",folder: ""});
  const [isActive, setIsActive] = useState(false);
  const formRef = useRef(null);
  const titleInputRef = useRef(null);
  const contentTextareaRef = useRef(null);
  const selectRef = useRef(null);
  
  const updateDateTime = () => {
    const now = new Date();
    setCurrentDateTime(`${now.getDate()} ${now.toLocaleString('default', { month: 'long' })}, ${now.getHours()}:${(now.getMinutes()+'')}`);
  };
  
  
  const change = (e) => {
    const { name, value } = e.target;
    setNote((prevNote) => ({ ...prevNote, [name]: value }));
  };

  const submit = (e) => {
    e.preventDefault();
    updateDateTime();
  
    if (!titleInputRef.current.value||!contentTextareaRef.current.value||(!selectRef.current.value||selectRef.current.value==="none"||selectRef.current.value==="")){
      return;
    }
  
    const newNote = {
      folder: selectRef.current.value,
      title: titleInputRef.current.value,
      content: contentTextareaRef.current.value,
      hour: currentDateTime
    };
  
    props.onAdd(newNote);
    
    mtx.addItem(newNote, mtx.folders);

    setNote({ title: null, content: null, folder: null });
    titleInputRef.current.value = null;
    contentTextareaRef.current.value = null;
    selectRef.current.value = null;
  };


  const handleSelectChange = (selectedValue) => {
    console.clear();
    console.log("Wybrany folder:", selectRef.current.value);
  };

  
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
          <H2 open={open}/>

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
  
          <Select onSelectChange={handleSelectChange} ref={selectRef} />
          <Close submit={submit} close={close}/>
        </form>
      )}
      {mtx.folders.length === 0 && <p className={classes.warn1}>To add a task, you must have at least 1 folder</p>}
    </div>
  );
  
}





// setCurrentDateTime(`${now.getDate()} ${now.toLocaleString('default', { month: 'long' })}, ${now.getHours()}:${(now.getMinutes()+'').padStart(2, '0')}`);