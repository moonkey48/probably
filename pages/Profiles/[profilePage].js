import { useRouter } from 'next/router'
import Header from '../../components/header';
import Seo from '../../components/Seo';
import SideBar from '../../components/SideBar';

export default function ProfilePage({students}){
    const router = useRouter();
    const key = router.query.key;
    const studentInfo = students[key];
    return <>
        <Seo title='Profiles'/>
        <div className='container'>
            <SideBar clicked='Students'/>
            <main className='main'>
                <Header/>
                <div>
                    <button className='back-button'>
                        <svg width="7" height="15" viewBox="0 0 7 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.83854 14.9999C5.68912 15.0005 5.54148 14.9651 5.40648 14.8966C5.27147 14.828 5.15253 14.7278 5.0584 14.6035L0.227529 8.17557C0.0804207 7.98387 0 7.74342 0 7.49528C0 7.24713 0.0804207 7.00668 0.227529 6.81498L5.22843 0.38702C5.3982 0.168237 5.64215 0.030652 5.90663 0.00453332C6.1711 -0.0215853 6.43443 0.0659013 6.63868 0.247747C6.84294 0.429592 6.97138 0.690901 6.99577 0.974189C7.02015 1.25748 6.93848 1.53954 6.76871 1.75832L2.2979 7.50063L6.61868 13.2429C6.74098 13.4002 6.81868 13.5917 6.84256 13.7948C6.86644 13.9978 6.83552 14.204 6.75345 14.3888C6.67138 14.5736 6.5416 14.7294 6.37946 14.8377C6.21732 14.946 6.02961 15.0023 5.83854 14.9999Z" fill="#036EC3"/>
                        </svg>
                        <span className='back-button__text'
                        onClick={()=>router.back()}
                        >돌아가기</span>
                    </button>
                </div>
                <div className='profileBox'>
                    <section className='profile-left'>
                        <div className='profile__img'></div>
                        <h3 className='profile__name'>{ studentInfo.name && studentInfo.name }</h3>
                        <h3 className='profile__major'>{studentInfo.major && studentInfo.major}</h3>
                        <div className='profile__about'>{studentInfo.about && studentInfo.about}</div>
                        <ul className='profile__tags'>
                        {
                            studentInfo.tags && Object.keys(studentInfo.tags).map((tag,index)=>{
                                return <li key={index}>#{studentInfo.tags[tag]}</li>
                            })
                        }
                        </ul>
                    </section>
                    <section className='profile-right'>
                        <div className='right-section__item'>
                            <h3 className='part'>가능 분야</h3>
                            <ul className='profile__ability'>
                            {
                                studentInfo.abilities && Object.keys(studentInfo.abilities).map((ability,index)=>{
                                    return <li className='part-desc' key={index}>{studentInfo.abilities[ability]},</li>
                                })
                            }
                            </ul>
                        </div>
                        <div className='right-section__item'>
                            <h3 className='part'>관련 업무 경험</h3>
                            <p className='part-desc'>{studentInfo.experience && studentInfo.experience}</p>
                        </div>
                        <div className='right-section__item'>
                            <h3 className='part'>개인 페이지</h3>
                            <p className='part-desc'>{studentInfo.homepage && studentInfo.homepage}</p>
                        </div>
                        <div className='right-section__item'>
                            <h3 className='part'>이메일</h3>
                            <p className='part-desc'>{studentInfo.email && studentInfo.email}</p>
                        </div>
                    </section>
                </div>
            </main>
            <style jsx>{`
                .profileBox{
                    width:100%;
                    display:flex;
                    flex-direction:row;
                    gap:10px;
                }
                .profile__img{
                    width:170px;
                    height:170px;
                    background:grey;
                    border-radius:10px;
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
            `}</style>
        </div>
    </>
}