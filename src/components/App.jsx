import { Component } from 'react';
import React from 'react';
import { Serchbar } from './Searchbar/Searchbar';
import { fetchData } from 'service/api';
import { GaleryImg } from './ImageGallery/ImageGallery';
import { Btn } from './Button/Button';
import { Loader } from './Loader/Loader';
import { BasaStyled } from './add.styled';

export class App extends Component {
  state = {
    card: [],
    page: 1,
    inputValue: null,
    isLoad: false,
    onShow: false
  };

  componentDidUpdate(prevStat, prevProp) {
    if (prevProp.page !== this.state.page) {
      this.setState({ isLoad: true });
      fetchData(this.state.inputValue, this.state.page)
        .then(cards =>
          this.setState(preve => ({
            card: [...preve.card, ...cards],
            isLoad: false,
          }))
        )
        .catch(error => console.log(error));
    }
  }

  FindPicteru = e => {
    this.setState({ isLoad: true });
    this.setState(prev => ({ inputValue: e.serch }));
    fetchData(e.serch, this.state.page)
      .then(cards => this.setState({ card: [...cards], isLoad: false }))
      .catch(error => console.log(error));
  };

  addPages = () => {
    this.setState(prevStat => ({ page: prevStat.page + 1 }));
  };

  render() {
    return (
      <BasaStyled>
        <Serchbar onSubmit={this.FindPicteru} />
        <GaleryImg img={this.state.card} />
        {this.state.isLoad !== false &&(<Loader />)}
        {this.state.card.length >= 40 && this.state.isLoad === false && <Btn addPages={this.addPages} />} 
      </BasaStyled>
    );
  }
}
