import { useRef } from 'react';

export default function Header({setTags, tags}){
    const inputRef = useRef();
    const formRef = useRef();
    const handleSearch = (e) =>{
        e.preventDefault();
        const newTag = [...tags, inputRef.current.value];
        setTags(newTag);
    }
    return <header>
        <form ref={formRef} onSubmit={(e)=>handleSearch(e)}>
            <input ref={inputRef} type='text' placeholder='#태그 검색' ></input>
        </form>
        <style jsx>{`
            input{
                width: 200px;
                height:34px;
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
        `}</style>
    </header>
}