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
    onShow: false,
  };

  componentDidUpdate(prevStat, prevProp) {
    if (
      prevProp.page !== this.state.page ||
      prevProp.inputValue !== this.state.inputValue
    ) {
      this.setState({ isLoad: true });
      fetchData(this.state.inputValue, this.state.page)
        .then(cards =>
          this.setState(preve => ({
            card: [...preve.card, ...cards],
            onShow: cards.length === 12,
            isLoad: false
          }))
        )
        .catch(error => console.log(error))
       
    }
    console.log(this.state.isLoad);
  }

  FindPicteru = e => {
    if (e.serch === '') {
      alert('Enter a search name');
    } else {
      this.setState({ page: 1 });
      this.setState({ isLoad: true });
      this.setState({ card: [] });
      this.setState(prev => ({ inputValue: e.serch }));

      // fetchData(e.serch, 1)
      //   .then(cards => this.setState({ card: [...cards], isLoad: false }))
      //   .catch(error => console.log(error));
    }
  };

  addPages = () => {
    this.setState(prevStat => ({ page: prevStat.page + 1 }));
  };

  render() {
    return (
      <BasaStyled>
        <Serchbar onSubmit={this.FindPicteru} />
        <GaleryImg img={this.state.card} />
        {this.state.isLoad !== false && <Loader />}
        {this.state.onShow === true && this.state.isLoad === false && (
          <Btn addPages={this.addPages} />
        )}
      </BasaStyled>
    );
  }
}
