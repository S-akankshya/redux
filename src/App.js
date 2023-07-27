import './App.css';
// import Todo from './PRACTICE/Todo';
import 'bootstrap/dist/css/bootstrap.css'
// import Parent from './PRACTICE/UseCallback/Parent';
// import Memo from './PRACTICE/Memo';
// import AxiosPUT from './PRACTICE/AxiosPUT';
// import AxiosPractice from './PRACTICE/AxiosPractice';
// import Fetch from './Component/Fetch';
// import ReducerPractice from './PRACTICE/ReducerPractice';
// import TodoListPractice from './PRACTICE/TodoListPractice';
// import AxiosPOST from './PRACTICE/AxiosPOST';
// import AxiosGET from './PRACTICE/AxiosGET';
import { useDispatch, useSelector } from 'react-redux/es/hooks/useSelector';


function App() {
  const myState = useSelector((state)=> state.reducer)
  return (
    <>
    {/* <Parent/> */}
    {/* <Memo/> */}
    {/* <AxiosPUT/> */}
    {/* <AxiosPractice/> */}
    {/* <Fetch/> */}
    {/* <ReducerPractice/> */}
    {/* <TodoListPractice/> */}
    {/* <AxiosPOST/> */}
    {/* <AxiosGET/> */}
    {/* <Todo/> */}
    <div>
      <h3>Increment/Decrement using redux</h3>
      <div className='quantity'>
        <button>-</button>
        <input type='text' value="0"></input>
        <button>+</button>
      </div>
    </div>
    </>
  );
}

export default App;
