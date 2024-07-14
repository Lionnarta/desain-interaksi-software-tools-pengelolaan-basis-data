export const listTabel = [
  {
    namatabel: "customer",
  },
  {
    namatabel: "user",
  },
  {
    namatabel: "product",
  },
  {
    namatabel: "transaction",
  },
];

export const strukturTabel = {
  customer: [
    { nama: "userid", tipe: "INT", panjang: 10 },
    { nama: "nama", tipe: "VARCHAR", panjang: 10 },
  ],
  user: [
    { nama: "userid", tipe: "INT", panjang: 10 },
    { nama: "nama", tipe: "VARCHAR", panjang: 10 },
  ],
  product: [
    { nama: "produkid", tipe: "INT", panjang: 10 },
    { nama: "namaproduk", tipe: "VARCHAR", panjang: 10 },
  ],
  transaction: [
    { nama: "userid", tipe: "INT", panjang: 10 },
    { nama: "nama", tipe: "VARCHAR", panjang: 10 },
    { nama: "produkid", tipe: "INT", panjang: 10 },
    { nama: "namaproduk", tipe: "VARCHAR", panjang: 10 },
  ],
};

export const dataTabel = {
  customer: [
    { userid: 1, nama: "Lia" },
    { userid: 2, nama: "Devin" },
  ],
  user: [
    { userid: 1, nama: "Lia" },
    { userid: 2, nama: "Devin" },
  ],
  product: [
    { produkid: 1, namaproduk: "buku" },
    { produkid: 2, namaproduk: "pulpen" },
  ],
  transaction: [{ userid: 1, nama: "Lia", produkid: 1, namaproduk: "buku" }],
};
