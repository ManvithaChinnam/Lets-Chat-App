// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCmbHU_r_W8Q4sNFH0SP71HXF7Zwhlqn7g",
      authDomain: "kwitter-17bf6.firebaseapp.com",
      databaseURL: "https://kwitter-17bf6-default-rtdb.firebaseio.com",
      projectId: "kwitter-17bf6",
      storageBucket: "kwitter-17bf6.appspot.com",
      messagingSenderId: "480100722463",
      appId: "1:480100722463:web:0327ff11aa186ec017322a"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

    username=localStorage.getItem("username");
    document.getElementById("username").innerHTML= " Welcome " + username + " ! ";
    
function addroom(){
      roomname=document.getElementById("roomname").value;
      firebase.database().ref("/").child(roomname).update({
            purpose:"Adding Room Name"
      });
      localStorage.setItem("roomname",roomname);
      window.location="kwitter_page.html";
}

function redirectToRoomName(name){
      console.log(name); 
      localStorage.setItem("roomname",name);
      window.location="kwitter_page.html";
};

    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("roomname" + Room_names);
row="<div class='roomname' id="+ Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

