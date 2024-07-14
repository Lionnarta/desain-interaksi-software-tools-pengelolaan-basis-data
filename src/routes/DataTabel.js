import { useState } from "react";
import styled from "styled-components";
import Modal from "../components/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";

const DataTabel = ({
  closeDaftarData,
  namaTabel,
  dataStruktur,
  dataSemuaTabel,
  setDataSemuaTabel,
}) => {
  // Nama Basis Data Terhubung
  const [basisData, setBasisData] = useState(
    sessionStorage.getItem("databaseName")
      ? sessionStorage.getItem("databaseName")
      : "-"
  );
  // Aksi Pada Index Data
  const [indexData, setIndexData] = useState("");
  // Bool Modal Hapus Data
  const [show, setShow] = useState(false);
  // Bool Tambah Data
  const [tambah, setTambah] = useState(false);
  // Bool Sunting Data
  const [sunting, setSunting] = useState(false);
  // Index Sunting
  const [suntingIdx, setSuntingIdx] = useState("");
  // Data Sunting
  const [dataSunting, setDataSunting] = useState({});

  // Modal Hapus Data
  const openModal = (index) => {
    setIndexData(index);
    return setShow(true);
  };

  const closeModal = () => {
    return setShow(false);
  };

  const handleRemove = (index) => {
    let prevDataSemuaTabel = { ...dataSemuaTabel };
    const newData = dataSemuaTabel[namaTabel].filter((_, idx) => idx !== index);
    prevDataSemuaTabel[namaTabel] = newData;
    setDataSemuaTabel(prevDataSemuaTabel);
    closeModal();
  };

  const showTambah = () => {
    setTambah(true);
    setSunting(false);
  };

  const tambahData = (e) => {
    let addData = {};
    for (let index = 0; index < e.length - 1; index++) {
      addData[e[index].name] = e[index].value;
    }
    let prevDataSemuaTabel = { ...dataSemuaTabel };
    let newData = prevDataSemuaTabel[namaTabel];
    newData[newData.length] = addData;
    prevDataSemuaTabel[namaTabel] = newData;
    setDataSemuaTabel(prevDataSemuaTabel);
  };

  const suntingData = (index) => {
    setTambah(false);
    setSunting(true);
    setSuntingIdx(index);
    setDataSunting(dataSemuaTabel[namaTabel][index]);
  };

  const tempDataChange = (e, namaKolom) => {
    setDataSunting({ ...dataSunting, [namaKolom]: e.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    tambahData(event.target);
    setTambah(false);
  };

  const submitHandler2 = (event) => {
    event.preventDefault();
    let prevDataSemuaTabel = { ...dataSemuaTabel };
    let newData = prevDataSemuaTabel[namaTabel];
    newData[suntingIdx] = dataSunting;
    prevDataSemuaTabel[namaTabel] = newData;
    setDataSemuaTabel(prevDataSemuaTabel);
    setSunting(false);
    setSuntingIdx("");
    setDataSunting({});
  };

  return (
    <div className="px-10 py-16 font-poppins text-black">
      <div className="mb-[30px] flex items-center gap-2">
        <FontAwesomeIcon
          icon={faCircleChevronLeft}
          onClick={closeDaftarData}
          className="w-[20px] h-[20px] cursor-pointer"
        />
        <p className="text-3xl font-semibold">Tabel: {namaTabel}</p>
      </div>

      {basisData !== "-" && (
        <>
          <ScrollDiv className="max-h-[320px] overflow-y-scroll pr-[20px] mb-[30px]">
            {dataSemuaTabel[namaTabel] !== undefined && (
              <table className="text-left text-base">
                <thead>
                  <tr>
                    {dataStruktur[namaTabel].map((data) => (
                      <th key={data.nama} className="px-6 py-2">
                        {data.nama}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {dataSemuaTabel[namaTabel].map((data, idx) => (
                    <tr key={idx}>
                      {dataStruktur[namaTabel].map((struktur, sIdx) => (
                        <th
                          key={idx + "-" + sIdx}
                          className="px-6 py-1 font-normal"
                        >
                          {data[struktur.nama]}
                        </th>
                      ))}
                      <th className="px-6 py-1 font-normal flex gap-2">
                        <p
                          className="italic cursor-pointer"
                          onClick={() => suntingData(idx)}
                        >
                          sunting
                        </p>
                        <p
                          className="italic cursor-pointer"
                          onClick={() => openModal(idx)}
                        >
                          hapus
                        </p>
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
              onClick={showTambah}
            />
          </div>

          {tambah && (
            <form onSubmit={(e) => submitHandler(e)} className="grid">
              {dataStruktur[namaTabel].map((data) => (
                <input
                  key={data.nama}
                  type="text"
                  name={data.nama}
                  placeholder={data.nama}
                  className="w-[320px] text-base px-[15px] py-[10px] mb-[15px] border border-black rounded-lg outline-none"
                  required
                />
              ))}
              <div
                className="w-[320px] mb-[15px] justify-center flex items-center px-[15px] py-[10px] bg-[#D4D4D4] hover:bg-[#ECECEC] transition ease-in-out duration-150 rounded-lg cursor-pointer"
                style={{ boxShadow: "0px 5px 50px 5px rgba(0, 0, 0, 0.05)" }}
                onClick={() => setTambah(false)}
              >
                <p className="text-xl font-medium mr-[10px]">Batal</p>
              </div>
              <button
                className="w-[320px] justify-center flex items-center px-[15px] py-[10px] bg-[#D4D4D4] hover:bg-[#ECECEC] transition ease-in-out duration-150 rounded-lg cursor-pointer"
                style={{ boxShadow: "0px 5px 50px 5px rgba(0, 0, 0, 0.05)" }}
              >
                <p className="text-xl font-medium mr-[10px]">Tambah data</p>
              </button>
            </form>
          )}

          {sunting && (
            <form onSubmit={(e) => submitHandler2(e)} className="grid">
              {dataStruktur[namaTabel].map((data) => (
                <input
                  key={data.nama}
                  type="text"
                  name={data.nama}
                  placeholder={data.nama}
                  className="w-[320px] text-base px-[15px] py-[10px] mb-[15px] border border-black rounded-lg outline-none"
                  value={dataSunting[data.nama]}
                  onChange={(e) => tempDataChange(e, data.nama)}
                  required
                />
              ))}
              <div
                className="w-[320px] mb-[15px] justify-center flex items-center px-[15px] py-[10px] bg-[#D4D4D4] hover:bg-[#ECECEC] transition ease-in-out duration-150 rounded-lg cursor-pointer"
                style={{ boxShadow: "0px 5px 50px 5px rgba(0, 0, 0, 0.05)" }}
                onClick={() => setSunting(false)}
              >
                <p className="text-xl font-medium mr-[10px]">Batal</p>
              </div>
              <button
                className="w-[320px] justify-center flex items-center px-[15px] py-[10px] bg-[#D4D4D4] hover:bg-[#ECECEC] transition ease-in-out duration-150 rounded-lg cursor-pointer"
                style={{ boxShadow: "0px 5px 50px 5px rgba(0, 0, 0, 0.05)" }}
              >
                <p className="text-xl font-medium mr-[10px]">Simpan</p>
              </button>
            </form>
          )}
        </>
      )}
      {/* MODAL */}
      <Modal show={show} closeModal={closeModal}>
        <p className="text-lg font-semibold text-center mb-[20px]">
          Konfirmasi penghapusan data
        </p>
        <div className="grid grid-cols-2">
          <p
            className="w-[150px] mx-auto text-center px-[15px] py-[10px] bg-[#D4D4D4] hover:bg-[#ECECEC] transition ease-in-out duration-150 rounded-lg cursor-pointer"
            onClick={() => handleRemove(indexData)}
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
    </div>
  );
};

export default DataTabel;

const ScrollDiv = styled.div`
  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #d4d4d4;
  }
`;
