$(function () {
  console.log("ready!");

  $("#professionalDiv").hide();

  $("#toggleInput").change(() => {
    $("#personalDiv").toggle();
    $("#professionalDiv").toggle();
    // toggleFunction();
  });
});