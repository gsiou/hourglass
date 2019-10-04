import React from 'react'

const goToPage  = () => {
    window.location.href = '#start'
}

export default () => {
  const today = new Date().getTime() / 1000;
  const bday = parseInt(localStorage.getItem('bday'));
  const lifespan = parseInt(localStorage.getItem('lifespan'));

  const weeksAlive = (today - bday) / 60 / 60 / 24 / 7;
  return (
    <div className="App">
      <p>Calendar page</p>
      <p>Weeks alive: {weeksAlive}</p>
    </div>
  );
}