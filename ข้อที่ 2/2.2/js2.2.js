let obj = {};

function isEmpty(obj) {
  for (let key in obj) {
    return true;
  }
  return false;
}

console.log(isEmpty(obj));