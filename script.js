// tangkap elemen form
let absensi_form = document.getElementById('absensi_form');
let root = document.getElementById('root');

// master data absensi
let data_absensi = [];

// tambahkan event listener untuk form
absensi_form.addEventListener('submit', (event) => {
  // cegah reload
  event.preventDefault();

  let username = event.target.username.value;

  data_absensi.push({
    nama_lengkap: username,
    waktu: formatdate(),
  });

  renderToHtml();
  //reset input
  event.target.username.value = '';

  console.info(data_absensi);
});

// render to html
function renderToHtml() {
  // reset element pada div root
  root.innerHTML = '';

  // mapping data array data_absensi ke root
  data_absensi.forEach((e, i) => {
    root.innerHTML += `
    <div class="card" draggable="true" ondragend="deleteAbsensi(${i})">
     ${e.nama_lengkap} 
     <br/>
     <br/>
     ${e.waktu}
    </div>
    `;
  });
}

// delete absensi
function deleteAbsensi(i) {
  //delete data dalam array sesuai index
  data_absensi.splice(i, 1);

  //panggil kembali function render to html
  renderToHtml();
}

function formatdate() {
  let d = new Date();
  let date = d.toLocaleDateString();
  let time = d.toLocaleTimeString();

  date = `${date} - ${time}`;
  return date;
}
