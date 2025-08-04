// Converter
const binInput = document.getElementById('bin');
const decInput = document.getElementById('dec');
const hexInput = document.getElementById('hex');

function convertFromBinary(value) {
  try {
    const dec = parseInt(value, 2);
    if (!isNaN(dec)) {
      decInput.value = dec;
      hexInput.value = dec.toString(16).toUpperCase();
    }
  } catch {}
}

function convertFromDecimal(value) {
  const dec = parseInt(value, 10);
  if (!isNaN(dec)) {
    binInput.value = dec.toString(2);
    hexInput.value = dec.toString(16).toUpperCase();
  }
}

function convertFromHex(value) {
  try {
    const dec = parseInt(value, 16);
    if (!isNaN(dec)) {
      decInput.value = dec;
      binInput.value = dec.toString(2);
    }
  } catch {}
}

binInput.addEventListener('input', e => convertFromBinary(e.target.value));
decInput.addEventListener('input', e => convertFromDecimal(e.target.value));
hexInput.addEventListener('input', e => convertFromHex(e.target.value));

// Calculator
const binary1 = document.getElementById('binary1');
const binary2 = document.getElementById('binary2');
const operation = document.getElementById('operation');
const result = document.getElementById('calcResult');

function binaryOperation() {
  let a = binary1.value;
  let b = binary2.value;

  if (!/^[01]+$/.test(a) || !/^[01]+$/.test(b)) {
    result.textContent = 'Invalid binary input';
    return;
  }

  let x = BigInt('0b' + a);
  let y = BigInt('0b' + b);
  let res;

  switch (operation.value) {
    case 'add':
      res = x + y;
      break;
    case 'and':
      res = x & y;
      break;
    case 'or':
      res = x | y;
      break;
    case 'xor':
      res = x ^ y;
      break;
  }

  result.textContent = res.toString(2);
}

binary1.addEventListener('input', binaryOperation);
binary2.addEventListener('input', binaryOperation);
operation.addEventListener('change', binaryOperation);
