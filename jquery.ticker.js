jQuery.fn.ticker = function(settings) {

  var current=0;
  var paused=0;
  var newsTicker = $(this)

  var newsitems = newsTicker.find('li').hide().hover(
      function(){ paused=1; },
      function(){ paused=0; }
  ).filter(":eq(0)").show().add("li").size();

  function ticknews() {
    if (!paused){
      newsTicker.find("li:eq("+current+")").fadeOut("slow",function(){
        $(this).hide();
      });

      current = ++current%newsitems;
      newsTicker.find("li:eq("+current+")").fadeIn("slow");
    }
  }

  setInterval(ticknews,4000);
};