import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import seonmi from '../../Images/choi.jpg';

export default function IntroPage() {
  return (
    <div className='myImage'>
      <img src={seonmi} alt='logo'></img>
      <Link to='/'>Home</Link>
    </div>
  );
}
