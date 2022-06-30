import { useRouter } from 'next/router'
import Header from '../../components/header';
import Seo from '../../components/Seo';
import SideBar from '../../components/SideBar';

export default function MyPageView({students,offers,userId,database}){
    const router = useRouter();
    const key = router.query.userId;
    const myInfo = students[key];
    const handleDeleteOffer = (key) =>{
        database.deleteOffer(offers[key].id);
    }
    const handleCompleteOffer = (key) =>{
        if(offers[key].deadline){
            database.setOffer(key,{
                ...offers[key],
                deadline: false
            })
        }else{
            database.setOffer(key,{
                ...offers[key],
                deadline: true
            })
        }
    }
    return <>
        <Seo title='Profiles'/>
        <div className='container'>
            <SideBar clicked=''/>
            <main className='main'>
                <Header userId={userId}/>
                <div className='navigators'>
                    <button className='back-button'>
                        <svg width="7" height="15" viewBox="0 0 7 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.83854 14.9999C5.68912 15.0005 5.54148 14.9651 5.40648 14.8966C5.27147 14.828 5.15253 14.7278 5.0584 14.6035L0.227529 8.17557C0.0804207 7.98387 0 7.74342 0 7.49528C0 7.24713 0.0804207 7.00668 0.227529 6.81498L5.22843 0.38702C5.3982 0.168237 5.64215 0.030652 5.90663 0.00453332C6.1711 -0.0215853 6.43443 0.0659013 6.63868 0.247747C6.84294 0.429592 6.97138 0.690901 6.99577 0.974189C7.02015 1.25748 6.93848 1.53954 6.76871 1.75832L2.2979 7.50063L6.61868 13.2429C6.74098 13.4002 6.81868 13.5917 6.84256 13.7948C6.86644 13.9978 6.83552 14.204 6.75345 14.3888C6.67138 14.5736 6.5416 14.7294 6.37946 14.8377C6.21732 14.946 6.02961 15.0023 5.83854 14.9999Z" fill="#036EC3"/>
                        </svg>
                        <span className='back-button__text'
                        onClick={()=>router.back()}
                        >돌아가기</span>
                    </button>
                    <button onClick={()=>router.push('/MyPage/edit')} className='editButton'>
                        수정하기</button>
                </div>
                <div className='profileBox'>
                    <section className='profile-left'>
                        <img className='profile__img' src={myInfo?.profileImg && myInfo.profileImg}></img>
                        <h3 className='profile__name'>{ myInfo?.name && myInfo.name }</h3>
                        <h3 className='profile__major'>{myInfo?.major && myInfo.major}</h3>
                        <div className='profile__about'>{myInfo?.about && myInfo.about}</div>
                        <ul className='profile__tags'>
                        {
                            myInfo?.tags && Object.keys(myInfo.tags).map((tag,index)=>{
                                return <li key={index}>#{myInfo.tags[tag]}</li>
                            })
                        }
                        </ul>
                    </section>
                    <section className='profile-right'>
                        <div className='right-section__item'>
                            <h3 className='part'>관련 업무 경험</h3>
                            <p className='part-desc'>{myInfo?.experience && myInfo.experience}</p>
                        </div>
                        <div className='right-section__item'>
                            <h3 className='part'>개인 페이지</h3>
                            <p className='part-desc'>{myInfo?.homepage && myInfo.homepage}</p>
                        </div>
                        <div className='right-section__item'>
                            <h3 className='part'>이메일</h3>
                            <p className='part-desc'>{myInfo?.email && myInfo.email}</p>
                        </div>
                        <div>
                            <h3 style={{color:'#036EC3', margin:'20px 0 10px'}}>Offer List</h3>
                            <ul className='offer__list'>
                            {
                                Object.keys(offers).filter(key=>{
                                    if(offers[key].client == userId){
                                        return true;
                                    }else{
                                        return false;
                                    }
                                }).reverse()
                                .map(key=>{
                                    return <li className='offer__item' key={key}>
                                        {
                                            offers[key].deadline?
                                            <div className='offer__deadline' style={{color:'#2196F3'}}>완료</div>
                                            :
                                            <div className='offer__deadline' style={{color:'#DC6B03'}}>미완</div>
                                        }
                                        <div className='offer__title'>{offers[key].title}</div>
                                        <div className='offer__due'>기한: {offers[key].due}</div>
                                        <button className='offer__button'
                                        onClick={()=>handleCompleteOffer(key)}
                                        >
                                        {
                                         offers[key].deadline?
                                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.25 0C3.85761 0 2.52226 0.553123 1.53769 1.53769C0.553123 2.52226 0 3.85761 0 5.25V15.75C0 17.1424 0.553123 18.4777 1.53769 19.4623C2.52226 20.4469 3.85761 21 5.25 21H15.75C17.1424 21 18.4777 20.4469 19.4623 19.4623C20.4469 18.4777 21 17.1424 21 15.75V5.25C21 3.85761 20.4469 2.52226 19.4623 1.53769C18.4777 0.553123 17.1424 0 15.75 0H5.25ZM14.4165 9.1182C14.5108 9.01754 14.5844 8.89929 14.633 8.7702C14.6816 8.64111 14.7043 8.50371 14.6998 8.36585C14.6954 8.22798 14.6638 8.09235 14.6069 7.96669C14.55 7.84103 14.4689 7.72782 14.3682 7.6335C14.2675 7.53918 14.1493 7.46562 14.0202 7.417C13.8911 7.36839 13.7537 7.34567 13.6158 7.35016C13.478 7.35464 13.3423 7.38624 13.2167 7.44314C13.091 7.50005 12.9778 7.58114 12.8835 7.6818L9.64635 11.1363L8.0472 9.71565C7.83768 9.54147 7.56866 9.45556 7.29697 9.47606C7.02528 9.49656 6.7722 9.62186 6.59119 9.8255C6.41018 10.0291 6.31541 10.2952 6.3269 10.5674C6.3384 10.8396 6.45526 11.0967 6.6528 11.2843L9.0153 13.3843C9.21972 13.5659 9.48691 13.6606 9.76006 13.6483C10.0332 13.6359 10.2908 13.5175 10.4779 13.3182L14.4154 9.1182H14.4165Z" fill="#2196F3"/>
                                            </svg>
                                         : 
                                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.25 0C3.85761 0 2.52226 0.553123 1.53769 1.53769C0.553123 2.52226 0 3.85761 0 5.25V15.75C0 17.1424 0.553123 18.4777 1.53769 19.4623C2.52226 20.4469 3.85761 21 5.25 21H15.75C17.1424 21 18.4777 20.4469 19.4623 19.4623C20.4469 18.4777 21 17.1424 21 15.75V5.25C21 3.85761 20.4469 2.52226 19.4623 1.53769C18.4777 0.553123 17.1424 0 15.75 0H5.25ZM14.4165 9.1182C14.5108 9.01754 14.5844 8.89929 14.633 8.7702C14.6816 8.64111 14.7043 8.50371 14.6998 8.36585C14.6954 8.22798 14.6638 8.09235 14.6069 7.96669C14.55 7.84103 14.4689 7.72782 14.3682 7.6335C14.2675 7.53918 14.1493 7.46562 14.0202 7.417C13.8911 7.36839 13.7537 7.34567 13.6158 7.35016C13.478 7.35464 13.3423 7.38624 13.2167 7.44314C13.091 7.50005 12.9778 7.58114 12.8835 7.6818L9.64635 11.1363L8.0472 9.71565C7.83768 9.54147 7.56866 9.45556 7.29697 9.47606C7.02528 9.49656 6.7722 9.62186 6.59119 9.8255C6.41018 10.0291 6.31541 10.2952 6.3269 10.5674C6.3384 10.8396 6.45526 11.0967 6.6528 11.2843L9.0153 13.3843C9.21972 13.5659 9.48691 13.6606 9.76006 13.6483C10.0332 13.6359 10.2908 13.5175 10.4779 13.3182L14.4154 9.1182H14.4165Z" fill="#BABABA"/>
                                            </svg>
                                        }
                                        </button>
                                        <button  className='offer__button'
                                        onClick={()=>handleDeleteOffer(key)}
                                        >
                                            <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20.125 3.96H16.625V1.76C16.625 0.78925 15.8402 0 14.875 0H6.125C5.15977 0 4.375 0.78925 4.375 1.76V3.96H0.875C0.391016 3.96 0 4.35325 0 4.84V5.72C0 5.841 0.0984375 5.94 0.21875 5.94H1.87031L2.5457 20.3225C2.58945 21.2602 3.36055 22 4.29297 22H16.707C17.6422 22 18.4105 21.263 18.4543 20.3225L19.1297 5.94H20.7812C20.9016 5.94 21 5.841 21 5.72V4.84C21 4.35325 20.609 3.96 20.125 3.96ZM14.6562 3.96H6.34375V1.98H14.6562V3.96Z" fill="#EBEBED"/>
                                            </svg>
                                        </button>
                                    </li>
                                })
                            }
                            </ul>
                        </div>
                    </section>
                </div>
            </main>
            <style jsx>{`
                .offer__deadline{
                    font-size:14px;
                    padding-right:10px;
                    border-right: 1px solid #EBEBED;
                }
                .offer__list{
                    display:flex;
                    flex-direction:column;
                }
                .offer__item{
                    display:flex;
                    flex-direction:row;
                    border-bottom:1px solid #EBEBED;
                    padding:10px 0;
                }
                .offer__due{
                    font-size:14px;
                    flex:1 1 30px;
                    text-align:center;
                }
                .offer__title{
                    font-size:14px;
                    font-weight:500;
                    flex:3 1 100px;
                    padding-left:10px;
                }
                .offer__button{
                    flex;1 1 50px;
                    border:none;
                    background:none;
                    cursor: pointer;          
                    color:#686868;          
                    transition:opacity 0.3s;
                    padding-right:10px;
                }
                .offer__button:hover{
                    opacity:0.6;
                }
                .profile__img{
                    width:170px;
                    height:170px;
                    border-radius:50%;
                }
                .profileBox{
                    width:100%;
                    display:flex;
                    flex-direction:row;
                    gap:10px;
                }
                .profile__name{
                    padding:10px 0 5px;
                }
                .profile__tags{
                    font-size:12px;
                    color: #036EC3;
                    display:flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    gap:4px;
                }
                .profile__ability{
                    font-size:12px;
                    display:flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    gap:10px;
                }
                .profile__about{
                    font-weight: 500;
                    font-size: 13px;
                    line-height: 16px;
                    color: #686868;
                    padding:20px 0 15px;
                }
                .right-section__item{
                    display:flex;
                    flex-direction:row;
                }
                .part{
                    flex-basis:140px;
                    flex-grow:0;
                    flex-shrink:0;
                    font-weight: 500;
                    font-size:16px;
                    text-align:center;
                    padding-right:20px;
                    color: #036EC3;
                }
                .part-desc{
                    font-size:16px;
                    color: #686868;
                }
                section{
                    border: 1px solid #EBEBED;
                    box-shadow: 0px 4px 4px #F5F5F5;
                    border-radius: 10px;
                    background:white;
                    display:flex;
                    flex-direction:column;
                    padding:25px;
                }
                h3{
                    color: #686868;
                }
                li{
                    list-style:none;
                }
                .profile-left{
                    flex:1;
                    align-items:center;
                    text-align:center;
                }
                .profile-right{
                    flex:3;
                    gap:20px;
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
                .navigators{
                    display:flex;
                    flex-direction:row;
                    align-items:center;
                    justify-content:space-between;
                    padding-bottom:10px;
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
                .editButton{
                    font-weight: 500;
                    font-size: 16px;
                    color: #fff;
                    border:1px solid #036EC3;
                    background-color: #036EC3;
                    width:100px;
                    height:30px;
                    padding:5px;
                    border-radius:5px;
                    cursor:pointer;
                    transition: opacity 0.2s;
                }
                .editButton:hover{
                    opacity:0.7;
                }
                .back-button__text{
                    font-weight: 700;
                    font-size: 16px;
                    color: #036EC3;
                    padding-left:5px;
                    padding-top:3px;
                }
                @media (max-width: 800px){
                    .container{
                        flex-direction:column;
                        margin-top: 0;
                        padding:0;
                    }
                    .profileBox{
                        flex-direction:column;
                        padding: 0 20px;
                    }
                    .navigators{
                        padding: 0 20px;
                        margin-bottom:10px;
                        display:flex;
                        flex-direction:row;
                        align-items:center;
                    }
                    .editButton{
                        font-size:14px;
                    }
                }
            `}</style>
        </div>
    </>
}