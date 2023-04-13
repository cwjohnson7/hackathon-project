import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chooseWinner } from "../actions";
import './bracket.css';


const BracketView = () => {
  const contestants = useSelector((state) => state.bracket);
  
  // debugger;
  const [winner1, setWinner1] = useState('');
  const [winner2, setWinner2] = useState('');
  const [winner3, setWinner3] = useState('');
  const [winner4, setWinner4] = useState('');
  const [finalist1, setFinalist1] = useState('');
  const [finalist2, setFinalist2] = useState('');
  const [selectedChamp, setChamp] = useState('');
  const dispatch = useDispatch();
  
  const handleWinner1Click = (e) => {
    // setWinner1(e.target.innerText);
    console.log(e.target.childNodes[2].data)
    setWinner1(e.target.childNodes[2].data)
    // dispatch(chooseWinner(e.target.innerText))
  }
  const handleWinner2Click = (e) => {
    console.log(e.target.childNodes[2].data)
    setWinner2(e.target.childNodes[2].data)
  }
  const handleWinner3Click = (e) => {
    console.log(e.target.childNodes[2].data)
    setWinner3(e.target.childNodes[2].data)
  }
  const handleWinner4Click = (e) => {
    console.log(e.target.childNodes[2].data)
    setWinner4(e.target.childNodes[2].data)
  }
  const handleFinalist1Click = (value) => {
    setFinalist1(value);
  }
  const handleFinalist2Click = (value) => {
    setFinalist2(value);
  }
  const handleChampClick = (value) => {
    setChamp(value);
    alert('The champion is ' + selectedChamp + '!!!');
  }

  return (
    
    <div className="container">Bracket will be rendered here
      <div className="col-1-8">
        <div className="left-hand-bracket">
    <ul className="matchup">
      <li className="round1A" onClick={handleWinner1Click}><span className="seed">1</span> {contestants.brackets[0].round1A[0]}</li>
      <li className="round1A" onClick={handleWinner1Click}><span className="seed">8</span> {contestants.brackets[0].round1A[1]}</li>
    </ul>
    <ul className="matchup">
      <li className="round1B" onClick={handleWinner2Click}><span className="seed">4</span> {contestants.brackets[1].round1B[0]}</li>
      <li className="round1B" onClick={handleWinner2Click}><span className="seed">5</span> {contestants.brackets[1].round1B[1]}</li>
    </ul>
        </div>
    <div className="right-hand-bracket">
    <ul className="matchup">
      <li className="round1C" onClick={handleWinner3Click}><span className="seed">2</span> {contestants.brackets[2].round1C[0]}</li>
      <li className="round1C" onClick={handleWinner3Click}><span className="seed">7</span> {contestants.brackets[2].round1C[1]}</li>
    </ul>
    <ul className="matchup">
      <li className="round1D" onClick={handleWinner4Click}><span className="seed">3</span> {contestants.brackets[3].round1D[0]}</li>
      <li className="round1D" onClick={handleWinner4Click}><span className="seed">6</span> {contestants.brackets[3].round1D[1]}</li>
    </ul>
    </div>
    </div>
    <div className="col-1-8">
      <div className="round-two-left">
        <ul className="matchup">
          <li className="round2A" onClick={() => handleFinalist1Click(winner1)} ><span className="seed">1</span> Winner 1: {winner1}</li>
          <li className="round2A" onClick={() => handleFinalist1Click(winner2)}><span className="seed">4</span> Winner 2: {winner2}</li>
        </ul>
    </div>
      <div className="round-two-right">
      <ul className="matchup round-two-bottom">
        <li className="round2B" onClick={() => handleFinalist2Click(winner3)}><span className="seed">2</span> Winner 3: {winner3}</li>
        <li className="round2B" onClick={() => handleFinalist2Click(winner4)}><span className="seed">3</span> Winner 4: {winner4}</li>
      </ul>
    </div>
  </div>
    <div className="col-1-8 champ">
    <div className="round-three">
      <ul className="matchup">
        <li className="round3" onClick={() => handleChampClick(finalist1)}><span className="seed">1</span> Finalist 1: {finalist1}</li>
        <li className="round3" onClick={() => handleChampClick(finalist2)}><span className="seed">3</span> Finalist 2: {finalist2}</li>
      </ul>
    </div>
  </div>
  </div>
    
  )
}

export default BracketView;


