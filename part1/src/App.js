import Hello from './Hello'

const App = () => {

  const name = "hetta"
  const age=10 
  
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='Geroge' age={12+22}/>
      <Hello name={name} age={age} />
      <Hello name='Pete'/>
    </div>
  )
}
export default App