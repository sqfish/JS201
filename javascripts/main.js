requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery.min',
    'lodash': '../bower_components/lodash/lodash.min',
    'firebase': '../bower_components/firebase/firebase',
    'hbs': '../bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min'
  },
  shim: {
    'bootstrap': ['jquery'],
    'firebase': {
      exports: 'Firebase'
    }
  }
});

requirejs(["jquery", "lodash", "firebase", "hbs", "bootstrap", "add-relative"], 
  function ($, _, _firebase, Handlebars, bootstrap, addRelative) {
    var myFirebaseRef = new Firebase("https://this-crazy-family.firebaseio.com/");
    myFirebaseRef.child("family").on("value", function(snapshot) {
      var family = snapshot.val();
      displayFamilyMembers(family);
      console.log(family);
  });

  function displayFamilyMembers(input) {
    require(['hbs!../templates/family-member'], function(template) {
      $('#family-container').html(template(input));
    });
  }

  $("#addMember").click(function(){
    var inputName = $("#inputName").val();
    var inputSpecies = $("#inputSpecies").val();
    var inputAge = $("#inputAge").val();
    var inputGender = $("#inputGender").val();
    var inputSkills = $("#inputSkills").val().split(",");
    console.log(inputName, inputAge);
    console.log(inputSpecies, inputGender);
    console.log(inputSkills);
    var newMember = {
      "name": inputName,
      "age": inputAge,
      "gender": inputGender,
      "species": inputSpecies,
      "skills": inputSkills
    };
    console.log(newMember);
    addRelative.addRelative(newMember);
  });
});   //CLOSE//: Requirejs