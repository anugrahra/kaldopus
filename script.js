function hitungkonsentrasi() {
  // get data
  // konsentrasi
  let hliquidpac =  document.getElementById("hliquidpac").value * 1
  let beratjenis =  document.getElementById("beratjenis").value * 1
  // Cek apakah input valid
  if (isNaN(hliquidpac)) {
    alert("Masukkan angka yang valid untuk tinggi Liquid PAC.");
    return;
  }

  // --- MASUKKAN RUMUSMU DI SINI ---
  // Misal kita buat contoh rumus sederhana:
  // konsentrasi = tinggiPAC * 0.5 (ganti ini sesuai kebutuhanmu)
  const konsentrasi = (3.14 * 89 * 89 * hliquidpac / 1000 * beratjenis / 500 * 100).toFixed(3) ;

  // Masukkan hasil ke input 'konsentrasipac'
  document.getElementById("konsentrasipac").value = konsentrasi; // hasil dibulatkan ke 2 desimal
}

function hitung() {
  // get data
  // general
  let debitipa = document.getElementById("debitipa").value * 1;
  let konsentrasipac = document.getElementById("konsentrasipac").value * 1;

  // pompa 1
  // sample 1
  let stroke1 = document.getElementById("stroke1").value * 1;
  let volume1 = document.getElementById("volume1").value * 1;
  let waktu1 = document.getElementById("waktu1").value * 1;
  // sample 2
  let stroke2 = document.getElementById("stroke2").value * 1;
  let volume2 = document.getElementById("volume2").value * 1;
  let waktu2 = document.getElementById("waktu2").value * 1;

  // dosering
  let dosering1 = volume1 / waktu1;
  let dosering2 = volume2 / waktu2;

  // menentukan range data
  // range from 0 to sample 1
  let strokePompa1 = [];
  for (s = 0; s <= stroke1; s += 1) {
    strokePompa1.push(s);
  }

  let text1 = "";
  for (let i = 0; i < strokePompa1.length; i++) {
    text1 +=
      "<tr><td>" +
      strokePompa1[i] +
      " %</td><td>" +
      (0 + ((dosering1 - 0) / (stroke1 - 0)) * (strokePompa1[i] - 0)).toFixed(
        2
      ) +
      " ml/s</td><td class='table-warning'>" +
      Math.max(
      (  
          (
          ((0 + ((dosering1 - 0) / (stroke1 - 0)) * (strokePompa1[i] - 0)) *
            (konsentrasipac * 10000)) /
          (debitipa * 1000)
          ) - 21.5
        ), 0
      ).toFixed(2) +
      " mg/l</td></tr>";
  }

  let dosisRange1 = document.getElementById("dosisRange1");
  dosisRange1.innerHTML = text1;

  // range from 10 to sample 20
  let strokePompa2 = [];
  for (a = stroke1; a <= stroke2; a += 1) {
    strokePompa2.push(a);
  }

  let text2 = "";
  for (let j = 1; j < strokePompa2.length; j++) {
    text2 +=
      "<tr><td>" +
      strokePompa2[j] +
      " %</td><td>" +
      (
        dosering1 +
        ((dosering2 - dosering1) / (stroke2 - stroke1)) *
          (strokePompa2[j] - stroke1)
      ).toFixed(2) +
      " ml/s</td><td class='table-warning'>" +
      // (0 + ((dosering1 - 0) / (stroke1 - 0)) * (strokePompa1[i] - 0)
      (
        ((dosering1 +
          ((dosering2 - dosering1) / (stroke2 - stroke1)) *
            (strokePompa2[j] - stroke1)) *
          (konsentrasipac * 10000)) /
        (debitipa * 1000)
      ).toFixed(2) +
      " mg/l</td></tr>";
  }

  let dosisRange2 = document.getElementById("dosisRange2");
  dosisRange2.innerHTML = text2;
}

function hitung2() {
  // get data
  // general
  let debitipa = document.getElementById("debitipa").value * 1;
  let konsentrasipac = document.getElementById("konsentrasipac").value * 1;

  // pompa 2
  // sample 1
  let stroke3 = document.getElementById("stroke3").value * 1;
  let volume3 = document.getElementById("volume3").value * 1;
  let waktu3 = document.getElementById("waktu3").value * 1;
  // sample 2
  let stroke4 = document.getElementById("stroke4").value * 1;
  let volume4 = document.getElementById("volume4").value * 1;
  let waktu4 = document.getElementById("waktu4").value * 1;

  // dosering
  let dosering3 = volume3 / waktu3;
  let dosering4 = volume4 / waktu4;

  // menentukan range data
  // range from 0 to sample 1
  let strokePompa3 = [];
  for (s = 0; s <= stroke3; s += 1) {
    strokePompa3.push(s);
  }

  let text3 = "";
  for (let i = 0; i < strokePompa3.length; i++) {
    text3 +=
      "<tr><td>" +
      strokePompa3[i] +
      " %</td><td>" +
      (0 + ((dosering3 - 0) / (stroke3 - 0)) * (strokePompa3[i] - 0)).toFixed(
        2
      ) +
      " ml/s</td><td class='table-warning'>" +
        Math.max(
        (
          (
          ((0 + ((dosering3 - 0) / (stroke3 - 0)) * (strokePompa3[i] - 0)) *
            (konsentrasipac * 10000)) /
          (debitipa * 1000)
          ) - 21.5
        ), 0
      ).toFixed(2) +
      " mg/l</td></tr>";
  }

  let dosisRange3 = document.getElementById("dosisRange3");
  dosisRange3.innerHTML = text3;

  // range from 10 to sample 20
  let strokePompa4 = [];
  for (a = stroke3; a <= stroke4; a += 1) {
    strokePompa4.push(a);
  }

  let text4 = "";
  for (let j = 1; j < strokePompa4.length; j++) {
    text4 +=
      "<tr><td>" +
      strokePompa4[j] +
      " %</td><td>" +
      (
        dosering3 +
        ((dosering4 - dosering3) / (stroke4 - stroke3)) *
          (strokePompa4[j] - stroke3)
      ).toFixed(2) +
      " ml/s</td><td class='table-warning'>" +
      // (0 + ((dosering1 - 0) / (stroke1 - 0)) * (strokePompa1[i] - 0)
      (
        ((dosering3 +
          ((dosering4 - dosering3) / (stroke4 - stroke3)) *
            (strokePompa4[j] - stroke3)) *
          (konsentrasipac * 10000)) /
        (debitipa * 1000)
      ).toFixed(2) +
      " mg/l</td></tr>";
  }

  let dosisRange4 = document.getElementById("dosisRange4");
  dosisRange4.innerHTML = text4;
}

const popup = new Popup({
  id: "disclaimer",
  title: "بِسْــــــــــــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ",
  content:
    "Ingat untuk selalu melihat Tabel Kalibrasi dalam menentukan nilai-nilai yang akan di-input.<br><br>Kalibrasi dilakukan minimal 1 (satu) minggu sekali.<br><br>Selalu menyala abangkuh 🔥🔥🔥<br>dan Tetap ilmu padi 🌾🌾🌾",
  sideMargin: "2.9vw",
  titleColor: "#fff",
  textColor: "#fff",
  backgroundColor: "#222",
  closeColor: "#fff",
  fontSizeMultiplier: 1.2,
  linkColor: "#888",
  showImmediately: true,
});
