"use client";
import { useState } from "react";
import MainPage from "@/src/components/main/MainPage";
import useMultiplication from "@/src/hooks/useMultiplication";
import OrdoSettingValidator from "@/src/services/OrdoSettingValidator";
import SettingInput from "@/src/features/SettingInput";

const MatrixMultiplication = () => {
  const [matrixA, setMatrixA] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  const [matrixB, setMatrixB] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);

  const [rowInput1, setRowInput1] = useState([3]);
  const [colInput1, setColInput1] = useState([3]);
  const [rowInput2, setRowInput2] = useState([3]);
  const [colInput2, setColInput2] = useState([3]);

  //------------------------------------------------------------------------//
  //--------------------------------MATRIX A--------------------------------//
  //------------------------------------------------------------------------//

  //handle submit value setting ordo form input 1
  const handleSubmitOrdo1 = (e) => {
    e.preventDefault();
    OrdoSettingValidator(e);
    setRowInput1(e.target[0].value);
    setColInput1(e.target[1].value);
  };

  //setting ordo input form 1
  const settingInput1 = (
    <SettingInput
      handleSubmitOrdo={handleSubmitOrdo1}
      rowInput={rowInput1}
      colInput={colInput1}
    />
  );

  //pembuat wadah matrix dari value ordo input 1
  const row1 = rowInput1;
  const col1 = colInput1;
  const arrRow1 = [];
  const arrInput1 = [];

  for (let i = 0; i < col1; i++) {
    arrRow1.push(
      <input
        key={i}
        defaultValue={0}
        className="border border-black w-[50px] rounded-lg text-center text-xl font-semibold"
      />
    );
  }
  for (let i = 0; i < row1; i++) {
    arrInput1.push(
      <div key={i} className="flex px-1">
        {arrRow1}
      </div>
    );
  }

  //handle submit value matrix input 1
  const handleSubmit1 = (e) => {
    e.preventDefault();
    const inputResult1 = [];
    const ordo1 = arrInput1.length * arrRow1.length;
    for (let i = 0; i < ordo1; i++) {
      if (e.target[i].value === "") {
        alert("masukan tidak boleh kosong");
        return;
      }
      if (isNaN(e.target[i].value)) {
        alert("masukan harus angka");
        return;
      }
      inputResult1.push(e.target[i].value);
    }
    const arr2dInputResults1 = [];
    while (inputResult1.length)
      arr2dInputResults1.push(inputResult1.splice(0, col1));
    setMatrixA(arr2dInputResults1);
  };

  //------------------------------------------------------------------------//
  //--------------------------------MATRIX B--------------------------------//
  //------------------------------------------------------------------------//

  //handle submit value setting ordo form input 2
  const handleSubmitOrdo2 = (e) => {
    e.preventDefault();
    OrdoSettingValidator(e);
    setRowInput2(e.target[0].value);
    setColInput2(e.target[1].value);
  };

  //setting ordo input form 2
  const settingInput2 = (
    <SettingInput
      handleSubmitOrdo={handleSubmitOrdo2}
      rowInput={rowInput2}
      colInput={colInput2}
    />
  );

  //pembuat wadah matrix dari value ordo input 2
  const row2 = rowInput2;
  const col2 = colInput2;
  const arrRow2 = [];
  const arrInput2 = [];

  for (let i = 0; i < col2; i++) {
    arrRow2.push(
      <input
        defaultValue={0}
        key={i}
        className="border border-black w-[50px] rounded-lg text-center text-xl font-semibold"
      />
    );
  }
  for (let i = 0; i < row2; i++) {
    arrInput2.push(
      <div key={i} className="flex px-1">
        {arrRow2}
      </div>
    );
  }

  //handle submit value matrix input 2
  const handleSubmit2 = (e) => {
    e.preventDefault();
    const inputResult2 = [];
    const ordo2 = arrInput2.length * arrRow2.length;
    for (let i = 0; i < ordo2; i++) {
      if (e.target[i].value === "") {
        alert("masukan tidak boleh kosong");
        return;
      }
      if (isNaN(e.target[i].value)) {
        alert("masukan harus angka");
        return;
      }
      inputResult2.push(e.target[i].value);
    }
    const arr2dInputResults2 = [];
    while (inputResult2.length)
      arr2dInputResults2.push(inputResult2.splice(0, col2));
    setMatrixB(arr2dInputResults2);
  };

  //-----------------------------------------------------------------------------//
  //---------------------------MULTIPLICATION FUNCTION---------------------------//
  //-----------------------------------------------------------------------------//

  const { results, mulFunc } = useMultiplication();

  return (
    <MainPage
      settingInput1={settingInput1}
      handleSubmit1={handleSubmit1}
      arrInput1={arrInput1}
      settingInput2={settingInput2}
      handleSubmit2={handleSubmit2}
      arrInput2={arrInput2}
      funcLogic={() => mulFunc(matrixA, matrixB)}
      results={results}
      operation={"A x B ="}
    />
  );
};

export default MatrixMultiplication;
