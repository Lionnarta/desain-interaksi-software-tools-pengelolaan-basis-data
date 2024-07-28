import {
  faCircleInfo,
  faCircleMinus,
  faCirclePlus,
  faDatabase,
  faMinus,
  faPenToSquare,
  faPlus,
  faTable,
  faTableColumns,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const DokumentasiSect = ({ text, children }) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div
        className="flex items-center hover:underline cursor-pointer w-fit mb-[10px]"
        onClick={() => setShow(!show)}
      >
        {!show && (
          <FontAwesomeIcon
            className="mr-[10px] w-[20px] h-[20px] border border-black rounded-full"
            icon={faPlus}
          />
        )}
        {show && (
          <FontAwesomeIcon
            className="mr-[10px] w-[20px] h-[20px] border border-black rounded-full"
            icon={faMinus}
          />
        )}
        <p className="text-xl font-bold">{text}</p>
      </div>
      {show && children}
    </div>
  );
};

const Dokumentasi = () => {
  return (
    <div className="px-10 py-16 ml-[300px] font-poppins text-black">
      <p className="text-3xl font-semibold mb-[30px]">Dokumentasi</p>

      <DokumentasiSect text={"Impor dan Ekspor Basis Data"}>
        <div className="pl-[30px]">
          <div className="mb-[20px]">
            <p className="text-xl font-semibold mb-[5px]">
              Cara impor basis data
            </p>
            <ol className="list-decimal pl-[20px] text-lg">
              <li className="mb-[5px]">
                Klik{" "}
                <span className="bg-[#D4D4D4] p-1 rounded-md font-semibold inline-block">
                  <FontAwesomeIcon icon={faDatabase} /> Basis Data
                </span>{" "}
                pada menu navigasi
              </li>
              <li className="mb-[5px]">
                Klik tombol{" "}
                <span className="bg-[#D4D4D4] p-1 rounded-md font-semibold inline-block">
                  Impor basis data
                  <FontAwesomeIcon
                    icon={faCircleInfo}
                    className="ml-2 w-[15px]"
                  />
                </span>
              </li>
              <li className="mb-[5px]">
                Pilih file basis data yang akan diimpor
              </li>
              <li className="mb-[5px]">Klik tombol "Pilih file"</li>
            </ol>
          </div>
          <div className="mb-[20px]">
            <p className="text-xl font-semibold mb-[5px]">
              Cara ekspor basis data
            </p>
            <ol className="list-decimal pl-[20px] text-lg">
              <li className="mb-[5px]">
                Klik{" "}
                <span className="bg-[#D4D4D4] p-1 rounded-md font-semibold inline-block">
                  <FontAwesomeIcon icon={faTable} /> Tabel
                </span>{" "}
                pada menu navigasi
              </li>
              <li className="mb-[5px]">
                Klik tombol{" "}
                <span className="bg-[#D4D4D4] p-1 rounded-md font-semibold inline-block">
                  Ekspor basis data
                  <FontAwesomeIcon
                    icon={faCircleInfo}
                    className="ml-2 w-[15px]"
                  />
                </span>
              </li>
              <li className="mb-[5px]">
                Masukkan nama basis data yang akan diekspor
              </li>
              <li className="mb-[5px]">
                Klik tombol{" "}
                <span className="bg-[#D4D4D4] p-1 rounded-md font-semibold inline-block">
                  Ekspor
                </span>
              </li>
            </ol>
          </div>
        </div>
      </DokumentasiSect>

      <DokumentasiSect text={"Membuat Basis Data"}>
        <div className="pl-[30px]">
          <div className="mb-[20px]">
            <p className="text-xl font-semibold mb-[5px]">
              Cara membuat basis data baru
            </p>
            <ol className="list-decimal pl-[20px] text-lg">
              <li className="mb-[5px]">
                Klik{" "}
                <span className="bg-[#D4D4D4] p-1 rounded-md font-semibold inline-block">
                  <FontAwesomeIcon icon={faDatabase} /> Basis Data
                </span>{" "}
                pada menu navigasi
              </li>
              <li className="mb-[5px]">
                Klik tombol{" "}
                <span className="bg-[#D4D4D4] p-1 rounded-md font-semibold inline-block">
                  Membuat basis data baru
                  <FontAwesomeIcon
                    icon={faCircleInfo}
                    className="ml-2 w-[15px]"
                  />
                </span>
              </li>
              <li className="mb-[5px]">Masukkan nama basis data</li>
              <li className="mb-[5px]">
                Klik tombol{" "}
                <span className="bg-[#D4D4D4] p-1 rounded-md font-semibold inline-block">
                  Membuat basis data
                </span>
              </li>
            </ol>
          </div>
        </div>
      </DokumentasiSect>

      <DokumentasiSect text={"Pengelolaan Tabel Basis Data"}>
        <div className="pl-[30px]">
          <div className="mb-[20px]">
            <p className="text-xl font-semibold mb-[5px]">
              Cara melihat tabel basis data
            </p>
            <ol className="list-decimal pl-[20px] text-lg">
              <li className="mb-[5px]">
                Klik{" "}
                <span className="bg-[#D4D4D4] p-1 rounded-md font-semibold inline-block">
                  <FontAwesomeIcon icon={faTable} /> Tabel
                </span>{" "}
                pada menu navigasi
              </li>
              <li className="mb-[5px]">Pengguna dapat melihat daftar tabel</li>
            </ol>
          </div>
          <div className="mb-[20px]">
            <p className="text-xl font-semibold mb-[5px]">
              Cara membuat tabel basis data baru
            </p>
            <ol className="list-decimal pl-[20px] text-lg">
              <li className="mb-[5px]">
                Klik{" "}
                <span className="bg-[#D4D4D4] p-1 rounded-md font-semibold inline-block">
                  <FontAwesomeIcon icon={faTable} /> Tabel
                </span>{" "}
                pada menu navigasi
              </li>
              <li className="mb-[5px]">
                Klik tombol{" "}
                <span className="bg-[#D4D4D4] p-1 rounded-md font-semibold inline-block">
                  Membuat tabel baru
                  <FontAwesomeIcon
                    icon={faCircleInfo}
                    className="ml-2 w-[15px]"
                  />
                </span>
              </li>
              <li className="mb-[5px]">Masukkan nama tabel basis data</li>
              <li className="mb-[5px]">
                Klik tombol{" "}
                <span className="bg-[#D4D4D4] p-1 rounded-md font-semibold inline-block">
                  Membuat tabel
                </span>
              </li>
              <li className="mb-[5px]">
                Masukkan informasi mengenai atribut pada tabel
              </li>
              <li className="mb-[5px]">
                Klik tombol{" "}
                <span className="bg-[#D4D4D4] p-1 rounded-md font-semibold inline-block">
                  Simpan
                </span>
              </li>
            </ol>
          </div>
          <div className="mb-[20px]">
            <p className="text-xl font-semibold mb-[5px]">
              Cara menghapus tabel basis data
            </p>
            <ol className="list-decimal pl-[20px] text-lg">
              <li className="mb-[5px]">
                Klik{" "}
                <span className="bg-[#D4D4D4] p-1 rounded-md font-semibold inline-block">
                  <FontAwesomeIcon icon={faTable} /> Tabel
                </span>{" "}
                pada menu navigasi
              </li>
              <li className="mb-[5px]">
                Klik tulisan{" "}
                <span className="italic text-blue-800 font-medium">
                  <FontAwesomeIcon
                    className="mr-[5px] text-black"
                    icon={faTrashCan}
                  />
                  hapus
                </span>{" "}
                pada salah satu tabel
              </li>
              <li className="mb-[5px]">
                Klik tombol{" "}
                <span className="bg-[#D4D4D4] p-1 rounded-md font-semibold inline-block">
                  Ya
                </span>{" "}
                pada konfirmasi untuk menghapus tabel
              </li>
            </ol>
          </div>
          <div className="mb-[20px]">
            <p className="text-xl font-semibold mb-[5px]">
              Cara melihat struktur tabel
            </p>
            <ol className="list-decimal pl-[20px] text-lg">
              <li className="mb-[5px]">
                Klik{" "}
                <span className="bg-[#D4D4D4] p-1 rounded-md font-semibold inline-block">
                  <FontAwesomeIcon icon={faTable} /> Tabel
                </span>{" "}
                pada menu navigasi
              </li>
              <li className="mb-[5px]">
                Klik tombol{" "}
                <span className="italic text-blue-800 font-medium">
                  <FontAwesomeIcon
                    className="mr-[5px] text-black"
                    icon={faTableColumns}
                  />
                  atribut
                </span>{" "}
                pada salah satu tabel
              </li>
              <li className="mb-[5px]">
                Pengguna dapat melihat struktur tabel
              </li>
            </ol>
          </div>
          <div className="mb-[20px]">
            <p className="text-xl font-semibold mb-[5px]">
              Cara menambahkan kolom atribut tabel
            </p>
            <ol className="list-decimal pl-[20px] text-lg">
              <li className="mb-[5px]">
                Klik{" "}
                <span className="bg-[#D4D4D4] p-1 rounded-md font-semibold inline-block">
                  <FontAwesomeIcon icon={faTable} /> Tabel
                </span>{" "}
                pada menu navigasi
              </li>
              <li className="mb-[5px]">
                Klik tombol{" "}
                <span className="italic text-blue-800 font-medium">
                  <FontAwesomeIcon
                    className="mr-[5px] text-black"
                    icon={faTableColumns}
                  />
                  atribut
                </span>{" "}
                pada salah satu tabel
              </li>
              <li className="mb-[5px]">
                Klik tombol <FontAwesomeIcon icon={faCirclePlus} />
              </li>
              <li className="mb-[5px]">
                Pengguna mengisi kolom yang ditambahkan
              </li>
              <li className="mb-[5px]">
                Klik tombol{" "}
                <span className="bg-[#D4D4D4] p-1 rounded-md font-semibold inline-block">
                  Simpan
                </span>
              </li>
            </ol>
          </div>
          <div className="mb-[20px]">
            <p className="text-xl font-semibold mb-[5px]">
              Cara mengubah kolom atribut tabel
            </p>
            <ol className="list-decimal pl-[20px] text-lg">
              <li className="mb-[5px]">
                Klik{" "}
                <span className="bg-[#D4D4D4] p-1 rounded-md font-semibold inline-block">
                  <FontAwesomeIcon icon={faTable} /> Tabel
                </span>{" "}
                pada menu navigasi
              </li>
              <li className="mb-[5px]">
                Klik tombol{" "}
                <span className="italic text-blue-800 font-medium">
                  <FontAwesomeIcon
                    className="mr-[5px] text-black"
                    icon={faTableColumns}
                  />
                  atribut
                </span>{" "}
                pada salah satu tabel
              </li>
              <li className="mb-[5px]">
                Pengguna dapat mengubah isi dari kolom yang tersedia
              </li>
              <li className="mb-[5px]">
                Klik tombol{" "}
                <span className="bg-[#D4D4D4] p-1 rounded-md font-semibold inline-block">
                  Simpan
                </span>
              </li>
            </ol>
          </div>
          <div className="mb-[20px]">
            <p className="text-xl font-semibold mb-[5px]">
              Cara menghapus kolom atribut tabel
            </p>
            <ol className="list-decimal pl-[20px] text-lg">
              <li className="mb-[5px]">
                Klik{" "}
                <span className="bg-[#D4D4D4] p-1 rounded-md font-semibold inline-block">
                  <FontAwesomeIcon icon={faTable} /> Tabel
                </span>{" "}
                pada menu navigasi
              </li>
              <li className="mb-[5px]">
                Klik tombol{" "}
                <span className="italic text-blue-800 font-medium">
                  <FontAwesomeIcon
                    className="mr-[5px] text-black"
                    icon={faTableColumns}
                  />
                  atribut
                </span>{" "}
                pada salah satu tabel
              </li>
              <li className="mb-[5px]">
                Klik tombol <FontAwesomeIcon icon={faCircleMinus} />
              </li>
              <li className="mb-[5px]">
                Klik tombol{" "}
                <span className="bg-[#D4D4D4] p-1 rounded-md font-semibold inline-block">
                  Ya
                </span>{" "}
                pada konfirmasi untuk menghapus kolom
              </li>
              <li className="mb-[5px]">
                Klik tombol{" "}
                <span className="bg-[#D4D4D4] p-1 rounded-md font-semibold inline-block">
                  Simpan
                </span>
              </li>
            </ol>
          </div>
        </div>
      </DokumentasiSect>

      <DokumentasiSect text={"Pengelolaan Data Tabel"}>
        <div className="pl-[30px]">
          <div className="mb-[20px]">
            <p className="text-xl font-semibold mb-[5px]">
              Cara membaca data pada tabel
            </p>
            <ol className="list-decimal pl-[20px] text-lg">
              <li className="mb-[5px]">
                Klik{" "}
                <span className="bg-[#D4D4D4] p-1 rounded-md font-semibold inline-block">
                  <FontAwesomeIcon icon={faTable} /> Tabel
                </span>{" "}
                pada menu navigasi
              </li>
              <li className="mb-[5px]">
                Klik salah satu{" "}
                <span className="font-semibold">nama tabel</span> yang datanya
                akan dilihat
              </li>
              <li className="mb-[5px]">
                Pengguna dapat melihat data pada tabel
              </li>
            </ol>
          </div>
          <div className="mb-[20px]">
            <p className="text-xl font-semibold mb-[5px]">
              Cara menambahkan data pada tabel
            </p>
            <ol className="list-decimal pl-[20px] text-lg">
              <li className="mb-[5px]">
                Klik{" "}
                <span className="bg-[#D4D4D4] p-1 rounded-md font-semibold inline-block">
                  <FontAwesomeIcon icon={faTable} /> Tabel
                </span>{" "}
                pada menu navigasi
              </li>
              <li className="mb-[5px]">
                Klik salah satu{" "}
                <span className="font-semibold">nama tabel</span> yang datanya
                akan ditambahkan
              </li>
              <li className="mb-[5px]">
                Klik tombol <FontAwesomeIcon icon={faCirclePlus} />
              </li>
              <li className="mb-[5px]">
                Masukkan data pada kolom yang tersedia
              </li>
              <li className="mb-[5px]">
                Klik tombol{" "}
                <span className="bg-[#D4D4D4] p-1 rounded-md font-semibold inline-block">
                  Tambah data
                </span>
              </li>
            </ol>
          </div>
          <div className="mb-[20px]">
            <p className="text-xl font-semibold mb-[5px]">
              Cara mengubah data pada tabel
            </p>
            <ol className="list-decimal pl-[20px] text-lg">
              <li className="mb-[5px]">
                Klik{" "}
                <span className="bg-[#D4D4D4] p-1 rounded-md font-semibold inline-block">
                  <FontAwesomeIcon icon={faTable} /> Tabel
                </span>{" "}
                pada menu navigasi
              </li>
              <li className="mb-[5px]">
                Klik salah satu{" "}
                <span className="font-semibold">nama tabel</span> yang datanya
                akan diubah
              </li>
              <li className="mb-[5px]">
                Klik tombol{" "}
                <span className="italic text-blue-800 font-medium">
                  <FontAwesomeIcon
                    className="mr-[5px] text-black"
                    icon={faPenToSquare}
                  />
                  sunting
                </span>{" "}
                pada salah satu data
              </li>
              <li className="mb-[5px]">
                Pengguna mengubah data pada kolom yang tersedia
              </li>
              <li className="mb-[5px]">
                Klik tombol{" "}
                <span className="bg-[#D4D4D4] p-1 rounded-md font-semibold inline-block">
                  Simpan
                </span>
              </li>
            </ol>
          </div>
          <div className="mb-[20px]">
            <p className="text-xl font-semibold mb-[5px]">
              Cara menghapus data pada tabel
            </p>
            <ol className="list-decimal pl-[20px] text-lg">
              <li className="mb-[5px]">
                Klik{" "}
                <span className="bg-[#D4D4D4] p-1 rounded-md font-semibold inline-block">
                  <FontAwesomeIcon icon={faTable} /> Tabel
                </span>{" "}
                pada menu navigasi
              </li>
              <li className="mb-[5px]">
                Klik salah satu{" "}
                <span className="font-semibold">nama tabel</span> yang datanya
                akan dihapus
              </li>
              <li className="mb-[5px]">
                Klik tombol{" "}
                <span className="italic text-blue-800 font-medium">
                  <FontAwesomeIcon
                    className="mr-[5px] text-black"
                    icon={faTrashCan}
                  />
                  hapus
                </span>{" "}
                pada salah satu data
              </li>
              <li className="mb-[5px]">
                Klik tombol{" "}
                <span className="bg-[#D4D4D4] p-1 rounded-md font-semibold inline-block">
                  Ya
                </span>{" "}
                pada konfirmasi penghapusan data
              </li>
            </ol>
          </div>
        </div>
      </DokumentasiSect>
    </div>
  );
};

export default Dokumentasi;
