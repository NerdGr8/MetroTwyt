//Code referenced from http://trentrichardson.com
(function($) {
    $.templater = function(str,replacements){
        $.each(replacements,function(i){
            str = str.replace(new RegExp('{'+ i +'}','g'),this);
        });
        return str;
    }    

})(jQuery);
