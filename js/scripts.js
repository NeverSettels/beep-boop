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



//back end
let typeWriter = (str, parent, index) => {
  if (index < str.length) {
    $(parent).append(`<span id="span${index}">${str[index]}</span>`)
    setInterval(typeWriter(str, parent, index + 1), 3000);
  }
}

let mouseoverEffect = () => {
  $('span').mouseover(event => {
    console.log(event.target.id)
    $(`#${event.target.id}`).addClass(`blue`)
    setTimeout(() => {
      $(`#${event.target.id}`).removeClass(`blue`)
    }, 2000);
  })
}


let mousemoveEffect = () => {
  $('body').mousemove(() => {
    let numLetters = result.length
    let randomLetter = Math.floor(Math.random() * numLetters)
    console.log(`#span${numLetters}`);

    $(`#span${randomLetter}`).addClass(`blue`)
  })
}

$(document).ready(function () {
  $('#form').submit(function (event) {
    event.preventDefault();
    let name = $('#name').val()
    let number = parseInt($("#number").val());
    let result = popArray(name, number);
    typeWriter(result, '#result', 0)
    mouseoverEffect();
    $('#form-cont').slideToggle('.no-show')
    $('#result-cont').slideToggle('.no-show')
    $('#result-cont').attr("style", 'display:flex')

  })

})
