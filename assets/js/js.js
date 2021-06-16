//Today`s day
var date = new Date();
// var todayDate = [date.getMonth(), date.getDate(), date.getFullYear()];
$("#currentDay").html(date);

$(document).ready(function(){

    $(".saveBtn").on("click",function(){
        
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })

    function timeCompare(){

        var timeH = date.getHours();

        $(".time-block").each(function(){
            var blockH = parseInt($(this).attr("id").split("h")[1]);

            if (blockH < timeH) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockH === timeH) {
                $(this).removeClass("future");
                $(this).removeClass("past");
                $(this).addClass("present"); 
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future"); 
            }
        })
    }
    $("#h9 .description").val(localStorage.getItem("h9"));
    $("#h10 .description").val(localStorage.getItem("h10"));
    $("#h11 .description").val(localStorage.getItem("h11"));
    $("#h12 .description").val(localStorage.getItem("h12"));
    $("#h13 .description").val(localStorage.getItem("h13"));
    $("#h14 .description").val(localStorage.getItem("h14"));
    $("#h15 .description").val(localStorage.getItem("h15"));
    $("#h16 .description").val(localStorage.getItem("h16"));
    $("#h17 .description").val(localStorage.getItem("h17"));

    timeCompare();
})

