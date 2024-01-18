import { Link } from 'react-router-dom';

function App() {
 
  return (
      <div className="App">
        hi sir
            <Link to={"/user"} title='Two'>
        <button>
          Go to user
        </button>
            </Link>
      </div>
  );
}

export default App;
