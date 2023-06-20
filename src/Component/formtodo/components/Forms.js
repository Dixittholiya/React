  import React, { useEffect, useState } from 'react'
  import { Form,Row,Col,Container,Button } from 'react-bootstrap'

  const Forms = (props) => {
    
    const [formData, setFormData] = useState({
      firstName:"",
      lastName:"",
      email:"",
      mobileNumber:""
    })

    const handleChange = (e) => {
      setFormData({...formData,[e.target.name]:e.target.value})
    }


    const handleSubmit = (event) => {
      event.preventDefault();
      if (formData.firstName.trim() === "" ||formData.lastName.trim() === "" ||formData.email.trim() === "" || formData.mobileNumber.trim() === "") {
        alert("please Enter data")
      }
      else{
        props.addDataIntoTable(formData);
        setFormData({firstName:"",lastName:"",email:"",mobileNumber:""})
      }
    }



    useEffect(() => {
    
      if (props.item) {
        setFormData(props.item)
      }
    }, [props.item])
    

    return (
      <div>
        <Container>
      <Form>
          <Row>
              <Col>
              <Form.Label className=' pt-2'>First name</Form.Label>
              <Form.Control type='text' placeholder="First name" name='firstName' onChange={handleChange} value={formData.firstName}/>
              </Col>
              <Col>
              <Form.Label className=' pt-2'>Last name</Form.Label>
              <Form.Control type='text' placeholder="Last name" name='lastName' onChange={handleChange} value={formData.lastName}/>
              </Col>
          </Row>
          <Row>
              <Col className='pt-5'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' placeholder="Enter Email" name='email' onChange={handleChange} value={formData.email}/>
              </Col>
              <Col className='pt-5'>
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control type='Number' placeholder="Enter Mobile Number" name='mobileNumber' onChange={handleChange} value={formData.mobileNumber}/>
              </Col>
          </Row>
          <Row>
              <Col className='pt-4'>
                <Button  style={{width:"150px"}} onClick={handleSubmit}>Submit</Button>
              </Col>
          </Row>
      </Form>
        </Container>
      </div>
    )
  }

  export default Forms
