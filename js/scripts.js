let popArray = (name, number) => {
  let numArr = []
  let resultArr = []
  for (let i = 0; i <= number; i++) {
    numArr.push(i);
  }
  numArr.forEach(num => {
    let temp = num.toString().split('');
    if (temp.includes('3')) resultArr.push(`Won't you be my neighbor, ${name}?`);
    else if (temp.includes('2')) resultArr.push('Boop!,');
    else if (temp.includes('1')) resultArr.push('Beep!,');
    else resultArr.push(`${num},`);
  })
  return resultArr.join(' ')
}
let typeWriter = (str, parent, index) => {
  let colors = ['yellow', 'blue', 'green']
  let randIndex = Math.floor(Math.random() * 3)
  if (index < str.length) {
    $(parent).append(`<span class=${colors[randIndex]}>${str[index]}</span>`)
    setInterval(typeWriter(str, parent, index + 1), 3000);
  }
}
$(document).ready(() => {
  $('#form').submit(event => {
    event.preventDefault();
    let name = $('#name').val()
    let number = parseInt($("#number").val());
    let result = popArray(name, number);
    typeWriter(result, '#result', 0)
  })
})
