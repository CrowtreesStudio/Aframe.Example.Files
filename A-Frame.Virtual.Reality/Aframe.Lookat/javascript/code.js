AFRAME.registerComponent('cursor-listener', {

    init: function () {
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

AFRAME.registerComponent('stare-at', {
    
    schema:{
        target:{default:'empty'},
        playerPos:{default:'empty'}
    },
    
    init: function(){
        let playerCam = document.querySelector(this.data.target);
        this.data.playerPos = playerCam.object3D.position;
    },
    
    tick: function(){
        // el = this element (whatever we're attached to)
        this.el.object3D.lookAt(this.data.playerPos.x, 1.4, this.data.playerPos.z);
    }
    
});
