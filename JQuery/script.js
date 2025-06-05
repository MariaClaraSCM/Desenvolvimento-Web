$(document).ready(function() {
    $("h1").text("Calculadora");
    $("h1").css("color", "darkblue");
    $("body").css("backgroundColor", "lightblue");

    $("#btn1").click(()=>{
        $("body").css("backgroundColor", "pink");
        $("h1").css("color", "pink");
        $("#btn1").css("backgroundColor", "pink");
        $("#btn1").css("color", "#000");
        let num1 = parseFloat($("#n1").val());
        let num2 = parseFloat($("#n2").val());
        let result = num1 + num2;
        $(".result").text("Resultado: " + result);
        $("p").css("margin-bottom", "0");
    })

    $("p").click(()=>{
        $("p").addClass('borda');
    })
});