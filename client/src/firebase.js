import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA3JVonrE2tQSm3crvoWh0hkXKp2P-iD1w",
    authDomain: "gqlreactnode-ff8f7.firebaseapp.com",
   // databaseURL: "https://gqlreactnode-ff8f7.firebaseio.com",
    projectId: "gqlreactnode-ff8f7",
    storageBucket: "gqlreactnode-ff8f7.appspot.com",
    //messagingSenderId: "235643180614",
    appId: "1:235643180614:web:d605599bbc76c70661dc47"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);





export const auth=firebase().auth()
export const googleAuthProvider=new firebase.auth().GoogleAuthProvider()