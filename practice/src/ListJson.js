import React from 'react';
import axios from 'axios';
import Addform from './Addform';
import Todo from './Todo';
import 'bootstrap/dist/css/bootstrap.min.css';

const API = "http://jsonplaceholder.typicode.com/users";
class ListJson extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name : []
        };
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
    }
    async componentDidMount(){
        let get_api = await axios.get(API);
        this.setState({
            name: get_api.data
        });
        console.log(this.state.name)
       
    }
    create(newuser){
      this.setState({
          name: [...this.state.name, newuser]
      });
    }

    remove(id){
      this.setState({
          name: this.state.name.filter(t => t.id !== id)
      });
    }

    update(id, updated){
      const updatedname = this.state.name.map(name => {
          if(name.id === id){
              return {...name, name: updated}
          } return name;
      })
      this.setState({
          name: updatedname
      })
  }

    
    
    render(){
        const List = this.state.name.map(e => {
            return <Todo
                key={e.id}
                id={e.id}
                remove ={this.remove}
                update={this.update}
                name={e.name}>
                  {e.name} 
            </Todo>
        })
        
        return(
            <div className="ToDoList">
            <div className="container">
              <h1 className="text-center">User List</h1>
              <Addform create={this.create}></Addform>
              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Event</th>
                    <th>Event</th>
                  </tr>
                </thead>
                <tbody>
                  {List}
                </tbody>
      
              </table>
            </div>

          </div>
        )
    }
}
export default ListJson;
