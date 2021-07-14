r(function(){initalizemii()});
function initalizemii(){
    var s = document.createElement("script"); 
    s.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"; 
    s.onload = function(e){initalizeotherscripts()};   
    document.head.appendChild(s);
    const seed = initalizeotherscripts()
    return initalizeothersripts(seed)
  };
  function initalizeotherscripts(seed){
    $.getScript('apis/vidapi/000/vidapi.js', function() {
      console.log("apis/vidapi/000/vidapi.js was loaded......")
      $.getScript('https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js', function() {
        console.log("https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js was loaded......")
      });
    });
    return initalizeprimarydata(seed); 
  };
  function initalizeprimarydata(seed){
    const primarydata = "<link rel=\"stylesheet\" href=\"multiplexers/001/css/multiplexmii.css\" type=\"text/css\">\n"
    $('body').append(primarydata);
    const secondarydata = "<link rel=\"shortcut icon\" type=\"image/jpeg\" href=\"assets/images/favicon.jpg\">\n"
    $('body').append(secondarydata);
    return console.log("multiplexers/001/css/multiplexmii.css was loaded");
  }
  r(function() {
    docReady(function() {
      return initalizemii()
    });
  return document.title = "Kirby TV Channel Revival - KTCR"
  });
  function r(f) {
          /in/.test(document.readyState) ? setTimeout('r(' + f + ')', 9) : f()
  }