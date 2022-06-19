import { useState,useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/header';
import SideBar from '../components/SideBar';
import Seo from '../components/Seo';
import Profile from '../components/Profile';

export default function Main({students}){
    const [tags, setTags] = useState([]);
    const [user,setUser] = useState({
        uid:'',
        name:'',
        email:''
    })
    const router = useRouter();
    const deleteTag = (tagIndex) => {
        const updated = [...tags.slice(0,tagIndex), ...tags.slice(tagIndex+1)];
        setTags(updated);
    }
    useEffect(()=>{
        setUser({
            uid:router.query.uid,
            name:router.query.name,
            email: router.query.email,
        })
    },[]);
    return <>
    <Seo title='Home'/>
    <div className='container'>
        <SideBar clicked='Home'/>
        <main className='main'>
            <Header setTags={setTags} tags={tags} deleteTag={deleteTag}/>
        </main>
    </div>
    <style jsx>{`
    .container{
        display:flex;
        flex-direction: row;
        justify-content:center;
        margin-top: 30px;
        gap:12px;
        padding:0 30px;
    }
    .main{
        display:flex;
        flex-direction: column;  
        flex-basis:900px;
    }
    `}</style>
    </>
}