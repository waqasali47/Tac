import React from 'react';

export class Form extends React.Component {
constructor(props){
    super(props);
    this.state = {
    playerOne: '', 
    playerTwo: '', 
    displayForm: true,
};
    this.handlePlayerTwo = this.handlePlayerTwo.bind(this);
    this.handlePlayerOne = this.handlePlayerOne.bind(this);
    
}



handlePlayerOne(event){
    const target = event.target;
    const playerOne = target.value;
    this.setState({
        playerOne: playerOne, 
    });
}

handlePlayerTwo(event){
    const target = event.target;
    const playerTwo = target.value;
    this.setState({
        playerTwo: playerTwo
    });
}

    render() {
        return (
            <div> 
            <form hidden={this.displayForm}>
            <label>
              Player 1:
              <input type="text" className="form-control" value={this.state.playerOne} onChange={this.handlePlayerOne} name="playerOne" />
            </label>
            <label>
              Player 2:
              <input type="text" className="form-control" value={this.state.playerTwo} onChange={this.handlePlayerTwo} name="PlayerTwo" />
            </label>
            <input type="button" className="btn btn-primary" onClick={this.props.getPlayerName}  value="Start" />
          </form>

         <h3>{this.state.playerOne}</h3>
         <h3>{this.state.playerTwo}</h3></div>
        );
    }
}

