document.addEventListener("DOMContentLoaded", function () {
    // Form Message Us
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

    // Scroll offset agar judul section tidak tertutup header
    function scrollToSectionWithOffset(id) {
        var header = document.querySelector('header');
        var section = document.getElementById(id);
        if (header && section) {
            var headerHeight = header.offsetHeight;
            var sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: sectionTop - headerHeight - 8, // 8px extra space
                behavior: 'smooth'
            });
        }
    }

    document.querySelectorAll('a[href^="#"]').forEach(function(link) {
        link.addEventListener('click', function(e) {
            var href = link.getAttribute('href');
            if (href === '#Profile' || href === '#Portofolio') {
                e.preventDefault();
                scrollToSectionWithOffset(href.substring(1));
            }
        });
    });
});