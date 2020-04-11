import React from 'react';

class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: this.props.name,
            edit: false
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleRemove(){
        this.props.remove(this.props.id);
    }
    toggleForm(){
        this.setState({
            edit: !this.state.edit
        })
    }
    handleChange(evt){
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }
    handleUpdate(evt){
        evt.preventDefault();
        this.props.update(this.props.id, this.state.name);
        this.setState({
            edit: false
        })
    }
  
    render(){
        let kq;
        if(this.state.edit){
            kq = (
                <tr>
                   <td>
                        <form onSubmit={this.handleUpdate}> 
                            <input type='name' value={this.state.name} name='name' onChange={this.handleChange}></input>
                            <button>Save</button>
                        </form>
                   </td>
                </tr>
            )
        } else {
            kq = (
                <tr>
                    <td>
                        {this.props.children} 
                    </td>
                    <td>
                        <button onClick={this.toggleForm}>Edit</button>
                    </td>
                    <td>
                        <button onClick={this.handleRemove}>Delete</button>
                    </td>
                </tr>
            )
        }
        return(
            kq
        )
    }

}

export default Todo