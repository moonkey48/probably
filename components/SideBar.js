import { useRouter } from 'next/router'

export default function SideBar({clicked}){
    const router = useRouter();
    return <section>
            <h3 className='logo'>
            <svg width="110" height="23" viewBox="0 0 150 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.189941 22H5.10994V15.01H9.54994C14.7399 15.01 18.1299 12.19 18.1299 7.81001C18.1599 3.40001 14.7999 0.640007 9.57994 0.640007H0.189941V22ZM5.10994 11.23V4.42001H9.15994C11.5899 4.42001 13.1499 5.74001 13.1499 7.81001C13.1499 9.88001 11.6199 11.23 9.15994 11.23H5.10994Z" fill="#2A5EAD"/>
                <path d="M20.2365 22H25.2165V14.5H27.6165L33.7365 22H39.4365L32.5965 14.14L32.8365 14.11C36.2565 13.69 38.7465 11.17 38.7465 7.66001C38.7465 3.43001 35.4465 0.640007 30.4365 0.640007H20.2365V22ZM25.2165 10.99V4.42001H29.7765C32.1465 4.42001 33.7965 5.65001 33.7965 7.69001C33.7965 9.73001 32.1765 10.99 29.7765 10.99H25.2165Z" fill="#2A5EAD"/>
                <path d="M52.0206 22.57C59.0106 22.57 63.8406 18.1 63.8406 11.32C63.8406 4.57001 59.0106 0.0700073 52.0206 0.0700073C45.0306 0.0700073 40.2006 4.57001 40.2006 11.32C40.2006 18.1 45.0306 22.57 52.0206 22.57ZM52.0206 18.43C48.0006 18.43 45.1806 15.52 45.1806 11.32C45.1806 7.12001 48.0006 4.24001 52.0206 4.24001C56.0406 4.24001 58.8606 7.12001 58.8606 11.32C58.8606 15.52 56.0406 18.43 52.0206 18.43Z" fill="#2A5EAD"/>
                <path d="M68.949 22H79.629C84.339 22 87.429 19.72 87.429 16.15C87.429 13.72 85.869 11.8 83.739 11.2V10.9C85.479 10.33 86.829 8.62001 86.829 6.49001C86.829 3.01001 83.889 0.640007 79.269 0.640007H68.949V22ZM73.929 9.40001V4.42001H78.399C80.349 4.42001 81.729 5.44001 81.729 6.91001C81.729 8.38001 80.349 9.40001 78.399 9.40001H73.929ZM73.929 18.22V12.79H78.609C80.769 12.79 82.329 13.93 82.329 15.49C82.329 17.08 80.769 18.22 78.609 18.22H73.929Z" fill="#2A5EAD"/>
                <path d="M89.6701 22H94.6501V0.640007H89.6701V22Z" fill="#2A5EAD"/>
                <path d="M97.7865 22H108.467C113.177 22 116.267 19.72 116.267 16.15C116.267 13.72 114.707 11.8 112.576 11.2V10.9C114.317 10.33 115.667 8.62001 115.667 6.49001C115.667 3.01001 112.727 0.640007 108.107 0.640007H97.7865V22ZM102.767 9.40001V4.42001H107.237C109.187 4.42001 110.567 5.44001 110.567 6.91001C110.567 8.38001 109.187 9.40001 107.237 9.40001H102.767ZM102.767 18.22V12.79H107.447C109.607 12.79 111.167 13.93 111.167 15.49C111.167 17.08 109.607 18.22 107.447 18.22H102.767Z" fill="#2A5EAD"/>
                <path d="M118.508 22H133.238V17.74H123.488V0.640007H118.508V22Z" fill="#2A5EAD"/>
                <path d="M136.743 22H141.723V14.56L149.163 0.640007H143.913L139.383 10.12H139.083L134.373 0.640007H129.183L136.743 14.56V22Z" fill="#2A5EAD"/>
            </svg>
            </h3>
            <h3 onClick={()=>router.push('/main')} className={clicked === 'Home'?'active':'unActive'}>Home</h3>
            <h3 onClick={()=>router.push('/Students')} className={clicked === 'Students'?'active':'unActive'}>Students</h3>
            <h3 onClick={()=>router.push('/Offers')} className={clicked === 'Offers'?'active':'unActive'}>Offers</h3>
        <style jsx>{`
        section{
            width:190px;
            height: 90vh;
            background-color: #fff;
            border-radius: 10px;
            padding:0 20px 20px 20px;
            border: 1px solid #EBEBED;
            box-shadow: 0px 4px 4px #F5F5F5;
        }
        .logo{
            border-bottom: 1px solid #EBEBED;
            padding: 20px 0 5px;
        }
        h3{
            padding: 10px 0;
        }
        .active{
            color:#036EC3;
        }
        .unActive{
            color:#BABABA;
            cursor: pointer;
            transition: color 0.2s;
        }
        .unActive:hover{
            color:#036EC3;
        }
        @media (max-width: 800px){
            section{
                width:100%;
                height: 50px;
                background-color: #fff;
                border-radius: 0 0 10px 10px;
                border: 1px solid #EBEBED;
                box-shadow: 0px 4px 4px #F5F5F5;
                display:flex;
                flex-direction:row;
                align-items:center;
                justify-content:space-between;
                padding-top:20px;
            }
            .logo{
                border:none;
                padding:0;
                padding-top:7px;
            }
            svg{
                width:80px;
            }
            h3{
                font-size:14px;
            }
        }
        `}</style>
    </section>
}