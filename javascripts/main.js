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

requirejs(["jquery", "lodash", "firebase", "hbs", "bootstrap", "add-relative", "remove-relative"], 
  function ($, _, _firebase, Handlebars, bootstrap, addRelative, removeRelative) {
    var myFirebaseRef = new Firebase("https://this-crazy-family.firebaseio.com/");
    myFirebaseRef.child("family").on("value", function(snapshot) {
      var family = snapshot.val();
      displayFamilyMembers(family);
  });

  function displayFamilyMembers(input) {
    require(['hbs!../templates/family-member'], function(template) {
      $('#family-container').html(template(input));
    });
  }

  $(document).ready(function(){
    $("#addMember").click(function(){
      addRelative.addRelative(addRelative.collectFormData());
    });

    $(document).on("click", "#deleteMember", function(){
      removeRelative.removeRelative(this);
    });
  });   //CLOSE//: document.ready()
});   //CLOSE//: Requirejs