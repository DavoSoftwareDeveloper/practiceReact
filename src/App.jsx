import './App.css'
import Counter from './components/counter/Counter'
import Login from './components/login/Login'
import PromiseComponent from './components/promises/PromiseComponent'
import ErrorBoundaryPromise from './components/ErrorBoundaryPromise'

import Room from './components/restaurant/Room'
import Chart from './components/charts/Chart'
import DataSelect from './components/dataSelect/DataSelect'
import { ChartProvider } from './context/ChartDataContext'

function App() {

  return (
    <div className='app'>
      <ErrorBoundaryPromise>
      <Counter/>  
      </ErrorBoundaryPromise>
      <br/>
      <Login />  
      <br/>
      <ErrorBoundaryPromise>
        <PromiseComponent />
      </ErrorBoundaryPromise>
      <br/>
      <Room />
      <br/>
      <ErrorBoundaryPromise>
        <ChartProvider>
          <DataSelect />
          <Chart />
        </ChartProvider>
      </ErrorBoundaryPromise>
    </div>
  )
}

export default App
