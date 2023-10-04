//code that hides the professional to begin with and allows user to toggle between professional and personal
$(function () {
  console.log("ready!");

  $("#professionalDiv").hide();

  $("#toggleInput").change(() => {
    $("#personalDiv").toggle();
    $("#professionalDiv").toggle();
    // toggleFunction();
  });
});
