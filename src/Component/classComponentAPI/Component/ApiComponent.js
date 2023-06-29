import React from "react";
import ChildComponent from "./ChildComponent";
import axios from "axios";

export default class ApiComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = { posts: [], child: [], count: 0, errors:null }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/user')
        .then(response => this.setState({posts: response.data}))
        .catch(err => { 
            this.setState({errors: err.message});
        })

        // fetch("https://jsonplaceholder.typicode.com/users")
        //     .then(response => response.json())
        //     .then(response => this.setState({ posts: response }))
        // console.log("componentdidmount");
    }
    componentDidUpdate(pP, pS, sS) {
        console.log("componentDidUpdae Call", pS, this.state.count);

        if (pS.count === 1) {
            this.setState({ child: this.state.posts })
            console.log("API Call", this.state.child);
            this.setState({ count: this.state.count + 1 })
        }
    }
    render() {
        console.log("render");
        return (
            <>
            { 
                this.state.errors &&
                <h3 className="error"> { this.state.errors } </h3> 
            }
            
                <h1>hello {this.state.count}</h1>
                {
                    this.state.posts.map(post => <div key={post.id}> {post.id}, {post.name} </div>)
                }

                <button onClick={() => this.setState({ count: 1 })}>Update Count</button>

                {
                    this.state.count ? <ChildComponent item={this.state.child} /> : null

                }

            </>
        )
    }
}
// class ChildComponent extends React.Component {
//     constructor() {
//         super()
//         this.state = { update: [] }
//     }
//     componentDidMount() {
//         fetch("https://jsonplaceholder.typicode.com/users")
//             .then(response => response.json())
//             .then(response => this.setState({ update: response }))
//         // console.log("update");
//     }

//     render() {
//         return (
//             <>
//                 <br />
//                 <br />
//                 <br />
//                 {
//                     this.state.update.map(post => <div key={post.id}> {post.id}, {post.name} </div>)
//                 }

//             </>
//         )
//     }
// }

// export default ApiComponent