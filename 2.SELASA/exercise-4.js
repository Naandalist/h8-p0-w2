var tanggal= 2; //(dengan angka antara 1 - 31)
var bulan= 13; //(dengan angka antara 1 - 12)
var tahun= 2019; //(dengan angka antara 1900 - 2200)

if ((tanggal > 0 && tanggal <32) && (bulan > 0 && bulan < 13) && (tahun >= 1900 && tahun <= 2200)){
  switch (bulan){
    case 1: { console.log(tanggal +" Januari "+tahun)}
    case 2: {console.log(tanggal +" Februari "+tahun)}
    case 3: {console.log(tanggal +" Maret "+tahun)}
    case 4: {console.log(tanggal +" April "+tahun)}
    case 5: {console.log(tanggal +" Mei "+tahun)}
    case 6: {console.log(tanggal +" Juni "+tahun)}
    case 7: {console.log(tanggal +" Juli "+tahun)}
    case 8: {console.log(tanggal +" Agustus "+tahun)}
    case 9: {console.log(tanggal +" September "+tahun)}
    case 10: {console.log(tanggal +" Oktober "+tahun)}
    case 11: {console.log(tanggal +" November "+tahun)}
    case 12: {console.log(tanggal +" Desember "+tahun)}
    default:  { console.log('input variabel tidak sesuai ketentuan.'); }
  }   
}
else {
  console.log('input tidak sesuai ketentuan.')
}
