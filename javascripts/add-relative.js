define(["jquery", "firebase"], function($, _firebase){
  var familyDB = new Firebase("https://this-crazy-family.firebaseio.com/family");
  // familyDB.push({});

  return {
    addRelative: function(data) {
      familyDB.push(data);
      document.getElementById("addMemberForm").reset();
    }
  };
});