import React from 'react';
import axios from 'axios';
import Addform from './Addform';
import 'bootstrap/dist/css/bootstrap.min.css';
const API = "http://jsonplaceholder.typicode.com/users";
class ListJson extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name : []
        };
        this.create = this.create.bind(this);
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
    render(){
        const List = this.state.name.map(e => {
            return <tr key={e.id}>
              <td>{e.name}</td>
            </tr>
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
