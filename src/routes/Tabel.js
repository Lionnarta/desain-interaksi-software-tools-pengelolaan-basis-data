import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import styled from "styled-components";
import Tooltips from "../components/Tooltips";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { listTabel } from "./Constant";

const Tabel = () => {
  // Nama Basis data Terhubung
  const [basisData, setBasisData] = useState(
    sessionStorage.getItem("databaseName")
      ? sessionStorage.getItem("databaseName")
      : "-"
  );
  // Isi Data
  const [data, setData] = useState(listTabel);
  // Nama Struktur Tabel Yang Dibuka
  const [tabelAktif, setTabelAktif] = useState("");

  // Row Tabel
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
              // onClick={() => openStrukturTabel(namaTabel)}
            >
              struktur
            </p>
            <p
              className="italic cursor-pointer"
              // onClick={() => openModal(namaTabel)}
            >
              hapus
            </p>
          </th>
        </tr>
      </>
    );
  };

  return (
    <div className="px-10 py-16 font-poppins text-black">
      <p className="text-3xl font-semibold mb-[30px]">
        Tabel{tabelAktif !== "" ? `: ${tabelAktif}` : ""}
      </p>

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
                    // openModal={openModal}
                    // openStrukturTabel={openStrukturTabel}
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
    </div>
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
