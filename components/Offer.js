import { useState } from 'react';

export default function Offer({offer,handleRouting}){
    const [open, setOpen] = useState(false);
    return<li className={`${'offer__box'} ${open?'opened':''}`} onClick={()=>setOpen(!open)}>
        <section className='main'>
            <div className='request__box'>
                {   
                    offer.deadline?
                    <h3 className='request' style={{color:'#DC6B03'}}>완료</h3>
                    :
                    <h3 className='request'>{offer.request}</h3>
                }
            </div>
            <div className='title__box'>
                <h3 className='title'>{offer.title}</h3>
                {open?<div className='detail__box'>
                    <p className='detail'>{offer.body}</p>
                    <button className='button__contact' onClick={()=>handleRouting(offer.uid)}>문의하기</button>
                </div>:<></>}
            </div>
            <div className='due__box'>
                <h3 className='due'>- {offer.due}</h3>
            </div>
        </section>
        <style jsx>{`
            .offer__box{
                display:flex;
                flex-direction: column;
                list-style:none;
                width:100%;
                height:75px;
                transition: 0.3s;
                cursor:pointer;
            }
            .offer__box:hover{
                opacity: 0.6;
            }
            .opened{
                height:200px;
            }
            .opened:hover{
                opacity:1;
            }
            .main{
                width:100%;
                background: #FFFFFF;
                border: 1px solid #EBEBED;
                box-shadow: 0px 4px 4px #F5F5F5;
                border-radius: 10px;
                display:flex;
                flex-direction:row;
                align-items:center;
                transition: height 0.3s;
                cursor:pointer;
                flex:1;
            }
            .request__box{
                flex-basis: 100px;
                border-right: 1px solid #EBEBED;
                text-align:center;
                height:90%;
                flex:1;
                display:flex;
                align-items:center;
                justify-content:center;
                padding:0 10px;
            }
            .request{
                color: #036EC3;
                font-size: 16px;
                font-weight:500;
            }
            .title__box{
                padding-left: 20px;
                flex:10;
            }
            .title{
                color: #686868;
                font-size: 16px;
                font-weight:500;
            }
            .due__box{
                flex:1;
                height:90%;
                border-left: 1px solid #EBEBED;
                display:flex;
                align-items:center;
                justify-content:center;
                padding:0 10px;
            }
            .due{
                color: #686868;
                font-size: 14px;
                font-weight:500;
                text-align: right;
            }
            .detail__box{
                padding-top:10px;
            }
            .detail{
                font-weight: 500;
                font-size: 14px;
                line-height: 23px;
                color: #686868;
                padding:20px 0;
            }
            .button__contact{
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
                color: #F9F9FB;
                background-color:#036EC3;
            }
        `}</style>
    </li>
}