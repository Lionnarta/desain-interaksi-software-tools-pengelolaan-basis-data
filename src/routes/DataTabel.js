import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Modal from "../components/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const DataTabel = () => {
  const param = useParams();

  const [basisData, setBasisData] = useState(
    sessionStorage.getItem("databaseName")
      ? sessionStorage.getItem("databaseName")
      : "-"
  );
  const [dataCustomer, setDataCustomer] = useState(dummyCustomer);
  const [dataUser, setDataUser] = useState(dummyUser);
  const [dataProduct, setDataProduct] = useState(dummyProduct);
  const [dataTransaction, setDataTransaction] = useState(dummyTransaction);
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  const [tabelAktif, setTabelAktif] = useState(
    param.namatabel === "customer"
      ? "dataCustomer"
      : param.namatabel === "user"
      ? "dataUser"
      : param.namatabel === "product"
      ? "dataProduct"
      : param.namatabel === "transaction"
      ? "dataTransaction"
      : "dataLain"
  );
  const [tambah, setTambah] = useState(false);
  const [sunting, setSunting] = useState(false);

  const openModal = (id) => {
    setId(id);
    return setShow(true);
  };

  const closeModal = () => {
    return setShow(false);
  };

  const handleRemove = (id) => {
    switch (tabelAktif) {
      case "dataCustomer":
        const newDataCustomer = dataCustomer.filter(
          (data) => data.userid !== id
        );
        setDataCustomer(newDataCustomer);
        closeModal();
        break;
      case "dataUser":
        const newDataUser = dataUser.filter((data) => data.userid !== id);
        setDataUser(newDataUser);
        closeModal();
        break;
      case "dataProduct":
        const newDataProduct = dataProduct.filter(
          (data) => data.produkid !== id
        );
        setDataProduct(newDataProduct);
        closeModal();
        break;
      case "dataTransaction":
        const newDataTransaction = dataTransaction.filter(
          (data) => data.userid !== id
        );
        setDataTransaction(newDataTransaction);
        closeModal();
        break;
      default:
        const newDataLain = dataCustomer.filter((data) => data.userid !== id);
        setDataCustomer(newDataLain);
        closeModal();
        break;
    }
  };

  const tambahData = (e) => {
    switch (tabelAktif) {
      case "dataCustomer":
        const newDataCustomer = dataCustomer.concat({
          userid: e[0].value,
          nama: e[1].value,
        });
        setDataCustomer(newDataCustomer);
        break;
      case "dataUser":
        const newDataUser = dataUser.concat({
          userid: e[0].value,
          nama: e[1].value,
        });
        setDataUser(newDataUser);
        break;
      case "dataProduct":
        const newDataProduct = dataProduct.concat({
          produksiid: e[0].value,
          namaproduk: e[1].value,
        });
        setDataProduct(newDataProduct);
        break;
      case "dataTransaction":
        const newDataTransaction = dataTransaction.concat({
          userid: e[0].value,
          nama: e[1].value,
          produkid: e[2].value,
          namaproduk: e[3].value,
        });
        setDataTransaction(newDataTransaction);
        break;
      default:
        const newDataLain = dataCustomer.concat({
          userid: e[0].value,
          nama: e[1].value,
        });
        setDataCustomer(newDataLain);
        break;
    }
  };

  const suntingData = (id) => {
    setSunting(true);
    setId(id);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    tambahData(event.target);
    setTambah(false);
  };

  const submitHandler2 = (event) => {
    event.preventDefault();
    setSunting(false);
  };

  return (
    <div className="px-10 py-16 font-poppins text-black">
      <p className="text-3xl font-semibold mb-[30px]">
        Tabel: {param.namatabel}
      </p>
      <div className="mb-[20px]">
        <div className="flex items-center gap-x-2">
          <input
            type="text"
            name="filter"
            placeholder="Cari data"
            className="w-[320px] text-base px-[15px] py-[10px] border border-black rounded-lg outline-none"
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="w-[25px] h-[25px] cursor-pointer"
          />
        </div>
      </div>
      {basisData !== "-" && (
        <>
          <ScrollDiv className="max-h-[320px] overflow-y-scroll pr-[20px] mb-[30px]">
            {param.namatabel === "customer" && (
              <>
                <table className="text-left text-base">
                  <thead>
                    <tr>
                      <th className="px-6 py-2">userid</th>
                      <th className="px-6 py-2">nama</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataCustomer.map((data, idx) => (
                      <tr key={idx}>
                        <th className="px-6 py-1 font-normal text-center">
                          {data.userid}
                        </th>
                        <th className="px-6 py-1 font-normal">{data.nama}</th>
                        <th className="px-6 py-1 font-normal flex gap-2">
                          <p
                            className="italic cursor-pointer"
                            onClick={() => suntingData(data.userid)}
                          >
                            sunting
                          </p>
                          <p
                            className="italic cursor-pointer"
                            onClick={() => openModal(data.userid)}
                          >
                            hapus
                          </p>
                        </th>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}
            {param.namatabel === "user" && (
              <table className="text-left text-base">
                <thead>
                  <tr>
                    <th className="px-6 py-2">userid</th>
                    <th className="px-6 py-2">nama</th>
                  </tr>
                </thead>
                <tbody>
                  {dataUser.map((data, idx) => (
                    <tr key={idx}>
                      <th className="px-6 py-1 font-normal text-center">
                        {data.userid}
                      </th>
                      <th className="px-6 py-1 font-normal">{data.nama}</th>
                      <th className="px-6 py-1 font-normal flex gap-2">
                        <p
                          className="italic cursor-pointer"
                          onClick={() => suntingData(data.userid)}
                        >
                          sunting
                        </p>
                        <p
                          className="italic cursor-pointer"
                          onClick={() => openModal(data.userid)}
                        >
                          hapus
                        </p>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            {param.namatabel === "product" && (
              <table className="text-left text-base">
                <thead>
                  <tr>
                    <th className="px-6 py-2">produkid</th>
                    <th className="px-6 py-2">namaproduk</th>
                  </tr>
                </thead>
                <tbody>
                  {dataProduct.map((data, idx) => (
                    <tr key={idx}>
                      <th className="px-6 py-1 font-normal text-center">
                        {data.produkid}
                      </th>
                      <th className="px-6 py-1 font-normal">
                        {data.namaproduk}
                      </th>
                      <th className="px-6 py-1 font-normal flex gap-2">
                        <p
                          className="italic cursor-pointer"
                          onClick={() => suntingData(data.produkid)}
                        >
                          sunting
                        </p>
                        <p
                          className="italic cursor-pointer"
                          onClick={() => openModal(data.produkid)}
                        >
                          hapus
                        </p>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            {param.namatabel === "transaction" && (
              <table className="text-left text-base">
                <thead>
                  <tr>
                    <th className="px-6 py-2">userid</th>
                    <th className="px-6 py-2">nama</th>
                    <th className="px-6 py-2">produkid</th>
                    <th className="px-6 py-2">namaproduk</th>
                  </tr>
                </thead>
                <tbody>
                  {dataTransaction.map((data, idx) => (
                    <tr key={idx}>
                      <th className="px-6 py-1 font-normal text-center">
                        {data.userid}
                      </th>
                      <th className="px-6 py-1 font-normal">{data.nama}</th>
                      <th className="px-6 py-1 font-normal text-center">
                        {data.produkid}
                      </th>
                      <th className="px-6 py-1 font-normal">
                        {data.namaproduk}
                      </th>
                      <th className="px-6 py-1 font-normal flex gap-2">
                        <p
                          className="italic cursor-pointer"
                          onClick={() => suntingData(data.userid)}
                        >
                          sunting
                        </p>
                        <p
                          className="italic cursor-pointer"
                          onClick={() => openModal(data.userid)}
                        >
                          hapus
                        </p>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            {param.namatabel !== "customer" &&
              param.namatabel !== "user" &&
              param.namatabel !== "product" &&
              param.namatabel !== "transaction" && (
                <table className="text-left text-base">
                  <thead>
                    <tr>
                      <th className="px-6 py-2">userid</th>
                      <th className="px-6 py-2">nama</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataCustomer.map((data, idx) => (
                      <tr key={idx}>
                        <th className="px-6 py-1 font-normal text-center">
                          {data.userid}
                        </th>
                        <th className="px-6 py-1 font-normal">{data.nama}</th>
                        <th className="px-6 py-1 font-normal flex gap-2">
                          <p
                            className="italic cursor-pointer"
                            onClick={() => suntingData(data.userid)}
                          >
                            sunting
                          </p>
                          <p
                            className="italic cursor-pointer"
                            onClick={() => openModal(data.userid)}
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
              onClick={() => setTambah(true)}
            />
          </div>
          {tambah && (
            <form onSubmit={(e) => submitHandler(e)} className="grid">
              {param.namatabel === "customer" && (
                <>
                  <input
                    type="text"
                    name="userid"
                    placeholder="userid"
                    className="w-[320px] text-base px-[15px] py-[10px] mb-[15px] border border-black rounded-lg outline-none"
                    required
                  />
                  <input
                    type="text"
                    name="nama"
                    placeholder="nama"
                    className="w-[320px] text-base px-[15px] py-[10px] mb-[15px] border border-black rounded-lg outline-none"
                    required
                  />
                </>
              )}
              {param.namatabel === "user" && (
                <>
                  <input
                    type="text"
                    name="userid"
                    placeholder="userid"
                    className="w-[320px] text-base px-[15px] py-[10px] mb-[15px] border border-black rounded-lg outline-none"
                    required
                  />
                  <input
                    type="text"
                    name="nama"
                    placeholder="nama"
                    className="w-[320px] text-base px-[15px] py-[10px] mb-[15px] border border-black rounded-lg outline-none"
                    required
                  />
                </>
              )}
              {param.namatabel === "product" && (
                <>
                  <input
                    type="text"
                    name="produkid"
                    placeholder="produkid"
                    className="w-[320px] text-base px-[15px] py-[10px] mb-[15px] border border-black rounded-lg outline-none"
                    required
                  />
                  <input
                    type="text"
                    name="namaproduk"
                    placeholder="namaproduk"
                    className="w-[320px] text-base px-[15px] py-[10px] mb-[15px] border border-black rounded-lg outline-none"
                    required
                  />
                </>
              )}
              {param.namatabel === "transaction" && (
                <>
                  <input
                    type="text"
                    name="userid"
                    placeholder="userid"
                    className="w-[320px] text-base px-[15px] py-[10px] mb-[15px] border border-black rounded-lg outline-none"
                    required
                  />
                  <input
                    type="text"
                    name="nama"
                    placeholder="nama"
                    className="w-[320px] text-base px-[15px] py-[10px] mb-[15px] border border-black rounded-lg outline-none"
                    required
                  />
                  <input
                    type="text"
                    name="produkid"
                    placeholder="produkid"
                    className="w-[320px] text-base px-[15px] py-[10px] mb-[15px] border border-black rounded-lg outline-none"
                    required
                  />
                  <input
                    type="text"
                    name="namaproduk"
                    placeholder="namaproduk"
                    className="w-[320px] text-base px-[15px] py-[10px] mb-[15px] border border-black rounded-lg outline-none"
                    required
                  />
                </>
              )}
              {param.namatabel !== "customer" &&
                param.namatabel !== "user" &&
                param.namatabel !== "product" &&
                param.namatabel !== "transaction" && (
                  <>
                    <input
                      type="text"
                      name="userid"
                      placeholder="userid"
                      className="w-[320px] text-base px-[15px] py-[10px] mb-[15px] border border-black rounded-lg outline-none"
                      required
                    />
                    <input
                      type="text"
                      name="nama"
                      placeholder="nama"
                      className="w-[320px] text-base px-[15px] py-[10px] mb-[15px] border border-black rounded-lg outline-none"
                      required
                    />
                  </>
                )}
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
              {param.namatabel === "customer" && (
                <>
                  <input
                    type="text"
                    name="userid"
                    placeholder="userid"
                    className="w-[320px] text-base px-[15px] py-[10px] mb-[15px] border border-black rounded-lg outline-none"
                    required
                  />
                  <input
                    type="text"
                    name="nama"
                    placeholder="nama"
                    className="w-[320px] text-base px-[15px] py-[10px] mb-[15px] border border-black rounded-lg outline-none"
                    required
                  />
                </>
              )}
              {param.namatabel === "user" && (
                <>
                  <input
                    type="text"
                    name="userid"
                    placeholder="userid"
                    className="w-[320px] text-base px-[15px] py-[10px] mb-[15px] border border-black rounded-lg outline-none"
                    required
                  />
                  <input
                    type="text"
                    name="nama"
                    placeholder="nama"
                    className="w-[320px] text-base px-[15px] py-[10px] mb-[15px] border border-black rounded-lg outline-none"
                    required
                  />
                </>
              )}
              {param.namatabel === "product" && (
                <>
                  <input
                    type="text"
                    name="produkid"
                    placeholder="produkid"
                    className="w-[320px] text-base px-[15px] py-[10px] mb-[15px] border border-black rounded-lg outline-none"
                    required
                  />
                  <input
                    type="text"
                    name="namaproduk"
                    placeholder="namaproduk"
                    className="w-[320px] text-base px-[15px] py-[10px] mb-[15px] border border-black rounded-lg outline-none"
                    required
                  />
                </>
              )}
              {param.namatabel === "transaction" && (
                <>
                  <input
                    type="text"
                    name="userid"
                    placeholder="userid"
                    className="w-[320px] text-base px-[15px] py-[10px] mb-[15px] border border-black rounded-lg outline-none"
                    required
                  />
                  <input
                    type="text"
                    name="nama"
                    placeholder="nama"
                    className="w-[320px] text-base px-[15px] py-[10px] mb-[15px] border border-black rounded-lg outline-none"
                    required
                  />
                  <input
                    type="text"
                    name="produkid"
                    placeholder="produkid"
                    className="w-[320px] text-base px-[15px] py-[10px] mb-[15px] border border-black rounded-lg outline-none"
                    required
                  />
                  <input
                    type="text"
                    name="namaproduk"
                    placeholder="namaproduk"
                    className="w-[320px] text-base px-[15px] py-[10px] mb-[15px] border border-black rounded-lg outline-none"
                    required
                  />
                </>
              )}
              {param.namatabel !== "customer" &&
                param.namatabel !== "user" &&
                param.namatabel !== "product" &&
                param.namatabel !== "transaction" && (
                  <>
                    <input
                      type="text"
                      name="userid"
                      placeholder="userid"
                      className="w-[320px] text-base px-[15px] py-[10px] mb-[15px] border border-black rounded-lg outline-none"
                      required
                    />
                    <input
                      type="text"
                      name="nama"
                      placeholder="nama"
                      className="w-[320px] text-base px-[15px] py-[10px] mb-[15px] border border-black rounded-lg outline-none"
                      required
                    />
                  </>
                )}
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
            onClick={() => handleRemove(id)}
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

const dummyCustomer = [
  { userid: 1, nama: "Lia" },
  { userid: 2, nama: "Devin" },
];

const dummyUser = [
  { userid: 1, nama: "Lia" },
  { userid: 2, nama: "Devin" },
];

const dummyProduct = [
  { produkid: 1, namaproduk: "buku" },
  { produkid: 2, namaproduk: "pulpen" },
];

const dummyTransaction = [
  { userid: 1, nama: "Lia", produkid: 1, namaproduk: "buku" },
];
