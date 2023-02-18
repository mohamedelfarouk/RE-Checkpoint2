let a = [1, 4, -5, 3, -2, 10, -6, 20];
let a2 = [5, -5];
let a3 = [5, 8];
let a4 = [-5, -5];

function closeToZero(a) {
  let n = a.length;
  let output = "Sum close to zero in the given array is : ";
  let min = a[0] + a[1];
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      let minZ = a[i] + a[j];
      if (Math.abs(minZ) < Math.abs(min)) min = minZ;
    }
  }
  output += min;
  return output;
}

console.log(closeToZero(a));
console.log(closeToZero(a2));
console.log(closeToZero(a3));
console.log(closeToZero(a4));
