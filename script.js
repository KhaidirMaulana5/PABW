// This function clear all the values
function clearScreen() {
  document.getElementById("result").value = "";
}

// This function display values
function display(value) {
  document.getElementById("result").value += value;
}

// This function evaluates the expression and returns result
function calculate() {
  var p = document.getElementById("result").value;
  var q = eval(p);
  document.getElementById("result").value = q;
}

function display(value) {
  const result = document.getElementById('result');
  // cek apakah layar kosong
  if (result.value === "") {
    // jika kosong dan tombol yang ditekan adalah operator matematika atau titik desimal, jangan tampilkan
    if (value === "+" || value === "-" || value === "*" || value === "/" || value === ".") {
      return;
    }
  } else {
    // jika sudah ada angka, cek apakah sudah ada titik desimal
    const lastChar = result.value.slice(-1);
    if (lastChar === "." || lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
      // jika sudah ada titik desimal dan operasi hitung, jangan tampilkan titik desimal atau operasi matematika yang baru
      if (value === "." || value === "+" || value === "-" || value === "*" || value === "/") {
        return;
      }
    }
    // cek apakah tombol yang ditekan adalah operator matematika atau titik desimal
    if (value === "+" || value === "-" || value === "*" || value === "/" || value === ".") {
      // cek apakah operasi matematika terakhir sudah selesai
      const regex = /[+\-*\/]/;
      const lastOperation = result.value.split(regex).pop();
      if (lastOperation.indexOf(".") !== -1) {
        // jika operasi matematika terakhir sudah mengandung titik desimal, jangan tampilkan lagi
        return;
      }
    }
  }
  result.value += value;
}
