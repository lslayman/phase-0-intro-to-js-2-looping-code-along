const names = ["Guadalupe", "Ollie", "Aki"];
function writeCards(names, occasion) {
  let cards=[]
  for (let i = 0; i < names.length; i++) {
    cards.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`);
  }
  return cards;
};
console.log(writeCards(names, "surprise"));

function countDown(){
  let countDown = 10;
  while (countDown > -1) {
    console.log(countDown--);
  }
}