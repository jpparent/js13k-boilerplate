(function(){

	var level1 = function(){
		this.name = "Level 1";
		Events(this);

		this.on("start", function(){

			console.log(this.name);

		}, this);

		this.on("exit", function(){

			console.log("leaving " + this.name);

		}, this);
	}

	_.states.push(new level1());

})();