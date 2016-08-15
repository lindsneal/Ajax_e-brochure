
/*function loadAjaxPackage(url) {
	$('#bigBox >') //Select all children of bigBox article element
		.fadeOut(500)	//fade out selection.
		
		//run the queue of actions (steps) to replace content in particular section
		.queue(function(){ 
			//Note: the reference to #bigBox in the "load(url + #bigBox > *' ...)" section is the element tag from the source page to be copied, 
			//while the other references to #bigBox are for the destination element tag to be loaded in the current page.
			console.log('source to load from: ' + url + ' #bigBox > *');
			$('#bigBox').load(url + ' #bigBox > *', function(){
				$('#bigBox >').hide()
				.fadeIn(500)
				.dequeue(); 
			});
		});	
}
*/
function pageAjax(url, id) {
	$(id + ' >')
		.fadeOut(800)
		.queue(function(){ 
			$(id).load(url + ' ' + id + ' > *', function(){
				$(id + ' >').hide().fadeIn(800).dequeue(); 
			});
				//this brings the start point back to the top of page.//
				$("html, body").animate({ scrollTop: 450 }, 50); 
		});	
}


$(document).ready(function(){


	$('body').on('click', '#bigBox a', function(e){
		var url = $(this).attr('href');
		var id = '#' + $(this).parents().attr('id');
		pageAjax(url, id);
		e.preventDefault();
	});	


	/* jQuery ajax implementation brings in new article package on click event of accordion list */
	/*$('#bigBox a').on('click', function(e){
			var url = $(this).attr('href');
			console.log('clicked: ' + url);
			loadAjaxPackage(url);
			e.preventDefault();
		});	*/	



});