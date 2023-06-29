import React from "react";
import { Form, Row, Col, Container, Button } from 'react-bootstrap'

class GetDataForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            getData: {
                id1: '',
                name: '',
                email: "",
                phone: "",
                username: "",
                website: "",
                // company: {
                //     bs: "",
                //     catchPhrase: "",
                //     name: ""
                // },
                // address: {
                //     suite: "",
                //     street: "",
                //     city: "",
                //     zipcode: "",
                //     geo: {
                //         lat: "",
                //         lng: ""
                //     }
                // }
            },
            companyName:"",
            companyBs:"",
            companyCatchPhrase:"",
            addressSuite:"",
            addressStreet:"",
            addressCity:"",
            addressZipCode:"",
            addressGeoLat:"",
            addressGeoLng:"",
            counter: 20
        }
    }
    componentDidUpdate(pP, pS, sS) {
        console.log("componentDidUpdate getDataForm : ", pP.Data.id);
        if (pP.Data.id !== this.state.counter) {
            this.setState({ getData: this.props.Data })
            this.setState({ companyName: this.props.Data.company.name })
            this.setState({ companyBs: this.props.Data.company.bs })
            this.setState({ companyCatchPhrase: this.props.Data.company.catchPhrase })
            this.setState({ addressSuite: this.props.Data.address.suite })
            this.setState({ addressStreet: this.props.Data.address.street })
            this.setState({ addressCity: this.props.Data.address.city })
            this.setState({ addressZipCode: this.props.Data.address.zipcode })
            this.setState({ addressGeoLat: this.props.Data.address.geo.lat })
            this.setState({ addressGeoLng: this.props.Data.address.geo.lng })
            this.setState({ counter: this.props.Data.id })
        }
    }
    handleChange = (e) => {
        this.setState({
            getData: {
                ...this.state.getData,
                [e.target.name]: e.target.value
            }
        })

    }
    submitHandler = () => {
        const dataObj = {
                id: this.state.getData.id,
                name: this.state.getData.name,
                email: this.state.getData.email,
                phone: this.state.getData.phone,
                username: this.state.getData.username,
                website:this.state.getData.website,
                company:{
                    bs: this.state.companyBs,
                    catchPhrase: this.state.companyCatchPhrase,
                    name: this.state.companyName
                },
                address: {
                        suite: this.state.addressSuite,
                        street: this.state.addressStreet,
                        city: this.state.addressCity,
                        zipcode: this.state.addressZipCode,
                        geo: {
                            lat: this.state.addressGeoLat,
                            lng: this.state.addressGeoLng
                        }
                    }
        }
        console.log("dataObj",dataObj);
        this.props.updateData(dataObj)
    }
    componentDidMount() {
        // console.log(this.props.Data.company.name);
        // this.setState({getData:this.props.Data})
        // console.log(this.props);
    }
    render() {
        return (
            <>
                <div className="mt-5">
                    <h1 className="text-center mb-5">get Data Form</h1>

                    <Container>
                        {
                            console.log("componentDidUpdate .id: ", this.state.getData.id)

                        }
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" name="name" value={this.state.getData.name} onChange={this.handleChange} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" name="email" value={this.state.getData.email} onChange={this.handleChange} />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>UserName</Form.Label>
                                    <Form.Control type="text" name="username" value={this.state.getData.username} onChange={this.handleChange} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="text" name="phone" value={this.state.getData.phone} onChange={this.handleChange} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>website</Form.Label>
                                    <Form.Control type="text" name="website" value={this.state.getData.website} onChange={this.handleChange} />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>street</Form.Label>
                                    <Form.Control type="text" name="street" value={this.state.addressStreet} onChange={(e)=>{this.setState({addressStreet:e.target.value})}} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>suite</Form.Label>
                                    <Form.Control type="text" name="suite" value={this.state.addressSuite} onChange={(e)=>{this.setState({addressSuite:e.target.value})}} />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>city</Form.Label>
                                    <Form.Control type="text" name="city" value={this.state.addressCity} onChange={(e)=>{this.setState({addressCity:e.target.value})}} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>zipcode</Form.Label>
                                    <Form.Control type="text" name="zipcode" value={this.state.addressZipCode} onChange={(e)=>{this.setState({addressZipCode:e.target.value})}} />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>lat</Form.Label>
                                    <Form.Control type="text" name="lat" value={this.state.addressGeoLat} onChange={(e)=>{this.setState({addressGeoLat:e.target.value})}} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>lng</Form.Label>
                                    <Form.Control type="text" name="lng" value={this.state.addressGeoLng} onChange={(e)=>{this.setState({addressGeoLng:e.target.value})}} />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="name">
                                    <Form.Label>company Name</Form.Label>
                                    <Form.Control type="text" name="name" value={this.state.companyName} onChange={(e)=>{this.setState({companyName:e.target.value})}} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>catchPhrase</Form.Label>
                                    <Form.Control type="text" name="catchPhrase" value={this.state.companyCatchPhrase} onChange={(e)=>{this.setState({companyCatchPhrase:e.target.value})}} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>bs</Form.Label>
                                    <Form.Control type="text" name="bs" value={this.state.companyBs} onChange={(e)=>{this.setState({companyBs:e.target.value})}} />
                                </Form.Group>
                            </Row>
                            <Button variant="primary" onClick={this.submitHandler}>Submit</Button>
                        </Form>
                    </Container>

                </div>


            </>
        )
    }
}
export default GetDataForm