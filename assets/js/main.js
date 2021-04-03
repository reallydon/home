function start_animation_logo() {
    var is_white = $('#mainNav .navbar-brand').hasClass('whited');
    
    var elements = $('#mainNav .navbar-brand > span');
    
    var changed = false;
    
    elements.each(function(){
    
    	var that = $(this);
    
    	if(that.hasClass('changed')){
    		return;
    	}
    
    	if(is_white){
    		that.addClass('changed').css({'color':'#fff'});
    	}else{
    		that.addClass('changed').css({'color':'#ffc107'});
    	}
    
    	changed = true;
    
    	return false;
    });
    
    if(!changed && !is_white){
    	$('#mainNav .navbar-brand').addClass('whited');
    	$('#mainNav .navbar-brand > span.changed').removeClass('changed');
    }else if(!changed && is_white){
    	$('#mainNav .navbar-brand').removeClass('whited');
    	$('#mainNav .navbar-brand > span.changed').removeClass('changed');
    }
    
    setTimeout(function(){
    	start_animation_logo();
    }, 100);
}

setTimeout(function(){
	var sitename = $('#mainNav .navbar-brand').text();

	var split = sitename.split('');

	var str = '';

	for(var i = 0; i<split.length; i++){
		str += '<span style="color: #ffc107;">'+split[i]+'</span>';
	}

	$('#mainNav .navbar-brand').html(str).addClass('whited');

	start_animation_logo();
}, 50);