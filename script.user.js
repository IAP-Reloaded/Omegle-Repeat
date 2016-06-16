// ==UserScript==
// @name         Omegle Repeat
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  try to take over the world!
// @author       You
// @match        http*://www.omegle.com/
// @grant        none
// ==/UserScript==

setInterval(function(){
    $('textarea.chatmsg').val("hi");
    $('button.sendbtn').click();
}, 2500);
