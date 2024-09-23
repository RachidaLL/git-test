let cash = true;
let cb = true;

let course = (cash|| cb);

console.log('course:', course);

if (course == true) {
    console.log('vous pouvez faire les courses');
}else {
    console.log('il vous faut un moyen de paiement');
}

let eau = true;
let elec = true;

//est ce que j'ai coupé l'eau et l'électricité?
let resultat = (eau && elec);

console.log(resultat);

if (resultat == true) {
    console.log("vous pouvez partir en vacances");
} else {
    console.log("vous n'avez pas coupé l'eau");
    

    if (!eau) { // equivalent à (eau = false)}
    console.log("vous n'avez pas coupé l'eau");
        }

    if (!elec) {//equivalent à (elec = false)}
    console.log("vous n'avez pas coupé l'electricité");
    }
  }