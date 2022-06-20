import { useState } from 'react';
import '../styles/globals.css'
import {firebaseApp} from '../service/firebaseApp';
import Database from '../service/database';

const database = new Database(firebaseApp);

function MyApp({ Component, pageProps }) {
  const [students,setStudents] = useState({
    'testUid1':{
      uid:'testUid1',
      name:'문승의',
      about:'매일 성장하는 개발자 문승의입니다.',
      major:'Front-end',
      email:'21500242@handong.edu',
      tags: ['웹 개발', '프론트엔드 개발','웹디자인'],
      abilities:['웹페이지 개발, 앱 디자인, 앱 개발'],
      experience:'',
      profileImg:'',
      homepage:'',
    },
    'testUid2':{
      uid:'testUid2',
      name:'정지선',
      about:'매일 성장하는 디자이너 정지선입니다.',
      major:'UX/UI 디자인',
      email:'2180000@handong.edu',
      tags: ['UX', 'UI','웹디자인','앱디자인'],
      abilities:['프로토타입 디자인, 프로토파이'],
      experience:'',
      profileImg:'',
      homepage:'',
    },
    'testUid3':{
      uid:'testUid3',
      name:'박이레',
      about:'매일 성장하는 디자이너 박이레입니다.',
      major:'시각디자인',
      email:'2150000@handong.edu',
      tags: ['시각디자인','제품디자인','앱디자인'],
      abilities:['배너디자인, 포스터 디자인'],
      experience:'',
      profileImg:'',
      homepage:'',
    },
    'testUid4':{
      uid:'testUid4',
      name:'Moonkey',
      about:'매일 성장하는 모델러 문키입니다.',
      major:'제품디자인',
      email:'2150242@handong.edu',
      tags: ['디자인','개발'],
      abilities:['3D 모델링'],
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
    'req2':{
      uid:'req2',
      request: '구인',
      title: 'IIID 디자이너 구합니다.',
      body: '국제 개발 협력대학원 디자이너 구합니다.',
      due: '7/2',
      deadline:false,
      requirement:'',
      preferential:'',
      contact:'IIID@handong.edu',
    },
    'req3':{
      uid:'req3',
      request: '구인',
      title: 'G-implact 프로젝트 매니저 구합니다.',
      body: 'G-impact를 리드해주실 프로젝트 매니저를 구합니다. ',
      due: '7/13',
      deadline:false,
      requirement:'',
      preferential:'',
      contact:'gimpact@handong.edu',
    }
  })
  return <Component {...pageProps} 
  students={students} 
  setStudents={setStudents}
  setOffers={setOffers}
  offers={offers} 
  database={database} />
}

export default MyApp
