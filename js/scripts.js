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


$(document).ready(() => {
  $('#form').submit(event => {
    event.preventDefault();
    var name = $('#name').val()
    var number = parseInt($("#number").val());
    var result = popArray(name, number);
    $("#result").html(`<p>${result}</p>`)
  })
})
