

function show_image(src, width, height) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    return img
    //document.body.appendChild(img);
}

class Aviones
{
 constructor(n,c,f,p,pa,src,wid,hi)
 {
   this.image = show_image(src,wid,hi);
   this.nombre = n;
   this.categoria = c;
   this.fabricante = f;
   this.precio = p;
   this.pais = pa;
 }
 hablar()
 {
    alert(this.nombre);
 }
 mostrar()
 {
   document.body.appendChild(this.image);
   document.write("<br /><strong>" + this.nombre + "</strong><br />");
   document.write("categoria: " + this.categoria + "<br />");
   document.write("fabricante: " + this.fabricante + "<br />");
   document.write("precio: " + this.precio + "<br />");
   document.write("pais: " + this.pais + "<br />");
 }
}


var su_30_mk2 = new Aviones("su_30_mk2", "caza", "sukoi", "459k", "RUSIA", "https://i.ibb.co/Tkq9pZ4/su-30.jpg",200,200);
var f35 = new Aviones("f35", "caza", "Lockheed_Martin","5089k", "USA", "https://i.ibb.co/WxW7NCp/gringo.jpg",200,200);
var chengdu_j20 = new Aviones("chengdu_j20","caza", "Chengdu_Aircraft_Industry_Group", "34.89k", "CHINA", "https://i.ibb.co/FhJkzpM/chengdu-j-20.jpg",200,200);
var saab_39_gripen = new Aviones("saab_39_gripen","caza", "Saab AB, BAE Systems", "50.89K", "SUECIA", "https://i.ibb.co/H2fx9v9/saab-39-gripen.jpg",200,200);
var planeList = [su_30_mk2, f35, chengdu_j20, saab_39_gripen];
for (let i = 0; i<planeList.length; i++){
  planeList[i].mostrar()
}

console.log(su_30_mk2, f35, chengdu_j20, saab_39_gripen);
