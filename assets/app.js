// Analytics tracking
// This code tracks the user's clicks, logging as GA events.
// Links in non-generic regions can be tracked by adding '.track-with-analytics-events' to a parent div. Careful with the scoping.
// -------------
function invokeCustomEventTracking() {
  $('body').addClass('google-analytics-loaded');

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
}
// END GA tracking events

// count down the stations
$( document ).ready(function() {
  var stationsVisited = 0;

  // get the current count
  var jqxhr = $.getJSON( "http://www.allthestations.co.uk/map/nsv.php", function(data) {
    // console.log( "success",data );
    stationsVisited = data.number_of_stations_visited;
    if (data.number_of_stations_visited == 0) {
      $('#counter-row').hide();
      stationsVisited = 1; // no less than 1
    } else {
      doTheCounter();
    }
  })
  .fail(function() {
    // Hide if something goes wrong
    $('#counter-row').hide();
  });

  // do the counter
  function doTheCounter() {
    var easingFn = function (t, b, c, d) {
      var ts = (t /= d) * t;
      var tc = ts * t;
      return b + c * (tc + -3 * ts + 3 * t);
    }
    var options = {
      useEasing : true,
      easingFn: easingFn,
      useGrouping : true,
      separator : ',',
      decimal : '.',
      prefix : '',
      suffix : ''
    };
    var demo = new CountUp('counter', 0, stationsVisited, 0, 8.5, options);
    demo.start();

    // update remaining
    var stationsTotal = 2563;
    var stationsRemaining = stationsTotal - stationsVisited;
    var stationsPercent = (Math.floor((1 - (stationsVisited / stationsTotal)) * 1000)) / 10;
    $('.remaining').html(stationsRemaining.toLocaleString() + ' (' + stationsPercent + '%) to go');
  }

  // get previous episodes
  var jqxhr = $.getJSON( "http://www.allthestations.co.uk/map/yt-get-rec-eps.php", function(data) {
    // console.log( "success",data );
    iHtml = data.previous_episodes;
    if (iHtml != "") {
      $('#prevEp').html("<h3>Previous episodes...</h3>" + iHtml + "<br/>... and many more!<br/><table><tr style=\"background-color:#fff\"><td style=\"vertical-align:middle\"><a href='http://www.youtube.com/allthestations/videos'>Click here to see the complete journey on YouTube!</a></td><td><iframe src=\"https://www.youtube.com/subscribe_widget?p=7ttKX46nJxUeXZ0aoD4Q5g\" style=\"width:225px;border:0;height:80px\"/></td></tr></table>");
    } else {
      $('#prevEp').hide();
    }
  })
  .fail(function() {
    $('#prevEp').hide();
  });

});

// twitter widget loading and tracking
window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));

// create twitter widgets
twttr.ready(function (twttr) {
  twttr.widgets.createTimeline({
    sourceType: 'profile',
    screenName: 'allthestations'
  },
  document.getElementById('twitter-timeline'), {
    // https://dev.twitter.com/web/embedded-timelines/parameters
    // width: '450',
    height: '500',
    // tweetLimit: '3',
    chrome: 'nofooter',
    related: 'twitterdev,twitterapi'
  }).then(function (el) {
    // console.log('Embedded a timeline.')
  });

  // Now bind our custom intent events
  // https://dev.twitter.com/web/javascript/events
  // twttr.events.bind('click', function (ev) {
  //   console.log(ev);
  // });
  // twttr.events.bind('tweet', function (ev) {
  //   console.log(ev);
  // });
  // twttr.events.bind('retweet', function (ev) {
  //   console.log(ev);
  // });
  // twttr.events.bind('like', function (ev) {
  //   console.log(ev);
  // });
  // twttr.events.bind('follow', function (ev) {
  //   console.log(ev);
  // });
});
