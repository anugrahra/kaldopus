function hitung() {
  // get data
  // general
  let debitipa = document.getElementById("debitipa").value * 1;
  let konsentrasipac = document.getElementById("konsentrasipac").value * 1;
  // sample 1
  let stroke1 = document.getElementById("stroke1").value * 1;
  let volume1 = document.getElementById("volume1").value * 1;
  let waktu1 = document.getElementById("waktu1").value * 1;
  // sample 2
  let stroke2 = document.getElementById("stroke2").value * 1;
  let volume2 = document.getElementById("volume2").value * 1;
  let waktu2 = document.getElementById("waktu2").value * 1;
  // sample 3
  let stroke3 = document.getElementById("stroke3").value * 1;
  let volume3 = document.getElementById("volume3").value * 1;
  let waktu3 = document.getElementById("waktu3").value * 1;
  // sample 4
  let stroke4 = document.getElementById("stroke4").value * 1;
  let volume4 = document.getElementById("volume4").value * 1;
  let waktu4 = document.getElementById("waktu4").value * 1;
  // sample 5
  let stroke5 = document.getElementById("stroke5").value * 1;
  let volume5 = document.getElementById("volume5").value * 1;
  let waktu5 = document.getElementById("waktu5").value * 1;

  // dosering
  let dosering1 = volume1 / waktu1;
  let dosering2 = volume2 / waktu2;
  let dosering3 = volume3 / waktu3;
  let dosering4 = volume4 / waktu4;
  let dosering5 = volume5 / waktu5;

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
      " ml/s</td><td>" +
      (
        ((0 + ((dosering1 - 0) / (stroke1 - 0)) * (strokePompa1[i] - 0)) *
          (konsentrasipac * 10000)) /
        (debitipa * 1000)
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
      " ml/s</td><td>" +
      (
        ((stroke1 +
          ((dosering2 - dosering1) / (stroke2 - stroke1)) *
            (strokePompa2[j] - stroke1)) *
          (konsentrasipac * 10000)) /
        (debitipa * 1000)
      ).toFixed(2) +
      " mg/l</td></tr>";
  }

  let dosisRange2 = document.getElementById("dosisRange2");
  dosisRange2.innerHTML = text2;

  // range from 20 to sample 30
  let strokePompa3 = [];
  for (b = stroke2; b <= stroke3; b += 1) {
    strokePompa3.push(b);
  }

  let text3 = "";
  for (let k = 1; k < strokePompa3.length; k++) {
    text3 +=
      "<tr><td>" +
      strokePompa3[k] +
      " %</td><td>" +
      (
        dosering2 +
        ((dosering3 - dosering2) / (stroke3 - stroke2)) *
          (strokePompa3[k] - stroke2)
      ).toFixed(2) +
      " ml/s</td><td>" +
      (
        ((stroke2 +
          ((dosering3 - dosering2) / (stroke3 - stroke2)) *
            (strokePompa3[k] - stroke2)) *
          (konsentrasipac * 10000)) /
        (debitipa * 1000)
      ).toFixed(2) +
      " mg/l</td></tr>";
  }

  let dosisRange3 = document.getElementById("dosisRange3");
  dosisRange3.innerHTML = text3;

  // range from 30 to sample 40
  let strokePompa4 = [];
  for (c = stroke3; c <= stroke4; c += 1) {
    strokePompa4.push(c);
  }

  let text4 = "";
  for (let l = 1; l < strokePompa4.length; l++) {
    text4 +=
      "<tr><td>" +
      strokePompa4[l] +
      " %</td><td>" +
      (
        dosering3 +
        ((dosering4 - dosering3) / (stroke4 - stroke3)) *
          (strokePompa4[l] - stroke3)
      ).toFixed(2) +
      " ml/s</td><td>" +
      (
        ((stroke3 +
          ((dosering4 - dosering3) / (stroke4 - stroke3)) *
            (strokePompa4[l] - stroke3)) *
          (konsentrasipac * 10000)) /
        (debitipa * 1000)
      ).toFixed(2) +
      " mg/l</td></tr>";
  }

  let dosisRange4 = document.getElementById("dosisRange4");
  dosisRange4.innerHTML = text4;

  // range from 40 to sample 50
  let strokePompa5 = [];
  for (d = stroke4; d <= stroke5; d += 1) {
    strokePompa5.push(d);
  }

  let text5 = "";
  for (let m = 1; m < strokePompa5.length; m++) {
    text5 +=
      "<tr><td>" +
      strokePompa5[m] +
      " %</td><td>" +
      (
        dosering4 +
        ((dosering5 - dosering4) / (stroke5 - stroke4)) *
          (strokePompa5[m] - stroke4)
      ).toFixed(2) +
      " ml/s</td><td>" +
      (
        ((stroke4 +
          ((dosering5 - dosering4) / (stroke5 - stroke4)) *
            (strokePompa4[m] - stroke4)) *
          (konsentrasipac * 10000)) /
        (debitipa * 1000)
      ).toFixed(2) +
      " mg/l</td></tr>";
  }

  let dosisRange5 = document.getElementById("dosisRange5");
  dosisRange5.innerHTML = text5;
}
