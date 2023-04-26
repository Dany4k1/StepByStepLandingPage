$('.list-group-item').click(function(event){

    // Preventing the default action which may mess up the view
    event.preventDefault();

	$('a.list-group-item').removeClass('active');
	$(this).addClass('active');
	$('section').css('display', 'none');
	$('section.' + $(this).attr('id')).css('display', '');
	
 });

 function fixScroll(id) {
	var text = document.getElementById(id).innerHTML;
	document.getElementById("intro").innerHTML = text;
  }