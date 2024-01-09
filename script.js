function hitung() {
  // get numbers
  let konsentrasi = document.getElementById("konsentrasipac").value;
  let stroke = document.getElementById("stroke").value;
  let volume = document.getElementById("volume").value;
  let waktu = document.getElementById("waktu").value;
  let debitIPA = document.getElementById("debitipa").value;
  let dosisRange = document.getElementById("dosisRange");

  //hitung qmax
  let qmaxdetik = (volume / waktu) * (stroke / 100);
  let qmax = (100 / stroke) * qmaxdetik * 3.6;

  //hitung dosis
  let dosis = ((konsentrasi * 10000) / (debitIPA * 1000)) * qmaxdetik;

  // show hasil hitung
  document.getElementById("qmax").innerHTML = qmax + " lph";
  document.getElementById("getstroke").innerHTML = stroke + " %";
  document.getElementById("getwaktu").innerHTML = waktu + " detik";
  document.getElementById("getvolume").innerHTML = volume + " ml";
  document.getElementById("getqmaxdetik").innerHTML = qmaxdetik + " mlps";

  let strokePompa = [];
  for (s = 0; s <= 100; s += 1) {
    strokePompa.push(s);
    console.log(s[strokePompa]);
  }

  let text = "";
  for (let i = 0; i < strokePompa.length; i++) {
    text +=
      "<tr><td>" +
      strokePompa[i] +
      " %</td><td>" +
      ((strokePompa[i] / 100) * dosis).toFixed(2) +
      " mg/l</td></tr>";
  }

  dosisRange.innerHTML = text;
}
