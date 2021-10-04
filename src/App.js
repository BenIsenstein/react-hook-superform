import { SuperForm } from './lib'

function App() {
  return <SuperForm 
    titleText="SUPERFORM" 
    inputs={[{ name: 'first' }, { name: 'second' }]} 
  />
}

export default App