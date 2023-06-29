import React from "react";

class ChildComponent extends React.Component{

    render(){
        console.log(this.props.item);
        return(
            <div>
                
                <h1>Chld Component</h1>
                {
                    this.props.item.map(post => <div key={post.id}> {post.id}, {post.name} </div>)
                }
            </div>
        )
    }
}
export default ChildComponent