import React, { useContext } from "react";
import {Data} from '../Index'

const Component1 = () => {

        // const  name = useContext(Data);
  return (
    <div>
        <h1>Component 5</h1>
        {/* <h2>hello and {name}</h2> */}
        <Data.Consumer>
            {
                (name)=>{
                    return(
                        <h1>Hello My Name Is {name}</h1>
                    )
                }
            }
        </Data.Consumer>
      {/* <h2>{`Hello ${user} again!`}</h2> */}
    </div>
  )
}

export default Component1
