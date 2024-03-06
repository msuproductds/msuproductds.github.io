$(document).ready(function(){
    $("#b").click(function(){
        var text = $(".text").val();
    text = text.replace(/\,/g, "\t")
    
    console.log(text)
    })
})