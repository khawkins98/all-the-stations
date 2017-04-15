// Analytics tracking
// This code tracks the user's clicks, logging as GA events.
// Links in non-generic regions can be tracked by adding '.track-with-analytics-events' to a parent div. Careful with the scoping.
// -------------
setTimeout(function() {
  // delay invocation by Xms to allow GA to load
  var ga = ga || [];
  if (ga.loaded) { $('body').addClass('google-analytics-loaded'); }   // Confirm GA is loaded, add a class if found

  // Utility method
  if (!Array.prototype.last){
    Array.prototype.last = function(){
      return this[this.length - 1];
    };
  };

  function analyticsTrackInteraction(actedOnItem, parentContainer) {
    var linkName = $(actedOnItem).text().toString();
    // if there's no text, it's probably and image...
    if (linkName.length == 0 && $(actedOnItem).attr('src')) linkName = $(actedOnItem).attr('src').split('/').last();
    if (linkName.length == 0 && $(actedOnItem).val()) linkName = $(actedOnItem).val();
    // console.log(parentContainer,linkName);
    ga('send', 'event', 'UI', 'UI Element / ' + parentContainer, linkName);
  }

  // Only track these areas
  // This could be done more efficently with a general capture of links,
  // but we're running against the page's unload -- so speed over elegance.

  $("body.google-analytics-loaded .top-bar").on('mousedown', 'a', function(e) {
    analyticsTrackInteraction(e.target,'Top bar');
  });
  $("body.google-analytics-loaded #main-content-area").on('mousedown', 'a', function(e) {
    analyticsTrackInteraction(e.target,'Main content');
  });
  $("body.google-analytics-loaded #closure-area").on('mousedown', 'a', function(e) {
    analyticsTrackInteraction(e.target,'Closure area');
  });
  $("body.google-analytics-loaded #footer").on('mousedown', 'a', function(e) {
    analyticsTrackInteraction(e.target,'Footer');
  });

  $("body.google-analytics-loaded .track-with-analytics-events a").on( 'mousedown', function(e) {
    analyticsTrackInteraction(e.target,'Manually tracked area');
  });

  // log control+f and command+f
  // base method via http://stackoverflow.com/a/6680403
  var keydown = null;
  if ($('body').hasClass('google-analytics-loaded')) {
    $(window).keydown(function(e) {
      // the user does ctrl+f action
      if ( ( e.keyCode == 70 && ( e.ctrlKey || e.metaKey ) ) ||
         ( e.keyCode == 191 ) ) {
        keydown = new Date().getTime();
      }
      return true;
    }).blur(function() {
      // and then browser window blurs, indicating shift to UI
      if ( keydown !== null ) {
        var delta = new Date().getTime() - keydown;
        if ( delta > 0 && delta < 1000 ) {
          ga('send', 'event', 'UI', 'UI Element / Keyboard', 'Browser in page search');
        }
        keydown = null;
      }
    });
  }
}, 150);

// END GA tracking events
