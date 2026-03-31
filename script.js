function kirimData(event) {
  event.preventDefault(); // biar tidak reload

  var nama = document.getElementById("nama").value;
  var nim = document.getElementById("nim").value;
  var angkatan = document.getElementById("angkatan").value;
  var minat = document.querySelector("input[name='minat']:checked");
  var tanggal = document.getElementById("tanggal").value;
  var alamat = document.getElementById("alamat").value;

  // validasi
  if (!nama || !nim || !angkatan || !minat || !tanggal || !alamat) {
    alert("Mohon lengkapi semua data!");
    return;
  }

  var nilaiMinat = minat.value;

  alert(
    "Nama : " + nama +
    "\nNIM : " + nim +
    "\nPeminatan : " + nilaiMinat +
    "\nAngkatan : " + angkatan +
    "\nTanggal : " + tanggal +
    "\nAlamat : " + alamat
  );

  clearForm();
}

function clearForm() {
  document.getElementById("nama").value = "";
  document.getElementById("nim").value = "";
  document.getElementById("angkatan").value = "";
  document.getElementById("tanggal").value = "";
  document.getElementById("alamat").value = "";

  var radio = document.querySelectorAll('input[name="minat"]');
  radio.forEach(function(r) {
    r.checked = false;
  });
}