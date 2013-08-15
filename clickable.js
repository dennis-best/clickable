(function($){
		 $.fn.clickable=function(update_id){
				 this.click( function(event) { 
					 if ($(event.target).closest(update_id).hasClass("clicked")) {
						 	$(update_id).removeClass("clicked"); 
					 	}
						else {
							$(update_id).removeClass("clicked"); 
							$(event.target).closest(update_id).addClass("clicked"); 
						}
				});
		 }
})(jQuery);