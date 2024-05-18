'use client';
import styles from './page.module.scss';
import { useState, useRef } from 'react';
export default function Advantages() {
    const [isVisible, setVisible] = useState(false);
    const [desc, setDesc] = useState('');
    const [names, setNames] = useState(['']);
    
    function showDesc( name: string, description: string) {
          if ((name == names[names.length - 1]) || names.length == 1 || isVisible == false)  {
            setVisible(!isVisible);
          }
          setDesc(description);
          setNames([...names, name]);
    }
    return (
      <div className={styles.advantages}>
        <h1>Преимущества компании</h1>
        <ul className={styles.list}>
          {advantages.map((adv, i) => (
            <li key={i}>{adv.name}
            <button  onClick={() => showDesc(adv.name, adv.desc)} className={styles.plus}></button>
            <div hidden={!isVisible}  className={styles.advantageDesc}>
                {desc}
            </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  const advantages = [
    {
        name: 'Качество продукта',
    desc: `Мы гордимся результатами своей работы! Мы убеждены, что именно качество — это самое главное, это то, что даёт Нам уверенность в завтрашнем дне.`
  },
    {
        name: 'Популярность бренда в сети',
        desc: `Мы занимаем высокие позиции в поисковой выдаче и имеем многочисленные отзывы, привлекающие новых заказчиков независимо от времени года.`
    },
    {
        name: 'Передовое рабочее место',
        desc: `Комфортный офис в центре г. Санкт-Петербург, оборудованный передовыми технологиями. Твой рабочий компьютер может быть даже в твоём смартфоне!`
    },
    {
        name: 'Свои автоматизированные системы обучения',
        desc: `Создали и постоянно улучшаем собственные автоматизированные системы обучения специалистов и повышения их квалификации внутри компании.`
    },
    {
    name: 'Сотрудничество с ведущими компаниями рынка',
    desc: `Сотрудничаем с ведущими Компаниями рынка строительных материалов: «Grand Line», «Петрович», «Окна Петербурга», «КраскиДоски», «Technonicol» и другими.`
    }
  ];