import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDNORH4UDKCmSr9XRbdXLub2_fJF1nDEYI",
    authDomain: "business-card-maker-a2091.firebaseapp.com",
    databaseURL: "https://business-card-maker-a2091-default-rtdb.firebaseio.com",
    projectId: "business-card-maker-a2091",
    appId: "1:498176025959:web:6fd9aff40c77e15c23bbc2",
};

const firebase = initializeApp(firebaseConfig);
export default firebase;
