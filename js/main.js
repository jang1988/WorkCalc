// Элементы формы
const squareInput = document.querySelector('#square-input');
const squareRange = document.querySelector('#square-range');
const weithInput = document.querySelector('#weith-input');
const weithRange = document.querySelector('#weith-range');
const peepleInput = document.querySelector('#peeple-input');
const peepleRange = document.querySelector('#peeple-range');
const inputs = document.querySelectorAll('input');
// Радио кнопки
const radioType = document.querySelectorAll('input[name="type"]');
let radioText = document.querySelector('#raio-text');
// Чек боксы
const ceilings = document.querySelector('input[name="ceiling"]');
const walls = document.querySelector('input[name="walls"]');
const floors = document.querySelector('input[name="floor"]');

const basePriceHour = 47.61;
const basePriceWeith = 120;
// Связка range с текстовым полем
// Слушаем событие Input
squareRange.addEventListener('input', function () {
  squareInput.value = squareRange.value;
});
// Связка текстового поля с range
squareInput.addEventListener('input', function () {
  squareRange.value = squareInput.value;
});

weithRange.addEventListener('input', function () {
  weithInput.value = weithRange.value;
});
weithInput.addEventListener('input', function () {
  weithRange.value = weithInput.value;
});

peepleRange.addEventListener('input', function () {
  peepleInput.value = peepleRange.value;
});
peepleInput.addEventListener('input', function () {
  peepleRange.value = peepleInput.value;
});

function calculate() {
  let priceWeith = (parseInt(weithRange.value) * 120) / peepleRange.value;
  let totalPrice = basePriceHour * parseInt(squareRange.value) + priceWeith;

  for (const radio of radioType) {   
    if (radio.checked) {
      radioText.innerText = radio.value;
    }
  }

  if (ceilings.checked) {
    totalPrice += parseInt(ceilings.value);
  }

  if (walls.checked) {
    totalPrice += parseInt(walls.value);
  }

  if (floors.checked) {
    totalPrice += parseInt(floors.value);
  }

  let finalPrice = document.querySelector('#total-price');
  const formatter = new Intl.NumberFormat('ru');
  finalPrice.innerText = formatter.format(totalPrice);
}
calculate();

for (const input of inputs) {
  input.addEventListener('input', function () {
    calculate();
  });
}
