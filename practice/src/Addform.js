import React,{Component} from 'react';
import { v4 as uuidv4 } from 'uuid';
class Addform extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt){
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }
    
    handleSubmit(evt){
        evt.preventDefault();
        this.props.create({...this.state, id: uuidv4()});
        this.setState({
            name: ""
        })
    }
    
    
    render(){
        return(
            <form className='NewText' onSubmit={this.handleSubmit}>
                <label htmlFor='name'>New User</label>
                <input 
                    type='name'
                    id='name' 
                    name='name' 
                    value={this.state.name} 
                    onChange={this.handleChange} 
                    placeholder='New User' 
                    required/>
                <button>ADD User</button>
            </form>
        )
    }
}
export default Addform;