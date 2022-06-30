import { useState } from 'react';
import Header from '../components/header';
import SideBar from '../components/SideBar';
import Seo from '../components/Seo';
import Offer from '../components/Offer';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Offers({offers,userId,fireBaseApp}){
    const [tags, setTags] = useState([]);
    const deleteTag = (tagIndex) => {
        const updated = [...tags.slice(0,tagIndex), ...tags.slice(tagIndex+1)];
        setTags(updated);
    }
    const router = useRouter();
    const handleRouting = (key) =>{
        const title = offers[key].title;
        router.push({
            pathname: `/OfferDetail/${title}`,
            query:{
              key
            }
        })
    }
    return<>
    <Seo title='Home'/>
    <div className='container'>
        <SideBar clicked='Offers'/>
        <main className='main'>
            <Header setTags={setTags} tags={tags} deleteTag={deleteTag} userId={userId} fireBaseApp={fireBaseApp} />
            <div className='button-box'>
                <Link href='/OfferDetail/add-offer'>
                    <a>
                        <button className='button__add'>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.922 0.00466665L6 0C6.16329 2.15404e-05 6.32089 0.0599708 6.44292 0.168477C6.56494 0.276983 6.6429 0.426499 6.662 0.588667L6.66667 0.666667V5.33333H11.3333C11.4966 5.33336 11.6542 5.3933 11.7762 5.50181C11.8983 5.61032 11.9762 5.75983 11.9953 5.922L12 6C12 6.16329 11.94 6.32089 11.8315 6.44292C11.723 6.56494 11.5735 6.6429 11.4113 6.662L11.3333 6.66667H6.66667V11.3333C6.66665 11.4966 6.6067 11.6542 6.49819 11.7762C6.38968 11.8983 6.24017 11.9762 6.078 11.9953L6 12C5.83671 12 5.67911 11.94 5.55709 11.8315C5.43506 11.723 5.3571 11.5735 5.338 11.4113L5.33333 11.3333V6.66667H0.666667C0.503378 6.66665 0.345775 6.6067 0.223752 6.49819C0.101729 6.38968 0.0237714 6.24017 0.00466665 6.078L0 6C2.15404e-05 5.83671 0.0599708 5.67911 0.168477 5.55709C0.276983 5.43506 0.426499 5.3571 0.588667 5.338L0.666667 5.33333H5.33333V0.666667C5.33336 0.503378 5.3933 0.345775 5.50181 0.223752C5.61032 0.101729 5.75983 0.0237714 5.922 0.00466665L6 0L5.922 0.00466665Z" fill="white"/>
                            </svg>
                            <span className='button_text'>작성하기</span>
                        </button>
                    </a>
                </Link>
            </div>
            <div className='offer-section'>
                <ul className='offer-list'>
                    {
                    tags.length === 0?
                    Object.keys(offers).reverse().map(key=>{
                        return <Offer key={key} offer={offers[key]} handleRouting={()=>handleRouting(key)}/>
                    })
                    :
                    Object.keys(offers).filter(key=>{
                        let result = false;
                        for(let i=0;i<tags.length;i++){
                            if(offers[key].request == tags[i]){
                                result = true;
                            }
                        }
                        return result;
                    }).reverse().map(key=>{
                        return<Offer key={key} 
                        offer={offers[key]} 
                        handleRouting={()=>handleRouting(key)}/>
                    })
                    }
                </ul>
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
    .offer-list{
        display: flex;
        flex-direction: column;
        flex-wrap:wrap;
        gap:10px;
    }
    .button-box{
        width:100%;
        display:flex;
        flex-direction:column;
        align-items:flex-end;
    }
    .button__add{
        width:100px;
        height:30px;
        font-weight:500;
        display: flex;
        flex-direction:row;
        align-items: center;
        justify-content:center;
        text-align: center;
        border:none;
        border-radius:5px;
        cursor:pointer;
        transition:opacity 0.2s;
        color: #F9F9FB;
        background-color:#036EC3;
        box-shadow: 0px 2px 2px #F9F9FB;
        margin-bottom:15px;
    }
    .button__add:hover{
        opacity:0.7;
    }
    .button_text{
        padding:3px 0 0 5px;
    }
    @media (max-width: 800px){
        .container{
            flex-direction:column;
            margin-top: 0;
            padding:0;
        }
        .offer-section{
            padding: 0 20px;
        }
        .button-box{
            padding: 0 20px;
        }
    }
    `}</style>
    </>
}