// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== MOBILE NAV TOGGLE =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('active'));
});

// ===== MENU TABS =====
const menuTabs = document.querySelectorAll('.menu-tab');
const menuCards = document.querySelectorAll('.menu-card');

menuTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        menuTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const category = tab.dataset.category;

        menuCards.forEach(card => {
            if (card.dataset.category === category) {
                card.style.display = '';
                card.style.animation = 'fadeInUp 0.4s ease forwards';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// ===== BOOK DATA =====
const books = [
    {
        id: 1,
        title: "Laskar Pelangi",
        author: "Andrea Hirata",
        genre: "fiksi",
        color: "#1565C0",
        emoji: "📘",
        chapters: [
            { title: "Bab 1: Sepuluh Murid Baru", content: "<h2>Bab 1: Sepuluh Murid Baru</h2><p>Pagi itu, sepuluh anak Melayu Belitong berkumpul di sebuah sekolah tua yang hampir roboh. Mereka adalah murid-murid baru SD Muhammadiyah yang dipimpin oleh Bu Muslimah, seorang guru muda yang penuh semangat.</p><p>Sekolah itu berdiri kokoh meski dimakan usia. Atapnya bocor di sana-sini, dindingnya retak, dan lantainya sudah tidak rata. Tapi di dalam sekolah itulah, sepuluh anak ini akan menemukan arti sesungguhnya dari persahabatan dan perjuangan.</p><p>Lintang, anak nelayan dari pesisir pantai, harus menempuh perjalanan 80 kilometer setiap hari untuk bisa sampai ke sekolah. Ia bangun sebelum subuh, mengayuh sepeda tuanya melewati jalan berlubang dan hutan yang gelap.</p><p>\"Pendidikan adalah jendela dunia,\" kata Bu Muslimah pada hari pertama mereka. Kata-kata itu terukir dalam di hati setiap muridnya.</p><p>Ikal, sang narator, duduk di bangku paling depan. Matanya berbinar menatap papan tulis yang sudah kusam. Ia tahu bahwa di sekolah inilah masa depannya akan dimulai.</p>" },
            { title: "Bab 2: Lintang dan Harimau", content: "<h2>Bab 2: Lintang dan Harimau</h2><p>Lintang Samudra Basara bin Raja Muda Husin adalah murid paling cerdas di kelas. Otaknya cemerlang seperti bintang di langit malam Belitong.</p><p>Setiap pagi, ia mengayuh sepedanya melintasi hutan bakau yang lebat. Suatu hari, ia bertemu seekor buaya besar yang menghalangi jalannya. Dengan tenang, ia menunggu hingga buaya itu pergi.</p><p>\"Aku tidak boleh takut,\" katanya pada diri sendiri. \"Bu Muslimah menunggu di sekolah.\"</p><p>Perjalanannya tidak pernah mudah. Hujan lebat, jalan berlumpur, bahkan ancaman binatang buas tidak bisa menghentikan tekadnya untuk belajar. Baginya, sekolah adalah segalanya.</p><p>Di kelas, Lintang selalu yang pertama mengangkat tangan ketika Bu Muslimah mengajukan pertanyaan. Jawaban-jawabannya selalu tepat dan mendalam, membuat teman-temannya kagum.</p>" },
            { title: "Bab 3: Sahara", content: "<h2>Bab 3: Sahara</h2><p>Sahara adalah satu-satunya perempuan di antara sepuluh laskar pelangi. Namanya secantik padang pasir yang menjadi asalnya. Ia bersuara lantang dan tidak pernah takut untuk berbicara.</p><p>\"Kenapa perempuan tidak boleh bermimpi besar?\" tanyanya suatu hari pada Bu Muslimah. Pertanyaan itu membuat seluruh kelas terdiam.</p><p>Bu Muslimah tersenyum. \"Sahara, kamu boleh bermimpi setinggi langit. Tidak ada yang bisa membatasi mimpimu.\"</p><p>Sahara menjadi inspirasi bagi teman-temannya. Ia membuktikan bahwa keterbatasan bukanlah halangan. Dengan semangat dan kerja kerasnya, ia menjadi salah satu murid terbaik di kelasnya.</p><p>Persahabatannya dengan Ikal dan Lintang menjadi fondasi kuat bagi Laskar Pelangi. Mereka saling mendukung, saling menguatkan, dan bersama-sama menghadapi setiap tantangan yang datang.</p>" },
            { title: "Bab 4: Mahar", content: "<h2>Bab 4: Mahar</h2><p>Mahar adalah seniman di antara Laskar Pelangi. Ia memiliki bakat luar biasa dalam seni dan musik yang tidak tertandingi oleh siapapun di Belitong.</p><p>Dengan gitar tuanya, ia menciptakan melodi-melodi indah yang membuat siapapun yang mendengarnya terpesona. Suaranya merdu, jari-jarinya lincah memetik senar.</p><p>\"Seni adalah bahasa jiwa,\" katanya sambil memainkan gitarnya di bawah pohon filicium. Teman-temannya duduk mengelilinginya, menikmati alunan musik yang mengalir seperti air sungai.</p><p>Mahar juga seorang pemimpi besar. Ia bermimpi suatu hari akan tampil di panggung besar, memainkan musik untuk ribuan orang. Mimpi itu mungkin terdengar mustahil bagi anak dari pulau kecil, tapi Mahar percaya bahwa seni tidak mengenal batas.</p><p>Karya-karyanya menjadi kebanggaan SD Muhammadiyah. Setiap lomba seni, Mahar selalu membawa pulang piala untuk sekolahnya yang sederhana.</p>" },
            { title: "Bab 5: Mimpi-Mimpi Laskar Pelangi", content: "<h2>Bab 5: Mimpi-Mimpi Laskar Pelangi</h2><p>Sepuluh anak itu memiliki mimpi masing-masing. Mimpi yang terlahir dari sekolah tua yang hampir rubuh, dari guru yang tidak pernah menyerah, dan dari persahabatan yang tidak mengenal batas.</p><p>Lintang bermimpi menjadi matematikawan terkenal. Sahara bermimpi menjadi hakim yang adil. Mahar bermimpi menjadi seniman besar. Dan Ikal bermimpi menjadi penulis.</p><p>\"Mimpi tidak membutuhkan uang,\" kata Bu Muslimah suatu sore. \"Yang dibutuhkan hanyalah keberanian untuk bermimpi dan ketekunan untuk mewujudkannya.\"</p><p>Di bawah pelangi Belitong yang melengkung indah, sepuluh anak itu berjanji pada diri mereka sendiri: mereka akan berjuang sekuat tenaga untuk mewujudkan mimpi-mimpi mereka.</p><p>Dan pelangi itu menjadi saksi bisu dari tekad sepuluh anak yang luar biasa. Dari sinilah nama \"Laskar Pelangi\" lahir—pasukan kecil yang berjuang di bawah naungan pelangi harapan.</p>" }
        ]
    },
    {
        id: 2,
        title: "Filosofi Teras",
        author: "Henry Manampiring",
        genre: "self-help",
        color: "#2E7D32",
        emoji: "📗",
        chapters: [
            { title: "Bab 1: Apa Itu Stoisisme?", content: "<h2>Bab 1: Apa Itu Stoisisme?</h2><p>Stoisisme adalah salah satu aliran filsafat Yunani kuno yang didirikan oleh Zeno dari Citium sekitar tahun 300 SM. Filosofi ini mengajarkan bahwa kebajikan adalah satu-satunya kebaikan sejati, dan bahwa kita harus fokus pada hal-hal yang bisa kita kendalikan.</p><p>Bayangkan Anda sedang terjebak macet di jalan. Anda bisa marah-marah dan membunyikan klakson tanpa henti, atau Anda bisa menerima situasi tersebut dan menggunakan waktu menunggu untuk mendengarkan podcast atau audiobook.</p><p>Itulah inti dari Stoisisme: fokus pada respons kita terhadap situasi, bukan pada situasi itu sendiri. Kita tidak bisa mengendalikan kemacetan, tapi kita bisa mengendalikan bagaimana kita meresponsnya.</p><p>Marcus Aurelius, salah satu kaisar Romawi terbesar, adalah seorang Stoa. Di tengah tekanan memimpin kerajaan terbesar di dunia, ia menulis refleksi-refleksi pribadinya yang kini kita kenal sebagai \"Meditations\".</p><p>Pertanyaan mendasar Stoisisme: \"Apakah hal ini dalam kendali saya?\" Jika ya, lakukanlah yang terbaik. Jika tidak, lepaskanlah.</p>" },
            { title: "Bab 2: Dikotomi Kendali", content: "<h2>Bab 2: Dikotomi Kendali</h2><p>Konsep paling fundamental dalam Stoisisme adalah Dikotomi Kendali. Epictetus, seorang filsuf Stoa yang dulunya seorang budak, mengajarkan bahwa segala sesuatu di dunia ini terbagi menjadi dua: hal yang bisa kita kendalikan dan hal yang tidak bisa kita kendalikan.</p><p>Yang bisa kita kendalikan: pikiran kita, tindakan kita, nilai-nilai kita, respons kita. Yang tidak bisa kita kendalikan: cuaca, perilaku orang lain, masa lalu, kematian.</p><p>Kebanyakan penderitaan manusia berasal dari mencoba mengendalikan hal-hal yang di luar kendali kita. Kita stres karena atasan yang galak, padahal kita tidak bisa mengubah karakter atasan kita.</p><p>Yang bisa kita lakukan adalah mengubah cara kita merespons. Mungkin kita bisa berkomunikasi dengan lebih baik, atau mungkin kita perlu mencari lingkungan kerja yang lebih sehat.</p><p>\"Bukan hal-hal yang mengganggu kita, melainkan penilaian kita terhadap hal-hal itulah yang mengganggu kita.\" - Epictetus</p>" },
            { title: "Bab 3: Negative Visualization", content: "<h2>Bab 3: Negative Visualization</h2><p>Salah satu teknik Stoisisme yang paling powerful adalah Negative Visualization atau dalam bahasa Latin disebut 'premeditatio malorum'. Teknik ini mengajak kita untuk membayangkan skenario terburuk yang mungkin terjadi.</p><p>Kedengarannya pesimistis? Justru sebaliknya. Dengan membayangkan hal-hal buruk yang bisa terjadi, kita menjadi lebih bersyukur atas apa yang kita miliki saat ini.</p><p>Bayangkan sejenak: bagaimana jika besok Anda kehilangan pekerjaan? Bagaimana jika orang yang Anda cintai pergi? Dengan membayangkan ini, bukan berarti kita menginginkannya terjadi, melainkan kita menyiapkan mental dan menghargai setiap momen yang kita miliki.</p><p>Marcus Aurelius setiap pagi mengingatkan dirinya sendiri bahwa ia mungkin akan bertemu dengan orang-orang yang tidak menyenangkan hari itu. Dengan persiapan mental ini, ia tidak lagi terkejut atau marah ketika hal itu benar-benar terjadi.</p><p>Teknik ini juga membantu kita mengatasi ketakutan. Ketika kita sudah membayangkan skenario terburuk dan menyiapkan diri untuk menghadapinya, ketakutan kita secara alami berkurang.</p>" },
            { title: "Bab 4: Amor Fati", content: "<h2>Bab 4: Amor Fati</h2><p>Amor Fati—cinta pada takdir. Konsep ini mengajarkan kita untuk tidak hanya menerima apa yang terjadi, tapi mencintainya. Setiap peristiwa, baik yang menyenangkan maupun menyakitkan, adalah bagian dari perjalanan hidup kita.</p><p>Friedrich Nietzsche, meskipun bukan seorang Stoa, mengembangkan konsep ini dengan indah: \"Formula kebesaran manusia adalah amor fati: bahwa seseorang tidak menginginkan sesuatu yang berbeda, tidak di masa depan, tidak di masa lalu, tidak untuk selamanya.\"</p><p>Ini bukan tentang pasrah. Ini tentang mengubah perspektif. Kehilangan pekerjaan bisa menjadi awal dari karir yang lebih baik. Patah hati bisa menjadi pelajaran untuk hubungan yang lebih sehat.</p><p>Para Stoa percaya bahwa alam semesta memiliki rencana yang lebih besar dari yang bisa kita pahami. Tugas kita bukan mempertanyakan rencana itu, melainkan menjalaninya dengan sebaik-baiknya.</p><p>Seperti yang dikatakan Seneca: \"Hidup ini seperti drama panggung. Bukan soal berapa lama drama itu berlangsung, tapi seberapa baik kita memainkan peran kita.\"</p>" }
        ]
    },
    {
        id: 3,
        title: "Bumi Manusia",
        author: "Pramoedya Ananta Toer",
        genre: "sastra",
        color: "#C62828",
        emoji: "📕",
        chapters: [
            { title: "Bab 1: Minke", content: "<h2>Bab 1: Minke</h2><p>Aku, Minke, seorang pribumi yang beruntung bisa bersekolah di HBS—Hogere Burger School, sekolah untuk kaum Eropa di Hindia Belanda. Di sana aku belajar ilmu pengetahuan modern, bahasa Belanda, dan cara berpikir Barat.</p><p>Tapi aku tetaplah seorang Jawa. Darah Jawa mengalir di nadiku, dan adat istiadat Jawa tertanam dalam jiwaku. Di antara dua dunia inilah aku hidup—dunia modern Eropa dan dunia tradisional Jawa.</p><p>Tahun itu, tahun yang mengubah seluruh hidupku, dimulai ketika aku diajak temanku Robert Suurhof untuk mengunjungi sebuah rumah mewah di Wonokromo, Surabaya.</p><p>\"Kau harus bertemu Nyai Ontosoroh,\" kata Robert dengan nada misterius. \"Dia bukan nyai biasa.\"</p><p>Aku tidak tahu bahwa kunjungan itu akan membuka babak baru dalam hidupku. Babak yang penuh gairah, perjuangan, dan air mata.</p>" },
            { title: "Bab 2: Nyai Ontosoroh", content: "<h2>Bab 2: Nyai Ontosoroh</h2><p>Nyai Ontosoroh. Nama itu bergema di seluruh Surabaya. Seorang perempuan pribumi yang menjalankan perusahaan besar milik Tuan Herman Mellema, seorang Belanda.</p><p>Ketika aku pertama kali melihatnya, aku terpesona. Bukan hanya karena kecantikannya, tapi karena pancaran kecerdasan dan kekuatan yang terpancar dari matanya.</p><p>\"Selamat datang di rumah kami, Tuan Minke,\" sapanya dalam bahasa Melayu yang fasih. Suaranya tenang tapi penuh wibawa.</p><p>Di balik gelar \"Nyai\" yang dianggap hina oleh masyarakat, tersimpan seorang perempuan yang luar biasa. Ia mengurus bisnis, mendidik anak-anaknya, dan menghadapi diskriminasi dengan kepala tegak.</p><p>\"Aku tidak pernah memilih untuk menjadi nyai,\" katanya suatu malam. \"Tapi aku memilih untuk tidak membiarkan nasibku menghancurkanku.\"</p>" },
            { title: "Bab 3: Annelies", content: "<h2>Bab 3: Annelies</h2><p>Annelies Mellema, putri Nyai Ontosoroh dan Tuan Mellema. Gadis berparas Indo-Eropa yang cantik jelita, dengan mata biru dan rambut keemasan. Tapi di balik kecantikannya, tersimpan jiwa yang rapuh.</p><p>Aku jatuh cinta padanya pada pandangan pertama. Dan ia—entah karena takdir atau kebetulan—juga menaruh hati padaku.</p><p>\"Mas Minke,\" panggilnya dengan suara lembut yang selalu membuatku tersenyum. \"Apakah Mas akan selalu ada untukku?\"</p><p>Cinta kami berkembang di bawah naungan pohon-pohon rindang Wonokromo. Di antara aroma kopi dan bunga melati, kami membangun dunia kecil kami sendiri.</p><p>Tapi dunia di luar sana tidak seindah taman Wonokromo. Dunia kolonial yang kejam, hukum yang tidak adil, dan prasangka ras mengintai cinta kami seperti awan gelap yang siap menurunkan badai.</p>" },
            { title: "Bab 4: Perjuangan", content: "<h2>Bab 4: Perjuangan</h2><p>Hukum kolonial tidak berpihak pada kami. Sebagai pribumi, aku tidak memiliki hak yang sama dengan orang Eropa. Pernikahan kami dipertanyakan, keberadaan kami sebagai keluarga dianggap tidak sah.</p><p>Nyai Ontosoroh mengajariku arti perjuangan yang sesungguhnya. \"Minke,\" katanya, \"kita hidup di zaman di mana keadilan harus diperjuangkan, bukan ditunggu.\"</p><p>Ia berjuang melawan sistem yang menindas dengan senjata yang paling kuat: pengetahuan dan keberanian. Ia membaca buku-buku hukum, mempelajari hak-haknya, dan tidak pernah gentar menghadapi pengadilan kolonial.</p><p>Aku belajar bahwa menjadi manusia merdeka bukan soal status atau keturunan. Ini soal keberanian untuk berdiri tegak dan memperjuangkan apa yang benar, meskipun seluruh dunia melawan kita.</p><p>Dan dari sinilah perjalanan panjangku sebagai pejuang kemanusiaan dimulai.</p>" }
        ]
    },
    {
        id: 4,
        title: "Atomic Habits",
        author: "James Clear",
        genre: "self-help",
        color: "#F57F17",
        emoji: "📙",
        chapters: [
            { title: "Bab 1: Kekuatan Kebiasaan Kecil", content: "<h2>Bab 1: Kekuatan Kebiasaan Kecil</h2><p>Bayangkan sebuah pesawat terbang dari Los Angeles ke New York. Jika pilot mengubah arah hanya 3,5 derajat ke selatan saat lepas landas, pesawat itu akan mendarat di Washington D.C. alih-alih New York. Perubahan kecil yang nyaris tak terlihat saat awal, tapi menghasilkan perbedaan ratusan kilometer di akhir.</p><p>Begitulah cara kebiasaan bekerja. Perubahan 1% setiap hari mungkin terlihat tidak berarti, tapi dalam setahun, Anda akan menjadi 37 kali lebih baik.</p><p>Masalahnya, kebanyakan orang menginginkan perubahan besar secara instan. Mereka ingin menurunkan berat badan 20 kg dalam sebulan, atau menjadi jutawan dalam setahun. Ketika hasilnya tidak terlihat segera, mereka menyerah.</p><p>Kuncinya adalah fokus pada sistem, bukan tujuan. Tujuan menentukan arah, tapi sistem menentukan kemajuan. Anda tidak perlu mengubah hidup sekaligus—cukup ubah satu kebiasaan kecil hari ini.</p><p>\"Kebiasaan adalah bunga berbunga dari identitas Anda. Setiap tindakan adalah suara untuk tipe orang yang ingin Anda jadi.\"</p>" },
            { title: "Bab 2: Empat Hukum Perubahan Perilaku", content: "<h2>Bab 2: Empat Hukum Perubahan Perilaku</h2><p>Setiap kebiasaan mengikuti siklus empat langkah: Isyarat, Keinginan, Respons, dan Hadiah. Memahami siklus ini adalah kunci untuk membangun kebiasaan baik dan menghancurkan kebiasaan buruk.</p><p><strong>Hukum 1: Buat Terlihat (Isyarat)</strong><br>Letakkan buku yang ingin Anda baca di meja kerja. Siapkan pakaian olahraga di samping tempat tidur. Buat isyarat untuk kebiasaan baik semudah mungkin terlihat.</p><p><strong>Hukum 2: Buat Menarik (Keinginan)</strong><br>Gabungkan kebiasaan baru dengan sesuatu yang Anda sukai. Dengarkan podcast favorit hanya saat berolahraga. Minum kopi spesial hanya saat membaca buku.</p><p><strong>Hukum 3: Buat Mudah (Respons)</strong><br>Kurangi hambatan. Aturan dua menit: mulailah kebiasaan baru dengan versi yang hanya membutuhkan dua menit. \"Baca sebelum tidur\" menjadi \"baca satu halaman sebelum tidur.\"</p><p><strong>Hukum 4: Buat Memuaskan (Hadiah)</strong><br>Beri diri Anda hadiah kecil setiap kali menyelesaikan kebiasaan. Gunakan habit tracker untuk melihat progres Anda. Jangan putus rantai!</p>" },
            { title: "Bab 3: Identitas dan Kebiasaan", content: "<h2>Bab 3: Identitas dan Kebiasaan</h2><p>Ada tiga lapisan perubahan perilaku: hasil (apa yang Anda dapatkan), proses (apa yang Anda lakukan), dan identitas (apa yang Anda percaya). Kebanyakan orang memulai dari hasil, tapi perubahan yang bertahan lama dimulai dari identitas.</p><p>Jangan berkata \"Saya ingin berhenti merokok.\" Katakan \"Saya bukan perokok.\" Perbedaannya sangat besar. Yang pertama adalah tentang hasil, yang kedua adalah tentang identitas.</p><p>Setiap tindakan yang Anda lakukan adalah bukti untuk identitas yang Anda bangun. Setiap kali Anda menulis satu halaman, Anda membuktikan bahwa Anda adalah seorang penulis. Setiap kali Anda berolahraga, Anda membuktikan bahwa Anda adalah orang yang aktif.</p><p>Perubahan sejati adalah perubahan identitas. Bukan \"saya ingin membaca lebih banyak buku\" tapi \"saya adalah pembaca.\" Bukan \"saya ingin lari marathon\" tapi \"saya adalah pelari.\"</p><p>Identitas baru Anda membutuhkan bukti. Dan bukti itu adalah kebiasaan-kebiasaan kecil yang Anda lakukan setiap hari. Satu tindakan tidak mengubah keyakinan, tapi ratusan tindakan kecil yang konsisten akan membentuk identitas baru yang kuat.</p>" }
        ]
    },
    {
        id: 5,
        title: "Laut Bercerita",
        author: "Leila S. Chudori",
        genre: "fiksi",
        color: "#0277BD",
        emoji: "📘",
        chapters: [
            { title: "Bab 1: Biru Laut", content: "<h2>Bab 1: Biru Laut</h2><p>Laut Biru Laut. Nama yang indah untuk seorang pemuda yang hidupnya jauh dari keindahan. Aku adalah mahasiswa yang percaya bahwa perubahan dimulai dari keberanian untuk bicara.</p><p>Di kampusku, kami membentuk kelompok diskusi kecil. Kami membaca buku-buku yang dilarang, mendiskusikan ide-ide yang dianggap berbahaya, dan bermimpi tentang Indonesia yang lebih adil.</p><p>\"Kebenaran tidak bisa dibungkam selamanya,\" kata Alex, sahabatku, sambil menyalakan rokok kreteknya. Asapnya melayang di udara malam yang dingin, seperti harapan-harapan kami yang rapuh.</p><p>Kami tahu risikonya. Di luar sana, mata-mata mengintai di setiap sudut. Teman-teman kami menghilang satu per satu tanpa jejak. Tapi kami tetap bertemu, tetap berdiskusi, tetap bermimpi.</p><p>Karena berhenti bermimpi sama artinya dengan mati.</p>" },
            { title: "Bab 2: Suara yang Hilang", content: "<h2>Bab 2: Suara yang Hilang</h2><p>Mereka datang pada dini hari, ketika dunia masih tertidur. Pintu kamar kosku didobrak. Mata-mata gelap menyerbuku dari segala arah.</p><p>\"Ikut kami,\" kata sebuah suara tanpa wajah. Dingin. Tanpa emosi. Seperti mesin yang diprogram untuk menghancurkan.</p><p>Aku tidak diberi kesempatan untuk bertanya. Tidak ada surat penangkapan. Tidak ada alasan resmi. Hanya kegelapan yang menelan seluruh eksistensiku.</p><p>Di tempat itu—tempat yang tak memiliki nama dan tak ada di peta manapun—aku bertemu dengan wajah-wajah yang sama ketakutannya denganku. Mahasiswa, aktivis, guru, bahkan petani yang mungkin hanya kebetulan berada di tempat yang salah pada waktu yang salah.</p><p>Kami semua memiliki satu kesamaan: suara kami telah direnggut. Dan kami tidak tahu apakah kami akan pernah mendapatkannya kembali.</p>" },
            { title: "Bab 3: Menunggu", content: "<h2>Bab 3: Menunggu</h2><p>Keluarga kami menunggu. Ibu pergi ke setiap kantor pemerintah, membawa fotoku, bertanya dengan suara bergetar: \"Di mana anak saya?\"</p><p>Tidak ada yang menjawab. Pintu-pintu ditutup. Telepon diputus. Surat-surat dikembalikan tanpa dibuka.</p><p>Adikku, Asmara Jati, menyimpan semua kenanganku dalam sebuah kotak. Foto-foto masa kecilku, surat-surat yang pernah kutulis, bahkan sebuah kelereng yang dulu sering kami mainkan bersama.</p><p>\"Kakak pasti pulang,\" katanya setiap malam sebelum tidur. Tapi semakin hari, suaranya semakin pelan, semakin tidak yakin.</p><p>Menunggu adalah bentuk penyiksaan yang paling kejam. Tidak tahu apakah orang yang kau cintai masih hidup atau sudah mati. Tidak bisa berduka karena tidak ada kepastian. Tergantung di antara harapan dan keputusasaan.</p>" }
        ]
    },
    {
        id: 6,
        title: "Rich Dad Poor Dad",
        author: "Robert T. Kiyosaki",
        genre: "bisnis",
        color: "#6A1B9A",
        emoji: "📔",
        chapters: [
            { title: "Bab 1: Dua Ayah", content: "<h2>Bab 1: Dua Ayah</h2><p>Aku memiliki dua ayah: satu kaya, satu miskin. Ayah kandungku adalah seorang profesor berpendidikan tinggi—ia adalah 'Ayah Miskin'. Ayah dari sahabatku Mike adalah seorang pengusaha tanpa gelar sarjana—ia adalah 'Ayah Kaya'.</p><p>Keduanya bekerja keras. Keduanya berpenghasilan besar. Tapi pandangan mereka tentang uang sangat berbeda.</p><p>Ayah Miskin berkata: \"Cintai pekerjaanmu.\" Ayah Kaya berkata: \"Cintai kebebasanmu.\"</p><p>Ayah Miskin berkata: \"Aku tidak mampu membelinya.\" Ayah Kaya berkata: \"Bagaimana caranya agar aku mampu membelinya?\"</p><p>Perbedaan kecil dalam kata-kata ini menciptakan perbedaan besar dalam kehidupan finansial mereka. Satu pertanyaan menutup pikiran, yang lain membuka kemungkinan.</p><p>Sejak usia 9 tahun, aku memutuskan untuk belajar dari keduanya, dan memilih sendiri jalan mana yang akan kuambil.</p>" },
            { title: "Bab 2: Orang Kaya Tidak Bekerja untuk Uang", content: "<h2>Bab 2: Orang Kaya Tidak Bekerja untuk Uang</h2><p>Pelajaran pertama dari Ayah Kaya datang dalam cara yang tidak terduga. Ia mempekerjakan aku dan Mike di tokonya dengan upah yang sangat kecil—10 sen per jam.</p><p>Setelah beberapa minggu, aku marah dan ingin berhenti. \"Kau berjanji akan mengajariku tentang uang, tapi kau hanya mengeksploitasiku!\" protesku.</p><p>Ayah Kaya tersenyum. \"Kau baru saja merasakan apa yang dirasakan jutaan orang setiap hari. Mereka bekerja keras, merasa tidak dihargai, dan menuntut bayaran lebih tinggi. Lingkaran ini tidak pernah berakhir.\"</p><p>Pelajarannya sederhana tapi mengubah segalanya: orang miskin dan kelas menengah bekerja untuk uang. Orang kaya membuat uang bekerja untuk mereka.</p><p>\"Jika kau tidak bisa menghasilkan uang tanpa pekerjaan, kau akan menghabiskan seluruh hidupmu bekerja untuk orang lain,\" kata Ayah Kaya sambil menunjuk laporan keuangannya.</p>" },
            { title: "Bab 3: Aset vs Liabilitas", content: "<h2>Bab 3: Aset vs Liabilitas</h2><p>Ayah Kaya menggambar dua diagram sederhana di selembar kertas. \"Inilah satu-satunya pelajaran keuangan yang perlu kau pahami,\" katanya.</p><p><strong>Aset</strong> adalah sesuatu yang memasukkan uang ke kantongmu. <strong>Liabilitas</strong> adalah sesuatu yang mengeluarkan uang dari kantongmu.</p><p>Orang kaya membeli aset. Orang miskin membeli liabilitas yang mereka kira aset.</p><p>Rumah mewah? Jika kau tinggal di dalamnya dan membayar cicilan setiap bulan, itu liabilitas. Jika kau menyewakannya dan mendapatkan penghasilan pasif, itu aset.</p><p>Mobil baru? Nilainya turun begitu keluar dari dealer. Itu liabilitas. Tapi jika mobil itu digunakan untuk bisnis yang menghasilkan lebih dari biaya operasionalnya, ia berubah menjadi aset.</p><p>\"Orang kaya fokus membangun kolom aset mereka,\" kata Ayah Kaya. \"Orang miskin dan kelas menengah fokus menambah pengeluaran.\"</p>" }
        ]
    },
    {
        id: 7,
        title: "Perahu Kertas",
        author: "Dee Lestari",
        genre: "fiksi",
        color: "#00695C",
        emoji: "📗",
        chapters: [
            { title: "Bab 1: Kugy", content: "<h2>Bab 1: Kugy</h2><p>Kugy adalah gadis yang aneh. Setidaknya begitulah pendapat kebanyakan orang. Ia suka menulis dongeng, berbicara dengan dewa-dewa khayalannya, dan melipat perahu kertas yang ia hanyutkan di sungai.</p><p>\"Setiap perahu kertas membawa sebuah cerita,\" katanya sambil meletakkan perahu mungilnya di permukaan air. \"Dan sungai akan membawanya ke tempat yang tepat.\"</p><p>Di usia 18 tahun, Kugy masuk universitas di Bandung. Ia memilih jurusan sastra—tentu saja—karena menulis adalah satu-satunya hal yang ia tahu cara melakukannya dengan baik.</p><p>Di kota dingin itu, di antara deretan kafe dan jalanan berbatu, Kugy menemukan dunia baru yang penuh warna. Dan juga seseorang yang akan mengubah hidupnya.</p><p>Tapi Kugy belum tahu itu. Ia masih sibuk melipat perahu-perahu kertasnya, menuliskan kisah-kisah yang belum pernah diceritakan siapapun.</p>" },
            { title: "Bab 2: Keenan", content: "<h2>Bab 2: Keenan</h2><p>Keenan bermimpi menjadi pelukis. Tapi ayahnya bermimpi Keenan menjadi insinyur. Di antara dua mimpi yang bertabrakan ini, Keenan terombang-ambing.</p><p>Ia masuk jurusan teknik seperti keinginan ayahnya, tapi hatinya selalu di kanvas. Setiap malam, diam-diam ia melukis di kamar kosnya yang sempit, mencurahkan semua perasaan yang tidak bisa ia ungkapkan dengan kata-kata.</p><p>Ketika pertama kali bertemu Kugy, Keenan merasa menemukan warna yang selama ini hilang dari paletnya. Gadis itu seperti cat air yang berlari bebas di atas kertas—tidak bisa diprediksi, tidak bisa dikendalikan, tapi indah.</p><p>\"Kamu melukis?\" tanya Kugy sambil mengintip kanvas Keenan. \"Lukisanmu seperti puisi yang diam. Indah tapi menyimpan banyak cerita.\"</p><p>Tidak ada yang pernah mendeskripsikan lukisannya seperti itu. Dan sejak saat itu, Keenan tahu bahwa Kugy adalah seseorang yang istimewa.</p>" },
            { title: "Bab 3: Amsterdam", content: "<h2>Bab 3: Amsterdam</h2><p>Hidup memisahkan mereka. Keenan mendapat kesempatan untuk melanjutkan studi seni di Amsterdam, sementara Kugy tetap di Bandung, menulis dongeng-dongengnya.</p><p>Di Amsterdam, Keenan menemukan dunia seni yang luas dan menakjubkan. Museum-museum megah, galeri-galeri kontemporer, dan seniman-seniman dari seluruh dunia. Ia seperti ikan yang akhirnya menemukan lautnya.</p><p>Tapi di sudut hatinya, selalu ada ruang kosong yang hanya bisa diisi oleh gadis yang suka melipat perahu kertas.</p><p>Kugy terus menulis. Dongeng-dongengnya semakin matang, semakin dalam, semakin menyentuh. Ia menulis tentang cinta yang terpisah jarak, tentang mimpi yang harus dikejar, tentang perahu-perahu kertas yang berlayar melintasi lautan.</p><p>\"Jika cinta itu nyata,\" tulisnya di salah satu dongengnya, \"maka jarak hanyalah ujian, bukan akhir cerita.\"</p>" }
        ]
    },
    {
        id: 8,
        title: "The Lean Startup",
        author: "Eric Ries",
        genre: "bisnis",
        color: "#AD1457",
        emoji: "📕",
        chapters: [
            { title: "Bab 1: Memulai", content: "<h2>Bab 1: Memulai</h2><p>Startup bukan hanya tentang dua orang di garasi yang membuat aplikasi. Startup adalah institusi manusia yang dirancang untuk menciptakan produk atau layanan baru dalam kondisi ketidakpastian yang ekstrem.</p><p>Metode tradisional bisnis tidak bekerja untuk startup. Anda tidak bisa membuat rencana bisnis 5 tahun ketika Anda bahkan tidak tahu apakah ada orang yang menginginkan produk Anda.</p><p>Yang dibutuhkan adalah pendekatan ilmiah. Hipotesis, eksperimen, pengukuran, dan pembelajaran. Inilah inti dari metodologi Lean Startup.</p><p>Setiap startup dimulai dengan asumsi. Asumsi tentang siapa pelanggan Anda, apa masalah mereka, dan bagaimana produk Anda menyelesaikan masalah itu. Tugas pertama Anda bukan membangun produk sempurna—melainkan menguji asumsi-asumsi ini secepat mungkin.</p><p>\"Pertanyaannya bukan 'Bisakah produk ini dibuat?' melainkan 'Haruskah produk ini dibuat?'\"</p>" },
            { title: "Bab 2: Build-Measure-Learn", content: "<h2>Bab 2: Build-Measure-Learn</h2><p>Inti dari Lean Startup adalah loop Build-Measure-Learn. Bangun sesuatu, ukur hasilnya, dan belajar dari data tersebut. Kemudian ulangi.</p><p><strong>Build:</strong> Buat MVP (Minimum Viable Product)—versi paling sederhana dari produk Anda yang memungkinkan Anda mulai belajar. Ini bukan tentang membuat produk sempurna, tapi tentang memulai proses pembelajaran.</p><p><strong>Measure:</strong> Gunakan metrik yang benar-benar penting. Bukan vanity metrics seperti jumlah download atau page views, tapi actionable metrics seperti tingkat konversi atau customer retention.</p><p><strong>Learn:</strong> Berdasarkan data, putuskan apakah akan bertahan dengan strategi saat ini atau melakukan pivot—perubahan fundamental dalam strategi.</p><p>Semakin cepat Anda melalui loop ini, semakin cepat Anda belajar. Dan di dunia startup, kecepatan belajar adalah keunggulan kompetitif yang paling penting.</p>" },
            { title: "Bab 3: Pivot atau Bertahan", content: "<h2>Bab 3: Pivot atau Bertahan</h2><p>Pivot adalah salah satu konsep paling penting dalam Lean Startup. Pivot adalah perubahan mendasar dalam strategi tanpa mengubah visi.</p><p>Instagram dimulai sebagai Burbn, aplikasi check-in seperti Foursquare. Ketika pendirinya menyadari bahwa fitur foto-sharing lebih populer, mereka pivot. Hasilnya? Aplikasi bernilai miliaran dolar.</p><p>Slack dimulai sebagai internal tool untuk perusahaan game. Ketika game-nya gagal, mereka menyadari bahwa tool komunikasi mereka jauh lebih berharga. Pivot.</p><p>Keputusan untuk pivot atau bertahan adalah keputusan tersulit bagi setiap founder. Terlalu cepat pivot berarti Anda tidak memberi waktu cukup untuk strategi Anda bekerja. Terlalu lambat pivot berarti Anda membuang waktu dan sumber daya.</p><p>Kuncinya adalah data. Buat milestone yang jelas, ukur progres secara jujur, dan bersedia menghadapi kenyataan meskipun menyakitkan.</p>" }
        ]
    },
    {
        id: 9,
        title: "Sapiens",
        author: "Yuval Noah Harari",
        genre: "non-fiksi",
        color: "#37474F",
        emoji: "📓",
        chapters: [
            { title: "Bab 1: Revolusi Kognitif", content: "<h2>Bab 1: Revolusi Kognitif</h2><p>Sekitar 70.000 tahun yang lalu, sesuatu yang luar biasa terjadi pada otak Homo sapiens. Para ilmuwan menyebutnya Revolusi Kognitif—kemampuan untuk berpikir abstrak, berkomunikasi dengan bahasa yang kompleks, dan yang paling penting, menciptakan fiksi.</p><p>Ya, fiksi. Kemampuan untuk berbicara tentang hal-hal yang tidak ada secara fisik inilah yang membedakan kita dari spesies lain. Seekor monyet bisa berteriak \"Hati-hati, ada singa!\" Tapi hanya manusia yang bisa berkata \"Singa adalah roh penjaga suku kita.\"</p><p>Kemampuan ini memungkinkan kerja sama dalam skala besar. Dua monyet yang tidak saling kenal tidak akan bisa bekerja sama. Tapi dua manusia yang percaya pada mitos yang sama—baik itu agama, negara, atau uang—bisa membangun piramida.</p><p>Uang adalah fiksi paling sukses yang pernah diciptakan manusia. Selembar kertas tidak memiliki nilai intrinsik. Nilainya ada karena kita semua percaya ia bernilai.</p><p>Negara, perusahaan, hak asasi manusia—semua ini adalah fiksi yang kita ciptakan bersama. Dan justru fiksi-fiksi inilah yang memungkinkan peradaban manusia berkembang.</p>" },
            { title: "Bab 2: Revolusi Pertanian", content: "<h2>Bab 2: Revolusi Pertanian</h2><p>Sekitar 10.000 tahun yang lalu, manusia melakukan transisi dari pemburu-pengumpul menjadi petani. Kebanyakan buku sejarah menyebut ini sebagai kemajuan besar. Harari menyebutnya \"penipuan terbesar dalam sejarah.\"</p><p>Sebagai pemburu-pengumpul, manusia memiliki diet yang beragam, bekerja lebih sedikit, dan memiliki lebih sedikit penyakit. Petani awal justru bekerja lebih keras, makan lebih monoton, dan lebih rentan terhadap kelaparan.</p><p>Lalu mengapa mereka beralih ke pertanian? Karena pertanian memungkinkan produksi makanan dalam jumlah lebih besar per hektar. Lebih banyak makanan berarti lebih banyak manusia bisa hidup. Populasi meledak.</p><p>Tapi lebih banyak manusia tidak berarti manusia yang lebih bahagia. Paradoks ini terus berlanjut hingga hari ini: kemajuan teknologi meningkatkan jumlah manusia, tapi belum tentu meningkatkan kebahagiaan masing-masing individu.</p><p>Gandum tidak dijinakkan oleh manusia. Manusialah yang dijinakkan oleh gandum.</p>" },
            { title: "Bab 3: Masa Depan Sapiens", content: "<h2>Bab 3: Masa Depan Sapiens</h2><p>Untuk pertama kalinya dalam sejarah, manusia memiliki kemampuan untuk mengubah dirinya sendiri secara fundamental. Rekayasa genetika, kecerdasan buatan, dan bioteknologi membuka kemungkinan yang sebelumnya hanya ada dalam fiksi ilmiah.</p><p>Kita mungkin akan segera mampu mengedit gen bayi sebelum lahir—menghilangkan penyakit genetik, meningkatkan kecerdasan, bahkan memilih warna mata. Apakah ini kemajuan atau kecerobohan?</p><p>Kecerdasan buatan semakin mampu melakukan pekerjaan yang sebelumnya hanya bisa dilakukan manusia. Dari mengemudi mobil hingga mendiagnosis penyakit, mesin semakin pintar setiap harinya.</p><p>Pertanyaan yang harus kita jawab bukan \"Apa yang bisa kita lakukan?\" melainkan \"Apa yang seharusnya kita lakukan?\" Teknologi memberi kita kekuatan dewa, tapi apakah kita memiliki kebijaksanaan untuk menggunakannya?</p><p>Homo sapiens mungkin sedang menjalani hari-hari terakhirnya—bukan karena kepunahan, tapi karena transformasi menjadi sesuatu yang sama sekali baru.</p>" }
        ]
    },
    {
        id: 10,
        title: "Cantik Itu Luka",
        author: "Eka Kurniawan",
        genre: "sastra",
        color: "#4E342E",
        emoji: "📕",
        chapters: [
            { title: "Bab 1: Dewi Ayu Bangkit", content: "<h2>Bab 1: Dewi Ayu Bangkit</h2><p>Pada suatu hari di bulan Maret, Dewi Ayu bangkit dari kuburnya setelah dua puluh satu tahun meninggal. Ia berjalan pulang ke rumahnya dengan gaun pengantin yang sudah lusuh dimakan tanah, melewati jalan-jalan Halimunda yang terkejut menyambut kedatangannya.</p><p>Halimunda—kota pesisir kecil di Jawa—tidak pernah sepi dari cerita-cerita aneh. Tapi seorang perempuan yang bangkit dari kematian adalah sesuatu yang baru, bahkan untuk standar kota itu.</p><p>Dewi Ayu adalah perempuan tercantik yang pernah dilahirkan di Halimunda. Kecantikannya bukan sekadar fisik—ia memancarkan aura yang membuat setiap orang yang melihatnya terpesona dan sekaligus ketakutan.</p><p>\"Cantik itu luka,\" katanya pernah pada suatu malam. Dan ia tahu betul artinya. Kecantikannya telah membawa lebih banyak penderitaan daripada kebahagiaan dalam hidupnya.</p><p>Kini ia kembali, membawa semua memori dari kehidupan lamanya dan mungkin juga dari kematiannya.</p>" },
            { title: "Bab 2: Masa Lalu Halimunda", content: "<h2>Bab 2: Masa Lalu Halimunda</h2><p>Halimunda dibangun di atas sejarah yang berlapis-lapis. Belanda datang dan membawa peradaban yang mereka klaim unggul. Jepang datang dan membawa kekejaman. Kemerdekaan datang dan membawa harapan yang belum tentu terpenuhi.</p><p>Dewi Ayu lahir dari perpaduan dua dunia—darah Belanda dan darah Jawa. Di tubuhnya mengalir sejarah kolonialisasi yang rumit, penuh kontradiksi, dan menyakitkan.</p><p>Ia tumbuh di masa pendudukan Jepang, di mana kecantikannya menjadi kutukan. Ia dipaksa menjadi perempuan penghibur—sebuah eufemisme untuk kekejaman yang tak terkatakan.</p><p>Tapi Dewi Ayu tidak hancur. Ia bertahan dengan cara yang hanya bisa dipahami oleh mereka yang pernah menatap jurang kemanusiaan dan memutuskan untuk tetap berdiri.</p><p>\"Aku tidak akan membiarkan mereka menghancurkanku,\" bisiknya pada malam-malam yang gelap. \"Mereka bisa mengambil tubuhku, tapi jiwaku tetap milikku.\"</p>" },
            { title: "Bab 3: Empat Putri", content: "<h2>Bab 3: Empat Putri</h2><p>Dewi Ayu melahirkan empat putri. Tiga yang pertama mewarisi kecantikannya—mata yang dalam, kulit yang bercahaya, dan senyum yang bisa menghentikan waktu. Yang keempat, Kecantikan, lahir sebagai anak paling buruk rupa di Halimunda.</p><p>Ironi itu tidak luput dari Dewi Ayu. Ia menamai putri bungsunya \"Kecantikan\" justru karena gadis itu jauh dari cantik. \"Karena nama adalah doa,\" katanya. Atau mungkin karena ia ingin mengejek takdir yang selama ini mempermainkannya.</p><p>Tiga putri yang cantik mengalami nasib yang sama tragisnya dengan ibu mereka. Kecantikan mereka menarik pria-pria yang hanya membawa kesengsaraan. Cinta yang mereka terima selalu bercampur dengan obsesi dan kekerasan.</p><p>Hanya Kecantikan—si buruk rupa—yang hidup dengan tenang. Tanpa beban kecantikan, ia bebas dari kutukan yang menghantui keluarganya selama berabad-abad.</p><p>\"Mungkin buruk rupa adalah bentuk kebaikan Tuhan yang paling tulus,\" pikir Dewi Ayu saat menatap putri bungsunya yang tertidur pulas.</p>" }
        ]
    },
    {
        id: 11,
        title: "Mindset",
        author: "Carol S. Dweck",
        genre: "self-help",
        color: "#00838F",
        emoji: "📗",
        chapters: [
            { title: "Bab 1: Fixed vs Growth Mindset", content: "<h2>Bab 1: Fixed vs Growth Mindset</h2><p>Ada dua jenis mindset yang menentukan bagaimana kita menjalani hidup. Fixed mindset percaya bahwa kecerdasan dan bakat adalah sifat tetap yang tidak bisa diubah. Growth mindset percaya bahwa kemampuan bisa dikembangkan melalui usaha dan pembelajaran.</p><p>Seseorang dengan fixed mindset akan berkata: \"Saya tidak bisa matematika.\" Seseorang dengan growth mindset akan berkata: \"Saya belum bisa matematika.\" Satu kata kecil—'belum'—membuat perbedaan yang sangat besar.</p><p>Penelitian menunjukkan bahwa anak-anak yang dipuji karena kecerdasannya (\"Kamu pintar sekali!\") cenderung mengembangkan fixed mindset. Mereka takut gagal karena kegagalan berarti mereka tidak pintar.</p><p>Sebaliknya, anak-anak yang dipuji karena usahanya (\"Kamu bekerja keras sekali!\") mengembangkan growth mindset. Mereka melihat tantangan sebagai kesempatan untuk belajar.</p><p>Kabar baiknya: mindset bukanlah sesuatu yang permanen. Kita bisa belajar mengubah fixed mindset menjadi growth mindset. Dan perubahan ini bisa mengubah seluruh hidup kita.</p>" },
            { title: "Bab 2: Kekuatan 'Belum'", content: "<h2>Bab 2: Kekuatan 'Belum'</h2><p>Di sebuah sekolah di Chicago, siswa yang tidak lulus ujian tidak mendapat nilai \"Gagal\" tapi \"Belum Lulus.\" Perubahan kecil ini mengubah segalanya.</p><p>\"Gagal\" terasa final. Seperti vonis. Tidak ada harapan. \"Belum Lulus\" terasa sementara. Seperti perjalanan yang belum selesai. Ada harapan.</p><p>Otak kita merespons kedua frasa ini secara berbeda. Ketika kita mendengar \"gagal,\" amygdala kita aktif—bagian otak yang memproses ketakutan. Ketika kita mendengar \"belum,\" prefrontal cortex kita aktif—bagian otak yang memproses perencanaan dan strategi.</p><p>Cobalah latihan ini: setiap kali Anda merasa tidak mampu, tambahkan kata \"belum\" di akhir. \"Saya tidak bisa berbicara di depan publik\" menjadi \"Saya belum bisa berbicara di depan publik.\" Rasakan perbedaannya.</p><p>\"Belum\" adalah kata paling powerful dalam kosakata growth mindset. Ia membuka pintu yang tadinya tertutup rapat.</p>" }
        ]
    },
    {
        id: 12,
        title: "Sejarah Dunia yang Disembunyikan",
        author: "Jonathan Black",
        genre: "non-fiksi",
        color: "#263238",
        emoji: "📓",
        chapters: [
            { title: "Bab 1: Sejarah Alternatif", content: "<h2>Bab 1: Sejarah Alternatif</h2><p>Bagaimana jika sejarah yang kita pelajari di sekolah hanyalah versi resmi yang telah disunting? Bagaimana jika ada lapisan-lapisan cerita yang sengaja disembunyikan dari publik?</p><p>Setiap peradaban besar memiliki tradisi esoteris—pengetahuan rahasia yang hanya diwariskan kepada segelintir orang terpilih. Dari Mystery Schools Mesir kuno hingga perkumpulan rahasia di Eropa abad pertengahan.</p><p>Buku ini bukan tentang teori konspirasi. Ini tentang melihat sejarah dari sudut pandang yang berbeda—sudut pandang yang mempertimbangkan dimensi spiritual dan mistis yang sering diabaikan oleh sejarawan modern.</p><p>Para filsuf Yunani seperti Plato dan Pythagoras tidak hanya matematikawan dan pemikir logis. Mereka juga adalah inisiat dari tradisi-tradisi mistis yang telah ada ribuan tahun sebelum mereka.</p><p>Pertanyaannya bukan \"Apakah ini benar?\" melainkan \"Apakah kita cukup berani untuk mempertanyakan apa yang kita anggap benar?\"</p>" },
            { title: "Bab 2: Piramida dan Misteri", content: "<h2>Bab 2: Piramida dan Misteri</h2><p>Piramida Agung Giza tetap menjadi salah satu misteri terbesar dalam sejarah manusia. Bagaimana peradaban tanpa teknologi modern mampu membangun struktur yang begitu presisi?</p><p>Teori konvensional mengatakan bahwa piramida dibangun oleh ribuan budak yang menyeret batu-batu raksasa melalui lereng pasir. Tapi bukti arkeologi terbaru menunjukkan bahwa para pembangun piramida adalah pekerja terampil yang dibayar dan dihormati.</p><p>Yang lebih menarik adalah presisi matematis piramida. Rasio keliling alas terhadap tingginya menghasilkan angka yang sangat mendekati 2π. Kebetulan? Atau pengetahuan yang sangat maju?</p><p>Piramida bukan sekadar makam raja. Struktur internalnya—lorong-lorong, ruang-ruang, dan shaft—menunjukkan fungsi yang jauh lebih kompleks. Beberapa peneliti percaya piramida adalah semacam \"mesin\" yang memanfaatkan energi alam.</p><p>Kita mungkin tidak akan pernah tahu jawaban pastinya. Tapi ketidaktahuan itu sendiri adalah undangan untuk terus mencari.</p>" }
        ]
    }
];

// ===== RENDER BOOKS =====
const bookGrid = document.getElementById('bookGrid');

function renderBooks(filteredBooks) {
    bookGrid.innerHTML = '';
    filteredBooks.forEach(book => {
        const card = document.createElement('div');
        card.className = 'book-card';
        card.dataset.genre = book.genre;
        card.innerHTML = `
            <div class="book-cover" style="background: linear-gradient(135deg, ${book.color}, ${adjustColor(book.color, 40)});">
                ${book.emoji}
                <span class="book-genre-badge">${capitalize(book.genre)}</span>
            </div>
            <div class="book-info">
                <h3>${book.title}</h3>
                <p class="book-author">${book.author}</p>
                <span class="book-read-btn">Baca Sekarang</span>
            </div>
        `;
        card.addEventListener('click', () => openReader(book));
        bookGrid.appendChild(card);
    });
}

function adjustColor(hex, amount) {
    const num = parseInt(hex.replace('#', ''), 16);
    const r = Math.min(255, (num >> 16) + amount);
    const g = Math.min(255, ((num >> 8) & 0x00FF) + amount);
    const b = Math.min(255, (num & 0x0000FF) + amount);
    return `#${(1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1)}`;
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

renderBooks(books);

// ===== LIBRARY TABS =====
const libTabs = document.querySelectorAll('.lib-tab');
libTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        libTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const genre = tab.dataset.genre;
        const filtered = genre === 'all' ? books : books.filter(b => b.genre === genre);
        renderBooks(filtered);
    });
});

