import React from "react";
import axios from "axios";
import GetDataForm from "./GetDataForm";
import {Table} from 'react-bootstrap'

class GetData extends React.Component{
    constructor(){
        super()
        this.state={getApi:[], errors:"", data:{}}
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => this.setState({getApi: response.data}))
        .catch(err => {this.setState({errors:err.message})})
        console.log("componentDidMount GetData Call");
    }

    updateData=(dataObj)=>{
        console.log("getdata id : ",dataObj.id);
        let array = [...this.state.getApi]
        array[dataObj.id-1]={...dataObj,}
        console.log("array",array);
        this.setState({getApi:[...array]})
        console.log("getdata getApi : ",this.state.getApi);
    }


    render(){
        return(
            <>
                { 
                    this.state.errors &&
                    <h3 className="error"> { this.state.errors } </h3> 
                }
            <h1 className="text-center mb-5">Get Data </h1>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>UserName</th>
                        <th>Button</th>
                    </tr>
                </thead>
                <tbody>
                    
                        {
                            this.state.getApi.map(post => 
                                <tr key={post.id}>
                                    <td> {post.id}</td>
                                    <td> {post.name}</td>
                                    <td> {post.username}</td>
                                    <td> {post.email}</td>
                                    <td><button onClick={()=>{this.setState({data:post})}}>Eddit</button></td>
                                </tr>
                            )
                        }
                </tbody>
            </Table>

            {
                this.state.data.id ? <GetDataForm Data={this.state.data} updateData={this.updateData}/> : null 
            }
            <br />
            
            </>
        )
    }
}
export default GetData