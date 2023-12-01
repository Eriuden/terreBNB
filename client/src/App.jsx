
import './App.css'

function App() {
  
// Remplacer certaines valeurs par des icones plus tard
  return (
    <div>
      <header className='p-2 flex justify-between'>
        <a href='' className='flex items-center gap-1'>TerreBNB</a>
        <div className='flex gap-2 border border-gray-300 rounded-full 
        py-2 px-4 shadow-md shadow-gray-300'>
          <div>N'importe où</div>
          <div className='border-l border-gray-300'></div>
          <div>N'importe quand</div>
          <div className='border-l border-gray-300'></div>
          <div>Avec n'importe qui</div>
          <button className='bg-primary text-white p-2 rounded-full'>
            Explorez
          </button>
        </div>
        <div className='flex gap-2 border border-gray-300 rounded-full 
        py-2 px-4'>+</div>
        <div className='bg-gray-500 text-white rounded-full p-1 border border-gray-500 '>user</div>
      </header>
    </div>
  )
}

export default App
