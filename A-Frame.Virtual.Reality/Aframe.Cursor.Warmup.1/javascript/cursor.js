AFRAME.registerComponent('cursor-listener', {
    init: function () {
        var lastIndex = -1;
        var COLORS = ['purple', 'green', 'blue'];
        var message = "Now it's ";
        this.el.addEventListener('click', function (evt) {
            lastIndex = (lastIndex + 1) % COLORS.length;
            this.setAttribute('material', 'color', COLORS[lastIndex]);
            console.log('I was clicked at: ', evt.detail.intersection.point);
            document.getElementById("text").setAttribute("value", message+COLORS[lastIndex]);
        });
    }
});
