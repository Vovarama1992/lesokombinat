'use client';
import styles from './page.module.scss';
import { useState } from 'react';
export default function Growth() {
   const personArr = [oleg, danil, maria];
    
   const [num, setNum] = useState(0);
   const person = personArr[num];
    return (
         <div className={styles.growth} >
           <h1>Карьерный рост</h1>
           <p>Наша Компания является ярким примером, где достойные люди смело и заслуженно поднимаются по карьерной лестнице. 
Мы ценим стремление к развитию и предоставляем все необходимые для этого условия.
<br></br>
<br></br>
         Мы ценим стремление к развитию и предоставляем все необходимые для этого условия.</p>
         <img src={person.src}></img>
         <h2>{person.title}</h2>
         <ul className={styles.personDesc}>
  {person.description.map((desc, index) => (
    <div key={index}><li >{desc}</li></div>
  ))}
</ul>
<button disabled={person == personArr[2]} onClick={() => setNum(num + 1)} className={`${styles.personArrow} ${styles.personLeft}`}>{arrowright}</button>
<button disabled={person == personArr[0]} onClick={() => setNum(num - 1)} className={`${styles.personArrow} ${styles.personaRight}`}>{arrowleft}</button>
         </div>
    )
}


 const oleg =  {
    src: '/olegPhoto.svg',
        title: 'Олег Воробьев. Прораб',
        description: [`В Компании с 2018 года. Начал с позиции плотника в строительной бригаде.`,
        `В течение года работы Олег стал бригадиром и был приглашён в офис Компании на должность штатного Производителя строительных работ.`, 
        `На данный момент в Его подчинении находятся 9 строительных бригад. Олег вносит весомый вклад в итоговый результат Компании, а это реализация 100 объектов в год!`]
    }
const danil = {
    src: '/danilPhoto.svg',
    title: `Даниил басенков. Менеджер по снабжению`,
    description: [`В декабре 2018 года заступил на должность Менеджера отдела продаж.`,
    `После 9 месяцев стабильных результатов, зарекомендовав себя как надёжный сотрудник, получил ответственную должность Логиста.`,
   `Через год Даниил занял должность Специалиста службы снабжения, взяв на себя помимо закупа материала ещё и крайне важную роль Сметчика.`]
}
const maria = {
    src: '/mariaPhoto.svg',
    title: `Мария Обухова. Руководитель финансовой службы`,
    description: [`Я являюсь опытным и высококвалифицированным руководителем финансовой службы с многолетним стажем в управлении финансовыми операциями и разработке финансовых стратегий.`, `Моя карьера охватывает ключевые аспекты финансового управления, включая бюджетирование, прогнозирование и оптимизацию финансовых потоков.`],
}

const arrowleft = '<';
    const arrowright = '>';
