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
