import React from 'react'
import "./HeaderLine.css";

export default class HeaderLine extends React.Component {
  constructor(props){
    super(props);
    this.state = ({
      title: props.title
    });
  }

  render() {
    return (
      <div className='headerline'>
        <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>
          {this.state.title}
        </h2>
        <hr />
      </div>
    )
  }
}