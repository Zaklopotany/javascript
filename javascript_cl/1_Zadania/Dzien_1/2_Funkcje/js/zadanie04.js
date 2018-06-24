function calculatTip(amount, rating) {
  switch (rating) {
    case "Very good service":
      return amount * 0.25;
    case "Good service":
      return amount * 0.2;
    case "Neutral service":
      return amount * 0.15;
    case "Bad service":
      return amount * 0;
    default:
      return "bledna dane";
  }
}
console.log(calculatTip(100, "Very good service"));
console.log(calculatTip(100, "Good service"));
console.log(calculatTip(100, "Neutral service"));
console.log(calculatTip(100, "Bad service"));
console.log(calculatTip(100, "Bad se22rvice"));
