import { Component } from 'react';
import React from 'react';
import { Serchbar } from './Searchbar/Searchbar';
import { fetchData } from 'service/api';
import { GaleryImg } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    cards: [],
    page: 1,
    inputValue: null,
   };

   componentDidUpdate(prevProps, prevStat) {
      fetchData("car", 1)
        .then(cards => this.setState({ card: cards }))
        .catch(error => console.log(error))
        .finally(() => this.setState({ isLoading: true }))
    }

    FindPicteru= e => {
      console.log(e);
      
    }

  render() {
    return (
      <div>
      <GaleryImg img={this.state.cards}/>
        <Serchbar onSubmit={this.FindPicteru} />
      </div>
    );
  }
}
