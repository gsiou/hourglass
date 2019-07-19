import React from 'react'
import { Link } from "@reach/router"

const goToPage  = () => {
    window.location.href = '#start'
}

export default () => (
    <div className="App">
      <header className="App-header">
        <h1>H o u r g l a s s</h1>
        <button onClick={goToPage} className='Hourglass'><i className='far fa-hourglass'></i></button>
      </header>
      <div className="Frontpage" id="start">
          <p>
            I was born on <input type="date"/>
          </p>
          <p>
            I believe I'll die at the age of <input type="number" max={120}/>
          </p>
          <div className="Action">
            <Link to="calendar" className="Next">Next <span className="fas fa-long-arrow-alt-right"/></Link>
          </div>
        </div>
    </div>
);