// ===== BOOK SEARCH =====
const bookSearch = document.getElementById('bookSearch');
bookSearch.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = books.filter(b =>
        b.title.toLowerCase().includes(query) ||
        b.author.toLowerCase().includes(query) ||
        b.genre.toLowerCase().includes(query)
    );
    renderBooks(filtered);

    // Reset active tab
    libTabs.forEach(t => t.classList.remove('active'));
    document.querySelector('.lib-tab[data-genre="all"]').classList.add('active');
});

// ===== BOOK READER =====
const readerModal = document.getElementById('readerModal');
const readerTitle = document.getElementById('readerTitle');
const readerContent = document.getElementById('readerContent');
const readerBody = document.getElementById('readerBody');
const chapterInfo = document.getElementById('chapterInfo');
const closeReader = document.getElementById('closeReader');
const prevChapter = document.getElementById('prevChapter');
const nextChapter = document.getElementById('nextChapter');
const fontIncrease = document.getElementById('fontIncrease');
const fontDecrease = document.getElementById('fontDecrease');
const themeToggle = document.getElementById('themeToggle');

let currentBook = null;
let currentChapter = 0;
let fontSize = 1.05;

function openReader(book) {
    currentBook = book;
    currentChapter = 0;
    loadChapter();
    readerModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function loadChapter() {
    if (!currentBook) return;
    const chapter = currentBook.chapters[currentChapter];
    readerTitle.textContent = currentBook.title;
    readerContent.innerHTML = chapter.content;
    chapterInfo.textContent = `Bab ${currentChapter + 1} dari ${currentBook.chapters.length}`;
    readerBody.scrollTop = 0;

    prevChapter.disabled = currentChapter === 0;
    nextChapter.disabled = currentChapter === currentBook.chapters.length - 1;
    prevChapter.style.opacity = currentChapter === 0 ? '0.4' : '1';
    nextChapter.style.opacity = currentChapter === currentBook.chapters.length - 1 ? '0.4' : '1';
}

closeReader.addEventListener('click', () => {
    readerModal.classList.remove('active');
    document.body.style.overflow = '';
});

readerModal.addEventListener('click', (e) => {
    if (e.target === readerModal) {
        readerModal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

prevChapter.addEventListener('click', () => {
    if (currentChapter > 0) {
        currentChapter--;
        loadChapter();
    }
});

nextChapter.addEventListener('click', () => {
    if (currentBook && currentChapter < currentBook.chapters.length - 1) {
        currentChapter++;
        loadChapter();
    }
});

fontIncrease.addEventListener('click', () => {
    fontSize = Math.min(1.6, fontSize + 0.1);
    readerContent.style.fontSize = fontSize + 'rem';
});

fontDecrease.addEventListener('click', () => {
    fontSize = Math.max(0.8, fontSize - 0.1);
    readerContent.style.fontSize = fontSize + 'rem';
});

themeToggle.addEventListener('click', () => {
    document.querySelector('.reader-modal').classList.toggle('dark');
});

// ===== KEYBOARD SHORTCUTS FOR READER =====
document.addEventListener('keydown', (e) => {
    if (!readerModal.classList.contains('active')) return;

    if (e.key === 'Escape') {
        readerModal.classList.remove('active');
        document.body.style.overflow = '';
    } else if (e.key === 'ArrowLeft') {
        prevChapter.click();
    } else if (e.key === 'ArrowRight') {
        nextChapter.click();
    }
});

// ===== SCROLL ANIMATIONS =====
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .menu-card, .review-card, .book-card, .contact-item').forEach(el => {
    observer.observe(el);
});
