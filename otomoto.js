// ==UserScript==
// @name       Otomoto.pl - remove top Ad banner
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @icon       http://static-img.otomoto.pl/main/cobrand/1_0/img/favicon.ico
// @icon64     http://static-img.otomoto.pl/main/cobrand/1_0/img/favicon.ico
// @match      http://otomoto.pl/*
// @copyright  2012+, You
// ==/UserScript==
var parent = document.getElementById('topZoneBanner').parentNode;
parent.removeChild(document.getElementById('topZoneBanner'));

var parentU = document.getElementsByClassName('usabilla_live_button_container').parentNode;
parentU.removeChild(document.getElementsByClassName('usabilla_live_button_container'));

