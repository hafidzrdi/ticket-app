alert("Aplikasi Cek Ticket!!! \n Silahkan inputkan data yang diminta!");

const batasumur = 13;

const nama = prompt(`Masukkan nama anda`);
const umur = prompt(`Masukkan umur anda`);

if(umur > batasumur){
    alert(`Anda diperbolehkan masuk studio`);
    const studio = prompt(`Pilih studio (A/B/C) :`);
        if(studio == "A" || studio == "B" || studio == "C"){
            alert(`Tiket ${nama}, Studio ${studio}, Umur ${umur}`);
        }else{
            alert(`Kode Studio tidak valid`);
        }
}else if(umur <= batasumur && umur > 0){
    alert(`Anda tidak boleh masuk ke studio, karena umur anda tidak memenuhi \n Anda harus berumur diatas ${batasumur}`);
}else if(umur < 0){
    alert(`Umur tidak valid`)
}else{
    alert(`Umur tidak valid`);
}