import { useState,useEffect } from 'react';
import { useRouter } from 'next/router';
import Footer from '../components/footer';
import Header from '../components/header';

export default function Main(){
    const [user,setUser] = useState({
        uid:'',
        name:'',
        email:''
    })
    const router = useRouter();
    useEffect(()=>{
        setUser({
            uid:router.query.uid,
            name:router.query.name,
            email: router.query.email,
        })
    },[]);
    return <main>
        <Header/>
        <div>
            <h1>hello {user.name}</h1>
        </div>
        <Footer/>
    </main>
}