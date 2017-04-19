import React from 'react';

export class AddToDo extends React.Component{
  handleSubmit(e)
  {
    this.props.handleSubmit(e.target.value);
  }
  updateAddToDo(){
     this.props.commitUpdate();
  }
  render(){
    return(
     <div className="form-group">
        <h3 htmlFor="usr">Add To Do</h3>
        <input type="text" className="form-control" id="usr" style={{ float: 'left', width: '50%' }}
          value={this.props.arrays.name}
          onChange= { this.handleSubmit.bind(this) }
          required/><button type="button" className="btn btn-info" onClick={ this.updateAddToDo.bind(this) }> Add </button>
     </div>
   );
  }
}
AddToDo.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
  commitUpdate: React.PropTypes.func.isRequired,
};



// WEBPACK FOOTER //
// ./src/AddToDo.jsx
