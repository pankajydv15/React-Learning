import {useState} from 'react'

function BgChanger() {
    const [color, setColor] = useState("pink")
  return (
    <div className='w-full h-screen duration-200'
      style = {{backgroundColor: color}}>

        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>

            <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl' > 
                <button onClick={() => {setColor("Red")}}
                 className='outline-none px-4 py-1 rounded-full text-white '
                style={{backgroundColor: "red"}} 
                >Red</button>

                <button onClick={() => {setColor("BLue")}}
                 className='outline-none px-4 py-1 rounded-full text-white '
                style={{backgroundColor: "Blue"}} 
                >Blue</button>

                <button onClick={() => {setColor("Green")}}
                 className='outline-none px-4 py-1 rounded-full text-white '
                style={{backgroundColor: "Green"}} 
                >Green</button>

                <button onClick={() => {setColor("Black")}}
                 className='outline-none px-4 py-1 rounded-full text-white '
                style={{backgroundColor: "Black"}} 
                >Black</button>

                <button onClick={() => {setColor("Orange")}}
                 className='outline-none px-4 py-1 rounded-full text-white '
                style={{backgroundColor: "Orange"}} 
                >Orange</button>

                <button onClick={() => {setColor("yellow")}}
                 className='outline-none px-4 py-1 rounded-full text-white '
                style={{backgroundColor: "Yellow"}} 
                >yellow</button>

            </div>

        </div>
    </div>
  )
}

export default BgChanger
