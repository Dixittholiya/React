import React, { createContext } from 'react';
import Component1 from './Component/Component1'

const Data = createContext();
const Index = () => {
    const Name = "Dixit";
    return (
    <div>
      <h1>Index File {Name}</h1>
        <Data.Provider value={Name} >
            <Component1 />
        </Data.Provider>


    </div>
  )
}

export default Index
export {Data}

