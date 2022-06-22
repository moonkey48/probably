import { getDatabase, ref, set, onValue, off } from "firebase/database";

class Database{
    database;
    constructor(){
        this.database =getDatabase();
    }
    setProfile(key, data){
        set(ref(this.database, 'profiles/' + key), data);
    }
    setOffer(key, data){
        set(ref(this.database, 'offers/' + key), {
            id: data.id,
            request: data.request,
            title: data.title,
            body: data.body,
            due: data.due,
            deadline: data.deadline,
            requirement: data.requirement,
            preferential: data.preferential,
            contact: data.contact, 
        });
    }
    syncProfiles(updateProfiles){
        const refProfiles = ref(this.database, '/profiles');
        onValue(refProfiles, (snapshot) => {
            const data = snapshot.val();
            updateProfiles(data);
        })
        return ()=>off(refProfiles);
    }
    syncOffers(updateOffers){
        const refOffers = ref(this.database, '/offers');
        onValue(refOffers, (snapshot)=>{
            const data = snapshot.val();
            updateOffers(data);
        })
        return ()=>off(refOffers);
    }

}
export default Database;
