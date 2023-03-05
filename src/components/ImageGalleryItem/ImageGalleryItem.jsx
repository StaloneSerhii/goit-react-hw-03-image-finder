import React, { Component } from 'react';
import { Modal } from 'components/Modal/Modal';

export class ImaageaItems extends Component{
  state ={
    openModal: false,
    src: ''
  }

  openModal =(e)=>  {
    this.setState({ openModal: true, src: e.target.src });
  }
  
  closeModal =()=>  {
    this.setState({ openModal: false });
  }

  render(){
  return (
    <>
      {this.props.propImg.map(item => {
        return (
          <li  key={item.id}>
            <img src={item.largeImageURL} alt={item.tags} width="400px" onClick={this.openModal}/>
          </li>
        );
      })}
      {this.state.openModal === true && <Modal closeModal={this.closeModal} src={this.state.src}/>}
    </>
  )
    }
}
