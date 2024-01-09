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
  // let qmaxdetik = volume / stroke / 100 / waktu;
  let qmax = (100 / stroke) * qmaxdetik * 3.6;
  let qmldetik = qmax / 3.6;
  let qmaxdetik2 = qmldetik * (1 / 100);

  console.log(qmaxdetik);

  //hitung dosis
  let dosering = volume / waktu;
  // let dosis = ((konsentrasi * 10000) / (debitIPA * 1000)) * qmaxdetik;
  let dosis = (qmaxdetik2 * konsentrasi * 10000) / debitIPA;

  // show hasil hitung
  document.getElementById("qmax").innerHTML = qmax + " l";
  document.getElementById("getstroke").innerHTML = stroke + " %";
  document.getElementById("getwaktu").innerHTML = waktu + " detik";
  document.getElementById("getvolume").innerHTML = volume + " ml";
  document.getElementById("getqmaxdetik").innerHTML = qmaxdetik2 + " ml";
  document.getElementById("getqmldetik").innerHTML = qmldetik + " ml";

  let strokePompa = [];
  for (s = 0; s <= 100; s += 1) {
    strokePompa.push(s);
  }

  let text = "";
  for (let i = 0; i < strokePompa.length; i++) {
    text +=
      "<tr><td>" +
      strokePompa[i] +
      " %</td><td>" +
      ((dosis * strokePompa[i]) / 100).toFixed(2) +
      " mg/l</td></tr>";
  }

  dosisRange.innerHTML = text;
}
