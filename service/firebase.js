import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
class Firebase{
    constructor(){
        this.auth = getAuth();
    }
    async login(resultFunc){
        console.log(process.env.API_KEY);
        const provider = new GoogleAuthProvider;
        await signInWithPopup(this.auth, provider)
          .then((result) => {
            console.log('login successed!');
            resultFunc({ uid:result.user.uid ,name:result.user.displayName, email:result.user.email});
          }).catch(() => {
            console.log('error in log in');
            resultFunc(false);
          });
    }
}
export default Firebase;