// var nama="edutech";


// console.log(nama);
// const= Private
// let = Protected
// var = public``

// 2
// const penduduk= document.getElementById('a');

// const tampil = "Jeremy";
// const lihat ="edutech";
// // penduduk.innerHTML="Nama Saya:"+tampil+"Tinggal Di jakarta";

// penduduk.innerHTML=`Nama Saya adalah:  ${lihat} tinggal di jakpus`;

// 3


const daftar = document.getElementById('pesan');


function inginPesan (nama_makanan, jenis_makanan) {
	return{
		nama_makanan,
		jenis_makanan
	}
}

var lihatPesan= inginPesan("Nasi Goreng", "Makanan Besar");

daftar.innerHTML=`Nama Makanan:${lihatPesan.nama_makanan} Jenis Makanan:${lihatPesan.jenis_makanan}`;


// 4



// const hobiKita=document.getElementById('hobi');

// const macamHobi=["ngoding", "bola", "tari"];
// // macamHobi.push('ngeGame');
// // hobiKita.innerHTML=macamHobi[3];
// console.log(macamHobi[0]);
// 4.1

// var design="<ol>";


// const macamHobi=["ngoding", "bola", "tari"];
// macamHobi.push('ngeGame');
// macamHobi.foreach((hobiApa)=>{
// 	design+=`<li>` +hobiApa+ `</li>;
// });



// 5

// const portofolio = document.getElementById('keahlian');
// 	//pendeklarasian
// // const keahlianUser = ["php","java","pyhton"];
// // for (var i = 0; i < keahlianUser.length; i++) {
// //     console.log(keahlianUser[i]);
// // }
// // portofolio.innerHTML = keahlianUser[1];

// const keahlianUser = ["php","java","pyhton"];
// keahlianUser.forEach((user) => {
//     console.log(`${user}`);
//  });

// const data = keahlianUser.map(user => {
//   return user;
// })

// // portofolio.innerHTML = data;
// //pengambilan satu 
// const dataFix = keahlianUser.filter(user => {
//   return user === "pyhton";
// });

// console.log(dataFix);
// portofolio.innerHTML = dataFix;

 // 6

// const dataWarga=document.getElementById('dataPenduduk');

// class Rt{
// 	constructor(nama, alamat, id){
// 		this.nama=nama;
// 		this.alamat=alamat;
// 		this.id=id;
// 	}


// 	Rw(){
// 		console.log(this.nama+'DataWarga RT 02'+ this.id);
// 	}
// }


// let tambahwarga =new Rt('rian', 'cipondoh,',5);
// tambahwarga.Rw();





// class wargaBaru extends Rt{
// constructor(nama,domisili){
// 	super(nama);
// 	this.domisili=domisili;
// }
// 	daftarWarga(){
// 		console.log('Selamat '+this.nama +' anda telah menjadi warga'+this.domisili);
// 	}

// }
// let wargaFix= new wargaBaru('Jono',"Jawa Barat");
// wargaFix.daftarWarga();





