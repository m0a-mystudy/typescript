var Sample  = module.exports = function(message) {
	this.message = message
}

Sample.prototype.echo = function(){
	console.log(`message = ${this.message}`);
}