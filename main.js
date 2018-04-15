const canvas = document.getElementById("glcanvas"),
    gl = canvas.getContext('webgl2', { premultipliedAlpha: false });

const gpu = new GPU({
    canvas,
    webGl: gl
});
const krender = gpu.createKernel(function (x) {
    this.color(this.thread.x / 500, this.thread.y / 500, x[0], x[1]);
})
    .setOutput([500, 500])
    .setGraphical(true);

console.debug(krender)
document.body.appendChild(krender.getCanvas())