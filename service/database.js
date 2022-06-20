import { getDatabase, ref, set } from "firebase/database";

class Database{
    database;
    constructor(){
        this.database =getDatabase();
    }
    setProfile(key, data){
        set(ref(this.database, 'profiles/' + key), {
            uid: key,
            name: data.name,
            about: data.about,
            major: data.major,
            email: data.email,
            tags: [...data.tags],
            abilities:[...data.abilities],
            experience: data.experience,
            profileImg: data.profileImg,
            homepage: data.hompage,  
        });
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

}
export default Database;
