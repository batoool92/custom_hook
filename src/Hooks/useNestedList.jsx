/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import jsxToString from 'jsx-to-string';

const renderList = (list) => {
   

   return (
    
     <ul>
       { list.map((item,key) => <li key={key}>{ Array.isArray(item)? renderList(item) : item}</li> )}
     </ul>
   )}

function useNestedList(array) {
   const [nestedList, setNestedList] = useState('')
  
   
   useEffect(()=>{
   setNestedList(jsxToString(renderList(array))); {/* convert returned jsx to string in order to be able to render it */}
      
   }, []);
 
   return[nestedList] /* return jsx for nested list */
}
export default useNestedList