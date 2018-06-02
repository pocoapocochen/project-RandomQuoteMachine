
  var currentQuote = "";
  var currentContent = "";
  var currentTitle = "";
  
$(document).ready(function() {
  
     getQuote();

  //eventhandler
  $("#btn").on("click", function() {
     getQuote();
  });
  
  //eventhandler
  $("#posttwitter").on("click", function() {
     shareQuote();
  });
  
 }); // end document ready


//getJSON and show data
  function getQuote(){
    $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=40&callback=", function(data) {
      
      var rand = Math.floor(Math.random() * data.length);
      
      currentContent = data[rand].content;
      currentTitle = data[rand].title;
      
      currentQuote = '<i class="fa fa-quote-left fa-pull-left" aria-hidden="true"></i>' + currentContent + '<p>&mdash;' + currentTitle + '<br>'+'<i class="fa fa-quote-right fa-pull-right" aria-hidden="true"></i></p>';
        
        $("#quote").html(currentQuote);
      
    });// end getJSON
 }   //end getQuote()


// share quote to social media
  function shareQuote(){
    
    var postCurrentQuote = $(currentContent).text() +" — " + currentTitle; //為何不能用'&mdash'尚未解
    var postQuote = encodeURIComponent(postCurrentQuote);
    
    var postSourceUrl = "https://codepen.io/pocoapocochen/full/pVbRBg";
    var postUrl = encodeURIComponent(postSourceUrl);
    
    $("#posttwitter").attr("href", "https://twitter.com/intent/tweet?text=" + postQuote  + "%20%20%20from:" + "&url=" + postUrl);
    
  } //end shareQuote()
