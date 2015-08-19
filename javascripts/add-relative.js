define(["jquery", "firebase"], function($, _firebase){
  var familyDB = new Firebase("https://this-crazy-family.firebaseio.com/family");

  return {
    collectFormData: function() {
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
      return newMember;
    },
    addRelative: function(data) {
      familyDB.push(data);
      document.getElementById("addMemberForm").reset();
    }
  };
});