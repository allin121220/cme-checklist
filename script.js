// Fungsi tambahan jika diperlukan
function validateForm() {
  // Validasi input kosong
  const inputs = document.querySelectorAll('input');
  let isValid = true;
  inputs.forEach(input => {
    if (input.value.trim() === '') {
      alert('Semua field harus diisi!');
      isValid = false;
    }
  });
  return isValid;
}
