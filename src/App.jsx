import { useState } from 'react'
import "./Style.css"
import Infos from './components/Infos'
import Data from './components/Data'


function App() {
  const [data, setData] = useState(Data)

  function AllClear(){
    setData([])
  }

function handlerDelete(id){
  setData(data.filter((item,index)=> index !== id))
}


  return (
    <>
      <div className='container'>
        <div className='list'>
        <h1>World Stars </h1>
        <h3>Showing {data.length} football player</h3>
          <div className='list-item'>
            {
              data.map((item,index)=> {
                return <Infos key={index} id={index}
                {...item} imgSrc={item.src} deleteHandler={handlerDelete}
              />
              })}
          </div>
          <button 
          onClick={()=>AllClear()}
          className='allClearButton'>All Clear</button>
        </div>
      </div>
    </>
  )
}

export default App
