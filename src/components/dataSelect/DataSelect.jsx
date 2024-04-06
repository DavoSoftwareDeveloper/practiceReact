
import { useEffect } from "react"
import { useChartContext } from "../../context/ChartDataContext"
import "./dataSelect.css"

function DataSelect() {

    const {setChartData, chartData } = useChartContext()

    useEffect(() => {
      updateInputsTrack() 
    }, []);

    function updateInputsTrack(){
      const rangeInputs = document.querySelectorAll('.custom-range');
  
      rangeInputs.forEach(rangeInput => {
        const value = (rangeInput.value - rangeInput.min) / (rangeInput.max - rangeInput.min) * 100;
        rangeInput.style.setProperty('--track-value', `${value}%`);
      });
    }

    const handleChange= (e) => {
      updateInputsTrack() 
      
        const chartValues = {
            [e.target.name]:Number(e.target.value)
        }
        console.log(chartValues)
        setChartData(prev => Object.assign({},prev,chartValues))
    }
    const chartOptions = Object.keys(chartData)
    console.log(chartOptions)





  return (
    <div>
      <h1>DataSelect</h1>
      <div className="data-ranges">
         {chartOptions.map((element, index)=> (
                   <div key={index} className="chart-input-container">
                   <label style={{fontWeight: "bold"}}htmlFor={element}>{element.replace(/\d+$/, '') + " " +(index+1)}<span style={{fontWeight:"normal"}}> min.</span></label>
                   <input value={chartData[element]} className="custom-range" name={element} type="range"  min="0" max="500" onChange={handleChange}/>
                   <label style={{fontWeight: "bold"}}htmlFor={element}>{element.replace(/\d+$/, '') + " " +(index+1)}<span style={{fontWeight:"normal"}}> max.</span></label>
               </div> 
         ))} 
        
      </div>
    </div>
  )
}

export default DataSelect
