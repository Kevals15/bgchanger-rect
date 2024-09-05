import { useState } from "react"


function App() {
  const [color,setColor]=useState("black")
  return (
    <>
    <div className="flex w-full h-screen justify-center "
    style={{backgroundColor:color}}>
      <h1 className="text-center text-white mt-[20%] font-bold text-2xl">Hello Friend</h1>
      <div className="fixed flex flex-wrap justify-around items-center bottom-9 px-2 py-3 bg-white w-[80%] h-[10%] rounded-full gap-3">
        
        <button className="text-white bg-red-600 px-4 py-2 font-bold font-md rounded-lg outline-none duration-150" onClick={() => setColor("red")}>red</button>
        <button className="text-white bg-blue-600 px-4 py-2 font-bold font-md rounded-lg outline-none" onClick={() => setColor("blue")}>blue</button>
        <button className="bg-yellow-400 px-4 py-2 font-bold font-md rounded-lg outline-none" onClick={() => setColor("yellow")}>yellow</button>
        <button className="text-white bg-purple-600 px-4 py-2 font-bold font-md rounded-lg outline-none" onClick={() => setColor("purple")}>purple</button>
        <button className="bg-white px-4 py-2 font-bold font-md rounded-lg" onClick={() => setColor("white")}>white</button>
      </div>
    </div>
    </>
  )
}

export default App