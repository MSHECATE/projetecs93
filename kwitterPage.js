
const firebaseConfig = {
  apiKey: "AIzaSyAU8_aImdAVRSbyyQLFZ-xbZILCjybpJlk",
  authDomain: "projetoc93.firebaseapp.com",
  databaseURL: "https://projetoc93-default-rtdb.firebaseio.com",
  projectId: "projetoc93",
  storageBucket: "projetoc93.appspot.com",
  messagingSenderId: "341797728867",
  appId: "1:341797728867:web:df0dc4417c6e9e811afe56",
  measurementId: "G-GYWT6XS18J"
};
  
    firebase.initializeApp(firebaseConfig);
  
    userName = localStorage.getItem("userName");
    roomName = localStorage.getItem("roomName");

    function send()
    {
          msg = document.getElementById("msg").value;
          firebase.database().ref(roomName).push({name:userName,message:msg,like:0});
          document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; 
snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
     childData = childSnapshot.val(); if(childKey != "purpose") 
     {
       firebaseMessageId = childKey;
       messageData = childData;

//Início do código

//Fim do código
    } });  }); }
getData();
