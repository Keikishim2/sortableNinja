var callbacks = $.Callbacks();

$(document).ready(function(){
    $( ".images" ).sortable();
    callbacks.disable('$this');
});



