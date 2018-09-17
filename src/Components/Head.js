import React from 'react';

const Head = ({wins, losses, clicks})=>(
    <nav>
    <div className="nav-wrapper">
      <a className="brand-logo">Shuffle Bored</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>Won:{wins} |</li>
        <li>Lost:{losses} |</li>
        <li>Guess:{clicks}/16</li>
      </ul>
    </div>
  </nav>
)

export default Head;