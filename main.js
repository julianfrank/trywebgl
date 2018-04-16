/** 
 * [Stopping as the atmospheric distance is too steep for colors to be dynamic enough for good effect]
 * 
*/
const canvas = document.getElementById("glcanvas"),
    ctx = canvas.getContext('2d'),
    fov = 45,
    LA = { min: La({ a: 90 - fov }), max: La({ a: 89.9 }) },
    LaDelta = LA.max - LA.min

let r = [[]], g = [[]], b = [[]],
    p = { min: (90 - fov) * Math.PI / 180, max: 90 * Math.PI / 180 },
    y = { min: 0, max: 480 }, x = { min: 0, max: 640 }

for (let i = y.min; i < y.max; i++) {

    let angleFraction = (i / y.max)

    r[i] = Math.round(Math.min(255, 255 * angleFraction))
    g[i] = 0//64 - Math.round(Math.min(64, 64 * angleFraction))
    b[i] = 254 - Math.round(Math.min(255, 255 * angleFraction))
    let c = `rgb(${r[i]},${g[i]},${b[i]})`
    console.log(c)
    drawLine({ sx: x.min, sy: i, ex: x.max, ey: i, c: c })
}


function drawLine({ sx, sy, ex, ey, c = "black" }) {
    ctx.beginPath();
    ctx.moveTo(sx, sy)
    ctx.lineTo(ex, ey)
    ctx.strokeStyle = c
    ctx.stroke();
}
function rad(deg) { return deg * Math.PI / 180 }
function La({ a, h = 60 }) { return Math.round(h / Math.cos(rad(a))) }