import { useState,useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/header';
import SideBar from '../components/SideBar';
import Seo from '../components/Seo';
import Profile from '../components/Profile';
import Offer from '../components/Offer';

export default function Main({students,offers}){
    const [user,setUser] = useState({
        uid:'',
        name:'',
        email:''
    })
    const router = useRouter();
    const handleOfferRouting = (key) =>{
        const title = offers[key].title;
        router.push({
            pathname: `/OfferDetail/${title}`,
            query:{
              key
            }
        })
    }
    const handleProfileRouting = (key) =>{
        const uid = students[key].uid;
        router.push({
            pathname: `/Profiles/${uid}`,
            query:{
              key
            }
        })
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
            <Header/>
            <div className='main__body'>
                <section className='section-profile'>
                    <h2 className='section__title'>Profiles</h2> 
                    <ul className='profile-list'>
                        {Object.keys(students).map(key=>{
                            return <Profile key={students[key].uid} studentInfo={students[key]} handleRouting={()=>handleProfileRouting(key)}/>
                        })}
                    </ul>
                </section>
                <section className='section-offer'>
                    <h2 className='section__title'>Offers</h2> 
                    <ul className='offer-list'>
                        {Object.keys(offers).map(key=>{
                            return <Offer key={key} offer={offers[key]} handleRouting={()=>handleOfferRouting(key)} />
                        })}
                    </ul>
                </section>
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
    .profile-list{
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        gap:10px;
    }
    .offer-list{
        display:flex;
        flex-direction:column;
        gap:10px;
    }
    .main__body{
        display:flex;
        flex-direction:row;
        gap:20px;
    }
    section{
        margin-bottom:40px;
    }
    .section__title{
        color: #036EC3;
        margin-bottom:15px;
    }
    .section-profile{
        flex:2;
    }
    .section-offer{
        flex:5;
    }
    `}</style>
    </>
}