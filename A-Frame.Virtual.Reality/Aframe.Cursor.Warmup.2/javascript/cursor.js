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
        });
    }
});
