function getInputValue() {
  var tugas = parseInt(document.getElementById("inputTugas").value);
  var kuis = parseInt(document.getElementById("inputKuis").value);
  var uts = parseInt(document.getElementById("inputUts").value);
  var uas = parseInt(document.getElementById("inputUas").value);
  var nama = document.getElementById("nama").value;
  var nim = document.getElementById("nim").value;
  var nm_mk = document.getElementById("nm_mk").value;
  var ket;

  a = (tugas * 15) / 100;
  b = (kuis * 20) / 100;
  c = (uts * 30) / 100;
  d = (uas * 35) / 100;
  var totalnilai = 0;
  totalnilai = a + b + c + d;

//grading scale
  if(totalnilai <100 && totalnilai>=92 ){
    ip = "A";
    ket = 'Istimewa';
    document.getElementById("output").style.background = "#A6DBBC";
} else if (totalnilai<91 && totalnilai>= 86){
    ip = "A-";
    ket = 'Hampir Istimewa';
    document.getElementById("output").style.background = "#AFD69B"
} else if (totalnilai<85 && totalnilai>= 81){
    ip = "B+";
    ket = 'Baik Sekali';
    document.getElementById("output").style.background = "#A3C3E7"
} else if (totalnilai<80 && totalnilai>= 76){
    ip = "B";
    ket = 'Baik';
    document.getElementById("output").style.background = "B9D7EA"
} else if (totalnilai<75 && totalnilai>= 71){
    ip = "B-";
    ket = 'Cukup Baik';
    document.getElementById("output").style.background = "#FDEB37"
} else if (totalnilai<70 && totalnilai>= 66){
    ip = "C+";
    ket= 'Lebih dari Cukup';
    document.getElementById("output").style.background = "#FFF487"
} else if (totalnilai<65 && totalnilai>= 60){
    ip = "C";
    ket = 'Cukup';
    document.getElementById("output").style.background = "#FFF487"
} else if (totalnilai<59 && totalnilai>= 55){
    ip = "D";
    ket = 'Kurang ';
    document.getElementById("output").style.background = "#B22B27"
} else {
    ip = "E";
    ket = 'GAGAL';
    document.getElementById("output").style.background = "#C71E1E"
}

document.getElementById("hasil").innerHTML = ip;
document.getElementById("totalnilai").innerHTML = totalnilai;
document.getElementById("nama2").innerHTML = nama;
document.getElementById("nim2").innerHTML = nim;
document.getElementById("keterangan").innerHTML = ket;

}

