// ==UserScript==
// @name       Otomoto.pl - remove top Ad banner
// @namespace  http://use.i.E.your.homepage/
// @version    0.5
// @icon       http://static-img.otomoto.pl/main/cobrand/1_0/img/favicon.ico
// @icon64     http://static-img.otomoto.pl/main/cobrand/1_0/img/favicon.ico
// @match      http://otomoto.pl/*
// @updateURL       https://raw.github.com/buba20/userscripts/master/otomoto.meta.js
// @downloadURL     https://raw.github.com/buba20/userscripts/master/otomoto.js     
// @copyright  2012+, You
// ==/UserScript==
(function () {

    function start() {
        removeElement(document.getElementById('topZoneBanner'));
        removeElement(document.getElementsByClassName('om-header-count om-header-counter')[0]);
        removeElement(document.getElementsByClassName('om-btn-mobile om-md')[0]);
    }

    function removeElement(el) {
        if (el) {
            var parent = el.parentNode;
            parent.removeChild(el);
        }
    }

    start();
})();