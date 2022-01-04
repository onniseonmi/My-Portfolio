import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import seonmi from '../../Images/choi.jpg';
import styles from './IntroPage.module.css';

export default function IntroPage() {
  return (
    <div className={styles.myImage}>
      <img className={styles.image} src={seonmi} alt='logo'></img>
      <Link to='/'>Home</Link>
    </div>
  );
}
