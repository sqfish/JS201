define(["jquery", "firebase"], function($, _firebase){
  var familyDB = new Firebase("https://this-crazy-family.firebaseio.com/family");

  return {
    removeRelative: function(data) {
      var datakey = $(data).parent().attr("data-key");
      familyDB.child(datakey).set({});
    }
  };
});