// ==UserScript==
// @name       Otomoto.pl - remove top Ad banner
// @namespace  http://use.i.E.your.homepage/
// @version    0.3
// @icon       http://static-img.otomoto.pl/main/cobrand/1_0/img/favicon.ico
// @icon64     http://static-img.otomoto.pl/main/cobrand/1_0/img/favicon.ico
// @match      http://otomoto.pl/*
// @updateURL       https://raw.github.com/buba20/userscripts/master/otomoto.meta.js
// @downloadURL     https://raw.github.com/buba20/userscripts/master/otomoto.js     
// @copyright  2012+, You
// ==/UserScript==
(function () {

    function start() {
        var parent = document.getElementById('topZoneBanner').parentNode;
        parent.removeChild(document.getElementById('topZoneBanner'));

        var parentU = document.getElementsByClassName('usabilla_live_button_container').parentNode;
        parentU.removeChild(document.getElementsByClassName('usabilla_live_button_container'));

    }

    function removeElement(el) {
        var parent = el.parentNode;
        parent.removeChild(el);
    }

    return start();
})();