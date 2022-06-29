import { useRouter } from 'next/router'

export default function SideBar({clicked}){
    const router = useRouter();
    return <section>
            <h3 className='logo'>
            <svg width="134" height="23" viewBox="0 0 164 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.189941 22H5.10994V15.01H9.54994C14.7399 15.01 18.1299 12.19 18.1299 7.81001C18.1599 3.40001 14.7999 0.640007 9.57994 0.640007H0.189941V22ZM5.10994 11.23V4.42001H9.15994C11.5899 4.42001 13.1499 5.74001 13.1499 7.81001C13.1499 9.88001 11.6199 11.23 9.15994 11.23H5.10994Z" fill="#2A5EAD"/>
                <path d="M19.6365 22H24.6165V14.5H27.0165L33.1365 22H38.8365L31.9965 14.14L32.2365 14.11C35.6565 13.69 38.1465 11.17 38.1465 7.66001C38.1465 3.43001 34.8465 0.640007 29.8365 0.640007H19.6365V22ZM24.6165 10.99V4.42001H29.1765C31.5465 4.42001 33.1965 5.65001 33.1965 7.69001C33.1965 9.73001 31.5765 10.99 29.1765 10.99H24.6165Z" fill="#2A5EAD"/>
                <path d="M50.8206 22.57C57.8106 22.57 62.6406 18.1 62.6406 11.32C62.6406 4.57001 57.8106 0.0700073 50.8206 0.0700073C43.8306 0.0700073 39.0006 4.57001 39.0006 11.32C39.0006 18.1 43.8306 22.57 50.8206 22.57ZM50.8206 18.43C46.8006 18.43 43.9806 15.52 43.9806 11.32C43.9806 7.12001 46.8006 4.24001 50.8206 4.24001C54.8406 4.24001 57.6606 7.12001 57.6606 11.32C57.6606 15.52 54.8406 18.43 50.8206 18.43Z" fill="#2A5EAD"/>
                <path d="M70.3318 22H81.0118C85.7218 22 88.8118 19.72 88.8118 16.15C88.8118 13.72 87.2518 11.8 85.1218 11.2V10.9C86.8618 10.33 88.2118 8.62001 88.2118 6.49001C88.2118 3.01001 85.2718 0.640007 80.6518 0.640007H70.3318V22ZM75.3118 9.40001V4.42001H79.7818C81.7318 4.42001 83.1118 5.44001 83.1118 6.91001C83.1118 8.38001 81.7318 9.40001 79.7818 9.40001H75.3118ZM75.3118 18.22V12.79H79.9918C82.1518 12.79 83.7118 13.93 83.7118 15.49C83.7118 17.08 82.1518 18.22 79.9918 18.22H75.3118Z" fill="#2A5EAD"/>
                <path d="M88.7157 22H93.7557L95.0757 18.19H103.956L105.276 22H110.316L103.146 0.640007H95.9457L88.7157 22ZM96.1557 14.53L99.3957 4.90001H99.6957L102.876 14.53H96.1557Z" fill="#2A5EAD"/>
                <path d="M111.512 22H122.192C126.902 22 129.992 19.72 129.992 16.15C129.992 13.72 128.432 11.8 126.301 11.2V10.9C128.041 10.33 129.392 8.62001 129.392 6.49001C129.392 3.01001 126.452 0.640007 121.832 0.640007H111.512V22ZM116.492 9.40001V4.42001H120.962C122.911 4.42001 124.292 5.44001 124.292 6.91001C124.292 8.38001 122.911 9.40001 120.962 9.40001H116.492ZM116.492 18.22V12.79H121.172C123.331 12.79 124.892 13.93 124.892 15.49C124.892 17.08 123.331 18.22 121.172 18.22H116.492Z" fill="#2A5EAD"/>
                <path d="M131.633 22H146.363V17.74H136.613V0.640007H131.633V22Z" fill="#2A5EAD"/>
                <path d="M150.868 22H155.848V14.56L163.288 0.640007H158.038L153.508 10.12H153.208L148.498 0.640007H143.308L150.868 14.56V22Z" fill="#2A5EAD"/>
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