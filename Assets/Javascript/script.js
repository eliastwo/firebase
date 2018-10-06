
  var config = {
    apiKey: "AIzaSyBaZHSfVHfkyg80GPcO4ZhMwvi2Rm_JBNc",
    authDomain: "hrdatamanagement-bc166.firebaseapp.com",
    databaseURL: "https://hrdatamanagement-bc166.firebaseio.com",
    projectId: "hrdatamanagement-bc166",
    storageBucket: "hrdatamanagement-bc166.appspot.com",
    messagingSenderId: "684763172965"
  };
  firebase.initializeApp(config);
  
	var database = firebase.database();

$("#addPet-btn").on("click", function(event) {
  event.preventDefault();

  // Grabs user input
  var petType      = $("#petType").val().trim();
  var petBreed     = $("#petBreed").val().trim();
  var petID        = $("#petID").val().trim();
  var petSize      = $("#petSize").val().trim();
  var petName      = $("#petName").val().trim();
  var petCost      = $("#petCost").val().trim();
  var petHeight    = $("#petHeight").val().trim();
  var petColor     = $("#petColor").val().trim();
  
  // Creates local "temporary" object for holding employee data
  var newPet = {
    petType   : petType,
	petBreed  : petBreed,
	petID     : petID,
    petSize   : petSize,
    petName   : petName,
    petCost   : petCost,
	petHeight : petHeight,
	petColor  : petColor
  };

  // Uploads employee data to the database
  database.ref().push(newPet);

  // Alert
  alert("Pet successfully added");

  // Clears all of the text-boxes
  $("#petType").val("");
  $("#petBreed").val("");
  $("#petID").val("");
  $("#petSize").val("");
  $("#petName").val("");
  $("#petCost").val("");
  $("#petHeight").val("");
  $("#petColor").val("");
});

database.ref().on("child_added", function(childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());

   //Store data into variables
  var petType = childSnapshot.val().petType;
  var petBreed = childSnapshot.val().petBreed;
  var petID = childSnapshot.val().petID;
  var petSize = childSnapshot.val().petSize;
  var petName = childSnapshot.val().petName;
  var petCost = childSnapshot.val().petCost;
  var petHeight = childSnapshot.val().petHeight;
  var petColor = childSnapshot.val().petColor;
  
  
  // Pet Info
  console.log(petType);
  console.log(petBreed);
  console.log(petID);
  console.log(petSize);
  console.log(petName);
  console.log(petCost);
  console.log(petHeight);
  console.log(petColor);
  

  // Add each train's data into the table
  $("#pet-table > tbody").append("<tr><td>" + petType + "</td><td>" + petBreed + "</td><td>" + 	petID + "</td><td>" + petSize 
  + "</td><td>" + petName + "</td><td>" + petCost + "</td><td>" + petHeight + "</td><td>" + petColor + "</td>");
});


