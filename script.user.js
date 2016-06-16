// ==UserScript==
// @name         Omegle Repeat
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        http*://*omegle.com/
// @grant        none
// ==/UserScript==

$('textarea.chatmsg').val("hi");
$('button.sendbtn').click();
