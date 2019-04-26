import React from 'react';
import './App.css';
import Board from './components/Board/Board.js';
import initCells from './logic/initCells.js';
import NewGame from './components/NewGame/NewGame.js';
import Undo from './components/Undo/Undo.js';
import buildHistory from './helpers/buildHistory.js';
import Score from './components/Score/Score.js';
import move from './logic/move.js';
import createCell from './logic/createCell.js';
import lose from './logic/lose.js';
import Options from './components/Options/Options.js';
import LessScore from './components/LessScore/LessScore.js';
import Lose from './components/Lose/Lose.js';
import LeaderBoard from './components/LeaderBoard/LeaderBoard.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: initCells(),
      history: [initCells()],
      score: 0,
      scoreDifference: 0,
      undo: false,
      only2: false,
      lessScore: [false, false],
      lose: false,
      leaderBoard: false,
      nickName: null,
    }
  }

  handleKeyDown = (event) => {
    let history =  JSON.stringify(this.state.history);
    history =  JSON.parse(history);
    const undo = this.state.undo;
    const only2 = this.state.only2;
    const currentScore = this.state.score;

    if (event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      const eventKey = event.key;
      const moveCells = move(this.state.cells, eventKey, this.state.score);

      if (lose(moveCells[0])) {
        this.setState({
          lose: true,
        });
        return;
      }

      if (moveCells[1]) {
        const cellsWithNew = createCell(moveCells[0], only2);
        history = buildHistory(history, true);
        this.setState({
          cells: cellsWithNew, 
          history: history.concat([cellsWithNew]),
          score: moveCells[2],
          scoreDifference: moveCells[2] - currentScore,
          undo: undo,
          only2: only2,
          lessScore: [false, false],
        });
      }
      return;
    }
  }

  handleClickNewGame = (event) => {
    event.preventDefault();
    const undo = this.state.undo;
    const only2 = this.state.only2;
    const leaderBoard = this.state.leaderBoard;
    this.setState({
      cells: initCells(),
      history: [initCells()],
      score: 0,
      scoreDifference: 0,
      undo: undo,
      only2: only2,
      lessScore: [false, false],
      lose: false,
      leaderBoard: leaderBoard,
      nickName: null,
    });
  }

  handleClickUndo = (event) => {
    let history =  JSON.stringify(this.state.history);
    history =  JSON.parse(history);
    event.preventDefault();
    const only2 = this.state.only2;
    let score;
    if (history.length > 3) {
      history = buildHistory(history, false);
      score = this.state.score - this.state.scoreDifference;
    } else return;

    this.setState({
      cells: history[2],
      history: [history[1], history[1], history[2]],
      score: score,
      scoreDifference: 0,
      undo: true,
      only2: only2,
      lessScore: [false, false],
    });
  }

  handleChangeUndo = (event) => {
    const only2 = this.state.only2;
    this.setState({
      cells: initCells(),
      history: [initCells()],
      score: 0,
      undo: event.target.checked,
      only2: only2,
      lessScore: [event.target.checked, only2],
    });
  }

  handleChangeOnly2 = (event) => {
    const undo = this.state.undo;
    this.setState({
      cells: initCells(),
      history: [initCells()],
      score: 0,
      undo: undo,
      only2: event.target.checked,
      lessScore: [undo, event.target.checked],
    });
  }

  handleSubmit = (event) => {
    const undo = this.state.undo;
    const only2 = this.state.only2;
    event.preventDefault();
    console.log(this.state.score);
    console.log(this.state.nickName);
    fetch('https://frolovtest.herokuapp.com/game', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, */*',
        'Content-Type': 'application/json',
        'Host': 'localhost:5000'
      },
      body: JSON.stringify({
        name: this.state.nickName,
        score: this.state.score,
      })
    }).then(
      response => console.log(response)
    );
    this.setState({
      cells: initCells(),
      history: [initCells()],
      score: 0,
      scoreDifference: 0,
      undo: undo,
      only2: only2,
      lessScore: [false, false],
      lose: false,
      leaderBoard: false,
      nickName: null,
    });
  }

  handleChangeLose = (event) => {
    this.setState({
      nickName: event.target.value,
    })
  }

  leaderboard = (event) => {
    event.preventDefault();
    const leaderBoard = this.state.leaderBoard;
    fetch('https://frolovtest.herokuapp.com/game').then(
      response => response.json()
    ).then(
      response => {
        this.setState({
          leaderBoard: !leaderBoard,
          records: response.records,
        });
      }
    )
  }

  render() {
    return (
      <div className='window'>
        <div className='game'>
          <h1 className='title'>2048</h1>
          <p className='text'>Join the numbers and get to the 2048 tile!</p>
          <NewGame type='button' onClick={this.handleClickNewGame} />
          <Undo type='button' onClick={this.handleClickUndo} check={this.state.undo} />
          <Score score={this.state.score} checkUndo={this.state.undo} checkOnly2={this.state.only2} />
          <div className='container'>
            <Board onKeyDown={this.handleKeyDown} cells={this.state.cells} />
          </div>
          <Options onClickUndo={this.handleChangeUndo} onClickOnly2={this.handleChangeOnly2} />
          <LessScore onClick={this.handleClickNewGame} check={this.state.lessScore} />
          <Lose 
            check={this.state.lose} 
            score={this.state.score} 
            onClick={this.handleSubmit} 
            nickName={this.state.nickName} 
            onChange={this.handleChangeLose}
            checkUndo={this.state.undo} 
            checkOnly2={this.state.only2}
          />
          <LeaderBoard check={this.state.leaderBoard} onClick={this.leaderboard} records={this.state.records} />
        </div>
      </div>
    );
  }
}

export default App;
