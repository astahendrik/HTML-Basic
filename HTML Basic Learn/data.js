const nama = "Hendrik Asta";
let usia = 2;

let biodata = document.getElementById('biodata');
console.log(biodata);

function generateBiodata(){
    let generasi;

    if(usia > 10 && usia < 18) { 
    generasi = "generasi remaja";
    }
    else if (usia > 18 && usia < 30) {
    generasi = "generasi dewasa";
    }
    else { 
    generasi = "di bawah umur";
    }
    return biodata.innerHTML = generasi;
}

console.log(nama);
console.log(usia);

generateBiodata();
