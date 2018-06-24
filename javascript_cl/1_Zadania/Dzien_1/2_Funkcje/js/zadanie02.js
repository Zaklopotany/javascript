function okrag(r) {
  if (typeof r != 'number') {
    return false;
  } else {

    return "pole " + Math.floor(Math.PI * Math.pow(r, 2)) + " obwod " + 2 * Math.PI * r;
  }


}

console.log(okrag(3));
