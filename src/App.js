import React, { Component } from "react";
import { Card, Head} from "./Components";
import characters from "./character.json";

class App extends Component {
  state = {
    characters: characters,
    score: 0,
    clicked: [],
    clicks: 0,
    won: 0,
    lost: 0
  };

  shuffle = (array) => (
  array.map(value => [Math.random(), value])
  .sort((val1, val2) => val1[0] - val2[0])
  .map(value => value[1]));

  clickHandler = (event) => {
    const id = event.target.id;
    console.log(id)
    if(this.state.clicked.includes(id)){
      this.setState({
        lost: this.state.lost + 1,
        clicked: [],
        clicks: 0
      })
    } else {
      this.state.clicked.push(id)
      this.setState({
        clicks: this.state.clicks + 1,
      })
      if(this.state.clicked.length === 16){
        this.setState({
          won: this.state.won + 1,
          clicked: [],
          clicks: 0
        })
      }
    }




    this.setState({
      characters : this.shuffle(this.state.characters),
  })
    // if(this.state.clicked.includes)
}

  render() {
    return (
      <React.Fragment>
        <Head 
        wins={this.state.won}
        losses={this.state.lost}
        clicks={this.state.clicks}
        />
        <div className="container">
          <div className="row">
            {this.state.characters.map(character => (
              <Card onClick={this.clickHandler}
                id={character.id}
                name={character.name}
                image={character.image}
                clickHandler={this.clickHandler}
              />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
