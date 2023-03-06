import { Component } from 'react';
import PropTypes from 'prop-types';
import { Modals,Overlay } from './modal.style';

export class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.onCloseModalByEsc);
      }
      componentWillUnmount() {
        window.removeEventListener('keydown', this.onCloseModalByEsc);
      }

      onCloseModalByEsc = (e) => {
        if(e.code === 'Escape'){
            this.props.closeModal()
        }
      }

    closeModal = (e)=>{
        this.props.closeModal()
    }

  render() {
    return (
        <Overlay onClick={this.closeModal}>
        <Modals>
          <img src={this.props.src} alt="ads" width='600'/>
        </Modals>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  src: PropTypes.string.isRequired,
};