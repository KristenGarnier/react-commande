import React from 'react';

class OptionList extends React.Component{
  render(){
    let options = this.props.options.map((option, index) => {
      return <option value={option.value}  key={index}>{option.nom}</option>;
    });

    return(
      <span>
        {options}
      </span>
    )
  }
}

export default OptionList;
