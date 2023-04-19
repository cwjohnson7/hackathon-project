import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { chooseWinner } from "../actions";
import _ from 'lodash';
import './bracket.css';
import Search from "./search";


const BracketView = () => {
  const contestants = useSelector((state) => state.bracket);
  
  // debugger;
  const [winner1, setWinner1] = useState([]);
  const [winner2, setWinner2] = useState([]);
  const [winner3, setWinner3] = useState([]);
  const [winner4, setWinner4] = useState([]);
  const [finalist1, setFinalist1] = useState([]);
  const [finalist2, setFinalist2] = useState([]);
  // const [selectedChamp, setChamp] = useState([]);
  // const dispatch = useDispatch();
  
  function handleWinner1Click (image, record, artist) {
    if (winner1) {
      return
    }
    setWinner1([image, record, artist])
    
    // dispatch(chooseWinner(e.target.innerText))
  }
  const handleWinner2Click = (image, record, artist) => {
    if (winner2) {
      return
    }
    setWinner2([image, record, artist])
  }
  const handleWinner3Click = (image, record, artist) => {
    if (winner3) {
      return
    }
    setWinner3([image, record, artist])
  }
  const handleWinner4Click = (image, record, artist) => {
    if (winner4) {
      return
    }
    setWinner4([image, record, artist])
  }
  const handleFinalist1Click = ([image, record, artist]) => {
    if (finalist1) {
      return
    }
    setFinalist1([image, record, artist]);
  }
  const handleFinalist2Click = ([image, record, artist]) => {
    if (finalist2) {
      return
    }
    setFinalist2([image, record, artist]);
  }
  const handleChampClick = (champion) => {
    if (champion) {
      return
    }

    alert('The champion is ' + champion + '!!!');
  }
  if(!_.isEmpty(contestants.brackets)) {
  return (
    <div className="container">
      <div><Search/></div>
      <div className="col-1-8">
        <div className="left-hand-bracket">
          <ul className="matchup">
            <li className="round1A" onClick={() => (handleWinner1Click(contestants.brackets[0][0].image[1]["#text"], contestants.brackets[0][0].name, contestants.brackets[0][0].artist.name))}>
              <span className="seed">1</span>
              <img src={contestants.brackets[0][0].image[1]["#text"]} alt=""/> Album: {contestants.brackets[0][0].name} Artist: {contestants.brackets[0][0].artist.name}</li>
            <li className="round1A" onClick={() => (handleWinner1Click(contestants.brackets[0][1].image[1]["#text"], contestants.brackets[0][1].name, contestants.brackets[0][1].artist.name))}>
              <span className="seed">8</span>
              <img src={contestants.brackets[0][1].image[1]["#text"]} alt=""/> Album: {contestants.brackets[0][1].name} Artist: {contestants.brackets[0][1].artist.name}</li>
          </ul>
          <ul className="matchup">
            <li className="round1B" onClick={() => (handleWinner2Click(contestants.brackets[0][2].image[1]["#text"], contestants.brackets[0][2].name, contestants.brackets[0][2].artist.name))}>
              <span className="seed">4</span>
              <img src={contestants.brackets[0][2].image[1]["#text"]} alt=""/> Album: {contestants.brackets[0][2].name} Artist: {contestants.brackets[0][2].artist.name}</li>
            <li className="round1B" onClick={() => (handleWinner2Click(contestants.brackets[0][3].image[1]["#text"], contestants.brackets[0][3].name, contestants.brackets[0][3].artist.name))}><span className="seed">5</span> <img src={contestants.brackets[0][3].image[1]["#text"]} alt=""/> Album: {contestants.brackets[0][3].name} Artist: {contestants.brackets[0][3].artist.name}</li>
          </ul>
        </div>
        <div className="right-hand-bracket">
          <ul className="matchup">
            <li className="round1C" onClick={() => (handleWinner3Click(contestants.brackets[0][4].image[1]["#text"], contestants.brackets[0][4].name, contestants.brackets[0][4].artist.name))}>
              <span className="seed">2</span>
              <img src={contestants.brackets[0][4].image[1]["#text"]} alt=""/> Album: {contestants.brackets[0][4].name} Artist: {contestants.brackets[0][4].artist.name}
            </li>
            <li className="round1C" onClick={() => (handleWinner3Click(contestants.brackets[0][5].image[1]["#text"], contestants.brackets[0][5].name, contestants.brackets[0][5].artist.name))}>
              <span className="seed">7</span>
              <img src={contestants.brackets[0][5].image[1]["#text"]} alt=""/> Album: {contestants.brackets[0][5].name} Artist: {contestants.brackets[0][5].artist.name}
            </li>
          </ul>
          <ul className="matchup">
            <li className="round1D" onClick={() => (handleWinner4Click(contestants.brackets[0][6].image[1]["#text"], contestants.brackets[0][6].name, contestants.brackets[0][6].artist.name))}>
              <span className="seed">3</span>
              <img src={contestants.brackets[0][6].image[1]["#text"]} alt=""/> Album: {contestants.brackets[0][6].name} Artist: {contestants.brackets[0][6].artist.name}
            </li>
            <li className="round1D" onClick={() => (handleWinner4Click(contestants.brackets[0][7].image[1]["#text"], contestants.brackets[0][7].name, contestants.brackets[0][7].artist.name))}>
              <span className="seed">6</span>
              <img src={contestants.brackets[0][7].image[1]["#text"]} alt=""/> Album: {contestants.brackets[0][7].name} Artist: {contestants.brackets[0][7].artist.name}</li>
          </ul>
        </div>
      </div>
      <div className="col-1-8">
        <div className="round-two-left">
          <ul className="matchup">
            <li className="round2A" onClick={() => handleFinalist1Click(winner1)} ><span className="seed">1</span> Winner 1: <img src={winner1[0]} alt=""/> Album: {winner1[1]} Artist: {winner1[2]}</li>
            <li className="round2A" onClick={() => handleFinalist1Click(winner2)}>
              <span className="seed">4</span> Winner 2:
              <img src={winner2[0]} alt=""/> Album: {winner2[1]} Artist: {winner2[2]}
            </li>
          </ul>
        </div>
        <div className="round-two-right">
          <ul className="matchup round-two-bottom">
            <li className="round2B" onClick={() => handleFinalist2Click(winner3)}><span className="seed">2</span> Winner 3: <img src={winner3[0]} alt=""/> Album: {winner3[1]} Artist: {winner3[2]}</li>
            <li className="round2B" onClick={() => handleFinalist2Click(winner4)}><span className="seed">3</span> Winner 4: <img src={winner4[0]} alt=""/> Album: {winner4[1]} Artist: {winner4[2]}</li>
          </ul>
        </div>
      </div>
      <div className="col-1-8 champ">
        <div className="round-three">
          <ul className="matchup">
            <li className="round3" onClick={() => handleChampClick(finalist1[1])}><span className="seed">1</span> Finalist 1: <img src={finalist1[0]} alt=""/> Album: {finalist1[1]} Artist: {finalist1[2]}</li>
            <li className="round3" onClick={() => handleChampClick(finalist2[1])}><span className="seed">3</span> Finalist 2: <img src={finalist2[0]} alt=""/> Album: {finalist2[1]} Artist: {finalist2[2]}</li>
          </ul>
        </div>
      </div>
    </div>
  )}
  return (
    <div className="container">
      <div>Enter a music genre!</div>
    <div><Search/></div>
    </div>   
  )
  
}
  


export default BracketView;


