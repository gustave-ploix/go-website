export default class Rounds {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  draw(ctx) {
    ctx.save();

    ctx.beginPath();

    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);

    ctx.restore();
  }

  strokeWhite(ctx, index) {

    //grossissement des lignes
    ctx.lineWidth = index;

    //les lignes restent à 4
    // ctx.lineWidth = 4;


    //une ligne sur 2 à 4 les autres à 2
    // if (index % 2 == 1) {
    //   ctx.lineWidth = 4;
    // } else {
    //   ctx.lineWidth = 2;
    // }
    ctx.strokeStyle = "white";

    ctx.stroke();
  }

  strokeBlack(ctx, index) {
    ctx.lineWidth = index + 2;
    ctx.strokeStyle = "black";
    ctx.stroke();
  }

}
