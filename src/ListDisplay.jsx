import React from 'react';
const _ = require('lodash');
export class ListDisplay extends React.Component{
  handleChecked(index)
  {
    this.props.handleChecked(index);
  }
  handleUpdate(index)
  {
    this.props.handleUpdate(index);
  }
  render(){
    var Obj = this.props.arrays;
    const displayData = _.map(Obj, (data, index) => {
      let Badge = ' ';
      if(data.marked){ Badge = <span className="badge" style={{ borderRadius: '5px', padding: '10px', background: 'steelblue'  }}>Completed</span>; }
      if(data.name !== ''){
        return (
          <li key={index} className="list-group-item">
             <span style={{ position: 'relative', width: '50%', float: 'left', padding: '5px'  }}>
               <input type="checkbox" checked={ data.marked } value={data.key} onChange={()=> this.handleChecked(data)}/>
               {' '} { data.name }
             </span>
               <button type="button" className="btn btn-success" onClick={ () => this.handleUpdate(data) }>EDIT</button>
            { Badge }
         </li>);
      }
    });
    return(
      <div>
        <h2>To Do App</h2>
        <h3> To Del a To Do Edit it to Blank </h3><br/>
        <ul className="list-group">
          { displayData }
        </ul>
      </div>
    );
  }
}
ListDisplay.propTypes = {
  handleChecked: React.PropTypes.func.isRequired,
  handleUpdate: React.PropTypes.func.isRequired,
};



// WEBPACK FOOTER //
// ./src/ListDisplay.jsx
