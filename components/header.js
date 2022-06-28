import { useRouter } from 'next/router';
import { useRef } from 'react';

export default function Header({setTags, tags, deleteTag,userId,fireBaseApp}){
    const router = useRouter();
    const inputRef = useRef();
    const formRef = useRef();
    const handleSearch = (e) =>{
        e.preventDefault();
        const newTag = [...tags, inputRef.current.value];
        setTags(newTag);
        formRef.current.reset();
    }
    const handleMypageRouting = () =>{
        router.push({
            pathname:`/MyPage/view`,
            query:{
                userId
            }
        });
    }
    const handleLogout = (e) =>{
        e.preventDefault();
        fireBaseApp.logout();
        router.push('/');
    }
    return <header>
        {tags?
        <div className='search__box'>
            <form ref={formRef} onSubmit={(e)=>handleSearch(e)}>
                <input ref={inputRef} type='text' placeholder='#태그 검색' ></input>
            </form>
            <ul>{
                tags.length>0?
                tags.map((tag,index)=>{
                    return <li key={index}>#{tag}<span className='deleteTag' onClick={()=>deleteTag(index)}>X</span></li>
                })
                :''
            }</ul>
        </div>
        :
        <div style={{height:'36px'}}></div>
        }
        <div className='profileBox'>
            <button onClick={(e)=>handleLogout(e)} className='logout'>logout</button>
            <svg onClick={()=>handleMypageRouting()} width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.73438 11C12.4958 11 14.7344 8.76142 14.7344 6C14.7344 3.23858 12.4958 1 9.73438 1C6.97295 1 4.73438 3.23858 4.73438 6C4.73438 8.76142 6.97295 11 9.73438 11Z" stroke="#686868" strokeWidth="2"/>
                <path d="M14.7344 13H15.0864C15.8175 13.0002 16.5234 13.2674 17.0714 13.7513C17.6194 14.2352 17.9718 14.9026 18.0624 15.628L18.4534 18.752C18.4886 19.0334 18.4635 19.3191 18.3798 19.5901C18.2961 19.8611 18.1558 20.1112 17.9681 20.3238C17.7803 20.5364 17.5495 20.7066 17.291 20.8232C17.0324 20.9398 16.7521 21.0001 16.4684 21H3.00044C2.71682 21.0001 2.43643 20.9398 2.17788 20.8232C1.91933 20.7066 1.68854 20.5364 1.50081 20.3238C1.31309 20.1112 1.17272 19.8611 1.08904 19.5901C1.00536 19.3191 0.980267 19.0334 1.01544 18.752L1.40544 15.628C1.49613 14.9022 1.84885 14.2346 2.39727 13.7506C2.94568 13.2667 3.65201 12.9997 4.38344 13H4.73444" stroke="#686868" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
        <style jsx>{`
            header{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items:center;
                width:100%;
                padding-bottom:20px;
                border-bottom: 1px solid #EBEBED;
                margin-bottom: 15px;
            }
            .profileBox{
                display:flex;
                flex-direction:row;
                align-items:center;
                gap:10px;
            }
            .logout{
                border:none;
                background:none;
                color:#BABABA;
                cursor:pointer;
                transition:color 0.2s;
            }
            .logout:hover{
                color:#686868;
            }
            .search__box{
                display:flex;
                flex-direction:row;
                align-items:center;
                height:36px;
            }
            input{
                width: 200px;
                height:33px;
                background: #FFFFFF;
                border: 1px solid #EBEBED;
                box-shadow: 0px 4px 4px #F5F5F5;
                border-radius: 10px;            
                padding-left: 10px;
                font-family: 'Noto Sans KR';
                color: #686868;
            }
            input:focus{
                outline:none;
            }
            svg{
                cursor: pointer;
                transition: opacity 0.2s;
            }
            svg:hover{
                opacity:0.6;
            }
            ul{
                display:flex;
                flex-direction:row;
            }
            li{
                list-style:none;
                padding-left: 20px;
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
            @media (max-width:800px){
                header{
                    padding: 0 20px 10px;
                }
            }
        `}</style>
    </header>
}