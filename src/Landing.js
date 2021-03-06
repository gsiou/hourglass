import React, { useState } from 'react'
import { Link } from "@reach/router"

const goToPage  = () => {
    window.location.href = '#start'
}

export default () => {
  const [bday, setBday] = useState(new Date(0));
  const [lifespan, setLifespan] = useState(80);

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