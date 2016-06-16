// ==UserScript==
// @name         Omegle Repeat
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  try to take over the world!
// @author       You
// @match        http*://www.omegle.com/
// @grant        none
// ==/UserScript==

$('textarea.chatmsg').val("hi");
$('button.sendbtn').click();
