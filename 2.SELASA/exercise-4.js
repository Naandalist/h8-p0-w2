var tanggal= 2; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan= 14; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun= 2019; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

if ((tanggal > 0 && tanggal <32) && (bulan > 0 && bulan < 13) && (tahun >= 1900 && tahun <= 2200)){
    
    switch (bulan){
        case 1:
        console.log(tanggal+" Januari "+ tahun);
        break;
    }

    switch (bulan){
        case 2:
        console.log(tanggal+" Februari "+ tahun);
        break;
    }

    switch (bulan){
        case 3:
        console.log(tanggal+" Maret "+ tahun);
        break;
    }

    switch (bulan){
        case 4:
        console.log(tanggal+" April "+ tahun);
        break;
    }

    switch (bulan){
        case 5:
        console.log(tanggal+ " Mei "+ tahun);
        break;
    }

    switch (bulan){
        case 6:
        console.log(tanggal+" Juni "+ tahun);
        break;
    }

    switch (bulan){
        case 7:
        console.log(tanggal +" Juli "+ tahun);
        break;
    }

    switch (bulan){
        case 8:
        console.log(tanggal +" Agustus "+ tahun);
    }

    switch (bulan){
        case 9:
        console.log(tanggal +" September "+ tahun);
        break;
    }

    switch (bulan){
        case 10:
        console.log(tanggal +" Oktober "+ tahun);
        break;
    }

    switch (bulan){
        case 11:
        console.log(tanggal +" November "+ tahun);
        break;
    }

    switch (bulan){
        case 12:
        console.log(tanggal +" Desember "+ tahun);
        break;
    }
}
else {
    console.log("invalid input");
}
