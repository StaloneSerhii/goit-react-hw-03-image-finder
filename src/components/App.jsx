import { Component } from 'react';
import React from 'react';
import { Serchbar } from './Searchbar/Searchbar';
import { fetchData } from 'service/api';
import { GaleryImg } from './ImageGallery/ImageGallery';
import { Btn } from './Button/Button';

export class App extends Component {
  state = {
    card: [],
    page: 1,
    inputValue: null,
  };

  componentDidUpdate(prevStat, prevProp) {

    if (prevProp.card !== this.state.card) {
      console.log("up");
    }
  }

  FindPicteru = e => {
    fetchData(e.serch, this.state.page)
      .then(cards => this.setState({ card: [...cards] }))
      .catch(error => console.log(error))
      .finally(() => this.setState({ isLoading: true }));
  };

  addPages =()=>{
    this.setState(prevStat => ({page:prevStat.page+1}))
  }

  render() {
    return (
      <div>
        <Serchbar onSubmit={this.FindPicteru} />
        <GaleryImg img={this.state.card} />
        <Btn addPages={this.addPages}/>
      </div>
    );
  }
}
