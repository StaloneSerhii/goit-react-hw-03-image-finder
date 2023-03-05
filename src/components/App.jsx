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
    if (prevProp.page !== this.state.page) {
      console.log("up");

      fetchData(this.state.inputValue, this.state.page)
.then(cards => this.setState(preve=>({card: [preve.card, ...cards]})))
.catch(error => console.log(error))
    }
  }

  FindPicteru = e => {
this.setState(prev=>({inputValue: e.serch}))

fetchData(e.serch, this.state.page)
.then(cards => this.setState({ card: [...cards] }))
.catch(error => console.log(error))
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
