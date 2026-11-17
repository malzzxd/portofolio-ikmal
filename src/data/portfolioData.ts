export interface CompetencyArea {
  id: string;
  title: string;
  shortLabel: string;
  standardRef: string;
  summary: string;
  skills: string[];
  tools: { name: string; spec: string }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Instalasi Bangunan' | 'Panel Kontrol Motor' | 'Otomasi & PLC';
  year: string;
  context: string;
  standard: string;
  voltage: string;
  image: string;
  imageAlt: string;
  summary: string;
  components: string[];
  procedures: string[];
  outcome: string;
}

export interface TimelineEntry {
  id: string;
  period: string;
  title: string;
  institution: string;
  type: string;
  description: string;
  highlights: string[];
}

export interface InstrumentRow {
  instrument: string;
  brandExample: string;
  measurementScope: string;
  proficiency: string;
}

export const STUDENT_PROFILE = {
  fullName: 'Iqmalul Khoir',
  school: 'SMK Negeri 1 Sidayu Gresik',
  department: 'Teknik Instalasi Tenaga Listrik (TITL)',
  location: 'Sidayu, Kabupaten Gresik, Jawa Timur',
  status: 'Siswa Aktif · Siap Praktik Kerja Lapangan (PKL) & Rekrutmen Industri',
  email: 'iqmalul.khoir@titl-smkn1sidayu.sch.id',
  phoneDisplay: '+62 812-3456-7890',
  heroImage: '/src/assets/images/hero_iqmalul_portrait_1794889422021.jpg',
  heroImageAlt: 'Iqmalul Khoir melakukan pengukuran panel kontrol listrik dengan multimeter digital di bengkel Teknik Instalasi Tenaga Listrik',
  summary:
    'Siswa kompetensi keahlian Teknik Instalasi Tenaga Listrik di SMKN 1 Sidayu Gresik yang berfokus pada perencanaan dan perakitan instalasi penerangan 1-fasa dan 3-fasa, panel kendali motor induksi elektromagnetik, pemrograman dasar PLC, serta pengujian kelayakan instalasi sesuai standar PUIL 2011 dan K3 ketenagalistrikan.',
};

export const HERO_METRICS = [
  {
    value: 'SMKN 1 Sidayu',
    label: 'Kabupaten Gresik, Jawa Timur',
  },
  {
    value: '3 Fasa · 380V',
    label: 'Instalasi Daya & Panel Kontrol',
  },
  {
    value: 'PUIL 2011 & K3',
    label: 'Standar Keselamatan & Uji Layak',
  },
  {
    value: 'PLC & Elektromagnetik',
    label: 'Kendali Motor & Otomasi Industri',
  },
];

