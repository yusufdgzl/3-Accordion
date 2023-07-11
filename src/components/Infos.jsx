import { useState } from "react"

export default function Infos({ title, info, imgSrc,deleteHandler,id }) {

    const [infos, setInfos] = useState(false)



    return (
        <>
            <div className='infos'>
                <h2> {title}  <button className="plusButton" onClick={() => setInfos(!infos)}>+</button> <button
                    onClick={()=>deleteHandler(id)}
                    className="deleteButton">Delete</button></h2>


                <div>
                    {infos && <img className="img" src={imgSrc} />}
                </div>
                <div className="imgInfo">
                    {infos && <p>{info}</p>}

                </div>





            </div>

        </>
    )

}