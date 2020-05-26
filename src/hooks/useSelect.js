import React,{useState} from 'react';

const useSelect = (initialState,option) => {
   
    // state from the custom hook
    const [state, setState] = useState(initialState);

    const SelectNew = () => (
        <select
            className="browser-default"
            value={state}
            onChange={e => setState(e.target.value)}
        >
           {option.map(option =>(
               <option key={option.value} value={option.value}>{option.label}</option>
           ))}
        </select>
    );
    return [state, SelectNew]
}
 
export default useSelect;