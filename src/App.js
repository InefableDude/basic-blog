import './App.css';
  
import Posts from "./components/Posts/Posts";
  
const App = () => {
  return (
    <div className="main-container">
      <h1 className="main-heading">
        Blog - Learn With Dudep
      </h1>
      <div className='main-posts'>
        <Posts></Posts>
      </div>
    </div>
  );
};

export default App;