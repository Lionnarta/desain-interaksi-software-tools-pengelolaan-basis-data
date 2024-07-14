import { useState } from "react";
import Modal from "../components/Modal";
import styled from "styled-components";
import Tooltips from "../components/Tooltips";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { dataTabel, listTabel, strukturTabel } from "./Constant";
import DataTabel from "./DataTabel";

const Tabel = () => {
  // Nama Basis data Terhubung
  const [basisData, setBasisData] = useState(
    sessionStorage.getItem("databaseName")
      ? sessionStorage.getItem("databaseName")
      : "-"
  );
  // Isi Data
  const [data, setData] = useState(listTabel);
  // Nama Tabel Untuk Dihapus
  const [namaTabel, setNamaTabel] = useState("");
  // Data Struktur
  const [dataStruktur, setDataStruktur] = useState(strukturTabel);
  // Data Seluruh Tabel
  const [dataSemuaTabel, setDataSemuaTabel] = useState(dataTabel);
  // Nama Struktur/Data Tabel Yang Dibuka
  const [tabelAktif, setTabelAktif] = useState("");
  // Data Struktur Aktif
  const [strukturAktif, setStrukturAktif] = useState([]);
  // Aksi Pada Kolom
  const [indexKolom, setIndexKolom] = useState("");
  // Bool Modal Hapus Tabel
  const [show, setShow] = useState(false);
  // Bool Modal Hapus Struktur
  const [show2, setShow2] = useState(false);
  // Bool Buat Tabel
  const [create, setCreate] = useState(false);
  // Bool Ekspor Tabel
  const [ekspor, setEkspor] = useState(false);
  // Nama Buat Tabel
  const [namaTabelBaru, setNamaTabelBaru] = useState("");
  // Bool Lihat Daftar Data
  const [showData, setShowData] = useState(false);

  // Daftar Data
  const closeDaftarData = () => {
    setShowData(false);
    setTabelAktif("");
  };

  const openDaftarData = (namaTabel) => {
    setShowData(true);
    setTabelAktif(namaTabel);
  };

  // Modal Hapus Tabel
  const openModal = (namaTabel) => {
    setNamaTabel(namaTabel);
    return setShow(true);
  };

  const closeModal = () => {
    return setShow(false);
  };

  // Modal Hapus Struktur
  const openModal2 = (index) => {
    setIndexKolom(index);
    return setShow2(true);
  };

  const closeModal2 = () => {
    return setShow2(false);
  };

  // Struktur Tabel
  const openStrukturTabel = (namaTabel) => {
    setTabelAktif(namaTabel);
    setStrukturAktif(dataStruktur[namaTabel]);
  };

  const closeStrukturTabel = () => {
    let data = dataStruktur;
    let update = { ...data, [tabelAktif]: strukturAktif };
    setDataStruktur(update);
    setTabelAktif("");
    setStrukturAktif([]);
  };

  const tambahKolom = () => {
    const newStruktur = strukturAktif.concat({
      nama: "",
      tipe: "",
      panjang: "",
    });
    setStrukturAktif(newStruktur);
  };

  const hapusKolom = (index) => {
    const newStruktur = strukturAktif.filter((_, idx) => idx !== index);
    setStrukturAktif(newStruktur);
    closeModal2();
  };

  const updateKolom = (e, idx) => {
    let daftarStruktur = [...strukturAktif];
    let struktur = { ...daftarStruktur[idx], [e.target.name]: e.target.value };
    daftarStruktur[idx] = struktur;
    setStrukturAktif(daftarStruktur);
  };

  // Hapus Tabel
  const handleRemove = (namaTabel) => {
    const newData = data.filter((data) => data.namatabel !== namaTabel);
    setData(newData);
    closeModal();
  };

  // Row Tabel
  const TableRow = ({ namaTabel, openModal, openStrukturTabel }) => {
    return (
      <>
        <tr>
          <th className="px-6 py-1 font-normal">
            <p
              className="cursor-pointer"
              onClick={() => openDaftarData(namaTabel)}
            >
              {namaTabel}
            </p>
          </th>
          <th className="px-6 py-1 font-normal text-center">
            {dataSemuaTabel[namaTabel].length}
          </th>
          <th className="px-6 py-1 font-normal flex gap-2">
            <p
              className="italic cursor-pointer"
              onClick={() => openStrukturTabel(namaTabel)}
            >
              struktur
            </p>
            <p
              className="italic cursor-pointer"
              onClick={() => openModal(namaTabel)}
            >
              hapus
            </p>
          </th>
        </tr>
      </>
    );
  };

  // Handler Buat Tabel
  const submitHandler = (event) => {
    event.preventDefault();
    if (namaTabelBaru !== "") {
      const newData = data.concat({
        namatabel: namaTabelBaru,
        jumlahdata: 0,
      });
      setData(newData);
      setCreate(false);
      setTabelAktif(namaTabelBaru);
      setStrukturAktif([{ nama: "", tipe: "", panjang: "" }]);
      setDataSemuaTabel({ ...dataSemuaTabel, [namaTabelBaru]: [] });
    }
  };

  return (
    <>
      {!showData && (
        <div className="px-10 py-16 font-poppins text-black">
          <p className="text-3xl font-semibold mb-[30px]">
            Tabel{tabelAktif !== "" ? `: ${tabelAktif}` : ""}
          </p>

          {/* BASIS DATA TERHUBUNG */}
          {basisData !== "-" && tabelAktif === "" && (
            <ScrollDiv className="max-h-[320px] overflow-y-scroll pr-[20px] mb-[70px]">
              {data.length > 0 && (
                <table className="text-left text-base">
                  <thead>
                    <tr>
                      <th className="px-6 py-2">Nama tabel</th>
                      <th className="px-6 py-2">Jumlah data</th>
                      <th className="px-6 py-2">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((data, idx) => (
                      <TableRow
                        key={idx}
                        namaTabel={data.namatabel}
                        openModal={openModal}
                        openStrukturTabel={openStrukturTabel}
                      />
                    ))}
                  </tbody>
                </table>
              )}
              {data.length === 0 && (
                <p className="text-lg mb-[70px]">
                  Tidak ada tabel pada basis data terhubung
                </p>
              )}
            </ScrollDiv>
          )}

          {/* BASIS DATA TIDAK TERHUBUNG */}
          {basisData === "-" && tabelAktif === "" && (
            <p className="text-lg mb-[70px]">
              Tidak ada basis data yang terhubung dengan aplikasi
            </p>
          )}

          {/* STRUKTUR TABEL */}
          {basisData !== "-" && tabelAktif !== "" && (
            <>
              <ScrollDiv className="max-h-[320px] overflow-y-scroll pr-[20px] mb-[30px]">
                {strukturAktif.length > 0 && (
                  <table className="text-left text-base">
                    <thead>
                      <tr>
                        <th className="px-3 py-2">Nama</th>
                        <th className="px-3 py-2">Tipe data</th>
                        <th className="px-3 py-2">Panjang data</th>
                      </tr>
                    </thead>
                    <tbody>
                      {strukturAktif.map((data, idx) => (
                        <tr key={idx}>
                          <th className="font-normal pb-[5px]">
                            <input
                              type="text"
                              name="nama"
                              className="w-[150px] text-base mx-3 px-[15px] py-[10px] border border-black rounded-sm outline-none"
                              value={data.nama}
                              onChange={(e) => updateKolom(e, idx)}
                            />
                          </th>
                          <th className="font-normal pb-[5px]">
                            <input
                              type="text"
                              name="tipe"
                              className="w-[150px] text-base mx-3 px-[15px] py-[10px] border border-black rounded-sm outline-none"
                              value={data.tipe}
                              onChange={(e) => updateKolom(e, idx)}
                            />
                          </th>
                          <th className="font-normal pb-[5px]">
                            <input
                              type="text"
                              name="panjang"
                              className="w-[150px] text-base mx-3 px-[15px] py-[10px] border border-black rounded-sm outline-none"
                              value={data.panjang}
                              onChange={(e) => updateKolom(e, idx)}
                            />
                          </th>
                          <th>
                            <FontAwesomeIcon
                              icon={faCircleMinus}
                              className="w-[25px] h-[25px] cursor-pointer"
                              onClick={() => openModal2(idx)}
                            />
                          </th>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </ScrollDiv>
              <div className="mb-[30px] relative">
                <hr className="border-black" />
                <FontAwesomeIcon
                  icon={faCirclePlus}
                  className="w-[25px] h-[25px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white cursor-pointer"
                  onClick={tambahKolom}
                />
              </div>
              <div
                className="w-[200px] justify-center flex items-center px-[15px] py-[10px] ml-auto mb-[70px] bg-[#D4D4D4] hover:bg-[#ECECEC] transition ease-in-out duration-150 rounded-lg cursor-pointer"
                style={{ boxShadow: "0px 5px 50px 5px rgba(0, 0, 0, 0.05)" }}
                onClick={closeStrukturTabel}
              >
                <p className="text-xl font-medium mr-[10px]">Simpan</p>
              </div>
              {data.length === 0 && (
                <p className="text-lg mb-[70px]">
                  Tidak ada tabel pada basis data terhubung
                </p>
              )}
            </>
          )}

          {/* FITUR MEMBUAT TABEL DAN EKSPOR */}
          {basisData !== "-" && !create && !ekspor && tabelAktif === "" && (
            <div className="grid gap-y-4">
              <div
                className="w-[320px] justify-center flex items-center px-[15px] py-[10px] bg-[#D4D4D4] hover:bg-[#ECECEC] transition ease-in-out duration-150 rounded-lg cursor-pointer"
                style={{ boxShadow: "0px 5px 50px 5px rgba(0, 0, 0, 0.05)" }}
                onClick={() => setCreate(true)}
              >
                <p className="text-xl font-medium mr-[10px]">
                  Membuat tabel baru
                </p>
                <Tooltips
                  text={"Membuat tabel baru pada basis data yang terhubung"}
                ></Tooltips>
              </div>
              <div
                className="w-[320px] justify-center flex items-center px-[15px] py-[10px] bg-[#D4D4D4] hover:bg-[#ECECEC] transition ease-in-out duration-150 rounded-lg cursor-pointer"
                style={{ boxShadow: "0px 5px 50px 5px rgba(0, 0, 0, 0.05)" }}
                onClick={() => setEkspor(true)}
              >
                <p className="text-xl font-medium mr-[10px]">
                  Ekspor basis data
                </p>
                <Tooltips
                  text={"Ekspor file basis data dengan ektensi *.db"}
                ></Tooltips>
              </div>
            </div>
          )}

          {/* MEMBUAT TABEL */}
          {create && !ekspor && tabelAktif === "" && (
            <div>
              <form onSubmit={(e) => submitHandler(e)}>
                <input
                  type="text"
                  name="name"
                  placeholder="Nama tabel"
                  className="w-[320px] text-base px-[15px] py-[10px] mb-[15px] border border-black rounded-lg outline-none"
                  value={namaTabelBaru}
                  onChange={(e) => setNamaTabelBaru(e.target.value)}
                  required
                />
                <div
                  className="w-[320px] mb-[15px] justify-center flex items-center px-[15px] py-[10px] bg-[#D4D4D4] hover:bg-[#ECECEC] transition ease-in-out duration-150 rounded-lg cursor-pointer"
                  style={{ boxShadow: "0px 5px 50px 5px rgba(0, 0, 0, 0.05)" }}
                  onClick={() => setCreate(false)}
                >
                  <p className="text-xl font-medium mr-[10px]">Batal</p>
                </div>
                <button
                  className="w-[320px] justify-center flex items-center px-[15px] py-[10px] bg-[#D4D4D4] hover:bg-[#ECECEC] transition ease-in-out duration-150 rounded-lg cursor-pointer"
                  style={{ boxShadow: "0px 5px 50px 5px rgba(0, 0, 0, 0.05)" }}
                >
                  <p className="text-xl font-medium mr-[10px]">Membuat tabel</p>
                </button>
              </form>
            </div>
          )}

          {/* EKSPOR */}
          {!create && ekspor && tabelAktif === "" && (
            <div>
              <form onSubmit={() => setEkspor(false)}>
                <input
                  type="text"
                  name="name"
                  placeholder="Nama Basis Data"
                  className="w-[320px] text-base px-[15px] py-[10px] mb-[15px] border border-black rounded-lg outline-none"
                  required
                />
                <div
                  className="w-[320px] mb-[15px] justify-center flex items-center px-[15px] py-[10px] bg-[#D4D4D4] hover:bg-[#ECECEC] transition ease-in-out duration-150 rounded-lg cursor-pointer"
                  style={{ boxShadow: "0px 5px 50px 5px rgba(0, 0, 0, 0.05)" }}
                  onClick={() => setEkspor(false)}
                >
                  <p className="text-xl font-medium mr-[10px]">Batal</p>
                </div>
                <button
                  className="w-[320px] justify-center flex items-center px-[15px] py-[10px] bg-[#D4D4D4] hover:bg-[#ECECEC] transition ease-in-out duration-150 rounded-lg cursor-pointer"
                  style={{ boxShadow: "0px 5px 50px 5px rgba(0, 0, 0, 0.05)" }}
                >
                  <p className="text-xl font-medium mr-[10px]">Ekspor</p>
                </button>
              </form>
            </div>
          )}

          {/* MODAL */}
          <Modal show={show} closeModal={closeModal}>
            <p className="text-lg font-semibold text-center mb-[20px]">
              Konfirmasi penghapusan tabel {namaTabel}
            </p>
            <div className="grid grid-cols-2">
              <p
                className="w-[150px] mx-auto text-center px-[15px] py-[10px] bg-[#D4D4D4] hover:bg-[#ECECEC] transition ease-in-out duration-150 rounded-lg cursor-pointer"
                onClick={() => handleRemove(namaTabel)}
              >
                Ya
              </p>
              <p
                className="w-[150px] mx-auto text-center px-[15px] py-[10px] bg-[#D4D4D4] hover:bg-[#ECECEC] transition ease-in-out duration-150 rounded-lg cursor-pointer"
                onClick={closeModal}
              >
                Tidak
              </p>
            </div>
          </Modal>

          <Modal show={show2} closeModal={closeModal2}>
            <p className="text-lg font-semibold text-center mb-[20px]">
              Konfirmasi penghapusan kolom ini
            </p>
            <div className="grid grid-cols-2">
              <p
                className="w-[150px] mx-auto text-center px-[15px] py-[10px] bg-[#D4D4D4] hover:bg-[#ECECEC] transition ease-in-out duration-150 rounded-lg cursor-pointer"
                onClick={() => hapusKolom(indexKolom)}
              >
                Ya
              </p>
              <p
                className="w-[150px] mx-auto text-center px-[15px] py-[10px] bg-[#D4D4D4] hover:bg-[#ECECEC] transition ease-in-out duration-150 rounded-lg cursor-pointer"
                onClick={closeModal2}
              >
                Tidak
              </p>
            </div>
          </Modal>
        </div>
      )}

      {showData && (
        <DataTabel
          closeDaftarData={closeDaftarData}
          namaTabel={tabelAktif}
          dataStruktur={dataStruktur}
          dataSemuaTabel={dataSemuaTabel}
          setDataSemuaTabel={setDataSemuaTabel}
        />
      )}
    </>
  );
};

export default Tabel;

const ScrollDiv = styled.div`
  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #d4d4d4;
  }
`;
