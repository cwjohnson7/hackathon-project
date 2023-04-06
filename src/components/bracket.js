import React from "react";
import css from "./bracket.css"


const BracketView = () => {
  return (
    <>
    <div className="container">Bracket will be rendered here</div>
    <div class="col-1-8">
  <ul class="matchup">
    <li><span class="seed">1</span> Album 1<span class="score"></span></li>
    <li><span class="seed">8</span> Album 2<span class="score"></span></li>
  </ul>
  <ul class="matchup">
    <li><span class="seed">4</span> Album 3<span class="score"></span></li>
    <li><span class="seed">5</span> Album 4<span class="score"></span></li>
  </ul>
  <ul class="matchup">
    <li><span class="seed">2</span> Album 5<span class="score"></span></li>
    <li><span class="seed">7</span> Album 6<span class="score"></span></li>
  </ul>
  <ul class="matchup">
    <li><span class="seed">3</span> Album 7<span class="score"></span></li>
    <li><span class="seed">6</span> Album 8<span class="score"></span></li>
  </ul>
</div>
<div class="col-1-8">
  <div class="round-two-top">
    <ul class="matchup">
      <li><span class="seed">1</span> Winner 1<span class="score"></span></li>
      <li><span class="seed">4</span> Winner 2<span class="score"></span></li>
    </ul>
  </div>
  <div class="round-two-bottom">
    <ul class="matchup round-two-bottom">
      <li><span class="seed">2</span> Winner 3<span class="score"></span></li>
      <li><span class="seed">3</span> Winner 4<span class="score"></span></li>
    </ul>
  </div>
</div>
<div class="col-1-8 champ">
  <div class="round-three">
    <ul class="matchup">
      <li><span class="seed">1</span> Finalist<span class="score"></span></li>
      <li><span class="seed">3</span> Finalist<span class="score"></span></li>
    </ul>
  </div>
</div>
    </>
  )
}

export default BracketView;


