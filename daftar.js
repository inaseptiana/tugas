// const btnDaftar = document.querySelector("#btn-daftar");
// btnDaftar.onclick = daftar();
function daftar() {
  const emailInput = document.querySelector("#email1").value;
  const fullNameInput = document.querySelector("#FullName").value;
  const tanggalInput = document.querySelector("#Tanggal").value;
  const passwordInput = document.querySelector("#password").value;
  const kofirmasiPasswordInput = document.querySelector("#konfirmasipassword").value;

  console.log(emailInput, fullNameInput, tanggalInput, passwordInput, kofirmasiPasswordInput);

  const dataLocal = localStorage.getItem("data");
  console.log(dataLocal);
  const dataParse = JSON.parse(dataLocal);

  console.log(dataParse);
}
