import { useContext, createContext, useState } from "react"

const ChartContext = createContext()

export const ChartProvider = ({children})=> {
    const [chartData, setChartData] = useState({
        input1:250,
        input2:50,
        input3:150,
        input4:350,
        input5:100,
    })

    return (
        <ChartContext.Provider value={{chartData, setChartData}}>
            {children}
        </ChartContext.Provider>
    )
}
export const useChartContext = () => useContext(ChartContext)


