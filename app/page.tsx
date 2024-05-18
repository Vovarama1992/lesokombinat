
import "./globals.css";
import Link from 'next/link';
import styles from "./page.module.scss";
import Products from './Products';
import Growth from './Growth';
import Advantages from './Advantages';
import VacancyList from './VacancyList';
import Vacancy from './Vacancy';

export default function Home({
  searchParams,
}: {
  searchParams?: {
    showVacancy?: boolean;
    vacancy?: string;
    
  };
}) {
 
  return (
    
          <main>
            <div className='people background'>
              <Link href='/form'><button className='send-button'>Отправить анкету</button></Link>
            </div>
            <div className='about background'></div>
            <VacancyList />
            <Advantages />
            <Products />
            <Growth />
            <div className='successes'></div>
            </main>
          
  );
}


