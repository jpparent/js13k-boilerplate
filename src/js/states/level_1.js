(function(){

	var level1 = function(){
		this.name = "Level 1";
		Events(this);

		this.init = function(){
			_.entities = [];
			_.spawnBall();
		};

		this.update = function(dt){
			for (var i = _.entities.length - 1; i >= 0; i--) {
				_.entities[i].update(dt);
			}

			_.checkCollisions(_.entities);
		};

		this.render = function(dt){
			_.Draw.clear();

			for (var i = _.entities.length - 1; i >= 0; i--) {
				_.entities[i].render(dt);
			}
		}

		this.on("start", function(){

			this.init();
			console.log("starting " + this.name);

		}, this);

		this.on("exit", function(){

			console.log("leaving " + this.name);

		}, this);

		this.on("click", function(data){
			_.spawnBumber(data.x, data.y);
		}, this);
	}

	_.states["level1"] = new level1();

})();