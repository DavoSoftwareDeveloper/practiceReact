import { useState } from "react"
import "./showTips.css"


function ShowTips({id="tip",message,children}) {
    const [showModal, setShowModal] = useState(false)

    const showTips = () => {
        setTimeout(()=> {
                try {
                if (document.getElementById(id).matches(':hover')) {
                  setShowModal(true)}
                }catch(e){console.log(e.message)}
              }, 1500)

      }
      
      const hideTips = () => {
        setShowModal(false)
      }
  
  return (
    <div className="tip-frame" onMouseLeave={hideTips} onMouseEnter={showTips} id={id}>
      {children}
      {showModal && (
                    <div className="counter-tip-container">
                    <small>{message}</small>
                  </div>
        )}
    </div>
  )
}

export default ShowTips
