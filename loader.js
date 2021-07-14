r(function(){initalizemii()});
function initalizemii(){
  var s = document.createElement("script");
  s.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
  s.onload = function(e){initalizeotherscripts()};
  document.head.appendChild(s);
  document.title = "Kirby TV Channel Revival - KTCR";
  return Math.random().toString(36).substring(2);
};
function initalizeotherscripts(){
  $.getScript('apis/vidapi/000/vidapi.js', function() {
    console.log("apis/vidapi/000/vidapi.js was loaded")
});
  $.getScript('https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js', function() {
    console.log("https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js was loaded")
  });
  initalizethecss();
  return console.log("multiplexers/001/css/multiplexmii.css was loaded");
};
function initalizethecss(){
  return $('body').append('<link rel="stylesheet" href="multiplexers/001/css/multiplexmii.css" type="text/css"></div></body><div class="d" id="sessionseed" hidden>'+Math.random().toString(36).substring(2)+'</div></html>');
} 
function r(f) {
  /in/.test(document.readyState) ? setTimeout('r(' + f + ')', 9) : f()
}