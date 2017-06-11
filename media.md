---
layout: default
title: Media
group: "in_local_navigation"
order: 6
---

{% assign site_unix_time = site.time | date: '%s' | plus: 0 %}
{% assign day09mon06 = "2017-06-09 10:00:00 +01:00" | date: '%s' | plus: 0 %}
{% assign day10mon06 = "2017-06-10 10:00:00 +01:00" | date: '%s' | plus: 0 %}
{% assign day11mon06 = "2017-06-11 10:00:00 +01:00" | date: '%s' | plus: 0 %}
{% assign day12mon06 = "2017-06-12 10:00:00 +01:00" | date: '%s' | plus: 0 %}
{% assign day13mon06 = "2017-06-13 10:00:00 +01:00" | date: '%s' | plus: 0 %}
{% assign day14mon06 = "2017-06-14 10:00:00 +01:00" | date: '%s' | plus: 0 %}
{% assign day15mon06 = "2017-06-15 10:00:00 +01:00" | date: '%s' | plus: 0 %}
{% assign day16mon06 = "2017-06-16 10:00:00 +01:00" | date: '%s' | plus: 0 %}
{% assign day17mon06 = "2017-06-17 10:00:00 +01:00" | date: '%s' | plus: 0 %}
{% assign day18mon06 = "2017-06-18 10:00:00 +01:00" | date: '%s' | plus: 0 %}
{% assign day19mon06 = "2017-06-19 10:00:00 +01:00" | date: '%s' | plus: 0 %}
{% assign day20mon06 = "2017-06-20 10:00:00 +01:00" | date: '%s' | plus: 0 %}

<h2>Media</h2>
For all media enquiries, please contact Ruth via <a href="mailto:press@allthestations.co.uk">press@allthestations.co.uk</a>.

<h3>Radio interviews</h3>

<ul>
<li><a href="http://www.coastfm.co.uk/" target="_blank">Cornwall&#39;s Coast FM</a>: <a href="/static/audio/CoastFM-2017-05-08.mp3">8th May, Morning Show</a></li>
<li><a href="http://www.bbc.co.uk/bbcsomerset" target="_blank">BBC Somerset</a>: <a href="/static/audio/BBCSomerset-2017-05-19.mp3">19th May, with Charlie Taylor</a></li>{% if site_unix_time > day12mon06 %}
<li><a href="http://www.bbc.co.uk/bbcsurrey" target="_blank">BBC Surrey</a>: <a href="/static/audio/BBCSurrey-2017-05-19.mp3">19th May, with Mark Carter</a></li>
{% endif %}{% if site_unix_time > day14mon06 %}
<li><a href="http://www.bbc.co.uk/radiocambridgeshire" target="_blank">BBC Radio Cambridgeshire</a>: <a href="/static/audio/BBCCambridgeshire-2017-06-03.mp3">3rd June, with Charlie Thompson</a></li>
{% endif %}{% if site_unix_time > day16mon06 %}
<li><a href="http://www.bbc.co.uk/bbcessex" target="_blank">BBC Essex</a>: <a href="/static/audio/BBCEssex-2017-06-03.mp3">3rd June, with Ray Clark</a></li>
{% endif %}{% if site_unix_time > day18mon06 %}
<li><a href="http://www.bbc.co.uk/radiolincolnshire" target="_blank">BBC Radio Lincolnshire</a>: <a href="/static/audio/BBCLincolnshire-2017-06-05.mp3">5th June, with Scott Dalton</a></li>
{% endif %}{% if site_unix_time > day20mon06 %}
<li><a href="http://www.bbc.co.uk/radio4" target="_blank">BBC Radio 4</a>: <a href="/static/audio/BBCRadio4-2017-06-08.mp3">8th June, You &amp Yours</a></li>
{% endif %}
</ul>

<h3>Press/Online Articles</h3>

<ul>
<li><a href="http://www.islandecho.co.uk/news/stations-project-document-islands-railway" target="_blank">9th May, Island Echo</a></li>
<li><a href="http://www.cornwalllive.com/all-the-stations-project-will-visit-every-railway-in-britain-they-ve-started-in-cornwall/story-30326799-detail/story.html" target="_blank">12th May, Cornwall Live</a></li>
<li><a href="http://www.cornish-times.co.uk/article.cfm?id=110074&headline=Rail%20marathon%20calls%20in%20SE%20Cornwall&sectionIs=news&searchyear=2017" target="_blank">15th May, Cornish Times</a></li>
<li>Wisbech Standard (currently unavailable)</li>
{% if site_unix_time > day13mon06 %}
<li><a href="https://www.thesun.co.uk/travel/3706959/two-trainspotters-are-on-a-record-breaking-mission-to-visit-all-2563-railway-stations-in-britain-this-summer/" target="_blank">2nd June, The Sun</a></li>
<li><a href="http://www.mirror.co.uk/news/uk-news/train-mad-couple-quest-first-10548921" target="_blank">2nd June, The Mirror</a></li>
{% endif %}{% if site_unix_time > day15mon06 %}
<li><a href="http://www.express.co.uk/news/uk/812387/Couple-train-journey-visit-EVERY-railway-station-Britain" target="_blank">2nd June, Daily Express</a></li>
<li><a href="http://londonist.com/london/videos/video-all-the-stations" target="_blank">2nd June, Londonist</a></li>
{% endif %}{% if site_unix_time > day17mon06 %}
<li><a href="http://www.bbc.co.uk/news/uk-england-cambridgeshire-40124036" target="_blank">3rd June, BBC News</a></li>
<li><a href="http://www.edp24.co.uk/news/next-stop-king-s-lynn-for-couple-visiting-all-of-britain-s-2-563-railway-stations-1-5046916" target="_blank">4th June, Eastern Daily Press</a></li>
{% endif %}
</ul>

<!--
{{site_unix_time}}
{{day12mon06}}
-->