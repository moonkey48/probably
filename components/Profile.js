import { useEffect } from 'react';

export default function Profile({studentInfo,handleRouting}){
    return <li className='profile__box'>
        <div className='profile__info'>
            <div className='profile__img'></div>
            <h3 className='profile__name'>{studentInfo.name}</h3>
            <h3 className='profile__major'>{studentInfo.major}</h3>
            <ul className='profile__tagList'>
                { studentInfo.tags && Object.keys(studentInfo.tags).map((tag,index)=><li key={index} className='profile__tagItem'>#{tag}</li>)}
            </ul>
        </div>
        <div className='button__box'>
            <button className='button__contact' onClick={()=>handleRouting(studentInfo.uid)}>프로필보기</button>
        </div>
        <style jsx>{`
        .profile__box{
            flex-basis:220px;
            flex-grow:1;
            flex-shrink:1;
            height:300px;
            background: #FFFFFF;
            border: 1px solid #EBEBED;
            box-shadow: 0px 4px 4px #F5F5F5;
            border-radius: 10px;
            display:flex;
            flex-direction:column;
            padding:14px;
        }
        .profile__info{
            display:flex;
            flex-direction: column;
            justify-content:center;
            align-items: center;
            flex-grow:1;
            color:#686868;
        }
        .profile__img{
            width:100px;
            height:100px;
            background-color: grey;
            border-radius:50%;
        }
        .profile__name{
            margin-top:10px;
        }
        .profile__major{
            margin:2px 0 20px;
        }
        .profile__tagList{
            display:flex;
            flex-direction: row;
            flex-wrap:wrap;
            font-size:12px;
            justify-content: center;
        }
        .profile__tagItem{
            list-style:none;
            margin-right:5px;
            margin-bottom:3px;
        }
        .button__box{
            display:flex;
            flex-direction: row;
            justify-content: center;
            gap: 5px;
            padding:10px 0;
        }
        button{
            width:100px;
            height:30px;
            font-weight:500;
            display: flex;
            flex-direction:column;
            align-items: center;
            justify-content:center;
            text-align: center;
            border:none;
            border-radius:5px;
            cursor:pointer;
            transition:opacity 0.2s;
        }
        button:hover{
            opacity:0.8;
        }
        .button__profile{
            color: #036EC3;
            background-color:#F9F9FB;
        }
        .button__contact{
            color: #F9F9FB;
            background-color:#036EC3;
        }
        `}</style>
    </li>
}