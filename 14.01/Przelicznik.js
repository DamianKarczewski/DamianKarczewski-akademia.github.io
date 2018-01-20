$(function () {

            $.getJSON('https://blockchain.info/pl/ticker', function (data) {

                    $.each(data, function (key, value) {


                            $("#waluta").append('<option value="' + key + '">' + key + '</option>');

                            $('input[type=button]').click(function (){
                                var waluta = $('#waluta').val();
                                var wartosc = $('#wartosc').val;
                                
                                pobierzBTC (waluta, wartosc);
                            });

                            });
                function pobierzBTC(waluta, wartosc) {
                 $.ajax({
                     url:'https://blockchain.info/tobtc?currency='+waluta+'&value='+wartosc,
                     success: function(response){
                     $('#btc').text(response);
                 },
                     error: function(response) {
                     console.log(response);
                 }
                     
                 })
                    
                    
                };
                    });
            });

        //$(function(){
        //    $()
        //    
        //})
