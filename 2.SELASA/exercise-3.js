var nama= "Nanda"; // isikan nama dengan string apa saja
var peran= "Tabib"; // isi peran dengan penyihir, ksatria, dan tabib

if (nama === "" && peran === ""){
    console.log("Nama harus diisi!");
}

else if(nama != "" && peran === ""){
    console.log("Halo " +nama+ ", Pilih peranmu untuk memulai game!");
}
else if (peran === "Ksatria"){
    console.log("Selamat datang di Dunia Proxytina, "+ nama);
    console.log("Halo "+ peran+" "+ nama+", kamu dapat menyerang dengan senjatamu." )
}
else if(peran === "Tabib"){
    console.log("Selamat datang di Dunia Proxytina, "+nama);
    console.log("Halo "+ peran+" "+ nama+", kamu akan membantu temanmu yang terluka.")
}
else if(peran === "Penyihir"){
    console.log("Selamat datang di Dunia Proxytina, "+nama);
    console.log("Halo "+ peran+" "+ nama+". ciptakan keajaiban yang membantu kemenanganmu!")
}
else{
    console.log("invalid")
}