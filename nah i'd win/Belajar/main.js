let SaldoAwal = 10000
let SaldoTambahan = 70000
let hutang = 5000
var SaldoAkhir = SaldoAwal + SaldoTambahan - hutang

prompt(alert("halo"))

let Days = new Date().getDay()
const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum`at', 'Sabtu'];
const dayIndex = new Date().getDay();
const dayName = days[dayIndex];

alert(`Hari ini adalah hari ${dayName}`);


alert(
`Saya Memiliki Saldo Awal Rp ${SaldoAwal} dan Saldo tambahan Rp ${SaldoTambahan} 
menjadi Rp ${SaldoAkhir} `)

console.log('halo')