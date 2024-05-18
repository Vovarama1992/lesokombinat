'use client';

import styles from '../page.module.scss';
import { useSearchParams, useRouter } from 'next/navigation';
export default function SendedForm() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const params = new URLSearchParams(searchParams);
    const surname = params.get('surname');
    const vacancy = params.get('vacancy');
    function backer() {
        router.push('/');
    }
    const text = `Благодарим за ваш отклик и интерес.`;

    return (
        <div className={styles.form}>
           <div className={styles.declaration}>
           Анкета на должность {vacancy} отправлена.
           Поздравляю, {surname}
           </div>
           <div className={styles.checkMark}>
            <div className={styles.innerCheck}></div>
            {text}
            <br></br>
            <br></br>
            Мы изучим вашу анкету и свяжемся с вами в nечении 2х дней.
            </div>
           <button onClick={backer} className={styles.returnButton}>
            На главную
           </button>
        </div>

    )
}



