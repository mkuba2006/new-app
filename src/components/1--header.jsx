import React from 'react';
import './styles/header.css';


export default function Header() {
  const currentTime = new Date().getHours();
  let greeting;
  if (currentTime >= 8 && currentTime < 10) {
    greeting = 'Good morning';
  } else if (currentTime >= 10 && currentTime < 18) {
    greeting = 'Good afternoon';
  } else {
    greeting = 'Good evening';
  }

  return (
    <header>
      <h1>{greeting}</h1>
      <h3>Lets' plan your day</h3>
    </header>
  );
}
