import { useRouter } from 'next/router';
import { useRef, useEffect } from 'react';
import Header from '../../components/header';
import Seo from '../../components/Seo';
import SideBar from '../../components/SideBar';

export default function Offers({database,addOrCreateOffer,userId}){
    const router = useRouter();

    const selectRef = useRef()
    const titleRef = useRef();
    const bodyRef = useRef();
    const dueRef = useRef();
    const conditionRef = useRef();
    const preferRef = useRef();
    const contactRef = useRef();
    const dateRef = useRef();

    const switchOption = () =>{
        switch(selectRef.current.value){
            case 'find':
                return '구인';
            case 'outsourcing':
                return '외주';
            case 'volunteer':
                return '봉사';
            case 'others':
                return '기타';
            default:
                console.log('wrong input on select');
                return '구인';
        }
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        const request = switchOption();
        const newOffer = {
                id: Date.now(),
                request: request,
                title: titleRef.current.value || '-',
                body: bodyRef.current.value || '-',
                due: dueRef.current.value || '-',
                deadline: false,
                requirement: conditionRef.current.value || '-',
                preferential: preferRef.current.value || '-',
                contact: contactRef.current.value || '-',
                client:userId,
        }
        
        database.setOffer(newOffer.id,newOffer);
        addOrCreateOffer(newOffer.id, newOffer);
        router.back();
    }
    const handleDate = () =>{
        console.log(dateRef.current.value);
    }

    return<>
    <Seo title='Home'/>
    <div className='container'>
        <SideBar clicked='Offers'/>
        <main className='main'>
            <Header/>
            <div className='buttonBox'>
                <button className='back-button'>
                    <svg width="7" height="15" viewBox="0 0 7 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.83854 14.9999C5.68912 15.0005 5.54148 14.9651 5.40648 14.8966C5.27147 14.828 5.15253 14.7278 5.0584 14.6035L0.227529 8.17557C0.0804207 7.98387 0 7.74342 0 7.49528C0 7.24713 0.0804207 7.00668 0.227529 6.81498L5.22843 0.38702C5.3982 0.168237 5.64215 0.030652 5.90663 0.00453332C6.1711 -0.0215853 6.43443 0.0659013 6.63868 0.247747C6.84294 0.429592 6.97138 0.690901 6.99577 0.974189C7.02015 1.25748 6.93848 1.53954 6.76871 1.75832L2.2979 7.50063L6.61868 13.2429C6.74098 13.4002 6.81868 13.5917 6.84256 13.7948C6.86644 13.9978 6.83552 14.204 6.75345 14.3888C6.67138 14.5736 6.5416 14.7294 6.37946 14.8377C6.21732 14.946 6.02961 15.0023 5.83854 14.9999Z" fill="#036EC3"/>
                    </svg>
                    <span className='back-button__text'
                    onClick={()=>router.back()}
                    >돌아가기</span>
                </button>
            </div>
            <section className='detail-section'>
                <ul className='detail__list'>
                    <li className='detail__item'>
                        <h3 className='part'>분야</h3>
                        <select ref={selectRef}>
                            <option value="find">구인</option>
                            <option value="outsourcing">외주</option>
                            <option value="volunteer">봉사</option>
                            <option value="others">기타</option>
                        </select>

                    </li>
                    <li className='detail__item'>
                        <h3 className='part'>제목</h3>
                        <input ref={titleRef}  placeholder='제목'/>
                    </li>
                    <li className='detail__item'>
                        <h3 className='part'>내용</h3>
                        <textarea className='detail__textarea' wrap='hard' rows="10" cols="40" ref={bodyRef} placeholder='내용'/>
                    </li>
                    <li className='detail__item'>
                        <h3 className='part'>기한</h3>
                        <input ref={dueRef} type='date' style={{width:'200px'}} />
                    </li>
                    <li className='detail__item'>
                        <h3 className='part'>조건</h3>
                        <input ref={conditionRef} placeholder='조건'/>
                    </li>
                    <li className='detail__item'>
                        <h3 className='part'>우대사항</h3>
                        <input ref={preferRef} placeholder='우대사항'/>
                    </li>
                    <li className='detail__item'>
                        <h3 className='part'>연락처</h3>
                        <input ref={contactRef} placeholder='연락처'/>
                    </li>
                </ul>
                <div className='bottomBox'>
                    <button className='button-cancel' onClick={()=>router.back()}>작성 취소</button>
                    <button className='button-register' onClick={(e)=>handleSubmit(e)} >등록하기</button>
                </div>
            </section>
        </main>
    </div>
    <style jsx>{`
    .detail__textarea{
        border: none;
        padding:5px 7px 5px 0;
        resize: none;
        width:400px;
        font-family:'noto sans KR';
        font-size: 16px;
        line-height: 27px;
        color: #686868;
        width:100%;
    }
    .detail__textarea:focus{
        outline:none;
    }
    select{
        width:100px;
        height:30px;
        border: 1px solid #EBEBED;
        box-shadow: 0px 2px 2px #F9F9FB;
        border-radius: 5px;
        color: #686868;
        cursor:pointer;
        padding: 0 5px;
    }
    select:focus{
        outline:none;
    }
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
    .detail-section{
        background: #FFFFFF;
        border: 1px solid #EBEBED;
        box-shadow: 0px 4px 4px #F5F5F5;
        border-radius: 10px;
        margin-bottom:80px;
    }
    .detail__list{
        display:flex;
        flex-direction: column;
    }
    .detail__item{
        flex-basis:80px;
        display:flex;
        flex-direction:row;
        border-bottom:1px solid #EBEBED;
        align-items:center;
    }
    .part{
        font-weight: 500;
        font-size: 16px;
        color: #036EC3;
        flex-basis:100px;
        flex-grow:0;
        flex-shrink:0;
        text-align:center;
    }
    .buttonBox{
        display:flex;
        flex-direction:row;
        gap:10px;
    }
    .back-button{
        border:none;
        background:none;
        display:flex;
        flex-direction:row;
        align-items:center;
        margin-bottom:10px;
        cursor:pointer;
        transition:opacity 0.2s;
    }
    .back-button:hover{
        opacity:0.6;
    }
    .back-button__text{
        font-weight: 700;
        font-size: 16px;
        color: #036EC3;
        padding-left:5px;
        padding-top:3px;
    }
    input{
        font-size: 16px;
        line-height: 27px;
        color: #686868;
        width:100%;
        border:none;
        background:none;
    }
    input::placeholder{
        font-size: 16px;
        color: #BABABA;
    }
    input:focus{
        outline:none;
    }
    .button-cancel{
        font-weight: 500;
        font-size: 16px;
        width: 135px;
        height: 44px;
        background: #DC6B03;
        box-shadow: 0px 2px 2px #F9F9FB;
        border-radius: 5px;
        border:none;
        color:white;
        cursor:pointer;
    }
    .bottomBox{
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:center;
        gap:10px;
        margin:30px 0;
    }
    .button-register{
        font-weight: 500;
        font-size: 16px;
        width: 135px;
        height: 44px;
        background: #036EC3;
        box-shadow: 0px 2px 2px #036EC3;
        border-radius: 5px;
        border:none;
        color:white;
        cursor:pointer;
    }
    @media (max-width: 800px){
        .container{
            flex-direction:column;
            margin-top: 0;
            padding:0;
        }
        .detail-section{
            flex-direction:column;
            margin: 0 20px;
        }
        .buttonBox{
            padding: 0 20px;
        }
    }
    `}</style>
    </>
}