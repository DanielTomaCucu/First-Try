$(document).ready(function(){
    
    $('sumbit').click(function(){
        var oras= $('#oras').val();
        if(oras != ' '){
            $.ajax({
                url:'https://api.openweathermap.org/data/2.5/weather?q='+ oras + '&&units=metric'+ '&APPID=eef9c248198c24add1ea29b6518865dc',
                type:"GET",
                dataType:"jsonp",
                success:function(data){
                    console.log(data);
                }
                
            });
        }
        else{
            $('#eroare').html('Trebuie sa alegryi un oras');
        }
    });
     
});
