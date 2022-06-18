export default function SideBar({clicked}){
    return <section>
        <h3 className='logo'>Logo</h3>
        <h3 className={clicked === 'Home'?'active':'unActive'}>Home</h3>
        <h3 className={clicked === 'Students'?'active':'unActive'}>Students</h3>
        <h3 className={clicked === 'Offers'?'active':'unActive'}>Offers</h3>
        <style jsx>{`
        section{
            width:190px;
            height: 90vh;
            background-color: #fff;
            border-radius: 10px;
            padding: 20px;
            border: 1px solid #EBEBED;
            box-shadow: 0px 4px 4px #F5F5F5;
        }
        .logo{
            color:#036EC3;
            border-bottom: 1px solid #EBEBED;
            padding-bottom: 20px;
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
        `}</style>
    </section>
}