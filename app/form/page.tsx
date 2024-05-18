'use client';
import styles from '../page.module.scss';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState, ChangeEvent, Suspense } from 'react';

const text = `Я прочитал(а), ознакомился(лась) и согласен(на) с Политикой конфиденциальности, Согласием на обработку персональных данных физическим лицом. Я осознаю, что даю Согласие на обработку персональных данных для использования предоставляемых возможностей Веб-сервиса.`;
export default function Form() {
  return(
    <Suspense fallback={<div>Loading...</div>}>
      <Formm />
      </Suspense> 
  )
}
function Formm() {
  const [creds, setCreds] = useState(['', '']);
  const [option, setOption] = useState('прораб');
  const [confirmed, setConfirm] = useState(false);
  const [file, setFile] = useState<File | undefined>();
  const [surname, tel] = creds;
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  function changeCreds(value: string, i: number) {
    const newcreds = [...creds];
    newcreds[i] = value;
    setCreds(newcreds);
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target && e.target.files) {
      const file = e.target.files[0];
      setFile(file);
      alert('файл отправлен');
    }
  };
  

  const loader = () => {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  };

  const conditionToSend = surname && tel && option && confirmed;
  

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!conditionToSend) {
      alert('не все поля заполнены');
      return;
    }
    const params = new URLSearchParams(searchParams.toString());
    if (option) {
        params.set('vacancy', option)
    } else
     params.delete('vacancy');
    if (surname) {
      params.set('surname', surname);
    } else {
      params.delete('surname');
    }
    router.push(`/sendedForm?${params.toString()}`);
  }
  
  return (
    
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.fillTitle}></div>
        <div className={styles.credentials}>
          <div className={styles.inputWrapper}>
            <input
              className={styles.input}
              value={surname}
              onChange={(e) => changeCreds(e.target.value, 0)}
              placeholder="Ф.И.О"
            ></input>
          </div>
          <div className={styles.inputWrapper}>
            <input
              className={styles.input}
              type='tel'
              value={tel}
              onChange={(e) => changeCreds(e.target.value, 1)}
              placeholder="Телефон"
            ></input>
          </div>
        </div>
        <div className={styles.response}>Отклик на вакансию</div>
        <div className={styles.selectBlock}>
          Выберите вакансию
          <select
            name="vacancy"
            onChange={(e) => setOption(e.target.value)}
            className={styles.select}
          >
            <option value="прораб">прораб</option>
            <option value="специалист службы снабжения">специалист службы снабжения</option>
            <option value="логист">логист</option>
            <option value="проектировщик">проектировщик</option>
          </select>
        </div>
        <div className={styles.resume}>Ваше резюме</div>
        <div className={styles.ifPdf}>
          Есть резюме в формате .pdf или .doc? Приложите и отправьте его нам.
        </div>
        <button type="button" className={styles.loader} onClick={loader}>
          Загрузить файл
        </button>
        <input
          type="file"
          id="fileInput"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        <div className={styles.confirmer}>
          <input
            type="checkbox"
            checked={confirmed}
            onChange={() => setConfirm(!confirmed)}
            className={styles.checkbox}
            name="confirmer"
          ></input>
          {text}
          <br />
          <br />
          Я достиг 18-летнего возраста
        </div>
        <button type="submit"  className={styles.sender}>
          Отправить анкету
        </button>
      </form>
    
  );
}