import styled from "styled-components";

const Dokumentasi = () => {
  return (
    <div className="px-10 py-16 font-poppins text-black">
      <p className="text-3xl font-semibold mb-[30px]">Dokumentasi</p>
      <ScrollDiv className="max-h-[calc(100vh-16rem)] overflow-y-scroll">
        <div className="mb-[20px]">
          <p className="text-xl font-semibold mb-[5px]">
            Cara impor basis data
          </p>
          <ol className="list-decimal pl-[20px] text-lg">
            <li>Klik "Basis Data" pada menu navigasi</li>
            <li>Klik tombol "Impor basis data"</li>
            <li>pilih file basis data yang akan diimpor</li>
            <li>Klik tombol "Pilih file"</li>
          </ol>
        </div>
        <div className="mb-[20px]">
          <p className="text-xl font-semibold mb-[5px]">
            Cara ekspor basis data
          </p>
          <ol className="list-decimal pl-[20px] text-lg">
            <li>Klik "Tabel" pada menu navigasi</li>
            <li>Klik tombol "Ekspor basis data"</li>
            <li>Masukkan nama basis data yang akan diekspor</li>
            <li>Klik tombol "Ekspor"</li>
          </ol>
        </div>
        <div className="mb-[20px]">
          <p className="text-xl font-semibold mb-[5px]">
            Cara membuat basis data baru
          </p>
          <ol className="list-decimal pl-[20px] text-lg">
            <li>Klik "Basis Data" pada menu navigasi</li>
            <li>Klik tombol "Membuat basis data baru"</li>
            <li>Masukkan nama basis data</li>
            <li>Klik tombol "Membuat basis data"</li>
          </ol>
        </div>
        <div className="mb-[20px]">
          <p className="text-xl font-semibold mb-[5px]">
            Cara membuat tabel basis data baru
          </p>
          <ol className="list-decimal pl-[20px] text-lg">
            <li>Klik "Tabel" pada menu navigasi</li>
            <li>Klik tombol "Membuat tabel baru"</li>
            <li>Masukkan nama tabel basis data</li>
            <li>Klik tombol "Membuat tabel"</li>
            <li>Masukkan informasi mengenai atribut pada tabel</li>
            <li>Klik tombol "Simpan"</li>
          </ol>
        </div>
        <div className="mb-[20px]">
          <p className="text-xl font-semibold mb-[5px]">
            Cara melihat tabel basis data
          </p>
          <ol className="list-decimal pl-[20px] text-lg">
            <li>Klik "Tabel" pada menu navigasi</li>
            <li>Pengguna dapat melihat daftar tabel</li>
          </ol>
        </div>
        <div className="mb-[20px]">
          <p className="text-xl font-semibold mb-[5px]">
            Cara melihat struktur tabel
          </p>
          <ol className="list-decimal pl-[20px] text-lg">
            <li>Klik "Tabel" pada menu navigasi</li>
            <li>Klik tombol "struktur" pada salah satu tabel</li>
            <li>Pengguna dapat melihat struktur tabel</li>
          </ol>
        </div>
        <div className="mb-[20px]">
          <p className="text-xl font-semibold mb-[5px]">
            Cara mengubah kolom atribut tabel
          </p>
          <ol className="list-decimal pl-[20px] text-lg">
            <li>Klik "Tabel" pada menu navigasi</li>
            <li>Klik tombol "struktur" pada salah satu tabel</li>
            <li>Pengguna dapat mengubah isi dari kolom yang tersedia</li>
            <li>Klik tombol "Simpan"</li>
          </ol>
        </div>
        <div className="mb-[20px]">
          <p className="text-xl font-semibold mb-[5px]">
            Cara menambahkan kolom atribut tabel
          </p>
          <ol className="list-decimal pl-[20px] text-lg">
            <li>Klik "Tabel" pada menu navigasi</li>
            <li>Klik tombol "struktur" pada salah satu tabel</li>
            <li>Klik tombol tanda tambah</li>
            <li>Pengguna mengisi kolom yang ditambahkan</li>
            <li>Klik tombol "Simpan"</li>
          </ol>
        </div>
        <div className="mb-[20px]">
          <p className="text-xl font-semibold mb-[5px]">
            Cara menghapus kolom atribut tabel
          </p>
          <ol className="list-decimal pl-[20px] text-lg">
            <li>Klik "Tabel" pada menu navigasi</li>
            <li>Klik tombol "struktur" pada salah satu tabel</li>
            <li>Klik tombol tanda kurang</li>
            <li>Klik tombol "Ya" pada konfirmasi untuk menghapus kolom</li>
            <li>Klik tombol "Simpan"</li>
          </ol>
        </div>
        <div className="mb-[20px]">
          <p className="text-xl font-semibold mb-[5px]">
            Cara menghapus tabel basis data
          </p>
          <ol className="list-decimal pl-[20px] text-lg">
            <li>Klik "Tabel" pada menu navigasi</li>
            <li>Klik tombol "hapus" pada salah satu tabel</li>
            <li>Klik tombol "Ya" pada konfirmasi untuk menghapus tabel</li>
          </ol>
        </div>
        <div className="mb-[20px]">
          <p className="text-xl font-semibold mb-[5px]">
            Cara menambahkan data pada tabel
          </p>
          <ol className="list-decimal pl-[20px] text-lg">
            <li>Klik "Tabel" pada menu navigasi</li>
            <li>Klik salah satu nama tabel yang datanya akan ditambahkan</li>
            <li>Klik tombol tanda tambah</li>
            <li>Masukkan data pada kolom yang tersedia</li>
            <li>Klik tombol "Tambah data"</li>
          </ol>
        </div>
        <div className="mb-[20px]">
          <p className="text-xl font-semibold mb-[5px]">
            Cara membaca data pada tabel
          </p>
          <ol className="list-decimal pl-[20px] text-lg">
            <li>Klik "Tabel" pada menu navigasi</li>
            <li>Klik salah satu nama tabel yang datanya akan dilihat</li>
            <li>Pengguna dapat melihat data pada tabel</li>
          </ol>
        </div>
        <div className="mb-[20px]">
          <p className="text-xl font-semibold mb-[5px]">
            Cara mencari data menggunakan filter
          </p>
          <ol className="list-decimal pl-[20px] text-lg">
            <li>Klik "Tabel" pada menu navigasi</li>
            <li>Klik salah satu nama tabel yang datanya akan dilihat</li>
            <li>
              Masukkan informasi mengenai data yang akan dicari pada kolom cari
              data
            </li>
            <li>Klik ikon kaca pembesar</li>
          </ol>
        </div>
        <div className="mb-[20px]">
          <p className="text-xl font-semibold mb-[5px]">
            Cara mengubah data pada tabel
          </p>
          <ol className="list-decimal pl-[20px] text-lg">
            <li>Klik "Tabel" pada menu navigasi</li>
            <li>Klik salah satu nama tabel yang datanya akan diubah</li>
            <li>Klik tombol "sunting" pada salah satu data</li>
            <li>Pengguna mengubah data pada kolom yang tersedia</li>
            <li>Klik tombol "Simpan"</li>
          </ol>
        </div>
        <div className="mb-[20px]">
          <p className="text-xl font-semibold mb-[5px]">
            Cara menghapus data pada tabel
          </p>
          <ol className="list-decimal pl-[20px] text-lg">
            <li>Klik "Tabel" pada menu navigasi</li>
            <li>Klik salah satu nama tabel yang datanya akan dihapus</li>
            <li>Klik tombol "hapus" pada salah satu data</li>
            <li>Klik tombol "Ya" pada konfirmasi penghapusan data</li>
          </ol>
        </div>
      </ScrollDiv>
    </div>
  );
};

export default Dokumentasi;

const ScrollDiv = styled.div`
  &::-webkit-scrollbar {
    width: 0px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #d4d4d4;
  }
`;
