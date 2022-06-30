import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged } from "firebase/auth";
class Firebase{
    constructor(){
        this.auth = getAuth();
    }
    async login(resultFunc){
        const provider = new GoogleAuthProvider;
        await signInWithPopup(this.auth, provider)
          .then((result) => {
            resultFunc({ uid:result.user.uid ,name:result.user.displayName, email:result.user.email});
          }).catch(() => {
            console.log('error in log in');
            resultFunc(false);
          });
    }
    onAuthChanged(callback){
      onAuthStateChanged(this.auth, (user) => {
        if (user) {
          callback(user.uid);
        } else {
          return;
        }
      });
    }
    logout(){
      this.auth.signOut();
    }
}
export default Firebase;