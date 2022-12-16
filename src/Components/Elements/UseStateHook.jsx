import {useState} from 'react'

const UseStateHook = () => {
    const [clr, setclr] = useState("red")
    const [name,setName]= useState("")

    const handleAction=()=>
    {
        alert(name)

    }
  return (
    <div className='container'>
        <div className="row">
            <div className="col-lg-12">
                <h1 style={{color:clr}}>{`My favroit clr is ${clr}`}</h1>
                <button className='btn btn-primary px-3' onClick={()=>setclr("blue")}>Blue</button>
                <button className='btn ms-3 btn-warning px-3' onClick={()=>setclr("Black")}>Black</button>
                <button className='btn btn-danger ms-3 px-4' onClick={()=>setclr("red")}>red</button>
            </div>
            <div className="col-lg-12 mt-4 text-center ">
                <input type="text" onChange={(e)=>setName(e.target.value)} />
            <h1>{`hey ${name}`}</h1>
                <button onClick={handleAction} > alert</button>
            </div>
        </div>
    </div>
  )
}

export default UseStateHook