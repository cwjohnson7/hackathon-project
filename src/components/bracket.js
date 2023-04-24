import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from 'lodash';
import './bracket.css';
import Search from "./search";
import { clearBracket } from "../actions";


const BracketView = () => {
  const contestants = useSelector((state) => state.bracket);
  const dispatch = useDispatch();
  
  const [winner1, setWinner1] = useState([]);
  const [winner2, setWinner2] = useState([]);
  const [winner3, setWinner3] = useState([]);
  const [winner4, setWinner4] = useState([]);
  const [finalist1, setFinalist1] = useState([]);
  const [finalist2, setFinalist2] = useState([]);
  const [selectedChamp, setChamp] = useState([]);
  
  function handleWinner1Click (image, record, artist) {
    if (!_.isEmpty(winner1)) {
      return alert('Contestant has already been selected for this spot')
    }
    setWinner1([image, record, artist])
  }
  const handleWinner2Click = (image, record, artist) => {
    if (!_.isEmpty(winner2)) {
      return alert('Contestant has already been selected for this spot')
    }
    setWinner2([image, record, artist])
  }
  const handleWinner3Click = (image, record, artist) => {
    if (!_.isEmpty(winner3)) {
      return alert('Contestant has already been selected for this spot')
    }
    setWinner3([image, record, artist])
  }
  const handleWinner4Click = (image, record, artist) => {
    if (!_.isEmpty(winner4)) {
      return alert('Contestant has already been selected for this spot')
    }
    setWinner4([image, record, artist])
  }

  //Finalist1 Click --
  const handleFinalist1Click = ([image, record, artist]) => {
    if (!_.isEmpty(finalist1)) {
      return alert('Contestant has already been selected for this spot')
    }
    if (winner1[0] === undefined || winner2[0] === undefined) {
      return alert('Please select a winner')
    }
    setFinalist1([image, record, artist]);
  }
  const handleFinalist2Click = ([image, record, artist]) => {
    if (!_.isEmpty(finalist2)) {
      return alert('Contestant has already been selected for this spot')
    }
    if (winner3[0] === undefined || winner4[0] === undefined) {
      return alert('Please select a winner')
    }
    setFinalist2([image, record, artist]);
  }
  const handleChampClick = ([image, record, artist]) => {
    if (!_.isEmpty(selectedChamp)) {
      return alert('Contestant has already been selected for this spot')
    }
    if (finalist1[0] === undefined || finalist2[0] === undefined) {
      return alert('Please select a winner')
    }
    alert('The champion is ' + record + ' by ' + artist + '!!! Click the champion tile to clear the bracket and search again.');
    setChamp([image, record, artist])
  }

  const handleResetClick = () => {
    setWinner1([])
    setWinner2([])
    setWinner3([])
    setWinner4([])
    setFinalist1([])
    setFinalist2([])
    setChamp([])
    dispatch(clearBracket());
  }

  if(!_.isEmpty(contestants.brackets)) {
  return (
    <div className="container">
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
            <li className="round3" onClick={() => handleChampClick(finalist1)}><span className="seed">1</span> Finalist 1: <img src={finalist1[0]} alt=""/> Album: {finalist1[1]} Artist: {finalist1[2]}</li>
            <li className="round3" onClick={() => handleChampClick(finalist2)}><span className="seed">3</span> Finalist 2: <img src={finalist2[0]} alt=""/> Album: {finalist2[1]} Artist: {finalist2[2]}</li>
          </ul>
        </div>
      </div>
      <div className="col-1-8 champ">
    <div className="round-three">
      <ul className="matchup">
        <li className="round4" onClick={() => handleResetClick()}><span className="seed">1</span> Champion: <img src={selectedChamp[0]} alt=""/> Album: {selectedChamp[1]} Artist: {selectedChamp[2]}</li>
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