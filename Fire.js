import firebase from 'firebase';

class  Fire{
    constructor(){
    super()
    this.init(),
    this.observeAuth(),
    }
}

init=()=>{
    if(!firebase.apps.length){
        firebase.initializeApp({
            apiKey: "AIzaSyA8BhQHWoWDiypqD7ktzFYHyW5hQ4Xtoq4",
        authDomain: "chatapp-b0f48.firebaseapp.com",
        databaseURL: "https://chatapp-b0f48.firebaseio.com",
        projectId: "chatapp-b0f48",
        storageBucket: "chatapp-b0f48.appspot.com",
        messagingSenderId: "978185664932",
     });
    }
};

observeAuth=()=>{
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);

    onAuthStateChanged=user=>{
        if(!user){
            try{
                firebase.auth().signInAnnonymously();
            }
            catch({message}){
                alert(message);
            }
        }
    };

    get uid(){
        return(firebase.auth().currentUser || {}).uid;
    }

    get ref(){ 
        return firebase.database().ref('message');
    }

    parse=snapshot=>{
        const{timestamp: numberStamp, text, user}=snapshot.val();
        const {key:_id}=snapshot;
        const timestamp = new Date(numberStamp);
        const message = {
            _id,
            timestamp,
            text,
            user,
        };
        return message;
    };
}