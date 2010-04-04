jQuery.fn.ticker = function(settings) {

  var current=0;
  var paused=0;
  var newsTicker = $(this);
  var itemsCollection =  newsTicker.find('li');

  itemsCollection.hide().filter(":eq(0)").show().add("li");

  itemsCollection.hover(
    function(){ paused=1; },
    function(){ paused=0; }
  );

  function ticknews() {
    if (paused){ return; };

    newsTicker.find("li:eq("+current+")").fadeOut("slow",function(){
      $(this).hide();
    });

    current = ++current%itemsCollection.size();
    newsTicker.find("li:eq("+current+")").fadeIn("slow");
  }

  setInterval(ticknews,4000);
};