export const COMPETENCY_AREAS: CompetencyArea[] = [
  {
    id: 'instalasi',
    title: 'Instalasi Penerangan & Tenaga Listrik Bangunan',
    shortLabel: 'Instalasi Penerangan & Tenaga',
    standardRef: 'PUIL 2011 · SNI 0225',
    summary:
      'Merancang diagram satu garis (Single Line Diagram), menghitung kebutuhan beban dan penampang penghantar NYA/NYM/NYY, serta melaksanakan pemasangan pipa konduit, kotak hubung, PHB 1-fasa/3-fasa, dan sistem pembumian.',
    skills: [
      'Membaca dan menggambar diagram pengawatan serta diagram satu garis instalasi gedung.',
      'Pemasangan sakelar tunggal, seri, tukar (hotel), dan kotak kontak berarde.',
      'Pembagian grup beban seimbang pada Panel Hubung Bagi (PHB) dengan proteksi MCB dan ELCB/RCCB.',
      'Pengukuran tahanan isolasi penghantar dan resistansi pentanahan sesuai ambang batas aman.',
    ],
    tools: [
      { name: 'Penampang Penghantar', spec: '1,5 mm² – 6 mm² (NYA / NYM)' },
      { name: 'Proteksi Arus Bocor', spec: 'RCCB / ELCB 30 mA' },
      { name: 'Standar Uji Isolasi', spec: '≥ 1.000 Ω/V (Megger 500V DC)' },
    ],
  },
  {
    id: 'panel-motor',
    title: 'Perakitan Panel Kontrol Motor Listrik 3-Fasa',
    shortLabel: 'Panel Kontrol Motor',
    standardRef: 'IEC 60947 · Kontrol Elektromagnetik',
    summary:
      'Merakit dan menguji rangkaian daya maupun rangkaian kontrol motor induksi 3-fasa berbasis kontaktor magnetik, Thermal Overload Relay (TOR), dan timer dengan penataan kabel rapi di dalam panel box standar industri.',
    skills: [
      'Perakitan sistem pengasutan Direct On Line (DOL), Forward-Reverse, dan Star-Delta otomatis.',
      'Penggunaan interlock mekanis dan elektris untuk mencegah hubung singkat antar-fasa.',
      'Penomoran kabel kontrol (wire numbering), pemasangan ferrule/skun kabel, dan ducting DIN rail.',
      'Pelacakan gangguan (troubleshooting) rangkaian kontrol dengan multimeter dan tang ampere.',
    ],
    tools: [
      { name: 'Tegangan Daya / Kontrol', spec: '380V AC 3-Fasa / 220V AC' },
      { name: 'Proteksi Beban Lebih', spec: 'Thermal Overload Relay (TOR)' },
      { name: 'Simulasi Rangkaian', spec: 'EKTS / CADe_SIMU' },
    ],
  },
  {
    id: 'otomasi-plc',
    title: 'Sistem Otomasi Industri & Pemrograman Dasar PLC',
    shortLabel: 'Otomasi & PLC',
    standardRef: 'IEC 61131-3 Ladder Diagram',
    summary:
      'Mengintegrasikan Programmable Logic Controller (PLC) sebagai pengontrol sekuensial pada sistem konveyor, pompa otomatis, dan pergantian operasi motor menggunakan sensor industri dan relai antarmuka.',
    skills: [
      'Pemetaan alamat Input/Output (I/O Addressing) untuk tombol tekan, limit switch, dan sensor proximity.',
      'Penyusunan program Ladder Diagram menggunakan timer (TON/TOF), counter, dan fungsi interlocking.',
      'Pengawatan modul catu daya 24V DC ke terminal input/output PLC serta relai kopling.',
      'Simulasi dan commissioning logika kerja mesin sebelum dioperasikan pada beban nyata.',
    ],
    tools: [
      { name: 'Perangkat Lunak PLC', spec: 'CX-Programmer / TIA Portal Dasar' },
      { name: 'Tegangan Logika I/O', spec: '24V DC Sink / Source' },
      { name: 'Bahasa Pemrograman', spec: 'Ladder Diagram (LD)' },
    ],
  },
  {
    id: 'k3-pengujian',
    title: 'Keselamatan Ketenagalistrikan (K3) & Pengukuran',
    shortLabel: 'Keselamatan K3 & Uji',
    standardRef: 'Permenaker No. 12 Tahun 2015',
    summary:
      'Menerapkan prosedur Lockout/Tagout (LOTO), penggunaan Alat Pelindung Diri (APD) kelistrikan, serta verifikasi parameter tegangan, arus fasa, urutan fasa, dan kontinuitas proteksi sebelum penyalaan sistem.',
    skills: [
      'Inspeksi visual kekencangan terminal baut dan polaritas fasa (R-S-T, Netral, PE).',
      'Penerapan prosedur kerja bebas tegangan dan isolasi sumber daya (LOTO).',
      'Pengukuran keseimbangan beban antar fasa pada panel distribusi utama menggunakan Clamp Meter.',
      'Dokumentasi hasil uji kelayakan instalasi dalam berita acara praktik bengkel.',
    ],
    tools: [
      { name: 'Uji Tegangan & Kontinuitas', spec: 'Digital Multimeter CAT III' },
      { name: 'Uji Pembumian', spec: 'Earth Resistance Tester (< 5 Ω)' },
      { name: 'Alat Pelindung Diri', spec: 'Helm, Sarung Tangan Isolasi, Sepatu Safety' },
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'phb-3phase',
    title: 'Perakitan Panel Hubung Bagi (PHB) & Distribusi Tenaga 3-Fasa',
    category: 'Panel Kontrol Motor',
    year: '2026',
    context: 'Praktikum Bengkel Listrik Industri · SMKN 1 Sidayu Gresik',
    standard: 'PUIL 2011 & IEC 61439',
    voltage: '380V / 220V AC · 50 Hz',
    image: '/src/assets/images/proj_panel_3phase_1794889393091.jpg',
    imageAlt: 'Panel Hubung Bagi 3-fasa dengan MCB, kontaktor magnetik, thermal overload relay, dan jalur kabel tertata rapi',
    summary:
      'Merakit panel distribusi tenaga dan kontrol 3-fasa lengkap dengan pemutus utama, pembagian grup MCB, kontaktor magnetik, relai beban lebih, serta terminal blok pentanahan sesuai kode warna kabel standar.',
    components: [
      'MCB 3-Fasa Utama & MCB 1-Fasa Grup Kontrol',
      '3 Unit Kontaktor Magnetik AC-3 dengan Auxiliary Contact',
      'Thermal Overload Relay (TOR) & Terminal Blok DIN Rail',
      'Kabel NYAF ber-ferrule dengan Slotted Wiring Duct',
    ],
    procedures: [
      'Menyusun tata letak komponen di atas pelat dasar panel dan memotong DIN rail serta cable duct secara presisi.',
      'Melakukan pengawatan rangkaian daya (R-S-T) dengan kabel berpenampang sesuai kapasitas arus dan warna standar.',
      'Merangkai jalur kontrol dan memasang label terminal blok serta bar pembumian (PE).',
      'Melakukan uji kontinuitas serta pemeriksaan hubung singkat sebelum panel diberi suplai tegangan.',
    ],
    outcome:
      'Panel beroperasi stabil tanpa lonjakan panas berlebih pada terminal dan lolos pemeriksaan kerapian serta keselamatan instruktur bengkel.',
  },
  {
    id: 'star-delta-motor',
    title: 'Sistem Kendali Motor Induksi 3-Fasa Star-Delta Otomatis',
    category: 'Panel Kontrol Motor',
    year: '2026',
    context: 'Uji Kompetensi Praktik Motor Listrik · Kelas XI/XII TITL',
    standard: 'IEC 60947-4-1',
    voltage: '380V AC · Arus Start Tereduksi',
    image: '/src/assets/images/proj_star_delta_1794889393581.jpg',
    imageAlt: 'Motor induksi 3-fasa terhubung dengan kotak kontrol tombol Start, Stop, Emergency Stop, dan lampu indikator',
    summary:
      'Perancangan dan pengawatan sistem pengasutan Bintang-Segitiga (Star-Delta) otomatis untuk menekan arus start tinggi pada motor induksi 3-fasa menggunakan kontaktor utama, kontaktor star, kontaktor delta, dan timer tunda.',
    components: [
      'Motor Induksi 3-Fasa 6 Terminal (U1-V1-W1 / U2-V2-W2)',
      '3 Kontaktor Magnetik + 1 On-Delay Timer',
      'Push Button Box IP66 (Start, Stop, Emergency Stop)',
      'Pilot Lamp Indikator Operasi & Trip Gangguan',
    ],
    procedures: [
      'Mengidentifikasi enam terminal belitan stator motor menggunakan multimeter untuk memastikan pasangan fasa.',
      'Merangkai interlock elektrik antara kontaktor Star dan kontaktor Delta agar tidak aktif bersamaan.',
      'Menyetel waktu tunda transisi Star ke Delta pada timer selama 5 detik sesuai percepatan putaran rotor.',
      'Menguji respon tombol Emergency Stop dan simulasi trip TOR hingga lampu indikator gangguan menyala.',
    ],
    outcome:
      'Transisi pengasutan dari hubung Star ke Delta berjalan mulus dengan penurunan lonjakan arus awal saat motor berputar penuh.',
  },
  {
    id: 'plc-automation',
    title: 'Pemrograman Kendali Otomasi Sekuensial Berbasis PLC',
    category: 'Otomasi & PLC',
    year: '2025',
    context: 'Laboratorium Otomasi Industri · SMKN 1 Sidayu Gresik',
    standard: 'IEC 61131-3 Ladder Logic',
    voltage: '24V DC I/O · 220V AC Suplai',
    image: '/src/assets/images/proj_plc_automation_1794889394620.jpg',
    imageAlt: 'Unit trainer PLC industri lengkap dengan power supply 24V DC, sakelar input, LED indikator, dan blok terminal berlabel',
    summary:
      'Implementasi kontrol logika terprogram menggunakan modul PLC trainer untuk mengatur urutan kerja aktuator dan lampu indikator berdasarkan masukan sakelar selektor, tombol tekan, serta timer internal.',
    components: [
      'Unit CPU PLC Industri & Modul Ekspansi I/O Digital',
      'Power Supply Switching 24V DC / 5A',
      'Panel Sakelar Input, Push Button, dan Indikator LED Output',
      'Blok Terminal Uji Berlabel Alamat I/O',
    ],
    procedures: [
      'Menyusun tabel alokasi alamat Input (I0.0–I0.7) dan Output (Q0.0–Q0.7) sesuai kebutuhan sekuens mesin.',
      'Menulis diagram tangga (Ladder Diagram) dengan fungsi latching, interlock, dan timer sekuensial.',
      'Melakukan pengawatan kabel 24V DC dari power supply ke terminal input dan output menggunakan label identifikasi.',
      'Mengunduh program ke CPU PLC dan memverifikasi setiap skenario operasi dan kondisi reset darurat.',
    ],
    outcome:
      'Seluruh urutan logika input-output bekerja sinkron dengan waktu tunda presisi dan mudah dilacak melalui indikator LED modul.',
  },
  {
    id: 'building-wiring',
    title: 'Instalasi Penerangan & Stop Kontak Gedung 1-Fasa Standar SNI',
    category: 'Instalasi Bangunan',
    year: '2025',
    context: 'Praktikum Instalasi Penerangan · SMKN 1 Sidayu Gresik',
    standard: 'PUIL 2011 · SNI 0225',
    voltage: '220V AC · 1-Fasa + PE',
    image: '/src/assets/images/proj_building_wiring_1794889394341.jpg',
    imageAlt: 'Papan latih instalasi listrik bangunan 1-fasa dengan kWh meter, kotak MCB distribusi, pipa PVC, sakelar, dan stop kontak',
    summary:
      'Pemasangan sistem kelistrikan bangunan satu fasa mulai dari kWh meter, kotak distribusi MCB multi-grup, jaringan pipa konduit PVC 20mm/25mm, hingga titik lampu dan kotak kontak berarde.',
    components: [
      'kWh Meter 1-Fasa & Kotak Distribusi MCB Multi-Grup',
      'Pipa Konduit PVC 20mm & 25mm beserta T-Dos / Cross-Dos',
      'Sakelar Seri & Kotak Kontak 16A dengan Terminal Grounding',
      'Busbar Netral (Biru) dan Busbar Pembumian (Kuning-Hijau)',
    ],
    procedures: [
      'Mengukur dan menekuk jalur pipa konduit PVC agar simetris dan terikat klem dengan jarak standar.',
      'Menarik kabel fasa, netral, dan PE tanpa sambungan di dalam pipa, dengan seluruh sambungan berada dalam kotak hubung.',
      'Memisahkan grup MCB antara rangkaian penerangan (B10A/B16A) dan rangkaian kotak kontak (B16A/B20A).',
      'Melakukan uji polaritas stop kontak serta uji nyala seluruh titik beban menggunakan alat ukur tegangan.',
    ],
    outcome:
      'Instalasi memenuhi kaidah estetika pemipaan, pemisahan grup proteksi berjalan tepat, dan seluruh titik kotak kontak terhubung arde.',
  },
];

export const TIMELINE_ENTRIES: TimelineEntry[] = [
  {
    id: 'smk-titl',
    period: '2024 – Sekarang',
    title: 'Siswa Kompetensi Keahlian Teknik Instalasi Tenaga Listrik (TITL)',
    institution: 'SMK Negeri 1 Sidayu Gresik',
    type: 'Pendidikan Vokasi Menengah',
    description:
      'Menempuh pendidikan kejuruan bidang ketenagalistrikan yang mencakup dasar teknik listrik, gambar teknik listrik, instalasi penerangan, instalasi tenaga, serta sistem kendali industri.',
    highlights: [
      'Aktif dalam praktikum perakitan panel kontrol motor 3-fasa dan instalasi bangunan standar PUIL 2011.',
      'Terbiasa bekerja secara sistematis berdasarkan gambar kerja (Single Line & Wiring Diagram).',
      'Menjaga disiplin keselamatan kerja (K3) dan kerapian alat kerja selama sesi bengkel.',
    ],
  },
  {
    id: 'ukk-internal',
    period: '2025 – 2026',
    title: 'Pelatihan Intensif Sistem Kendali Elektromagnetik & PLC Dasar',
    institution: 'Bengkel Teknik Instalasi Tenaga Listrik · SMKN 1 Sidayu',
    type: 'Kompetensi Praktik Kejuruan',
    description:
      'Pendalaman perakitan panel kendali motor induksi (DOL, Forward-Reverse, Star-Delta) serta integrasi logika kendali menggunakan modul PLC industri dan perangkat lunak simulasi.',
    highlights: [
      'Menyelesaikan pengujian rangkaian kontrol Star-Delta otomatis dengan proteksi TOR dan interlock.',
      'Memetakan I/O PLC dan menyusun program Ladder Diagram untuk kontrol sekuensial.',
    ],
  },
  {
    id: 'k3-standard',
    period: '2024 – 2026',
    title: 'Penerapan Standar K3 Ketenagalistrikan & Pengukuran Alat Ukur Presisi',
    institution: 'Laboratorium Pengukuran & Pengujian Listrik · Gresik',
    type: 'Sertifikasi & Etos Kerja Bengkel',
    description:
      'Pembiasaan prosedur inspeksi pra-energize, penggunaan APD kelistrikan, serta kalibrasi dan pembacaan instrumen ukur arus, tegangan, isolasi, dan pembumian.',
    highlights: [
      'Menguasai prosedur LOTO (Lockout/Tagout) sebelum melakukan perbaikan atau pemeliharaan panel.',
      'Mampu mendokumentasikan hasil uji tahanan isolasi menggunakan Megger dan tahanan tanah dengan Earth Tester.',
    ],
  },
];

export const INSTRUMENT_MATRIX: InstrumentRow[] = [
  {
    instrument: 'Digital Multimeter (AVOmeter)',
    brandExample: 'Fluke / Sanwa CAT III',
    measurementScope: 'Tegangan AC/DC, Kontinuitas, Resistansi Belitan',
    proficiency: 'Mahir',
  },
  {
    instrument: 'Clamp Meter (Tang Ampere)',
    brandExample: 'Kyoritsu / Hioki',
    measurementScope: 'Arus Beban 1-Fasa & Keseimbangan Arus 3-Fasa (R-S-T)',
    proficiency: 'Mahir',
  },
  {
    instrument: 'Insulation Resistance Tester (Megger)',
    brandExample: 'Kyoritsu 3005A (250V–1000V DC)',
    measurementScope: 'Uji Tahanan Isolasi Kabel & Belitan Motor (MΩ)',
    proficiency: 'Terampil',
  },
  {
    instrument: 'Earth Ground Tester',
    brandExample: 'Kyoritsu 4105A',
    measurementScope: 'Pengukuran Resistansi Sistem Pembumian (< 5 Ω)',
    proficiency: 'Terampil',
  },
  {
    instrument: 'Perangkat Lunak Desain & Simulasi',
    brandExample: 'AutoCAD · EKTS · CX-Programmer',
    measurementScope: 'Gambar Teknik Listrik & Simulasi Kendali Motor / PLC',
    proficiency: 'Terampil',
  },
];
