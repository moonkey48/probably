import { useState } from 'react';
import '../styles/globals.css'
import Database from '../service/database';
import Firebase from '../service/firebase';
import {firebaseApp} from '../service/firebaseApp';


const database = new Database(firebaseApp);
const fireBaseApp = new Firebase(firebaseApp);

function MyApp({ Component, pageProps }) {
  const [students,setStudents] = useState({
    'testUid1':{
      uid:'testUid1',
      name:'문승의',
      about:'매일 성장하는 개발자 문승의입니다.',
      major:'Front-end',
      email:'21500242@handong.edu',
      tags: {},
      abilities: {},
      experience:'',
      profileImg:'',
      homepage:'',
    },
  });
  const [offers, setOffers] = useState({
    'req1':{
      uid:'req1',
      request: '외주',
      title: '한동대 교목실 책 디자이너 구합니다.',
      body: '6월28일까지 성경 읽기 책자을 완성해주실 디자이너를 구합니다. 페이는 협의후 결정됩니다.',
      due: '6/28',
      deadline:false,
      requirement:'',
      preferential:'',
      contact:'handong_church@handong.edu',
    },
  });
  const updateOrCreateProfile = (key, newProfile)=>{
    const updated = {...students};
    updated[key] = newProfile;
    setStudents(updated);
  }
  const addOrCreateOffer = (key, newOffer)=>{
      const updated = {...offers};
      updated[key] = newOffer;
      setOffers(updated);
  }
  const handleProfileDB = (data) =>{
    const updated = {};
    Object.keys(data).forEach((key)=>{
      const newStudent = {
        uid:data[key].uid,
        name: data[key].name,
        about:data[key].about,
        major:data[key].major,
        email:data[key].email,
        tags: data[key].tags,
        abilities: data[key].abilities,
        experience: data[key].experience,
        profileImg: data[key].profileImg,
        homepage: data[key].homepage,
      }
      updated[key] = {...newStudent};
    });
    console.log(updated);
    setStudents(updated);
  }
  return <Component {...pageProps} 
  students={students} 
  handleProfileDB={handleProfileDB}
  setOffers={setOffers}
  offers={offers}
  addOrCreateOffer={addOrCreateOffer} 
  database={database}
  fireBaseApp={fireBaseApp}
  updateOrCreateProfile={updateOrCreateProfile} 
  />
}

export default MyApp
