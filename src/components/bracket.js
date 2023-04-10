import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chooseWinner } from "../actions";
import './bracket.css';


const BracketView = () => {
  const contestants = useSelector((state) => state.bracket);
  
  // debugger;

  const [selectedWinner, setWinner] = useState('');
  const dispatch = useDispatch();
  const handleSelectedWinnerClick = (e) => {

    // debugger;
    setWinner(e.target.value)
    dispatch(chooseWinner(e.target.value))
    console.log(selectedWinner);

  }
 

  return (
    <>
    <div className="container">Bracket will be rendered here
      <div className="col-1-8">
        <div className="left-hand-bracket">
    <ul className="matchup">
      <li className="round1A" onClick={handleSelectedWinnerClick}><span className="seed">1</span> {contestants.brackets[0].round1A[0]}</li>
      <li className="round1A"><span className="seed">8</span> {contestants.brackets[0].round1A[1]}</li>
    </ul>
    <ul className="matchup">
      <li className="round1B"><span className="seed">4</span> {contestants.brackets[1].round1B[0]}</li>
      <li className="round1B"><span className="seed">5</span> {contestants.brackets[1].round1B[1]}</li>
    </ul>
        </div>
    <div className="right-hand-bracket">
    <ul className="matchup">
      <li className="round1C"><span className="seed">2</span> {contestants.brackets[2].round1C[0]}</li>
      <li className="round1C"><span className="seed">7</span> {contestants.brackets[2].round1C[1]}</li>
    </ul>
    <ul className="matchup">
      <li className="round1D"><span className="seed">3</span> {contestants.brackets[3].round1D[0]}</li>
      <li className="round1D"><span className="seed">6</span> {contestants.brackets[3].round1D[1]}</li>
    </ul>
    </div>
    </div>
    <div className="col-1-8">
      <div className="round-two-left">
        <ul className="matchup">
          <li className="round2A"><span className="seed">1</span> Winner 1: {contestants.brackets[4].round2A[0]}</li>
          <li className="round2A"><span className="seed">4</span> Winner 2: {contestants.brackets[4].round2A[1]}</li>
        </ul>
    </div>
      <div className="round-two-right">
      <ul className="matchup round-two-bottom">
        <li className="round2B"><span className="seed">2</span> Winner 3: {contestants.brackets[5].round2B[0]}</li>
        <li className="round2B"><span className="seed">3</span> Winner 4: {contestants.brackets[5].round2B[1]}</li>
      </ul>
    </div>
  </div>
    <div className="col-1-8 champ">
    <div className="round-three">
      <ul className="matchup">
        <li className="round3"><span className="seed">1</span> Finalist</li>
        <li className="round3"><span className="seed">3</span> Finalist</li>
      </ul>
    </div>
  </div>
  </div>
    </>
  )
}

export default BracketView;


