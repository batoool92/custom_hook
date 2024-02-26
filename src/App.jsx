
// import { useState } from 'react';
import { useState } from 'react';
import './App.css'
import useNestedList from './Hooks/useNestedList'
import parse from 'html-react-parser'

function App() {
  const arr = ["Category1", "Category2", "Category3", ["Category4", "subCategory4.1", "subCategory4.2"], "Category5", "Category6", "Category7", ["Category8", "subCategory8.1", "subCategory8.2"]];
 
  const [nestedList] = useNestedList(arr) /*pass array to return as a nested list*/
  const [status, setStatus] = useState(false)
  


  return (
    <>
      <button onClick={() => setStatus(!status)} id='list'>display categories</button>
      <div className={status ? "hidden" : ""}>
        {parse(nestedList)} {/* render string to html */}

      </div>
    </>
  )
}

export default App