let angka1;
let angka2;
let operator;

let final;
let hasil;
//fungsi mengambil angka-angka inputan, dann tampilkan pada layar
function display(angka) {
    final = document.getElementById("hasil").value; //inisiasi awal
    if (final == "0")
        final = angka;
    else
        final = final+angka;
    document.getElementById("hasil").value = final;
    console.log(final);
}

function reset(){
    document.getElementById("hasil").value = "0";
    angka1=0;
    angka2=0;
    operator=null;
}

function koma(){
    
    let cek = document.getElementById("hasil").value;
    //fungsi untuk mengecek apakah sudah ada koma di tampilan
    if(cek.includes(".") == true){ //jika ada, maka tampilan tidak berubah, karena tidak boleh ada 2 koma
        document.getElementById("hasil").value = cek;
    }
    else
        display("."); //jika tidak ada, maka koma ditambahkan
}

function operand(operatorSelect){
    angka1= parseFloat(document.getElementById("hasil").value);
    document.getElementById("hasil").value ="0";

    operator = operatorSelect;
    
}

function perhitungan(){
    angka2= parseFloat(document.getElementById("hasil").value);
    if(operator == "*"){
        hasil=angka1*angka2;
        console.log(hasil);
        document.getElementById("hasil").value = hasil;
    }
    else if(operator == "/"){
        hasil=angka1/angka2;
        console.log(hasil);
        document.getElementById("hasil").value = hasil;
    }
    else if(operator == "-"){
        hasil=angka1-angka2;
        console.log(hasil);
        document.getElementById("hasil").value = hasil;
    }
    else if(operator == "+"){
        hasil=angka1+angka2;
        console.log(hasil);
        document.getElementById("hasil").value = hasil;
    }
    hasil=0;
    angka1=0;
    angka2=0;
    operator=null;
}
