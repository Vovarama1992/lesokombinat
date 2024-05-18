import styles from './page.module.scss';

const goals = ['goal1', 'goal2', 'goal3'];
const descs = ['desc1', 'desc2', 'desc3'];
const expectations = ['exp1', 'exp2', 'exp3'];

export default function Vacancy({ item, func }: { item: string, func: () => void }) {
    return (
        <div className={styles.jobVacancy}>
            <h1>{item}</h1>
            <p>зп от 00 0000 рублей</p>

            <ul>
                Задачи
                {goals.map((goal, index) => (
                    <li key={index}>{goal}</li>
                ))}
            </ul>

            <ul>
                Описание
                {descs.map((desc, index) => (
                    <li key={index}>{desc}</li>
                ))}
            </ul>

            <ul>
                Ожидания
                {expectations.map((expectation, index) => (
                    <li key={index}>{expectation}</li>
                ))}
            </ul>
            <button className={styles.backToVac} onClick={func}>Back</button>
        </div>
    );
}