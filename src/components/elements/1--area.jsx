import React, { useState, useEffect, useRef } from "react";
import img from '../images/plus.png';
import plus from '../images/add.png'
import classes from '../styles/item.module.css';

export default function Area(props) {
  const [currentDateTime, setCurrentDateTime] = useState('');
  const [note, setNote] = useState({
    title: null,
    content: null,
  });
  const [isActive, setIsActive] = useState(false);

  const formRef = useRef(null);
  const titleInputRef = useRef(null);
  const contentTextareaRef = useRef(null);

  // useEffect(() => {
  //   const handleOutsideClick = (e) => {
  //     if (formRef.current && !formRef.current.contains(e.target)) {
  //       setIsActive(false);
  //     }
  //   };

  //   document.addEventListener('click', handleOutsideClick);

  //   return () => {
  //     document.removeEventListener('click', handleOutsideClick);
  //   };
  // }, []);

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
    if (note.title == null && note.content == null) {
      return;
    } else {
      
      props.onAdd({
        title: titleInputRef.current.value,
        content: contentTextareaRef.current.value,
        hour: currentDateTime,
      });
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
    console.log(isActive);
  
    const formElement = document.getElementById('form');
    if (isActive) {
      setTimeout(() => {
        formElement.style.overflow = 'hidden';
      }, 100);
    } else {
      setTimeout(() => {
        formElement.style.overflow = 'visible';
      }, 100);
    }
  };
  


  const close = () =>{
    setIsActive(false)
    document.getElementById('form').style.overflow='hidden';
  }


  return (
    <div>
      <form id="form" ref={formRef} className={isActive ? classes.active : classes.notactive}>

        <h2 onClick={open}>
          {!isActive ? 'Add Item' : 'Add Item' } 
          <img src={plus} className={classes.image2} alt="plus icon"/>
        </h2>

        <input ref={titleInputRef} placeholder="Title" name="title" value={note.title} onChange={change}
          onBlur={updateDateTime}
          onFocus={() => setIsActive(true)}
          className={classes.input}
        />

        <textarea ref={contentTextareaRef} placeholder="Content" name="content" rows="3" value={note.content}
          onChange={change}
          onBlur={updateDateTime}
          onFocus={() => setIsActive(true)}
        />

        <button id="sbutton" onClick={close} className={classes.button}>
          <img onClick={submit} src={img} className={classes.image} alt="plus icon" />
        </button>
      </form>
    </div>
  );
}
