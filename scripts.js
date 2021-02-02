$(document).ready(function(){
    $('.box').click(function(){
        if ($(this).find('input').is(':checked')) {
            $(this).css({'transform':'scale(0.98)', 'box-shadow': 'inset 2px 2px 2px rgba(0, 0, 0, 0.5),inset -2px -2px 2px rgba(255, 255, 255, 0.5)'})
        } else {
            $(this).css({'transform':'scale(1)', 'box-shadow': '2px 2px 2px rgba(0, 0, 0, 0.5), -2px -2px 2px rgba(255, 255, 255, 0.5)'})
        }
    });
});