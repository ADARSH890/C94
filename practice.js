
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyAYcHIE_SaXXXKXziJD9HVe-qVHfBFhN_w",
    authDomain: "practice-6d951.firebaseapp.com",
    databaseURL: "https://practice-6d951-default-rtdb.firebaseio.com",
    projectId: "practice-6d951",
    storageBucket: "practice-6d951.appspot.com",
    messagingSenderId: "300994419931",
    appId: "1:300994419931:web:17a3da4bc644c2056200fe"
  };
firebase.initializeApp(firebaseConfig);
function adduser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
}