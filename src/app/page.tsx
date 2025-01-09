'use client'
import { useState } from "react"
import { Ysabeau_SC } from "next/font/google";
import { Oswald } from "next/font/google";
const YsabeauSC = Ysabeau_SC({ subsets: ['latin'] })
const oswald = Oswald({ subsets: ['latin'] })
export default function Home() {

  // Use Sate
  const [todo, setTodo] = useState<{ movie: string; id: number }[]>([
    { movie: "Hera Pheri", id: 1 },
    { movie: "Gol Mal", id: 2 },
    { movie: "Dhool", id: 3 },
    { movie: "Money Hiest", id: 5 },
    { movie: "Harry Porter", id: 6 },
    { movie: "Dhamal", id: 8 },
  ]);
  const [inputVal, setInputVal] = useState('')
  const [inputNum, setInputNum] = useState<number>(0)
  const [changeBtn, setChangeBtn] = useState("Add Movie")
  // function
  const addItem = () => {
    const obj = todo.find(item => item.id == inputNum)
    if (obj) {
      const newArray = todo.filter(item => item.id !== obj.id)
      setTodo([...newArray, { movie: inputVal, id: inputNum }])
      setInputVal("");
      setInputNum(0)
      setChangeBtn("Add Movie")
      return
    }
    setTodo([...todo, { movie: inputVal, id: inputNum }])
    setInputVal("");
    setInputNum(0)

  }
  const editItem = (id: string | number) => {
    const obj: { id: number; movie: string } | undefined = todo.find(item => item.id == id)

    if (obj) {
      setInputVal(obj.movie);
      setInputNum(obj.id);
      setChangeBtn("Edit");
    } else {
      setChangeBtn("Add Movie")
      return
    }

  };
  const deleteItem = (id: number | string) => {
    const newArray = todo.filter((item) => item.id !== id)
    setTodo([...newArray])

  }
  return (
    <div>
      <div className="flex justify-center ml-5  mt-5 md:flex md:justify-center"> <img className={` h-[50px] w-[100px] md:h-[100px] md:w-[200px]  `} src="https://voedingenbeweging.nu/wp-content/uploads/2022/01/2Do-logo-fc.png" />
      </div>
      <div className=" grid grid-cols-1 gap-3 mt-4 place-items-center  md:flex md:justify-center md:mt-6 md:gap-[30px]">
        <input className=" border-b-2 text-white focus:outline-none bg-[#F0BB78] w-auto rounded-md pl-4 md:border-b-2 md:w-[300px] md:rounded-md md:pl-3 md:bg-[#F0BB78] md:text-white  md:focus:outline-none" type="text" value={inputVal} placeholder="Write any movie" onChange={(event) => { setInputVal(event.target.value) }} />
        <input className="  border-b-2 text-white focus:outline-none bg-[#F0BB78] rounded-md pl-3 text-[15px] w-[80px] md:border-b-2 md:w-[100px] md:rounded-md md:pl-3 md:bg-[#F0BB78] md:text-white  md:focus:outline-none" type="number" value={inputNum} placeholder="Enter ID" onChange={(e) => setInputNum(parseInt(e.target.value))} />
        <button onClick={addItem} className=" bg-[#543A14] rounded-md h-9 w-[90px] text-white font-bold shadow shadow-white md:bg-[#543A14] md:rounded-md md:h-11 md:w-[150px] md:text-white md:font-bold md:shadow sm:shadow-white">{changeBtn}</button>
      </div>

      <div className="flex justify-center"><h1 className={`${YsabeauSC.className} text-[#3D3d3d] tracking-[3px] mt-7 font-bold text-[24px]    md:${YsabeauSC.className} md:text-[#3D3D3D] md:tracking-[4px]   md:mt-8 md:font-bold md:text-[32px]`}>Movie List</h1></div>
      <div className="md:grid md:place-items-center">
        <div className="grid grid-cols-1 gap-5 place-items-center md:grid md:grid-cols-2 md:place-items-center my-7 ">
          {
            todo.map((item: { movie: string; id: number }, i) => {
              return (

                <div className="bg-[#f0bb78] rounded-md shadow p-3 w-[250px]  md:bg-[#F0BB78] md:rounded-md md:shadow md:p-3 gap-5 md:w-[300px]" key={i}>
                  <div className="flex justify-between">
                    <span>Serial No: {i + 1}</span>
                    <button className="text-red-700 rounded-[90px] w-[25px] shadow" onClick={() => { deleteItem(item.id) }}>X</button>
                  </div>
                  <div className="mt-4 md:mt-6">
                    <h1 className={` ${oswald.className} text-[40px] text-white font-bold`}>{item.movie}</h1>
                  </div>
                  <div className="flex justify-end">
                    <button onClick={() => { editItem(item.id); }} className="bg-[#543A14] w-[50px] rounded text-white">Edit</button>
                  </div>

                </div>


              )
            })
          }
        </div></div>
      


    </div>
  )
}
