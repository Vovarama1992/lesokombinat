'use client';
import { useState } from 'react';
import styles from './page.module.scss';

export default function Products() {
  const bath = '/banya.jpg';
  const house = '/house.jpg';
    const [view, setView] = useState(bath);
    return (
      <div className={styles.products}>
        <button onClick={() => setView(bath)}  style={view === bath ? { background: 'black' } : {}} className={`${styles.viewclicker} ${styles.bath}`}>Бани</button>
        <button onClick={() => setView(house)} style={view === house ? { background: 'black' } : {}} className={`${styles.viewclicker} ${styles.house}`}>Дома</button>
            <div className={styles.productView} style={{ backgroundImage: `url(${view})` }}></div>
            <button onClick={() => setView(bath)} className={`${styles.arrow} ${styles.lefter}`}></button>
            <button onClick={() => setView(house)} className={`${styles.arrow} ${styles.righter}`}></button>
      </div>
    )
  }