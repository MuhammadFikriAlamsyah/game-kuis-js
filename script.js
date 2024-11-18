const pelajaran1 = [
    { pertanyaan: "2 x 2 + 2 x 0 = ?", jawaban: ["2", "4", "0", "6"], benar: "4" },
    { pertanyaan: "Ibu memiliki 12 kue. Jika kue tersebut dibagikan sama rata kepada 3 anak, berapa banyak kue yang didapat setiap anak?", jawaban: ["6", "3", "4", "5"], benar: "4" },
    { pertanyaan: "jika 1/4 bagian dari sebuah pizza dipotong menjadi 3 bagian sama besar, berapa bagian dari keseluruhan pizza setiap potongan kecilnya?", jawaban: ["1/2", "1/12", "1/5", "1/10"], benar: "1/12" },
    { pertanyaan: "Umur Budi 3 kali umur Ani. Jika umur Ani 5 tahun, berapa umur Budi?", jawaban: ["5 tahun", "13 tahun", "10 tahun", "15 tahun"], benar: "15 tahun" },
    { pertanyaan: "Sebuah persegi panjang memiliki panjang 8 cm dan lebar 5 cm. Berapa cm² luas persegi panjang tersebut?", jawaban: ["40cm", "25cm", "50cm", "45cm"], benar: "40cm" }
];

const pelajaran2 = [
    { pertanyaan: "What do you call a meal that you eat in the morning?", jawaban: ["Supper", "Breakfast", "Lunch", "Dinner"], benar: "Breakfast" },
    { pertanyaan: "Which sentence is correct?", jawaban: ["she is eating an apple now.", "she eats an apple now.", "she ate an apple now.", "she will eat an apple now."], benar: "she is eating an apple now." },
    { pertanyaan: "What is the synonym of 'happy'?", jawaban: ["tired", "angry", "sad", "joyful"], benar: "joyful" },
    { pertanyaan: "If I had won the lottery, I ________ a big house.", jawaban: ["bought", "will buy", "would buy", "buying"], benar: "would buy" },
    { pertanyaan: "What can we do to reduce air pollution?", jawaban: ["Burn more fossil fuels.", "Use more plastic bags.", "Plant more trees.", "Drive cars more often."], benar: "Plant more trees." }
];

const pelajaran3 = [
    { pertanyaan: "Siapa yang dianggap sebagai penemu bola lampu?", jawaban: ["Albert Einstein", "Alexander Graham Bell", "Thomas Edison", "Leonardo Da Vinci"], benar: "Thomas Edison" },
    { pertanyaan: "Penemuan mesin cetak oleh Johannes Gutenberg sangat berpengaruh terhadap...", jawaban: ["Perkembangan Pertanian", "Penyebaran Ilmu Pengetahuan", "Penjelajahan Samudra", "Pembangunan Kota"], benar: "Penyebaran Ilmu Pengetahuan" },
    { pertanyaan: "Siapakah tokoh yang terkenal dengan teori relativitas?", jawaban: ["Nicolaus Copernicus", "Galileo Galilei", "Isaac Newton", "Albert Einstein"], benar: "Albert Einstein" },
    { pertanyaan: "Penemuan kompas sangat membantu dalam bidang...", jawaban: ["Astronomi", "Pertanian", "Kedokteran", "Navigasi"], benar: "Navigasi" },
    { pertanyaan: "Siapa yang pertama kali melakukan perjalanan mengelilingi dunia?", jawaban: ["Christopher Columbus", "Ferdinand Magellan", "Marco Polo", "Vasco da Gama"], benar: "Ferdinand Magellan" }
];

const pelajaran4 = [
    { pertanyaan: "Bagian terbesar dari atom adalah...", jawaban: ["Proton", "Neutron", "Elektron", "Inti Atom"], benar: "Inti Atom" },
    { pertanyaan: "Proses perubahan wujud benda dari cair menjadi gas disebut...", jawaban: ["Mengembun", "Membeku", "Menyublim", "Menguap"], benar: "Menguap" },
    { pertanyaan: "Satuan dasar untuk mengukur panjang adalah...", jawaban: ["Meter", "Gram", "Liter", "Detik"], benar: "Meter" },
    { pertanyaan: "Cahaya merambat paling cepat di dalam...", jawaban: ["Air", "Udara", "Vakum", "Kaca"], benar: "Vakum" },
    { pertanyaan: "Energi yang dihasilkan dari pembakaran bahan bakar fosil adalah...", jawaban: ["Energi Potensial", "Energi Panas", "Energi Listrik", "Energi Kinetik"], benar: "Energi Panas" }
];

let skor = 0;
let indeksPertanyaan = 0;
let pelajaranAktif = null;

const pertanyaanElement = document.getElementById("pertanyaan");
const pilihanJawabanElement = document.getElementById("pilihan-jawaban");
const nextButton = document.getElementById("next");


function tampilkanPertanyaan() {
    const pertanyaanSaatIni = pelajaranAktif[indeksPertanyaan];
    pertanyaanElement.textContent = pertanyaanSaatIni.pertanyaan;

    pilihanJawabanElement.innerHTML = "";
    pertanyaanSaatIni.jawaban.forEach(jawaban => {
        const button = document.createElement("button");
        button.textContent = jawaban;
        button.addEventListener("click", () => {
            periksaJawaban(jawaban);
        });
        pilihanJawabanElement.appendChild(button);
    });
}

function periksaJawaban(jawaban) {
    const pertanyaanSaatIni = pelajaranAktif[indeksPertanyaan];
    
    if (jawaban === undefined) {
        indeksPertanyaan+1;
    }
    if (jawaban === pertanyaanSaatIni.benar) {
        skor++;
    }
    indeksPertanyaan++;
    if (indeksPertanyaan < pelajaranAktif.length) {
        tampilkanPertanyaan();
    } else {
        
        window.location.href = "hasil.html?skor=" + skor;
    }
}

nextButton.addEventListener("click", () => {
    periksaJawaban(); 
});

document.getElementById("pelajaran1").addEventListener("click", () => {
    pelajaranAktif = pelajaran1;
    tampilkanPertanyaan();  
});

document.getElementById("pelajaran2").addEventListener("click", () => {
    pelajaranAktif = pelajaran2;
    tampilkanPertanyaan();
});

document.getElementById("pelajaran3").addEventListener("click", () => {
    pelajaranAktif = pelajaran3;
    tampilkanPertanyaan();
});

document.getElementById("pelajaran4").addEventListener("click", () => {
    pelajaranAktif = pelajaran4;
    tampilkanPertanyaan();
});