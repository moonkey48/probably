import { useState,useEffect } from 'react';
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';
import Seo from '../components/Seo';
import Firebase from '../service/firebase';
import {firebaseApp} from '../service/firebaseApp';

const fireBaseApp = new Firebase(firebaseApp);

export default function Home({database,setOffers,handleProfileDB}) {
  const router = useRouter();
  const [welcomeText, setWelcomeText] = useState('Hello Pro 😎');
  const handleLogin = async() =>{
    await fireBaseApp.login((result)=>{
      if(!result){
        setWelcomeText('로그인에 문제가 생겼습니다. 다른 계정으로 로그인해주세요.')
        return;
      }
      router.push({
        pathname: '/main',
        query:{
          uid:result.uid,
          name:result.name,
          email:result.email
        }
      })
    })
  }
  useEffect(()=>{
    database.syncOffers((data)=>setOffers(data));
    database.syncProfiles((data)=>{
      handleProfileDB(data);
    });
  },[]);
  return (
    <div className={styles.container}>
      <Seo title='login' />
      <main className={styles.main}>
        <h1>{welcomeText}</h1>
          <button onClick={()=>handleLogin()}>로그인하기</button>
      </main>
      <style jsx>{`
      button{
        border:none;
        background:none;
        font-weight: bold;
        font-size: 12pt;
        cursor:pointer;
        transition: opacity 0.2s;
      }
      button:hover{
        opacity: 0.5;
      }
      `}</style>
    </div>
  )
}
