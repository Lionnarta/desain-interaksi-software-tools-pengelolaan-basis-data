import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import styled from "styled-components";
import Tooltips from "../components/Tooltips";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus, faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const Temp2 = () => {
  const [basisData, setBasisData] = useState(
    sessionStorage.getItem("databaseName")
      ? sessionStorage.getItem("databaseName")
      : "-"
  );
  const [data, setData] = useState(dummyData);
  const [namaTabel, setNamaTabel] = useState("");
  const [namaKolom, setNamaKolom] = useState("");
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [create, setCreate] = useState(false);
  const [namaTabelBaru, setNamaTabelBaru] = useState("");
  const [ekspor, setEkspor] = useState(false);
  const [tabelAktif, setTabelAktif] = useState("");
  const [strukturAktif, setStrukturAktif] = useState([]);

  const TableRow = ({
    namaTabel,
    jumlahData,
    openModal,
    openStrukturTabel,
  }) => {
    return (
      <>
        <tr>
          <th className="px-6 py-1 font-normal">
            <Link to={`/tabel/${namaTabel}`}>{namaTabel}</Link>
          </th>
          <th className="px-6 py-1 font-normal text-center">{jumlahData}</th>
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

  const openModal = (namaTabel) => {
    setNamaTabel(namaTabel);
    return setShow(true);
  };

  const closeModal = () => {
    return setShow(false);
  };

  const openModal2 = (namaKolom) => {
    setNamaKolom(namaKolom);
    return setShow2(true);
  };

  const closeModal2 = () => {
    return setShow2(false);
  };

  const openStrukturTabel = (namaTabel) => {
    setTabelAktif(namaTabel);
    var struktur;
    for (let index = 0; index < data.length; index++) {
      if (data[index].namatabel === namaTabel) {
        struktur = data[index].struktur;
      }
    }
    setStrukturAktif(struktur);
  };

  const closeStrukturTabel = () => {
    setTabelAktif("");
    setStrukturAktif([]);
  };

  const handleRemove = (namaTabel) => {
    const newData = data.filter((data) => data.namatabel !== namaTabel);
    setData(newData);
    closeModal();
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (namaTabelBaru !== "") {
      const newData = data.concat({
        namatabel: namaTabelBaru,
        jumlahdata: 0,
        struktur: [{ nama: "", tipe: "", panjang: "" }],
      });
      setData(newData);
      setCreate(false);
      setTabelAktif(namaTabelBaru);
      setStrukturAktif([{ nama: "", tipe: "", panjang: "" }]);
    }
  };

  const tambahKolom = () => {
    const newStruktur = strukturAktif.concat({
      nama: "",
      tipe: "",
      panjang: "",
    });
    setStrukturAktif(newStruktur);
  };

  const hapusKolom = (nama) => {
    const newStruktur = strukturAktif.filter(
      (struktur) => struktur.nama !== nama
    );
    setStrukturAktif(newStruktur);
    closeModal2();
  };

  return (
    <div className="px-10 py-16 font-poppins text-black">
      <p className="text-3xl font-semibold mb-[30px]">
        Tabel{tabelAktif !== "" ? `: ${tabelAktif}` : ""}
      </p>

      {/* DAFTAR TABEL */}
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
                    jumlahData={data.jumlahdata}
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

      {/* FITUR MEMBUAT TABEL DAN EKSPOR */}
      {basisData !== "-" && !create && !ekspor && tabelAktif === "" && (
        <div className="grid gap-y-4">
          <div
            className="w-[320px] justify-center flex items-center px-[15px] py-[10px] bg-[#D4D4D4] hover:bg-[#ECECEC] transition ease-in-out duration-150 rounded-lg cursor-pointer"
            style={{ boxShadow: "0px 5px 50px 5px rgba(0, 0, 0, 0.05)" }}
            onClick={() => setCreate(true)}
          >
            <p className="text-xl font-medium mr-[10px]">Membuat tabel baru</p>
            <Tooltips
              text={"Membuat tabel baru pada basis data yang terhubung"}
            ></Tooltips>
          </div>
          <div
            className="w-[320px] justify-center flex items-center px-[15px] py-[10px] bg-[#D4D4D4] hover:bg-[#ECECEC] transition ease-in-out duration-150 rounded-lg cursor-pointer"
            style={{ boxShadow: "0px 5px 50px 5px rgba(0, 0, 0, 0.05)" }}
            onClick={() => setEkspor(true)}
          >
            <p className="text-xl font-medium mr-[10px]">Ekspor basis data</p>
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

      {/* STRUKTUR TABEL */}
      {basisData !== "-" && tabelAktif !== "" && (
        <>
          <ScrollDiv className="max-h-[320px] overflow-y-scroll pr-[20px] mb-[30px]">
            {data.length > 0 && (
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
                          className="w-[150px] text-base mx-3 px-[15px] py-[10px] border border-black rounded-sm outline-none"
                          defaultValue={data.nama}
                        />
                      </th>
                      <th className="font-normal pb-[5px]">
                        <input
                          type="text"
                          className="w-[150px] text-base mx-3 px-[15px] py-[10px] border border-black rounded-sm outline-none"
                          defaultValue={data.tipe}
                        />
                      </th>
                      <th className="font-normal pb-[5px]">
                        <input
                          type="text"
                          className="w-[150px] text-base mx-3 px-[15px] py-[10px] border border-black rounded-sm outline-none"
                          defaultValue={data.panjang}
                        />
                      </th>
                      <th>
                        <FontAwesomeIcon
                          icon={faCircleMinus}
                          className="w-[25px] h-[25px] cursor-pointer"
                          onClick={() => openModal2(data.nama)}
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
            onClick={() => hapusKolom(namaKolom)}
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
  );
};

export default Temp2;

const dummyData = [
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

const ScrollDiv = styled.div`
  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #d4d4d4;
  }
`;
