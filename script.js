// JavaScript code
document.addEventListener('DOMContentLoaded', function() {
    const luasButton = document.getElementById('hitung-luas');
    luasButton.addEventListener('click', hitungLuasPersegi);
    const resetLuasButton = document.getElementById('tombol-reset-luas');
    resetLuasButton.addEventListener('click', resetLuasPersegi);
  
    const kelilingButton = document.getElementById('hitung-keliling');
    kelilingButton.addEventListener('click', hitungKelilingPersegi);
    const resetKelilingButton = document.getElementById('tombol-reset-keliling');
    resetKelilingButton.addEventListener('click', resetKelilingPersegi);
  });
  
  //Fungsi Hitung Luas
  function hitungLuasPersegi() {
    const sisiInput = document.getElementById('sisi-luas');
    const hasilLuas = document.getElementById('output_luas');
    const error = document.getElementById('error-message-luas');
  
    const sisi = parseFloat(sisiInput.value);
  
    if (isNaN(sisi)) {
      error.textContent = 'Masukkan Nilai Sisi';
      hasilLuas.textContent = '';
    } else {
      const luas = sisi * sisi;
      error.textContent = '';
      hasilLuas.innerHTML = `Luas: sisi x sisi <br>luas: ${sisi} x ${sisi}<br>Luas: ${luas}`;
    }
  }
  //Fungsi reset button luas
  function resetLuasPersegi() {
    const sisiInput = document.getElementById('sisi-luas');
    const hasilLuas = document.getElementById('output_luas');
    const error = document.getElementById('error-message-luas');
  
    sisiInput.value = '';
    hasilLuas.textContent = '';
    error.textContent = '';
  }
  
  //fungsi hitung Keliling
  function hitungKelilingPersegi() {
    const sisiInput = document.getElementById('sisi-keliling');
    const hasilKeliling = document.getElementById('output_keliling');
    const error = document.getElementById('error-message-keliling');
  
    const sisi = parseFloat(sisiInput.value);
  
    if (isNaN(sisi)) {
      error.textContent = 'Masukkan Nilai Sisi';
      hasilKeliling.textContent = '';
    } else {
      const keliling = 4 * sisi;
      error.textContent = '';
      hasilKeliling.innerHTML = `Keliling: 4 x sisi<br>Keliling: 4 x ${sisi}<br>Keliling: ${keliling}`;
    }
  }
  
  //Fungsi reset button keliling
  function resetKelilingPersegi() {
    const sisiInput = document.getElementById('sisi-keliling');
    const hasilKeliling = document.getElementById('output_keliling');
    const error = document.getElementById('error-message-keliling');
  
    sisiInput.value = '';
    hasilKeliling.textContent = '';
    error.textContent = '';
  }
  