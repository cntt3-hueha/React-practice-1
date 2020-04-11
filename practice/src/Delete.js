import React from 'react';

class Delete extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name : this.props.name,
        }
        this.handleRemove = this.handleRemove.bind(this);
    }
    handleRemove(){
        this.props.remove(this.props.id);
    }
    render(){
        return(
            <tr>
                <th>
                    {this.props.children}
                </th>
                <th>
                    <button onClick={this.handleRemove}>Delete</button>
                </th>
            </tr>
        )
    }
}
export default Delete;