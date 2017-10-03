// // // Get a reference to the database service
// var database = firebase.database();
// // var userId = firebase.auth().currentUser.uid;
// // return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
// //   var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
// //   // ...
// // });

var textArea = document.getElementById("textID");
var a ;
var database = firebase.database().ref().child("Testing");

database.on('value',function(param1){
	textArea.innerText = param1.val();
	a=param1;
});
function readDB(){
	var people = firebase.database().ref().child("People");
	people.on("child_added", function(people){

		var name = people.child("Name").val();

		$("#table_body").append("<tr><td>"+name+"</td></tr>");
	});
};

	// database.on('value',function demo(param1){
	// 	textArea.innerText = param1;
	// 	console.log(param1) 
	// 	a= param1;
	// });

	// var playersRef = firebase.database().ref("People/");
	// console.log(playersRef);
	// var newPlayer = data.val();
	// console.log("name: " + newPlayer.name);
	// console.log("age: " + newPlayer.age);
   // console.log("number: " + newPlayer.number);
   // console.log("Previous Player: " + prevChildKey);
