 AFRAME.registerComponent('scene-change', {
     init: function(){
         console.log("Hello from scene-change");
//          var el = this.el;
//         el.setAttribute('environment', {preset:'egypt'});
//          console.log(el);
     }
 });


AFRAME.registerComponent('cursor-listener', {

    init: function () {
        let env = document.getElementById('scene');
        console.log(env);
        var lastIndex = -1;
        var lastPlaceIndex = -1;
        var COLORS = ['purple', 'green', 'blue'];
        var PLACES = ['japan', 'egypt', 'tron', 'forest'];
        var message = "Now it's ";
        this.el.addEventListener('click', function (evt) {
            lastIndex = (lastIndex + 1) % COLORS.length;
            this.setAttribute('material', 'color', COLORS[lastIndex]);
            console.log('I was clicked at: ', evt.detail.intersection.point);
            document.getElementById("text").setAttribute("value", message+COLORS[lastIndex]);
            
            lastPlaceIndex = (lastPlaceIndex + 1) % PLACES.length;
            env.setAttribute('environment', {preset:PLACES[lastPlaceIndex]});
            
        });
    }
});
