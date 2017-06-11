---
layout: default
title: Debug
group: "not_in_local_navigation"
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

- day10mon06: {{day10mon06}}
- day20mon06: {{day20mon06}}
- site.time: {{site.time}}
- site_unix_time: {{site_unix_time}}


{% if site_unix_time > day10mon06 %}
site_unix_time > day10mon06
{% endif %}
