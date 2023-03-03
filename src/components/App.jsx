import { Component } from 'react';
import React from 'react';
import { Serchbar } from './Searchbar/Searchbar';
import { fetchData } from 'service/api';
import { GaleryImg } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    card: [],
    page: 1,
    inputValue: null,
   };

    FindPicteru= e => {
      fetchData(e.serch, 1)
      .then(cards => this.setState({ card: [...cards] }))
      .catch(error => console.log(error))
      .finally(() => this.setState({ isLoading: true }))
    }

  render() {
    return (
      <div>
                <Serchbar onSubmit={this.FindPicteru} />
      <GaleryImg img={this.state.card}/>

      </div>
    );
  }
}
