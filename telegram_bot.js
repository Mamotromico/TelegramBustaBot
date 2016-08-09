#!/usr/bin/env node

var common = require('./common');
var bustabot = require('./bustabot');
var rpgadvbot = require('./rpgadvbot');

if ( typeof String.prototype.startsWith != 'function') {
	String.prototype.startsWith = function(str) {
		return this.indexOf(str) === 0;
	};
}

if ( typeof String.prototype.isCommand != 'function') {
	String.prototype.isCommand = function(str) {
		return (this.startsWith("/" + str) || (this.startsWith("/" + str + "@BustaBot")) );
	};
}

// Will keep scanning for new messages, and answering them.
setInterval(function() {
	// @BustaBot
	common.GetFromBot(bustabot);
	// @rpgadvbot
	common.GetFromBot(rpgadvbot);
}, 100);

