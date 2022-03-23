$(document).ready(function(){
    $.ajaxSetup({ cache : false});

    function delay(callback, ms) {
        var timer = 0;
        return function() {
          var context = this, args = arguments;
          clearTimeout(timer);
          timer = setTimeout(function () {
            callback.apply(context, args);
          }, ms || 0);
        };
      }

    $('#origin').keyup(delay(function (e){
        $('#list-data').html()

        var searchField = $('#origin').val()
        var expression = new RegExp(searchField, 'i')
        fetch('https://api.rajaongkir.com/starter/city?key=881f16f8e1a63cc3bd37c05f07d68f3a')
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.rajaongkir.results.length; i++) {
                $.each(data.rajaongkir.results, function(key, value){
                    if(value.city_name.search(expression) != -1){
                        
                    }
                })
                
            }
        })
    }, 1000))
});