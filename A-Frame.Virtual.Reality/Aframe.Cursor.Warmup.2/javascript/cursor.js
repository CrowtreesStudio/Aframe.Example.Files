// Global variable & array - bad practice really but it works
var propertyXYZ = -1;
var PLACES = ['japan', 'egypt', 'tron', 'forest'];

AFRAME.registerComponent('scenechange', {
    places: function(){
        propertyXYZ++;// increment by one        
        propertyXYZ = propertyXYZ % PLACES.length;
        let newPlace = PLACES[propertyXYZ];
        return newPlace;
    }
 });


AFRAME.registerComponent('cursor-listener', {

    init: function () {
        let env = document.getElementById('scene');
        console.log(env);
        var lastIndex = -1;
        var lastPlaceIndex = 0;
        var COLORS = ['purple', 'green', 'blue'];
        var message = "Now it's ";
        
        this.el.addEventListener('click', function (evt) {
            // colour change
            lastIndex = (lastIndex + 1) % COLORS.length;
            this.setAttribute('material', 'color', COLORS[lastIndex]);
            document.getElementById("text").setAttribute("value", message+COLORS[lastIndex]);
            
            // Change the scene        
            let change = document.querySelector('[scenechange]').components.scenechange.places();
            env.setAttribute('environment', {preset:change});
            
        });
    }
});
