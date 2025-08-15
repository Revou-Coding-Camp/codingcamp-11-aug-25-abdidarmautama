document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const namaInput = document.getElementById("nama");
    const tanggalInput = document.getElementById("tanggal");
    const pesanInput = document.getElementById("pesan");
    const genderInputs = document.getElementsByName("gender");
    // Kolom kedua pada section message
    const kolomKedua = document.querySelectorAll("section.bg-white.shadow.flex > div")[1];

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let genderValue = "";
        for (const radio of genderInputs) {
            if (radio.checked) {
                genderValue = radio.value;
                break;
            }
        }

        // Buat tampilan hasil
        kolomKedua.innerHTML = `
            <div>
                <h3 class="text-lg font-bold mb-2">Data Anda:</h3>
                <p><strong>Nama:</strong> ${namaInput.value}</p>
                <p><strong>Tanggal Lahir:</strong> ${tanggalInput.value}</p>
                <p><strong>Jenis Kelamin:</strong> ${genderValue}</p>
                <p><strong>Pesan:</strong> ${pesanInput.value}</p>
            </div>
        `;
    });
});