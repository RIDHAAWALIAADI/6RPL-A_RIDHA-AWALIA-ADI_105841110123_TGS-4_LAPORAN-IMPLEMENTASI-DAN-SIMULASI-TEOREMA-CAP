const ctx = document.getElementById("grafik");

const chart = new Chart(ctx,{
type:'line',
data:{
labels:[],
datasets:[{
label:'Jumlah Transaksi',
data:[]
}]
}
});

async function loadData(){

const res = await fetch(
'http://localhost:5001/api/dashboard'
);

const data = await res.json();

document.getElementById("stok").innerText =
data.stok;

document.getElementById("trx").innerText =
data.transaksi;

document.getElementById("mode").innerText =
data.mode;

document.getElementById("network").innerText =
data.network;

chart.data.labels.push(
new Date().toLocaleTimeString()
);

chart.data.datasets[0].data.push(
data.transaksi
);

chart.update();
}

async function beli(){

await fetch(
'http://localhost:5001/api/beli'
);

loadData();
}

setInterval(loadData,2000);

loadData();