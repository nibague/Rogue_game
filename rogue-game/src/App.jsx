import './App.css';
import ReactRogue from './components/ReactRogue';

const App =() => 
  (
    <div className='bg-gray-100 text-white m-4 p-10'>
      <ReactRogue width={40} height={40} tilesize={16} />
    </div>
  );



export default App;
