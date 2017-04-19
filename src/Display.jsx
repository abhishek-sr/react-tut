import React from 'react';
const _ = require('lodash');
import { ListDisplay } from './ListDisplay';
import { AddToDo } from './AddToDo';

export default class InputText extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      list: [ { name: 'Birthday', marked: true, key: 1 },
              { name: 'Party', marked: false, key: 2 },
              { name: 'Death', marked: true, key: 3 }, ],
      editMode: false,
      newList: { name: '', marked: false, key: 0 },
      name: '',
      key: '',
   };
  }
  handleChecked(index){
    const data = this.state.list;
    const change = _.map(data, (list) => {
      if(index.key === list.key){
          list.marked = !list.marked;
        }
    });
    this.setState({ list: data});
  }
  handleUpdate(index){
    let data = index.key;
    let name = index.name;
    this.setState({ editMode: true, name: name, key: data });
  }
  Save(){
    let oldData = this.state.list;
    oldData = _.map( oldData, (data) => {
      if(data.key === this.state.key)
      {
        data.name = this.state.name;
      }
      return data;
    });
    this.setState({ list: oldData, editMode: false  });
    this.setState({ name: ''});
  }
  handleSubmit(data){
    this.setState({ name: data });
  }
  FinishAdding(){
    let name = this.state.name;
    const old = this.state.list;
    let newList = _.clone( this.state.newList);
    let keyValue = 1 ;
    const key = _.size(old);
    if( name !== '')
    {
      newList.name = name;
      newList.key = parseInt(key) + 1;
      this.setState({ newList: newList });
    }
    const todoList = this.state.list.slice();
    todoList.push(newList);
    this.setState({ list: todoList });
    this.setState({ name: '' });
  }
  render(){
    if(this.state.editMode){
      if(this.state.name === '')
      {
        const alert = <span>Please Insert a Value</span>;
      }
      else{
        const alert = <span> </span>
      }
      return(
       <div className="form-group" style={{ border: '2px dashed grey', padding: '50px', borderRadius: '20px' }}>
        <h2 htmlFor="usr">Update To Do </h2><br/>
        <input type="text" className="form-control" id="usr" value={ this.state.name }
            onChange={(event) => { this.setState({ name: event.target.value });   }}
             style={{ float: 'left', width: '50%'  }}
        />
        <button type="button" className="btn btn-info" onClick= { this.Save.bind(this) }> Update </button>
        { alert }
     </div>
     );
    }
    else {
    return(
      <div style={{ border: '2px dashed grey', padding: '50px', borderRadius: '20px', transition: '1s' }}>
        <ListDisplay arrays={ this.state.list }
          handleChecked={ this.handleChecked.bind(this) }
          handleUpdate={ this.handleUpdate.bind(this) }
        />
        <AddToDo arrays={this.state} handleSubmit={this.handleSubmit.bind(this)}
          commitUpdate={this.FinishAdding.bind(this)} />
        </div>
      );
    }
  }
}



// WEBPACK FOOTER //
// ./src/Display.jsx
