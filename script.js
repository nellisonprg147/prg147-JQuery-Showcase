$(document).ready(function () {
    $("#gost").click(function () {
        $("#gost").fadeOut("fast");
    });
    $("#gostWithBag").click(function () {
        $("#gostWithBag").effect("bounce",{times:3},500);

    });
    $("#bat").click(function () {
        $("#bat").animate({left: "+=700px"}, 1000);
    });
    $("#gostWithCan").click(function () {
        $("#sprayPaint" ).show( "fold", 1000 );
    });
    $( "#headStone" ).click(function() {
        $( "#headStone" ).hide( "drop", { direction: "down" }, "slow" );
        $( "#sprayPaint").hide();
        $( "#gostWithCan").hide();
    });
    $("#santa").click(function(){
        $("#santa").hide();
        $("#kapow").show();
    });

    // goat eyes
    $("#top").mouseenter(function () {
        $("#pupilLeft").css("top","477px");
        $("#pupilRight").css("top","477px");
    });
    $("#top").mouseleave(function () {
        $("#pupilLeft").css("top","483px");
        $("#pupilRight").css("top","483px");

    });
    $("#left").mouseenter(function () {
        $("#pupilLeft").css("left","469px");
        $("#pupilRight").css("left","506px");
    });
    $("#left").mouseleave(function () {
        $("#pupilLeft").css("left","474px");
        $("#pupilRight").css("left","514px");
    });
    $("#bottom").mouseenter(function () {
        $("#pupilLeft").css("top","492px");
        $("#pupilRight").css("top","492px");
    });
    $("#bottom").mouseleave(function () {
        $("#pupilLeft").css("top","483px");
        $("#pupilRight").css("top","483px");
    });
    $("#right").mouseenter(function () {
        $("#pupilLeft").css("left","478px");
        $("#pupilRight").css("left","519px");
    });
    $("#right").mouseleave(function () {
        $("#pupilLeft").css("left","474px");
        $("#pupilRight").css("left","514px");
    });


   

});
