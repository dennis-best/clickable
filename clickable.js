(function($){
		 $.fn.clickable=function(update_id){
				 this.click( function(event) { 
					 $(update_id).removeClass("clicked"); 
					 $(event.target).closest(update_id).addClass("clicked"); 
				});
		 }
})(jQuery);