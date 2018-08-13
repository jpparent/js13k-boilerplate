"use strict"

_.Ball = function (x, y){
	this.uid = _.utils.generateUID();
	this.x = x; // position
	this.y = y;
	this.dx = 0; // velocity
	this.dy = 0;
	this.size = 32;
	this.color = _.utils.pickRandomFromObject(COLORS);


	this.update = function(dt) {
		this.dy += GRAVITY * dt; // apply gravity


		this.y += this.dy;


		if (this.y >= 900){
			_.removeEntityWithUID(this.uid);
		}
	}

	this.render = function(dt) {
		_.Draw.circle(this.x, this.y, this.size, this.color);
	}
};