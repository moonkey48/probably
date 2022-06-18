import { useState,useEffect } from 'react';
import { useRouter } from 'next/router';
import Footer from '../components/footer';
import Header from '../components/header';
import SideBar from '../components/SideBar';
import Seo from '../components/Seo';

export default function Main(){
    const [tags, setTags] = useState([]);
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
    return <>
    <Seo title='Home'/>
    <div className='container'>
        <SideBar clicked='Home'/>
        <main className='main'>
            <Header setTags={setTags} tags={tags}/>
            <div>
                <ul>{
                    tags.length>0?
                    tags.map(tag=><li>#{tag}</li>)
                    :''
                }</ul>
                <h1>hello {user.name}</h1>
            </div>
        </main>
    </div>
    <style jsx>{`
    .container{
        display:flex;
        flex-direction: row;
        justify-content:center;
        margin-top: 30px;
        gap:12px;
    }
    .main{
        display:flex;
        flex-direction: column;    
    }
    `}</style>
    </>
}