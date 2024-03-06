    $(document).ready(function(){
        $("#b").click(function(){
            var text = $("#in").val();
        text = text.replace(/\,/g, "\t")
        
        $("#out").val(text)
        })
    })