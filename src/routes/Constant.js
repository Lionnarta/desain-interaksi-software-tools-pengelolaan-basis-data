export const listTabel = [
  {
    namatabel: "customer",
    jumlahdata: 2,
    struktur: [
      { nama: "userid", tipe: "INT", panjang: 10 },
      { nama: "nama", tipe: "VARCHAR", panjang: 10 },
    ],
  },
  {
    namatabel: "user",
    jumlahdata: 2,
    struktur: [
      { nama: "userid", tipe: "INT", panjang: 10 },
      { nama: "nama", tipe: "VARCHAR", panjang: 10 },
    ],
  },
  {
    namatabel: "product",
    jumlahdata: 2,
    struktur: [
      { nama: "produkid", tipe: "INT", panjang: 10 },
      { nama: "namaproduk", tipe: "VARCHAR", panjang: 10 },
    ],
  },
  {
    namatabel: "transaction",
    jumlahdata: 1,
    struktur: [
      { nama: "userid", tipe: "INT", panjang: 10 },
      { nama: "nama", tipe: "VARCHAR", panjang: 10 },
      { nama: "produkid", tipe: "INT", panjang: 10 },
      { nama: "namaproduk", tipe: "VARCHAR", panjang: 10 },
    ],
  },
];
