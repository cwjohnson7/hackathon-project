import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chooseWinner } from "../actions";
import './bracket.css';


const BracketView = () => {
  // const contestants = useSelector((state) => state.brackets);
  const contestants = 'Contestant 1';


  const [selectedWinner, setWinner] = useState('');
  const dispatch = useDispatch();
  const handleSelectedWinnerClick = (e) => {
    //not sure if we need to use preventDefault or not here since the click event won't be on a <button/> with a 'submit' prop
    setWinner(e.target.value)
    // dispatch(chooseWinner(selectedWinner))
    console.log(selectedWinner);
  }
 

  return (
    <>
    <div className="container">Bracket will be rendered here
      <div className="col-1-8">
        <div className="left-hand-bracket">
    <ul className="matchup">
      <li className="round1A"><span className="seed">1</span> Album 1</li>
      <li className="round1A"><span className="seed">8</span> Album 2</li>
    </ul>
    <ul className="matchup">
      <li className="round1B"><span className="seed">4</span> Album 3</li>
      <li className="round1B"><span className="seed">5</span> Album 4</li>
    </ul>
        </div>
    <div className="right-hand-bracket">
    <ul className="matchup">
      <li className="round1C"><span className="seed">2</span> Album 5</li>
      <li className="round1C"><span className="seed">7</span> Album 6</li>
    </ul>
    <ul className="matchup">
      <li className="round1D"><span className="seed">3</span> Album 7</li>
      <li className="round1D"><span className="seed">6</span> Album 8</li>
    </ul>
    </div>
    </div>
    <div className="col-1-8">
      <div className="round-two-left">
        <ul className="matchup">
          <li className="round2A"><span className="seed">1</span> Winner 1</li>
          <li className="round2A"><span className="seed">4</span> Winner 2</li>
        </ul>
    </div>
      <div className="round-two-right">
      <ul className="matchup round-two-bottom">
        <li className="round2B"><span className="seed">2</span> Winner 3</li>
        <li className="round2B"><span className="seed">3</span> Winner 4</li>
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


