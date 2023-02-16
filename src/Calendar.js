import React, { useState, useEffect } from 'react'

const goToPage  = () => {
    window.location.href = '#start'
}

const Week = (props) => (
  <span className={`Weekbox ${props.past ? 'filled' : 'empty'}`}>
    x
  </span>
)

const Counter = (props) => (
  <span className='Counter'>
    {props.count}:
  </span>
)

export default () => {
  const [mode, setMode] = useState(0);

  const today = new Date().getTime() / 1000;
  const bday = new Date(localStorage.getItem('bday')).getTime() / 1000;
  const lifespan = parseInt(localStorage.getItem('lifespan'));

  const weeksAlive = (today - bday) / 60 / 60 / 24 / 7;
  const weeksLeft = (bday + lifespan - today) / 60 / 60 / 24 / 7;
  const calendarContent = [<Counter count={0}/>]
  for(let i = 0; i < weeksAlive + weeksLeft; i++) {
    calendarContent.push(<Week past={i < weeksAlive}/>);
    if ((i + 1) % 52 == 0) {
      calendarContent.push(<br/>);
      calendarContent.push(<Counter count={Math.floor(i/52 + 1)}/>);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className="App">
      <div className='ModeSelector'>
        <a className={`${mode === 0 ? 'active': ''}`} href="#" onClick={(e) => setMode(0)}>Normal</a>
        <a className={`${mode === 1 ? 'active': ''}`} href="#" onClick={(e) => setMode(1)}>Optimistic</a>
        <a className={`pes ${mode === 2 ? 'active': ''}`} href="#" onClick={(e) => setMode(2)}>Pessimistic</a>
      </div>
      <h1>Weekend Calendar</h1>
      <p>Weekends <span className='past'>alive</span>: {Math.floor(weeksAlive)} | Weekends <span className='future'>left</span>: {Math.floor(weeksLeft)}</p>
      <div className={`Calendar ${ mode === 1 ? 'opt' : mode === 2 ? 'pes' : ''}`}>
        {calendarContent}
      </div>
    </div>
  );
}