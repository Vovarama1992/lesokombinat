'use client';
import styles from './page.module.scss';

import { useState } from 'react';
import Vacancy from './Vacancy';
const divisions = ['строительный отдел', 'офис', 'финансовый отдел', 'отдел продаж', 'внештатный сотрудник'];

const vacancies = ['прораб', 'специалист службы снабжения', 'логист', 'проектировщик'];

export default function VacancyList() {
    
    const [num, setNum] = useState(0);
    const [show, setShow] = useState(false);
    const [clicker, setClick] = useState(0);
    const vacancy = vacancies[num];
    function responser(value: boolean) {
         setShow(value);
    }
    return (
        <div>
            
        {!show && (
            <div className={styles.choose}>
                <div className={styles.divisions}>
                        {divisions.map((div, index) => (
                            <button
                                key={index}
                                onClick={() => setClick(index)}
                                className={`${styles.divisionButton} ${clicker === index ? styles.perverted : ''}`}
                            >
                                {div}
                            </button>
                        ))}
                    </div>
                {vacancies.map((vac, index) => (
                    <button
                        onClick={() => {
                            setNum(index);
                            alert(`${vac} выбрано. можно откликаться`);
                        }}
                        className={styles.vacancy}
                        key={index}
                        style={{ top: `calc(250px + ${index * 160}px)` }}
                    >
                        {vac}
                    </button>
                ))}
                <button onClick={() => responser(true)} className={styles.responser}>Ответить</button>
            </div>
        )}
        {show && <Vacancy func={() => responser(false)} item={vacancies[num]} />}
    </div>
        
    );
}