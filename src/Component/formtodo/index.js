import { useState } from 'react';
import ShowFormData from './components/ShowFormData';
import Forms from './components/Forms';

function App() {

  const [data1,setdata1]=useState([])
  const [updateTodo,setupdateTodo]=useState([])

  const addDataIntoTable = (data) => {
    if (data.id) {
      // console.log("id get");
      let array = [...data1]
      array[data.id-1] = {...data}
      setdata1([...array])
    }
    else{
      // console.log("id not get");
      let obj = {
        ...data,
        id:( data1.length +1)
      }
      setdata1([...data1, obj])
    }
  }
  const adddataToForm = (data) => {
    setupdateTodo(data)
    // console.log("updateTodo : ",updateTodo);
    // setdata1()
  }
  const todelete = (data) => {
    // console.log("data id : "+data);
    let array = [...data1]
    const index = array.indexOf(data);
    array.splice(index, 1)
    setdata1([...array])
  }

  return (
    <div className="App">
      <Forms addDataIntoTable={addDataIntoTable} item={updateTodo}/>
      {/* <Item1 item={data1} /> */}
      <ShowFormData item={data1} adddataToForm={adddataToForm} todelete={todelete}/>
    </div>
  );
}

export default App;
