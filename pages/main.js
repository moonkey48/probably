import { useState,useEffect } from 'react';
import { useRouter } from 'next/router';
import Footer from '../components/footer';
import Header from '../components/header';
import SideBar from '../components/SideBar';
import Seo from '../components/Seo';
import Profile from '../components/Profile';

export default function Main(){
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
            <Header setTags={setTags} tags={tags}/>
            <div>
                <ul>{
                    tags.length>0?
                    tags.map((tag,index)=>{
                        return <li>#{tag}<span className='deleteTag' onClick={()=>deleteTag(index)}>X</span></li>
                    })
                    :''
                }</ul>
                <Profile/>
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
        padding:0 30px;
    }
    .main{
        display:flex;
        flex-direction: column;  
        flex-basis:900px;
    }
    ul{
        display:flex;
        flex-direction:row;
    }
    li{
        list-style:none;
        padding:15px 10px 15px 0;
        color:#BABABA;
    }
    .deleteTag{
        font-size: 14px;
        cursor:pointer;
        padding-left:5px;
        transition: color 0.2s;
    }
    .deleteTag:hover{
        color:#686868;
    }
    `}</style>
    </>
}