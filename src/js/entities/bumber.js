"use strict"

_.Bumber = function(x, y){
	this.uid = _.utils.generateUID();
	this.x = x;
	this.y = y;
	this.size = 64;
	this.color = '#FFF';

	this.update = function(dt) {

	}

	this.render = function(dt) {
		_.Draw.circle(this.x, this.y, this.size, this.color);
	}

	// onCollision...
};