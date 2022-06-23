class Cloudinary{
    cloudName;
    apiKey;
    url;
    constructor(){
        this.cloudName = 'dl6lruomz';
        this.apiKey = '978595732268374';
        this.preset = 'fzicm6jz';
        this.url = `https://api.cloudinary.com/v1_1/${this.cloudName}/image/upload`;
    }
    setProfile(file,callback){
        const formData = new FormData();
        formData.append('file',file);
        formData.append("upload_preset", this.preset);
        fetch(this.url, {
            method: "POST",
            body: formData
          })
        .then((response) => {
            return response.json();
        })
        .then(result=>callback(result.url))
        .catch((e)=>{
            console.log('업로드중 에로가 발생하였습니다. 이미지를 첨부해주세요.')
            callback('https://res.cloudinary.com/dl6lruomz/image/upload/v1655959496/profile1.jpg')
        });
    }
}
export default Cloudinary;