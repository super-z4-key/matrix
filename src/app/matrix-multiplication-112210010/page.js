"use client";
import React, { useState} from "react";
import NavLink from "components/NavLink";
import TitleMatrix from "components/TitleMatrix";

import { AiFillSetting } from "react-icons/ai";
const MatrixMultiplication = () => {
  const [matrixA, setMatrixA] = useState([[0,0],[0,0]]);
  const [matrixB, setMatrixB] = useState([[0,0],[0,0]]);
  const [results, setResults] = useState([[0,0],[0,0]]);
  const [rowInput1, setRowInput1] = useState([2]);
  const [colInput1, setColInput1] = useState([2]);
  const [rowInput2, setRowInput2] = useState([2]);
  const [colInput2, setColInput2] = useState([2]);
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);

  //////////////////////////////MATRIX A////////////////////////////////////
  //////////////////////////////MATRIX A////////////////////////////////////
  //////////////////////////////MATRIX A////////////////////////////////////
  //SETTING INPUT
  const toggleButton1 = () => {
    setToggle1(!toggle1);
  };
  const handleSubmitOrdo1 = (e) => {
    e.preventDefault();
    for (let i = 0; i < 2; i++) {
      if (e.target[i].value === "") {
        return alert("masukan harus di isi minimal 1");
      }
      if (e.target[i].value < 1) {
        return alert("masukan harus di isi minimal 1");
      }
      if (isNaN(e.target[i].value)) {
        return alert("masukan berupa angka");
      }
    }
    setRowInput1(e.target[0].value);
    setColInput1(e.target[1].value);
  };

  const settingInput1 = (
    <form onSubmit={handleSubmitOrdo1} className="flex flex-col border border-slate-700 px-2 py-3 rounded-xl">
      <div>row</div>
      <input
        type="number"
        defaultValue={rowInput1}
        className="border border-slate-700 rounded-xl text-center mb-2"
      />
      <div>colomn</div>
      <input
        type="number"
        defaultValue={colInput1}
        className="border border-slate-700 rounded-xl text-center mb-2"
      />
      <button type="submit" className="mt-2 bg-green-500 rounded-sm">save</button>
    </form>
  );
  const row1 = rowInput1;
  const col1 = colInput1;
  const arrRow1 = [];
  const arrInput1 = [];
  //ORDO INPUT
  for (let i = 0; i < col1; i++) {
    arrRow1.push(
      <input
        key={i}
        defaultValue={0}
        className="border border-black w-[100px] h-[100px] rounded-xl text-center text-2xl font-bold"
      />
    );
  }
  for (let i = 0; i < row1; i++) {
    arrInput1.push(
      <div key={i} className="flex">
        {arrRow1}
      </div>
    );
  }

  const handleSubmit1 = (e) => {
    e.preventDefault();
    const inputResult1 = [];
    const ordo1 = arrInput1.length * arrRow1.length;
    for (let i = 0; i < ordo1; i++) {
      if (e.target[i].value === "") {
        alert("masukan tidak boleh kosong");
      }
      if (isNaN(e.target[i].value)) {
        alert("masukan harus angka");
      }
      inputResult1.push(e.target[i].value);
    }
    const arr2dInputResults1 = [];
    while (inputResult1.length)
      arr2dInputResults1.push(inputResult1.splice(0, col1));
    setMatrixA(arr2dInputResults1);
  };
  ///////////////////////////////MATRIX B/////////////////////////////////////
  ///////////////////////////////MATRIX B/////////////////////////////////////
  ///////////////////////////////MATRIX B/////////////////////////////////////
  //SETTING INPUT
  const toggleButton2 = () => {
    setToggle2(!toggle2);
  };
  const handleSubmitOrdo2 = (e) => {
    e.preventDefault();
    for (let i = 0; i < 2; i++) {
      if (e.target[i].value === "") {
        return alert("masukan harus di isi minimal 1");
      }
      if (e.target[i].value < 1) {
        return alert("masukan harus di isi minimal 1");
      }
      if (isNaN(e.target[i].value)) {
        return alert("masukan berupa angka");
      }
    }
    setRowInput2(e.target[0].value);
    setColInput2(e.target[1].value);
  };

  const settingInput2 = (
    <form onSubmit={handleSubmitOrdo2} className="flex flex-col border border-slate-700 px-2 py-3 rounded-xl">
      <div>row</div>
      <input
        type="number"
        defaultValue={rowInput2}
        className="border border-slate-700 rounded-xl text-center mb-2"
      />
      <div>colomn</div>
      <input
        type="number"
        defaultValue={colInput2}
        className="border border-slate-700 rounded-xl text-center mb-2"
      />
      <button type="submit" className="mt-2 bg-green-500 rounded-sm">save</button>
    </form>
  );
  //
  const row2 = rowInput2;
  const col2 = colInput2;
  const arrRow2 = [];
  const arrInput2 = [];

  for (let i = 0; i < col2; i++) {
    arrRow2.push(
      <input
        defaultValue={0}
        key={i}
        className="border border-black w-[100px] h-[100px] rounded-xl text-center text-2xl font-bold"
      />
    );
  }
  for (let i = 0; i < row2; i++) {
    arrInput2.push(
      <div key={i} className="flex">
        {arrRow2}
      </div>
    );
  }

  const handleSubmit2 = (e) => {
    e.preventDefault();
    const inputResult2 = [];
    const ordo2 = arrInput2.length * arrRow2.length;
    for (let i = 0; i < ordo2; i++) {
      if (e.target[i].value === "") {
        alert("masukan tidak boleh kosong");
      }
      if (isNaN(e.target[i].value)) {
        alert("masukan harus angka");
      }
      inputResult2.push(e.target[i].value);
    }
    const arr2dInputResults2 = [];
    while (inputResult2.length)
      arr2dInputResults2.push(inputResult2.splice(0, col2));
    setMatrixB(arr2dInputResults2);
  };
    ///////////////////////////////MULTIPLICATION FUNCTION/////////////////////////////////////
    ///////////////////////////////MULTIPLICATION FUNCTION/////////////////////////////////////
    ///////////////////////////////MULTIPLICATION FUNCTION/////////////////////////////////////
  const multiplicationFuch = (a, b) => {
    if (a[0].length !== b.length) {
      return alert("Dimensi matriks tidak sesuai");
    }
    if (!isInputValid(a) || !isInputValid(b)) {
      return alert("Input harus berupa angka");
    }
    function isInputValid(matrix) {
      for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
          if (isNaN(matrix[i][j])) {
            return false;
          }
        }
      }
      return true;
    }
    // Membuat matriks kosong dengan ukuran yang sesuai
    let resultMatrix = [];
    for (let i = 0; i < a.length; i++) {
      resultMatrix[i] = new Array(b[0].length).fill(0);
    }

    // Melakukan operasi perkalian matriks
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < b[0].length; j++) {
        for (let k = 0; k < b.length; k++) {
          resultMatrix[i][j] += a[i][k] * b[k][j];
        }
      }
    }
    setResults(resultMatrix);
  };

  return (
    <main className="flex flex-col justify-center items-center min-w-full min-h-screen">
      <TitleMatrix title="MATRIX MULTIPLICATION"/>
      <div className="w-auto h-auto flex justify-center items-center">
        <NavLink />
        {toggle1 ? settingInput1 : ""}
        <form onSubmit={handleSubmit1} className="flex-col">
          <AiFillSetting
            onClick={toggleButton1}
            className="mb-2 text-2xl text-slate-800"
          />
          {arrInput1}
          <button
            type="submit"
            className="bg-slate-300 active:bg-green-400 rounded-xl px-3 py-0.5 mt-2"
          >
            submit
          </button>
        </form>
        <div className="px-3 pb-2 text-5xl font-bold flex justify-center items-center mx-3">
          x
        </div>
        {toggle2 ? settingInput2 : ""}
        <form onSubmit={handleSubmit2} className="flex-col">
          <AiFillSetting
            onClick={toggleButton2}
            className="mb-2 text-2xl text-slate-800"
          />
          {arrInput2}
          <button
            type="submit"
            className="bg-slate-300 active:bg-green-400 rounded-xl px-3 py-0.5 mt-2"
          >
            submit
          </button>
        </form>
        <button
          onClick={() => {
            multiplicationFuch(matrixA, matrixB);
          }}
          className="px-5 pb-2 text-4xl bg-slate-600 border border-slate-800 rounded-full flex justify-center items-center text-white mx-3 active:bg-slate-300"
        >
          =
        </button>
        <div className="flex flex-col items-start">
          {results.map((m, n) => {
            return (
              <div key={n} className="flex">
                {m.map((x, y) => {
                  return (
                    <div
                      key={y}
                      className=" w-[100px] h-[100px] flex justify-center items-center border border-red-600 rounded-xl text-2xl font-bold text-red-600"
                    >
                      {x}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default MatrixMultiplication;
