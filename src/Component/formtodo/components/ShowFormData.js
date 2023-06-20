import React from 'react'
// import Table1 from './Table1'
import {Table,Container} from 'react-bootstrap'

const ShowFormData = (props) => {

    const handledelete = (inputData) => {
        const confirmBox =  window.confirm("you wont to delete this ");

        if (confirmBox === true) {
            // console.log("ok confirm");
            // console.log("ok confirm : ",inputData);
            props.todelete(inputData.id)
          }
    }

  return (
    <div className='mt-5'>
      <Container>
      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Mobile Number</th>
          <th>update</th>
          <th>delete</th>
        </tr>
      </thead>
        <tbody>
          {
            props.item.map(
                inputData=>(
                <tr key={inputData.id}>
                    <td>{inputData.id}</td>
                    <td>{inputData.firstName}</td>
                    <td>{inputData.lastName}</td>
                    <td>{inputData.email}</td>
                    <td>{inputData.mobileNumber}</td>
                    <td><button onClick={()=>props.adddataToForm(inputData)}>Update</button></td>
                    <td><button onClick={()=>handledelete(inputData)}>delete</button></td>
                </tr>
                    ))
          }
        </tbody>
        </Table>
      </Container>
      
                  
    </div>
  )
}

export default ShowFormData
