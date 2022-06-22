import { useState } from 'react';
import Header from '../components/header';
import SideBar from '../components/SideBar';
import Seo from '../components/Seo';
import Profile from '../components/Profile';
import { useRouter } from 'next/router';

export default function Students({students,userId}){
    const router = useRouter();
    const [tags, setTags] = useState([]);
    const deleteTag = (tagIndex) => {
        const updated = [...tags.slice(0,tagIndex), ...tags.slice(tagIndex+1)];
        setTags(updated);
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
    return<>
    <Seo title='Home'/>
    <div className='container'>
        <SideBar clicked='Students'/>
        <main className='main'>
            <Header setTags={setTags} tags={tags} deleteTag={deleteTag}userId={userId}/>
            <div>
                <ul className='profile-list'>
                    {Object.keys(students).map(key=>{
                        return <Profile  
                        key={students[key].uid} 
                        studentInfo={students[key]} 
                        handleRouting={()=>handleProfileRouting(key)}
                        />
                    })}
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
    .profile-list{
        display: flex;
        flex-direction: row;
        flex-wrap:wrap;
        gap:10px;
    }
    `}</style>
    </>
}