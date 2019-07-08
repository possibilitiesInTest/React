import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
    apiKey: "AIzaSyCHM1gC_ivzH5HFF482NmumSuhwpFPBVNk",
    authDomain: "react-blog-demo-571d6.firebaseapp.com",
    databaseURL: "https://react-blog-demo-571d6.firebaseio.com",
    projectId: "react-blog-demo-571d6",
    storageBucket: "",
    messagingSenderId: "1063972796198",
    appId: "1:1063972796198:web:f2f6c4adf15fa5b1"
};

firebase.initializeApp(config);
export default firebase;