import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Tooltips from "../components/Tooltips";

const BasisData = () => {
  const [basisData, setBasisData] = useState(
    sessionStorage.getItem("databaseName")
      ? sessionStorage.getItem("databaseName")
      : "-"
  );
  const [create, setCreate] = useState(false);
  const [namaBasisData, setNamaBasisData] = useState("");

  const clickHandler = () => {
    setNamaBasisData("");
    setCreate(true);
  };

  const fileHandler = (event) => {
    setBasisData(event.target.files[0].name);
    sessionStorage.setItem("databaseName", event.target.files[0].name);
    if (event.target.files[0].name !== "") {
      toast.success("Berhasil impor basis data", { position: "bottom-center" });
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (namaBasisData !== "") {
      setBasisData(namaBasisData + ".db");
      sessionStorage.setItem("databaseName", namaBasisData + ".db");
      toast.success("Berhasil membuat basis data baru", {
        position: "bottom-center",
      });
    } else {
      setBasisData("-");
      sessionStorage.removeItem("databaseName");
    }
    setCreate(false);
  };

  return (
    <div className="px-10 py-16 ml-[300px] font-poppins text-black">
      <p className="text-3xl font-semibold mb-[10px]">Basis Data</p>
      <p className="text-lg mb-[30px]">
        Status:{" "}
        {basisData === "-"
          ? "tidak terhubung"
          : `terhubung dengan ${basisData}`}
      </p>
      {!create && (
        <div className="flex gap-x-6">
          <div onClick={clickHandler}>
            <Tooltips
              text={
                "Membuat basis data baru dan menghubungkan aplikasi ke basis data"
              }
            >
              <p className="text-xl font-medium mr-[15px]">
                Membuat basis data baru
              </p>
            </Tooltips>
          </div>
          <div>
            <Tooltips text={"Masukkan file basis data dengan ektensi *.db"}>
              <input
                type="file"
                className="opacity-0 absolute left-0 top-0 right-0 bottom-0 w-full h-full cursor-pointer"
                onChange={fileHandler}
                title=""
              />
              <p className="text-xl font-medium mr-[15px]">Impor basis data</p>
            </Tooltips>
          </div>
        </div>
      )}
      {create && (
        <div>
          <form onSubmit={(e) => submitHandler(e)}>
            <input
              type="text"
              name="name"
              placeholder="Nama Basis Data"
              className="w-[320px] text-base px-[15px] py-[10px] mb-[15px] border border-black rounded-lg outline-none"
              value={namaBasisData}
              onChange={(e) => setNamaBasisData(e.target.value)}
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
              <p className="text-xl font-medium mr-[10px]">
                Membuat basis data
              </p>
            </button>
          </form>
        </div>
      )}
      <Toaster />
    </div>
  );
};

export default BasisData;
