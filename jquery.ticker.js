jQuery.fn.ticker = function(settings) {
	
	var ticker = $(this);
	var itemsCollection =  ticker.find('li');
	
	var current=0;
	var paused=0;
	var interval=4000;
	if (ticker.attr('interval')) interval = ticker.attr('interval');
	
	itemsCollection.each(function() {
		if ($(this).height() > ticker.height()) {
			ticker.height($(this).height());
		}
	});

	itemsCollection.hide().filter(":eq(0)").show().add("li");

	itemsCollection.hover(
		function(){ paused=1; },
		function(){ paused=0; }
	);

	function tick() {
		if (paused){ return; };

		ticker.find("li:eq("+current+")").fadeOut("slow",function(){
		  $(this).hide();
		});

		current = ++current%itemsCollection.size();
		ticker.find("li:eq("+current+")").fadeIn("slow");
	}
	
	if (itemsCollection.length > 1) {
		setInterval(tick,interval);
	}
};