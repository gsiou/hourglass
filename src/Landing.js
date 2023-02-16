import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

const goToPage  = () => {
    document.getElementById("start").scrollIntoView({
        block: 'start',
        behavior: 'smooth'
      });
}

export default () => {
  const [bday, setBday] = useState(new Date(0));
  const [lifespan, setLifespan] = useState(80);

  useEffect(() => {
    window.scrollTo(0, 0)

    // if we have stored bday, prefill
    if (localStorage.getItem('bday')) {
      setBday(new Date(JSON.parse(localStorage.getItem('bday'))).toISOString().substring(0, 10));
    }
    if (localStorage.getItem('lifespan')) {
      setLifespan(JSON.parse(localStorage.getItem('lifespan') / 365 / 24 / 60 / 60));
    }
  }, [])

  const store = () => {
    localStorage.setItem('bday', JSON.stringify(Math.floor(new Date(bday).getTime()/1000)));
    localStorage.setItem('lifespan', JSON.stringify(lifespan * 365 * 24 * 60 * 60));
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>H o u r g l a s s</h1>
        <button onClick={goToPage} className='Hourglass'><i className='far fa-hourglass'></i></button>
      </header>
      <div className="Frontpage" id="start">
          <p>
            I was born on <input onChange={(e) => setBday(e.target.value)} value={bday} type="date"/>
          </p>
          <p>
            I believe I'll die at the age of <input onChange={(e) => setLifespan(e.target.value)} value={lifespan} type="number" max={120}/>
          </p>
          <div className="Action">
            <Link onClick={store} to="calendar" className="Next">Next <span className="fas fa-long-arrow-alt-right"/></Link>
          </div>
        </div>
    </div>
  );
}