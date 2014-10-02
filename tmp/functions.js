

var guardian="Rocket"
function speak (from, message) {
this.speaker = "Me" ;
	return from + " : " + message; 
}
var guard = new speak(guardian, "I am groot");
console.log(guard.speaker);
