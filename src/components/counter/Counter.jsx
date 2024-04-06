import { useState } from 'react'
import ScrollComponent from '../scrollComponent/ScrollComponent'
import ShowTips from '../showTips/ShowTips'
import './counter.css'

function Counter() {
    const [count, setCount] = useState(0)
    // const [showModal, setShowModal] = useState(false)

    const incrementCounter = () => (setCount(prevCount => prevCount +1))
    const decrementCounter = () => (setCount(prevCount => prevCount -1))

    if ( count === 3) {
      throw new Error("has llegado a 3")
    }

    // const showTips = () => {
    //   setTimeout(()=> {
    //     if (document.getElementById('counter').matches(':hover')) {
    //       setShowModal(true)}
    //   }, 2000)
    // }
    // const hideTips = () => {
    //   setShowModal(false)
    // }


    return (
      <>
      <h1>Counter</h1>
      {/* <div onMouseLeave={hideTips} onMouseEnter={showTips} className='counter' id="counter"> */}
      <div className='counter' id="counter" >
      <ShowTips id="counter-tip" message="este contador al llegar a 3 se rompe">
        <h2>Counter</h2>
        <h1>{count}</h1>
        <div className='buttons'>
        <button className="button" onClick={decrementCounter}>-</button>
        <button className="button" onClick={incrementCounter}>+</button>
        <ScrollComponent targetId="counter" speed={0.85} reverse="-" maxOffset={220} />
        </div>
      </ShowTips>
      </div>
      </>
    )
  }
export default Counter
