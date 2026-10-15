var e=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},t=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n=e((()=>{})),r,i=e((()=>{r=new URL(`Property-1-Default__2030-355-D0szYp2P.svg`,import.meta.url).href})),a,o=e((()=>{a=new URL(`Property-1-hover__2030-357-DLnbJ_V6.svg`,import.meta.url).href}));function s(){return`
    <section class="home">
      <div class="home__content">
        <p class="home__eyebrow">It's play time.</p>

        <h1 class="home__title">Ready to play?</h1>

        <button
          class="home__start-button"
          id="start-button"
          type="button"
          aria-label="Play"
        >
          <img
            class="home__button-image home__button-image--default"
            src="${r}"
            alt=""
          />

          <img
            class="home__button-image home__button-image--hover"
            src="${a}"
            alt=""
          />
        </button>
      </div>

      <svg
      class="home__decoration"
      viewBox="0 0 500 500"
      fill="none"
      aria-hidden="true"
      >
      <path
        d="M45 175 L165 75 Q205 40 245 75 L415 215 Q455 250 435 295 L355 440 Q330 485 285 465 Q250 450 260 410 L275 365 Q280 345 260 330 L185 270 Q165 255 140 265 L85 295 Q45 315 20 280"
        stroke="currentColor"
        stroke-width="42"
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      <path
        d="M155 165 L215 225 M215 165 L155 225"
        stroke="currentColor"
        stroke-width="32"
        stroke-linecap="round"
      />

      <circle cx="300" cy="255" r="20" fill="currentColor" />
      <circle cx="355" cy="255" r="20" fill="currentColor" />
      <circle cx="300" cy="310" r="20" fill="currentColor" />
      <circle cx="355" cy="310" r="20" fill="currentColor" />
      </svg>
    </section>
  `}var c=e((()=>{i(),o()})),l,u=e((()=>{l=new URL(`Property-1-IT-logos__2285-4060-BEx4OZPI.svg`,import.meta.url).href})),d,ee=e((()=>{d=new URL(`Property-1-DA-projects__2285-4173-uo3aViPq.svg`,import.meta.url).href})),f,te=e((()=>{f=new URL(`Property-1-foods__2285-4059-CBrDf4GJ.svg`,import.meta.url).href})),p,ne=e((()=>{p=new URL(`Property-1-gameing__2285-4061-DEeRcnfB.svg`,import.meta.url).href}));function m(){return`
    <fieldset class="settings__group">
      <legend class="settings__label">
        <svg
        class="settings__group-icon settings__group-icon--themes"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        >
        <path
          d="M16 3C8.8 3 3 8.7 3 16s5.8 13 13 13h2a4 4 0 0 0 3-6.6 2.5 2.5 0 0 1 1.9-4.1H25c2.2 0 4-1.8 4-4C29 8.1 23.2 3 16 3Z"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-linejoin="round"
        />
        <circle cx="10" cy="13" r="2" fill="currentColor" />
        <circle cx="15" cy="8" r="2" fill="currentColor" />
        <circle cx="22" cy="11" r="2" fill="currentColor" />
        <circle cx="9" cy="20" r="2" fill="currentColor" />
      </svg>
        Game themes
      </legend>

      <label class="settings__option">
        <input type="radio" name="card-theme" value="code-vibes" checked />
        <span>Code vibes theme</span>
      </label>

      <label class="settings__option">
        <input type="radio" name="card-theme" value="gaming" />
        <span>Gaming theme</span>
      </label>

      <label class="settings__option">
        <input type="radio" name="card-theme" value="da-projects" />
        <span>DA Projects theme</span>
      </label>

      <label class="settings__option">
        <input type="radio" name="card-theme" value="food" />
        <span>Foods theme</span>
      </label>
    </fieldset>
  `}function re(){return`
    <fieldset class="settings__group">
      <legend class="settings__label">
        <svg
        class="settings__group-icon settings__group-icon--player"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        >
        <circle
          cx="16"
          cy="7"
          r="4"
          stroke="currentColor"
          stroke-width="2.5"
        />
        <path
          d="M12 12H20L21 17L25 21V25H7V21L11 17L12 12Z"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-linejoin="round"
        />
        <path
          d="M5 29H27"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-linecap="round"
        />
      </svg>
        Choose player
      </legend>

      <label class="settings__option">
        <input type="radio" name="player-color" value="blue" checked />
        <span>Blue</span>
      </label>

      <label class="settings__option">
        <input type="radio" name="player-color" value="orange" />
        <span>Orange</span>
      </label>
    </fieldset>
  `}function ie(){return`
    <fieldset class="settings__group">
      <legend class="settings__label">
        <svg
        class="settings__group-icon settings__group-icon--board"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        >
        <rect
          x="10"
          y="4"
          width="17"
          height="23"
          rx="2"
          transform="rotate(-15 10 4)"
          stroke="currentColor"
          stroke-width="2.5"
        />
        <path
          d="M7 10L4 11L8 27L11 26"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-linejoin="round"
        />
      </svg>
        Board size
      </legend>

      <label class="settings__option">
        <input type="radio" name="board-size" value="4x4" checked />
        <span>16 cards</span>
      </label>

      <label class="settings__option">
        <input type="radio" name="board-size" value="4x6" />
        <span>24 cards</span>
      </label>

      <label class="settings__option">
        <input type="radio" name="board-size" value="6x6" />
        <span>36 cards</span>
      </label>
    </fieldset>
  `}function h(){return`
    <fieldset class="settings__group">
      <legend class="settings__label">
        <span class="settings__group-icon settings__group-icon--mode" aria-hidden="true">♟</span>
        Game mode
      </legend>

      <label class="settings__option">
        <input
          type="radio"
          name="game-mode"
          value="player-vs-player"
          checked
        />
        <span>Player vs Player</span>
      </label>

      <label class="settings__option">
        <input
          type="radio"
          name="game-mode"
          value="player-vs-bot"
        />
        <span>Player vs Bot</span>
      </label>
    </fieldset>
  `}function ae(){return`
    <fieldset
      id="bot-difficulty-settings"
      class="settings__group"
      hidden
      disabled
    >
      <legend class="settings__label">Bot Difficulty</legend>

      <label class="settings__option">
        <input type="radio" name="bot-difficulty" value="easy" checked />
        <span>Easy</span>
      </label>

      <label class="settings__option">
        <input type="radio" name="bot-difficulty" value="medium" />
        <span>Medium</span>
      </label>

      <label class="settings__option">
        <input type="radio" name="bot-difficulty" value="hard" />
        <span>Hard</span>
      </label>
    </fieldset>
  `}function oe(){return`
    <section class="settings">
      <div class="settings__container">
        <header class="settings__header">
          <h1 class="settings__title">Settings</h1>
          <div class="settings__title-decoration" aria-hidden="true"></div>
        </header>

        <div class="settings__layout">
          <div class="settings__controls">
            ${m()}
            ${re()}
            ${ie()}
            ${h()}
            ${ae()}

            <button
              id="back-button"
              class="settings__back-button"
              type="button"
            >
              ← Back to Home
            </button>
          </div>

          <div class="settings__right">
            <div class="settings__preview">
              <img
                id="theme-preview"
                class="settings__preview-image"
                src="${l}"
                alt="Code Vibes card theme preview"
              />
            </div>

            <div class="settings__actions">
              <div class="settings__summary" aria-live="polite">
                <span id="summary-theme">Code Vibes</span>
                <span class="settings__separator" aria-hidden="true"></span>
                <span id="summary-player">Blue Player</span>
                <span class="settings__separator" aria-hidden="true"></span>
                <span id="summary-board">16 Cards</span>
              </div>

              <button id="play-button" type="button">
                <svg
                  class="settings__start-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <rect
                    x="2"
                    y="4"
                    width="20"
                    height="16"
                    rx="1"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                  <path
                    d="M10 8L16 12L10 16V8Z"
                    fill="currentColor"
                  />
                </svg>

                <span>Start</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function se(){let e=document.querySelector(`#theme-preview`),t=document.querySelector(`#summary-theme`),n=document.querySelector(`#summary-player`),r=document.querySelector(`#summary-board`);if(!e)return;let i={"code-vibes":{src:l,alt:`Code Vibes card theme preview`},"da-projects":{src:d,alt:`DA Projects card theme preview`},food:{src:f,alt:`Food card theme preview`},gaming:{src:p,alt:`Gaming card theme preview`}},a={"code-vibes":`Code Vibes`,"da-projects":`DA Projects`,food:`Food`,gaming:`Gaming`},o={"4x4":`16 Cards`,"4x6":`24 Cards`,"6x6":`36 Cards`};function s(){let s=document.querySelector(`input[name="card-theme"]:checked`),c=document.querySelector(`input[name="player-color"]:checked`),l=document.querySelector(`input[name="board-size"]:checked`);if(s){let n=i[s.value];n&&(e.src=n.src,e.alt=n.alt),t&&(t.textContent=a[s.value]??`Game Theme`)}c&&n&&(n.textContent=c.value===`orange`?`Orange Player`:`Blue Player`),l&&r&&(r.textContent=o[l.value]??`Board Size`)}document.querySelectorAll(`input[name="card-theme"], input[name="player-color"], input[name="board-size"]`).forEach(e=>{e.addEventListener(`change`,s)}),s()}var ce=e((()=>{u(),ee(),te(),ne()}));function g(e,t){return e===2&&t===`player-vs-bot`?`Bot`:`Player ${e}`}var _=e((()=>{}));function v(e){return e===`blue`?`orange`:`blue`}function y(){return`
    <svg
      class="scoreboard__player-icon"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="5"
        r="3"
        stroke="currentColor"
        stroke-width="2"
      />
      <path
        d="M9 9H15L17 15L15 17L18 21H6L9 17L7 15L9 9Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  `}function b(e,t,n,r){let i=r?`is-active`:``,a=n===`blue`?`Blue`:`Orange`;return`
    <div
      class="scoreboard__player scoreboard__player--${n} ${i}"
      aria-label="${e}: ${t} points"
    >
      ${y()}

      <span class="scoreboard__color-name">${a}</span>

      <span class="scoreboard__score">${t}</span>
    </div>
  `}function x(e,t){return t!==`player-vs-bot`||e.currentPlayer!==2?``:`
    <span class="scoreboard__thinking" role="status">
      <span>Bot is thinking</span>

      <span class="scoreboard__thinking-dots" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </span>
  `}function le(e,t,n){let r=g(e.currentPlayer,t);return`
    <div class="scoreboard__turn">
      <span class="scoreboard__turn-label">Current player:</span>

      <span
        class="scoreboard__current-player scoreboard__current-player--${e.currentPlayer===1?n:v(n)}"
        aria-label="${r}"
        title="${r}"
      >
        ${y()}
      </span>

      ${x(e,t)}
    </div>
  `}function ue(e,t,n){let r=v(t),i=b(g(1,n),e.playerOneScore,t,e.currentPlayer===1),a=b(g(2,n),e.playerTwoScore,r,e.currentPlayer===2);return`
    <div class="scoreboard" aria-live="polite">
      <div class="scoreboard__scores">
        ${t===`orange`?i:a}
        ${t===`blue`?i:a}
      </div>

      ${le(e,n,t)}
    </div>
  `}var de=e((()=>{_()}));function fe(e){return`
    <button
      class="game__card"
      type="button"
      data-card-id="${e.id}"
      aria-label="Flip card ${e.id+1}"
      aria-pressed="false"
    >
      <span class="game__card-inner">
        <span class="game__card-face game__card-back">
          <img src="${e.backImage}" alt="" />
        </span>

        <span class="game__card-face game__card-front">
          <img src="${e.frontImage}" alt="" />
        </span>
      </span>
    </button>
  `}function pe(){return`
    <svg
      class="game__exit-icon"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M10 17L15 12L10 7"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15 12H3"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M12 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H12"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  `}function S(e){let t=e===`gaming`,n=e===`food`;return`
    <dialog id="exit-dialog" class="exit-dialog">
      <h2 class="exit-dialog__title">
        Are you sure you want to quit the game?
      </h2>

      <div class="exit-dialog__actions">
        <button
          id="cancel-exit-button"
          type="button"
        >
          ${t?`No, back to game`:n?`NO, BACK TO GAME`:`Back to game`}
        </button>

        <button
          id="confirm-exit-button"
          type="button"
        >
          ${t?`Yes, quit game`:n?`EXIT GAME`:`Exit game`}
        </button>
      </div>
    </dialog>
  `}function me(e,t,n){return`
    <section class="game" data-theme="${t.theme}">
      <header class="game__header">
        ${ue(n,t.playerColor,t.gameMode)}

        <button id="exit-button" type="button">
          ${pe()}
          <span>Exit game</span>
        </button>
      </header>

      <div
        class="game__board"
        data-size="${t.boardSize}"
      >
        ${e.map(fe).join(``)}
      </div>

      ${S(t.theme)}
    </section>
  `}var he=e((()=>{de()}));function C(){return Math.random()<.5?1:2}function ge(e,t){return{currentPlayer:t,playerOneScore:0,playerTwoScore:0,matchedPairs:0,totalPairs:e}}function _e(e){return e.playerOneScore===e.playerTwoScore?C():e.playerOneScore<e.playerTwoScore?1:2}function ve(e){e.currentPlayer===1?e.playerOneScore++:e.playerTwoScore++,e.matchedPairs++}function ye(e){e.currentPlayer=e.currentPlayer===1?2:1}function be(e){return e.matchedPairs===e.totalPairs}function w(e){return e.playerOneScore===e.playerTwoScore?null:e.playerOneScore>e.playerTwoScore?1:2}var T=e((()=>{}));function E(e){return e===`blue`?`orange`:`blue`}function xe(e,t){return e===1?t:E(t)}function Se(e,t){let n=g(1,t),r=g(2,t);return`
    <div class="game-over__scores">
      <span class="game-over__score">
        <span>${n}</span>
        <strong>${e.playerOneScore}</strong>
      </span>

      <span class="game-over__score">
        <span>${r}</span>
        <strong>${e.playerTwoScore}</strong>
      </span>
    </div>
  `}function Ce(e,t){return e===null?`
      <p class="game-over__eyebrow">It's a</p>
      <h2 class="game-over__result">DRAW</h2>
    `:`
    <p class="game-over__eyebrow">The winner is</p>
    <h2 class="game-over__result">
      ${g(e,t)}
    </h2>
  `}function we(e,t){return e===null?`
      <div
        class="game-over__icon game-over__icon--draw"
        aria-hidden="true"
      >
        ⚖
      </div>
    `:t===`gaming`?`
      <div
        class="game-over__icon game-over__icon--trophy"
        aria-hidden="true"
      >
        🏆
      </div>
    `:`
    <div
      class="game-over__icon game-over__icon--player"
      aria-hidden="true"
    >
      ♟
    </div>
  `}function Te(){return`
    <div class="game-over__actions">
      <button id="home-button" type="button">
        Home
      </button>

      <button id="rematch-button" type="button">
        Rematch
      </button>
    </div>
  `}function Ee(e,t,n,r){let i=w(e);return`
    <section
      class="game-over"
      data-theme="${r}"
      data-result="${i===null?`draw`:xe(i,t)}"
    >
      <div class="game-over__intro">
        <h1 class="game-over__title">Game Over</h1>

        <p class="game-over__score-label">
          Final score
        </p>

        ${Se(e,n)}
      </div>

      <div class="game-over__outcome">
        ${Ce(i,n)}
        ${we(i,r)}
        ${Te()}
      </div>
    </section>
  `}var De=e((()=>{T(),_()}));function Oe(){return`
    <section class="coin-toss" aria-label="Coin toss">
      <h1 class="coin-toss__title">Who starts?</h1>

      <div class="coin-toss__coin" aria-hidden="true">
        <div class="coin-toss__coin-inner">
          <div class="coin-toss__coin-face coin-toss__coin-front">
            1
          </div>

          <div class="coin-toss__coin-face coin-toss__coin-back">
            2
          </div>
        </div>
      </div>

      <p class="coin-toss__message" role="status">
        Tossing a coin...
      </p>
    </section>
  `}function ke(e,t){return`${g(e,t)} starts!`}var Ae=e((()=>{_()}));function D(){let e=document.querySelector(`#bot-difficulty-settings`),t=document.querySelector(`input[name="game-mode"][value="player-vs-bot"]`);e&&t&&(e.hidden=!t.checked,e.disabled=!t.checked)}function je(){document.querySelectorAll(`input[name="game-mode"]`).forEach(e=>{e.addEventListener(`change`,D)}),D()}var Me=e((()=>{})),O,Ne=e((()=>{O={playerColor:`blue`,boardSize:`4x4`,theme:`code-vibes`,gameMode:`player-vs-player`,botDifficulty:`easy`}}));function k(e){return document.querySelector(`input[name="${e}"]:checked`)?.value??null}function Pe(){return k(`player-color`)===`orange`?`orange`:`blue`}function Fe(){let e=k(`board-size`);return e===`4x6`||e===`6x6`?e:`4x4`}function Ie(){let e=k(`card-theme`);return e===`food`||e===`gaming`||e===`da-projects`?e:`code-vibes`}function Le(){return{playerColor:Pe(),boardSize:Fe(),theme:Ie(),gameMode:ze(),botDifficulty:Be()}}function Re(){return{...O}}function ze(){return k(`game-mode`)===`player-vs-bot`?`player-vs-bot`:`player-vs-player`}function Be(){let e=k(`bot-difficulty`);return e===`medium`||e===`hard`?e:`easy`}var Ve=e((()=>{Ne()})),A,He=e((()=>{A=new URL(`Property-1-Component-21__2078-1193-DkVcOsIF.svg`,import.meta.url).href})),j,Ue=e((()=>{j=new URL(`Property-1-Component-22__2078-1194-DrOrlF--.svg`,import.meta.url).href})),M,We=e((()=>{M=new URL(`Property-1-Component-21__2117-1584-ButbmiG1.svg`,import.meta.url).href})),N,Ge=e((()=>{N=new URL(`Property-1-Component-22__2117-1572-EH1iwlHE.svg`,import.meta.url).href})),P,Ke=e((()=>{P=new URL(`Property-1-Component-21__2117-1608-4xXZEOFE.svg`,import.meta.url).href})),F,qe=e((()=>{F=new URL(`Property-1-Component-22__2117-1599-Cnkdc65e.svg`,import.meta.url).href})),I,Je=e((()=>{I=new URL(`Property-1-Component-21__2117-1630-CHygEqmd.svg`,import.meta.url).href})),L,Ye=e((()=>{L=new URL(`Property-1-Component-22__2117-1622-CULN-4fq.svg`,import.meta.url).href})),Xe,Ze=e((()=>{Xe=new URL(`Property-1-Component-21__2161-2956-BAEGK2Rr.svg`,import.meta.url).href})),Qe,$e=e((()=>{Qe=new URL(`Property-1-Component-22__2161-2930-cktjklQm.svg`,import.meta.url).href})),et,tt=e((()=>{et=new URL(`Property-1-Component-21__2161-3007-Kd2UEdC4.svg`,import.meta.url).href})),nt,rt=e((()=>{nt=new URL(`Property-1-Component-22__2161-2993-B0OT03FT.svg`,import.meta.url).href})),it,at=e((()=>{it=new URL(`Property-1-Component-21__2161-3036-CTTh5axk.svg`,import.meta.url).href})),ot,st=e((()=>{ot=new URL(`Property-1-Component-22__2161-3022-CO5cjGD7.svg`,import.meta.url).href})),ct,lt=e((()=>{ct=new URL(`Property-1-Component-21__2161-3065-DuQmdiPr.svg`,import.meta.url).href})),ut,dt=e((()=>{ut=new URL(`Property-1-Component-22__2161-3051-CpWR79T7.svg`,import.meta.url).href})),ft,pt=e((()=>{ft=new URL(`Property-1-Component-21__2161-3735-GRs8Fz4v.svg`,import.meta.url).href})),mt,ht=e((()=>{mt=new URL(`Property-1-Component-22__2161-3726-BrzYvuK4.svg`,import.meta.url).href})),gt,_t=e((()=>{gt=new URL(`Property-1-Component-21__2161-3753-CMOB9_Fj.svg`,import.meta.url).href})),vt,yt=e((()=>{vt=new URL(`Property-1-Component-22__2161-3745-ubDO6ud8.svg`,import.meta.url).href})),bt,xt=e((()=>{bt=new URL(`Property-1-Component-21__2078-2210-CE-a986e.svg`,import.meta.url).href})),St,Ct=e((()=>{St=new URL(`Property-1-Component-22__2078-2202-BE0OjgIO.svg`,import.meta.url).href})),wt,Tt=e((()=>{wt=new URL(`Property-1-Component-21__2078-2227-m1JQ5dAM.svg`,import.meta.url).href})),Et,Dt=e((()=>{Et=new URL(`Property-1-Component-22__2078-2219-BzMxUq1i.svg`,import.meta.url).href})),Ot,kt=e((()=>{Ot=new URL(`Property-1-Component-21__2078-2244-TO0DaieE.svg`,import.meta.url).href})),At,jt=e((()=>{At=new URL(`Property-1-Component-22__2078-2236-hvjRpmkD.svg`,import.meta.url).href})),Mt,Nt=e((()=>{Mt=new URL(`Property-1-Component-21__2078-2261-Dr843E9O.svg`,import.meta.url).href})),Pt,Ft=e((()=>{Pt=new URL(`Property-1-Component-22__2078-2253-BMgln637.svg`,import.meta.url).href})),It,Lt=e((()=>{It=new URL(`Property-1-Component-21__2078-2278-fLn9g-Qd.svg`,import.meta.url).href})),Rt,zt=e((()=>{Rt=new URL(`Property-1-Component-22__2078-2270-CrdQOBMg.svg`,import.meta.url).href})),Bt,Vt=e((()=>{Bt=new URL(`Property-1-Component-21__2078-2295-CYFD4-Z9.svg`,import.meta.url).href})),Ht,Ut=e((()=>{Ht=new URL(`Property-1-Component-22__2078-2287-B9zMNSn3.svg`,import.meta.url).href})),Wt,Gt=e((()=>{Wt=new URL(`Property-1-Component-21__2078-2312-B5Yk3Zau.svg`,import.meta.url).href})),Kt,qt=e((()=>{Kt=new URL(`Property-1-Component-22__2078-2304-cmS-Po7M.svg`,import.meta.url).href})),Jt,Yt=e((()=>{Jt=new URL(`Property-1-Component-21__2117-1554-PoMrdCCG.svg`,import.meta.url).href})),Xt,Zt=e((()=>{Xt=new URL(`Property-1-Component-22__2117-1544-DRM-8NE4.svg`,import.meta.url).href})),Qt,$t=e((()=>{Qt=new URL(`Match-card__2310-5742-CmWM-gL_.svg`,import.meta.url).href})),en,tn=e((()=>{en=new URL(`Match-card__2317-5743-CDp7eRAS.svg`,import.meta.url).href})),nn,rn=e((()=>{nn=new URL(`Match-card__2317-5744-C3NPifyN.svg`,import.meta.url).href})),an,on=e((()=>{an=`data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='124.0'%20height='124.0'%20viewBox='174.0%202410.0%20124.0%20124.0'%20fill='none'%20overflow='hidden'%3e%3cdefs%3e%3cclipPath%20id='clip34_2317_5746'%3e%3crect%20width='66'%20height='70'%20fill='white'%20transform='translate(203%202437)'%20/%3e%3c/clipPath%3e%3cfilter%20id='filter89_d_2317_5746'%20x='174'%20y='2410'%20width='136'%20height='136'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'%20/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'%20/%3e%3cfeOffset%20dx='6'%20dy='6'%20/%3e%3cfeGaussianBlur%20stdDeviation='4'%20/%3e%3cfeComposite%20in2='hardAlpha'%20operator='out'%20/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200.301961%200%200%200%200%200.835294%200%200%200%200%200.737255%200%200%200%200.3%200'%20/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_2317_5746'%20/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_2317_5746'%20result='shape'%20/%3e%3c/filter%3e%3c/defs%3e%3cg%20filter='url(%23filter89_d_2317_5746)'%3e%3crect%20width='120'%20height='120'%20transform='matrix(-1%200%200%201%20296%202412)'%20fill='white'%20shape-rendering='crispEdges'%20/%3e%3crect%20x='-2.5'%20y='2.5'%20width='115'%20height='115'%20transform='matrix(-1%200%200%201%20291%202412)'%20stroke='%234DD5BC'%20stroke-width='5'%20shape-rendering='crispEdges'%20/%3e%3cg%20clip-path='url(%23clip34_2317_5746)'%3e%3cpath%20d='M203.027%202448.72L235.461%202437.18L268.768%202448.51L263.375%202491.35L235.461%202506.78L207.983%202491.55L203.027%202448.72Z'%20fill='%23E23237'%20/%3e%3cpath%20d='M268.768%202448.51L235.461%202437.18V2506.78L263.375%202491.37L268.768%202448.51Z'%20fill='%23B52E31'%20/%3e%3cpath%20d='M235.512%202445.31L215.302%202490.19L222.852%202490.06L226.909%202479.94H245.039L249.482%202490.19L256.698%202490.32L235.512%202445.31ZM235.564%202459.69L242.394%202473.94H229.554L235.564%202459.69Z'%20fill='white'%20/%3e%3c/g%3e%3c/g%3e%3c/svg%3e`})),sn,cn=e((()=>{sn=new URL(`Property-1-Component-1__2197-2305-UbujL8_F.svg`,import.meta.url).href})),ln,un=e((()=>{ln=new URL(`Property-1-Component-2__2197-2306-Ctx6FguI.svg`,import.meta.url).href})),dn,fn=e((()=>{dn=new URL(`Property-1-Component-1__2197-3309-Dgx5vbEd.svg`,import.meta.url).href})),pn,mn=e((()=>{pn=new URL(`Property-1-Component-2__2197-3356-DK_lTlmW.svg`,import.meta.url).href})),hn,gn=e((()=>{hn=new URL(`Property-1-Component-1__2197-3404-IzblEXxu.svg`,import.meta.url).href})),_n,vn=e((()=>{_n=new URL(`Property-1-Component-2__2197-3451-CcQene02.svg`,import.meta.url).href})),yn,bn=e((()=>{yn=new URL(`Property-1-Component-1__2197-3499-Djn8fGnK.svg`,import.meta.url).href})),xn,Sn=e((()=>{xn=new URL(`Property-1-Component-2__2197-3546-fHjXKxkW.svg`,import.meta.url).href})),Cn,wn=e((()=>{Cn=new URL(`Property-1-Component-1__2197-3594-CbVkDiWn.svg`,import.meta.url).href})),Tn,En=e((()=>{Tn=new URL(`Property-1-Component-2__2197-3641-BXu7i7h6.svg`,import.meta.url).href})),Dn,On=e((()=>{Dn=new URL(`Property-1-Component-1__2197-3689-CJf9kBSu.svg`,import.meta.url).href})),kn,An=e((()=>{kn=new URL(`Property-1-Component-2__2197-3736-3xEkfWXL.svg`,import.meta.url).href})),jn,Mn=e((()=>{jn=new URL(`Property-1-Component-1__2197-3784-CT9voezZ.svg`,import.meta.url).href})),Nn,Pn=e((()=>{Nn=new URL(`Property-1-Component-2__2197-3831-qXsFKo7R.svg`,import.meta.url).href})),Fn,In=e((()=>{Fn=new URL(`Property-1-Component-1__2197-3879-C13rjtUe.svg`,import.meta.url).href})),Ln,Rn=e((()=>{Ln=new URL(`Property-1-Component-2__2197-3926-t7ZA0aVu.svg`,import.meta.url).href})),zn,Bn=e((()=>{zn=new URL(`Property-1-Component-1__2197-4812-Dh0yW-cs.svg`,import.meta.url).href})),Vn,Hn=e((()=>{Vn=new URL(`Property-1-Component-2__2197-4838-ozmgvymW.svg`,import.meta.url).href})),Un,Wn=e((()=>{Un=new URL(`Property-1-Component-1__2197-4865-DwV5DJZP.svg`,import.meta.url).href})),Gn,Kn=e((()=>{Gn=new URL(`Property-1-Component-2__2197-4891-DeWqJK7e.svg`,import.meta.url).href})),qn,Jn=e((()=>{qn=new URL(`Property-1-Component-1__2197-2549-DbPwB3sq.svg`,import.meta.url).href})),Yn,Xn=e((()=>{Yn=new URL(`Property-1-Component-2__2197-2596-CuPupyvw.svg`,import.meta.url).href})),Zn,Qn=e((()=>{Zn=new URL(`Property-1-Component-1__2197-2644-_xKXDH_r.svg`,import.meta.url).href})),$n,er=e((()=>{$n=new URL(`Property-1-Component-2__2197-2691-DaLTTKMB.svg`,import.meta.url).href})),tr,nr=e((()=>{tr=new URL(`Property-1-Component-1__2197-2739-XvQGIRZJ.svg`,import.meta.url).href})),rr,ir=e((()=>{rr=new URL(`Property-1-Component-2__2197-2786--2aWqg4J.svg`,import.meta.url).href})),ar,or=e((()=>{ar=new URL(`Property-1-Component-1__2197-2834-Hji53o3w.svg`,import.meta.url).href})),sr,cr=e((()=>{sr=new URL(`Property-1-Component-2__2197-2881-4CwALhKd.svg`,import.meta.url).href})),lr,ur=e((()=>{lr=new URL(`Property-1-Component-1__2197-2929-CHJRxWQx.svg`,import.meta.url).href})),dr,fr=e((()=>{dr=new URL(`Property-1-Component-2__2197-2976-CyY8rwQ-.svg`,import.meta.url).href})),pr,mr=e((()=>{pr=new URL(`Property-1-Component-1__2197-3024-CyAe680t.svg`,import.meta.url).href})),hr,gr=e((()=>{hr=new URL(`Property-1-Component-2__2197-3071-BEl-zRj_.svg`,import.meta.url).href})),_r,vr=e((()=>{_r=new URL(`Property-1-Component-1__2197-3119-m4plzU-U.svg`,import.meta.url).href})),yr,br=e((()=>{yr=new URL(`Property-1-Component-2__2197-3166-Bv8E7LnG.svg`,import.meta.url).href})),xr,Sr=e((()=>{xr=new URL(`Property-1-Component-1__2197-3214-CSNn5vaj.svg`,import.meta.url).href})),Cr,wr=e((()=>{Cr=new URL(`Property-1-Component-2__2197-3261-CIXwdoHZ.svg`,import.meta.url).href})),Tr,Er=e((()=>{Tr=new URL(`Property-1-Component-1__2078-3738-BvCsTnE2.svg`,import.meta.url).href})),Dr,Or=e((()=>{Dr=new URL(`Property-1-Component-2__2078-3739-CVlizSV6.svg`,import.meta.url).href})),kr,Ar=e((()=>{kr=new URL(`Property-1-Component-1__2078-4282-D6yUD47s.svg`,import.meta.url).href})),jr,Mr=e((()=>{jr=new URL(`Property-1-Component-2__2078-4288-CgvQDgkU.svg`,import.meta.url).href})),Nr,Pr=e((()=>{Nr=new URL(`Property-1-Component-1__2106-1706-C2EHzjem.svg`,import.meta.url).href})),Fr,Ir=e((()=>{Fr=new URL(`Property-1-Component-2__2106-1712-D3x4voMg.svg`,import.meta.url).href})),Lr,Rr=e((()=>{Lr=new URL(`Property-1-Component-1__2106-1721-B8tx38or.svg`,import.meta.url).href})),zr,Br=e((()=>{zr=new URL(`Property-1-Component-2__2106-1727-l5H8hN0l.svg`,import.meta.url).href})),Vr,Hr=e((()=>{Vr=new URL(`Property-1-Component-1__2106-1738-BLqKTIxf.svg`,import.meta.url).href})),Ur,Wr=e((()=>{Ur=new URL(`Property-1-Component-2__2106-1744-Cj617enI.svg`,import.meta.url).href})),Gr,Kr=e((()=>{Gr=new URL(`Property-1-Component-1__2161-3920-BWnyxMKV.svg`,import.meta.url).href})),qr,Jr=e((()=>{qr=new URL(`Property-1-Component-2__2161-3926-7eVI8Xix.svg`,import.meta.url).href})),Yr,Xr=e((()=>{Yr=new URL(`Property-1-Component-1__2161-3933-DAIrTZBS.svg`,import.meta.url).href})),Zr,Qr=e((()=>{Zr=new URL(`Property-1-Component-2__2161-3939-BDdhAn35.svg`,import.meta.url).href})),$r,ei=e((()=>{$r=new URL(`Property-1-Component-1__2161-3946-CtX_cTQQ.svg`,import.meta.url).href})),ti,ni=e((()=>{ti=new URL(`Property-1-Component-2__2161-3952-DTwsEje4.svg`,import.meta.url).href})),ri,ii=e((()=>{ri=new URL(`Property-1-Component-1__2161-3959-sl8wWMUU.svg`,import.meta.url).href})),ai,oi=e((()=>{ai=new URL(`Property-1-Component-2__2161-3965-BERW7iHW.svg`,import.meta.url).href})),si,ci=e((()=>{si=new URL(`Property-1-Component-1__2168-1931-gdQT55gw.svg`,import.meta.url).href})),li,ui=e((()=>{li=new URL(`Property-1-Component-2__2168-1937-BJVU6PrU.svg`,import.meta.url).href})),di,fi=e((()=>{di=new URL(`Property-1-Component-1__2078-4164-CBxW7U4c.svg`,import.meta.url).href})),pi,mi=e((()=>{pi=new URL(`Property-1-Component-2__2078-4170-B3fAogFq.svg`,import.meta.url).href})),hi,gi=e((()=>{hi=new URL(`Property-1-Component-1__2078-4177-Bg2DdRyE.svg`,import.meta.url).href})),_i,vi=e((()=>{_i=new URL(`Property-1-Component-2__2078-4183-Cg2Zyp4h.svg`,import.meta.url).href})),yi,bi=e((()=>{yi=new URL(`Property-1-Component-1__2078-4190-BMDiURnB.svg`,import.meta.url).href})),xi,Si=e((()=>{xi=new URL(`Property-1-Component-2__2078-4196-CX8ReE3U.svg`,import.meta.url).href})),Ci,wi=e((()=>{Ci=new URL(`Property-1-Component-1__2078-4203-CbxgLiVg.svg`,import.meta.url).href})),Ti,Ei=e((()=>{Ti=new URL(`Property-1-Component-2__2078-4209-CkpnOaxA.svg`,import.meta.url).href})),Di,Oi=e((()=>{Di=new URL(`Property-1-Component-1__2078-4229-K-IlEuGJ.svg`,import.meta.url).href})),ki,Ai=e((()=>{ki=new URL(`Property-1-Component-2__2078-4235-CyjyG9bJ.svg`,import.meta.url).href})),ji,Mi=e((()=>{ji=new URL(`Property-1-Component-1__2078-4216-2uwern0k.svg`,import.meta.url).href})),Ni,Pi=e((()=>{Ni=new URL(`Property-1-Component-2__2078-4222-CbOJu17R.svg`,import.meta.url).href})),Fi,Ii=e((()=>{Fi=new URL(`Property-1-Component-1__2078-4242-CQZltY5N.svg`,import.meta.url).href})),Li,Ri=e((()=>{Li=new URL(`Property-1-Component-2__2078-4248-JjKbZuaL.svg`,import.meta.url).href})),zi,Bi=e((()=>{zi=new URL(`Property-1-Component-1__2078-4269-ClTNHoOo.svg`,import.meta.url).href})),Vi,Hi=e((()=>{Vi=new URL(`Property-1-Component-2__2078-4275-DI0f-UZD.svg`,import.meta.url).href})),Ui,Wi=e((()=>{Ui=new URL(`Property-1-Default__2168-2104-DHWWdH6c.svg`,import.meta.url).href})),Gi,Ki=e((()=>{Gi=new URL(`Property-1-Hover__2168-2105-BVGLdfp8.svg`,import.meta.url).href})),qi,Ji=e((()=>{qi=new URL(`Property-1-Default__2030-355-D0szYp2P.svg`,import.meta.url).href})),Yi,Xi=e((()=>{Yi=new URL(`Property-1-hover__2030-357-DLnbJ_V6.svg`,import.meta.url).href})),Zi,Qi=e((()=>{Zi=new URL(`Property-1-choosen__2062-2557-DiS2dtGp.svg`,import.meta.url).href})),$i,ea=e((()=>{$i=new URL(`Property-1-default__2030-107-DK1B08sg.svg`,import.meta.url).href})),ta,na=e((()=>{ta=new URL(`Property-1-DA-projects__2285-4173-uo3aViPq.svg`,import.meta.url).href})),ra,ia=e((()=>{ra=new URL(`Property-1-IT-logos__2285-4060-BEx4OZPI.svg`,import.meta.url).href})),aa,oa=e((()=>{aa=new URL(`Property-1-foods__2285-4059-CBrDf4GJ.svg`,import.meta.url).href})),sa,ca=e((()=>{sa=new URL(`Property-1-gameing__2285-4061-DEeRcnfB.svg`,import.meta.url).href})),la,ua=e((()=>{la=new URL(`Property-1-default__2168-2042-Dh9_TtIA.svg`,import.meta.url).href})),da,fa=e((()=>{da=new URL(`Property-1-hover__2168-2041-CzpG5LBJ.svg`,import.meta.url).href})),pa,ma=e((()=>{pa=new URL(`Property-1-default__2200-2311-CNjZAMLw.svg`,import.meta.url).href})),ha,ga=e((()=>{ha=new URL(`Property-1-hover__2200-2310-B1Ez8tOz.svg`,import.meta.url).href})),_a,va=e((()=>{_a=new URL(`Property-1-Default__2310-5687-CkVRB0aO.svg`,import.meta.url).href})),ya,ba=e((()=>{ya=new URL(`Property-1-hover__2310-5686-HHj7cEIa.svg`,import.meta.url).href})),xa,Sa=e((()=>{xa=new URL(`Property-1-Default__2247-7687-HQc1G1sZ.svg`,import.meta.url).href})),Ca,wa=e((()=>{Ca=new URL(`Property-1-border__21730-4238-DB0IOuEX.svg`,import.meta.url).href})),Ta,Ea=e((()=>{Ta=new URL(`Property-1-hover__2247-7686-DyWFRbVm.svg`,import.meta.url).href})),Da,Oa=e((()=>{Da=new URL(`Property-1-default__2197-5351-B9TgVFdB.svg`,import.meta.url).href})),ka,Aa=e((()=>{ka=new URL(`Property-1-hover__2197-5350-BU_opStI.svg`,import.meta.url).href})),ja,Ma=e((()=>{ja=new URL(`Property-1-Default__2106-1790-DQFAHPqu.svg`,import.meta.url).href})),Na,Pa=e((()=>{Na=new URL(`Property-1-hover__2106-1789-ANgaLAyQ.svg`,import.meta.url).href})),Fa,Ia=e((()=>{Fa=new URL(`Property-1-Default__2106-1772-BlW5n947.svg`,import.meta.url).href})),La,Ra=e((()=>{La=new URL(`Property-1-hover__2106-1771-77rpSqKU.svg`,import.meta.url).href})),za,Ba=e((()=>{za=new URL(`Property-1-Default__2247-7683-C_f7XSXi.svg`,import.meta.url).href})),Va,Ha=e((()=>{Va=new URL(`Property-1-border__21730-4232-DDu6nHhp.svg`,import.meta.url).href})),Ua,Wa=e((()=>{Ua=new URL(`Property-1-hover__2247-7684-BqsD7zMS.svg`,import.meta.url).href})),Ga,Ka=e((()=>{Ga=new URL(`Property-1-default__2062-2747-CMC5CVVM.svg`,import.meta.url).href})),qa,Ja=e((()=>{qa=new URL(`Property-1-final-settings__2062-2746-HzWU577N.svg`,import.meta.url).href})),Ya,Xa=e((()=>{Ya=new URL(`Property-1-Component-2__2226-3664-BKIXXajG.svg`,import.meta.url).href})),Za,Qa=e((()=>{Za=new URL(`Property-1-Component-3__2226-3665-ClobSw4i.svg`,import.meta.url).href})),$a,eo=e((()=>{$a=new URL(`Property-1-Component-2__2226-3675-9cvTsZ4l.svg`,import.meta.url).href})),to,no=e((()=>{to=new URL(`Property-1-Component-3__2226-3680-B6dzEYS1.svg`,import.meta.url).href})),ro,io=e((()=>{ro=new URL(`Property-1-Component-2__2226-3686-goNAHoPB.svg`,import.meta.url).href})),ao,oo=e((()=>{ao=new URL(`Property-1-Component-3__2226-3691-BbIwUJza.svg`,import.meta.url).href})),so,co=e((()=>{so=new URL(`Property-1-Component-2__2226-3697-CUohQFNv.svg`,import.meta.url).href})),lo,uo=e((()=>{lo=new URL(`Property-1-Component-3__2226-3702-B7GRj6C_.svg`,import.meta.url).href})),fo,po=e((()=>{fo=new URL(`Property-1-Component-2__2226-3708-C_IprcrX.svg`,import.meta.url).href})),mo,ho=e((()=>{mo=new URL(`Property-1-Component-3__2226-3713-C1AqCj1a.svg`,import.meta.url).href})),go,_o=e((()=>{go=new URL(`Property-1-Component-2__2226-3719-dgTiZ3u2.svg`,import.meta.url).href})),vo,yo=e((()=>{vo=new URL(`Property-1-Component-3__2226-3724-C0t50dXN.svg`,import.meta.url).href})),bo,xo=e((()=>{bo=new URL(`Property-1-Component-2__2226-3730-b71ysPUA.svg`,import.meta.url).href})),So,Co=e((()=>{So=new URL(`Property-1-Component-3__2226-3735-CA7PCBFL.svg`,import.meta.url).href})),wo,To=e((()=>{wo=new URL(`Property-1-Component-2__2226-3752--mseDqEd.svg`,import.meta.url).href})),Eo,Do=e((()=>{Eo=new URL(`Property-1-Component-3__2226-3757-DEiruuv1.svg`,import.meta.url).href})),Oo,ko=e((()=>{Oo=new URL(`Property-1-Component-2__2226-3818-CtMI8l4C.svg`,import.meta.url).href})),Ao,jo=e((()=>{Ao=new URL(`Property-1-Component-3__2226-3823-C1_Ny6-2.svg`,import.meta.url).href})),Mo,No=e((()=>{Mo=new URL(`Property-1-Component-2__2226-3796-uoAXr1Yh.svg`,import.meta.url).href})),Po,Fo=e((()=>{Po=new URL(`Property-1-Component-3__2226-3801-H5n2JEuq.svg`,import.meta.url).href})),Io,Lo=e((()=>{Io=new URL(`Property-1-Component-2__2226-3807-1OuA7Sai.svg`,import.meta.url).href})),Ro,zo=e((()=>{Ro=new URL(`Property-1-Component-3__2226-3812-B1uB6OVP.svg`,import.meta.url).href})),Bo,Vo=e((()=>{Bo=new URL(`Property-1-Component-2__2226-3829-DULJJP4T.svg`,import.meta.url).href})),Ho,Uo=e((()=>{Ho=new URL(`Property-1-Component-3__2226-3834-B5BGEEVT.svg`,import.meta.url).href})),Wo,Go=e((()=>{Wo=new URL(`Property-1-Component-2__2226-3774-Dwd3hB7g.svg`,import.meta.url).href})),Ko,qo=e((()=>{Ko=new URL(`Property-1-Component-3__2226-3779-D6-nITbd.svg`,import.meta.url).href})),Jo,Yo=e((()=>{Jo=new URL(`Property-1-Component-2__2226-3741-81LLHVxq.svg`,import.meta.url).href})),Xo,Zo=e((()=>{Xo=new URL(`Property-1-Component-3__2226-3746-DE9c9992.svg`,import.meta.url).href})),Qo,$o=e((()=>{Qo=new URL(`Property-1-Component-2__2226-3763-mY8RAf2n.svg`,import.meta.url).href})),es,ts=e((()=>{es=new URL(`Property-1-Component-3__2226-3768-DEWZRFiu.svg`,import.meta.url).href})),ns,rs=e((()=>{ns=new URL(`Property-1-Component-2__2226-3785-CXGTAwAP.svg`,import.meta.url).href})),is,as=e((()=>{is=new URL(`Property-1-Component-3__2226-3790-D9OQdG2U.svg`,import.meta.url).href})),os,ss=e((()=>{os=new URL(`Property-1-Component-2__2226-3840-Civ1-YFv.svg`,import.meta.url).href})),cs,ls=e((()=>{cs=new URL(`Property-1-Component-3__2226-3845-M0R_Hoq8.svg`,import.meta.url).href})),us,ds=e((()=>{us=new URL(`Property-1-Component-2__2226-3851-D0ifdT41.svg`,import.meta.url).href})),fs,ps=e((()=>{fs=new URL(`Property-1-Component-3__2226-3856-CgKpLnfw.svg`,import.meta.url).href})),ms,hs=e((()=>{ms=new URL(`Property-1-DA-projects__2285-4359-yZpsGuLM.svg`,import.meta.url).href})),gs,_s=e((()=>{gs=new URL(`Property-1-code-vibes__2285-4257-DEg4916a.svg`,import.meta.url).href})),vs,ys=e((()=>{vs=new URL(`Property-1-foods__2285-4530-CfK8Uwyc.svg`,import.meta.url).href})),bs,xs=e((()=>{bs=new URL(`Property-1-gaming__2285-4259-B_zbamv5.svg`,import.meta.url).href})),Ss,Cs=e((()=>{Ss=new URL(`Property-1-Default__2030-390-CqpFGvwq.svg`,import.meta.url).href})),ws,Ts=e((()=>{ws=new URL(`Property-1-hover__2030-399-qy-T9MA0.svg`,import.meta.url).href})),Es,Ds=e((()=>{Es=new URL(`Property-1-default__2034-415-z46_HVbD.svg`,import.meta.url).href})),Os,ks=e((()=>{Os=new URL(`Property-1-disabled__2034-429-CDa0kaIH.svg`,import.meta.url).href})),As,js=e((()=>{As=new URL(`Property-1-hover__2034-414-COgFksb3.svg`,import.meta.url).href}));function Ms(e,t){let n=`Property-1-Component-${t}_`,r=e.find(e=>e.includes(n));return r?R[r]:null}function Ns(e,t){let n=Ms(e,Ls[t]),r=Ms(e,Rs[t]);return!n||!r?null:{backImage:n,frontImage:r}}function Ps(e,t){let n=e===`food`?String(t).padStart(2,`0`):String(t),r=`${Is[e]}${n}/`;return Object.keys(R).filter(e=>e.includes(r))}function Fs(e){return Array.from({length:18},(e,t)=>t+1).flatMap(t=>{let n=Ns(Ps(e,t),e);return n?[n]:[]})}var R,Is,Ls,Rs,zs=e((()=>{He(),Ue(),We(),Ge(),Ke(),qe(),Je(),Ye(),Ze(),$e(),tt(),rt(),at(),st(),lt(),dt(),pt(),ht(),_t(),yt(),xt(),Ct(),Tt(),Dt(),kt(),jt(),Nt(),Ft(),Lt(),zt(),Vt(),Ut(),Gt(),qt(),Yt(),Zt(),$t(),tn(),rn(),on(),cn(),un(),fn(),mn(),gn(),vn(),bn(),Sn(),wn(),En(),On(),An(),Mn(),Pn(),In(),Rn(),Bn(),Hn(),Wn(),Kn(),Jn(),Xn(),Qn(),er(),nr(),ir(),or(),cr(),ur(),fr(),mr(),gr(),vr(),br(),Sr(),wr(),Er(),Or(),Ar(),Mr(),Pr(),Ir(),Rr(),Br(),Hr(),Wr(),Kr(),Jr(),Xr(),Qr(),ei(),ni(),ii(),oi(),ci(),ui(),fi(),mi(),gi(),vi(),bi(),Si(),wi(),Ei(),Oi(),Ai(),Mi(),Pi(),Ii(),Ri(),Bi(),Hi(),Wi(),Ki(),Ji(),Xi(),Qi(),ea(),na(),ia(),oa(),ca(),ua(),fa(),ma(),ga(),va(),ba(),Sa(),wa(),Ea(),Oa(),Aa(),Ma(),Pa(),Ia(),Ra(),Ba(),Ha(),Wa(),Ka(),Ja(),Xa(),Qa(),eo(),no(),io(),oo(),co(),uo(),po(),ho(),_o(),yo(),xo(),Co(),To(),Do(),ko(),jo(),No(),Fo(),Lo(),zo(),Vo(),Uo(),Go(),qo(),Yo(),Zo(),$o(),ts(),rs(),as(),ss(),ls(),ds(),ps(),hs(),_s(),ys(),xs(),Cs(),Ts(),Ds(),ks(),js(),R=Object.assign({"../assets/Varianten/Code-vibes-card-1/Property-1-Component-21__2078-1193.svg":A,"../assets/Varianten/Code-vibes-card-1/Property-1-Component-22__2078-1194.svg":j,"../assets/Varianten/Code-vibes-card-10/Property-1-Component-21__2117-1584.svg":M,"../assets/Varianten/Code-vibes-card-10/Property-1-Component-22__2117-1572.svg":N,"../assets/Varianten/Code-vibes-card-11/Property-1-Component-21__2117-1608.svg":P,"../assets/Varianten/Code-vibes-card-11/Property-1-Component-22__2117-1599.svg":F,"../assets/Varianten/Code-vibes-card-12/Property-1-Component-21__2117-1630.svg":I,"../assets/Varianten/Code-vibes-card-12/Property-1-Component-22__2117-1622.svg":L,"../assets/Varianten/Code-vibes-card-13/Property-1-Component-21__2161-2956.svg":Xe,"../assets/Varianten/Code-vibes-card-13/Property-1-Component-22__2161-2930.svg":Qe,"../assets/Varianten/Code-vibes-card-14/Property-1-Component-21__2161-3007.svg":et,"../assets/Varianten/Code-vibes-card-14/Property-1-Component-22__2161-2993.svg":nt,"../assets/Varianten/Code-vibes-card-15/Property-1-Component-21__2161-3036.svg":it,"../assets/Varianten/Code-vibes-card-15/Property-1-Component-22__2161-3022.svg":ot,"../assets/Varianten/Code-vibes-card-16/Property-1-Component-21__2161-3065.svg":ct,"../assets/Varianten/Code-vibes-card-16/Property-1-Component-22__2161-3051.svg":ut,"../assets/Varianten/Code-vibes-card-17/Property-1-Component-21__2161-3735.svg":ft,"../assets/Varianten/Code-vibes-card-17/Property-1-Component-22__2161-3726.svg":mt,"../assets/Varianten/Code-vibes-card-18/Property-1-Component-21__2161-3753.svg":gt,"../assets/Varianten/Code-vibes-card-18/Property-1-Component-22__2161-3745.svg":vt,"../assets/Varianten/Code-vibes-card-2/Property-1-Component-21__2078-2210.svg":bt,"../assets/Varianten/Code-vibes-card-2/Property-1-Component-22__2078-2202.svg":St,"../assets/Varianten/Code-vibes-card-3/Property-1-Component-21__2078-2227.svg":wt,"../assets/Varianten/Code-vibes-card-3/Property-1-Component-22__2078-2219.svg":Et,"../assets/Varianten/Code-vibes-card-4/Property-1-Component-21__2078-2244.svg":Ot,"../assets/Varianten/Code-vibes-card-4/Property-1-Component-22__2078-2236.svg":At,"../assets/Varianten/Code-vibes-card-5/Property-1-Component-21__2078-2261.svg":Mt,"../assets/Varianten/Code-vibes-card-5/Property-1-Component-22__2078-2253.svg":Pt,"../assets/Varianten/Code-vibes-card-6/Property-1-Component-21__2078-2278.svg":It,"../assets/Varianten/Code-vibes-card-6/Property-1-Component-22__2078-2270.svg":Rt,"../assets/Varianten/Code-vibes-card-7/Property-1-Component-21__2078-2295.svg":Bt,"../assets/Varianten/Code-vibes-card-7/Property-1-Component-22__2078-2287.svg":Ht,"../assets/Varianten/Code-vibes-card-8/Property-1-Component-21__2078-2312.svg":Wt,"../assets/Varianten/Code-vibes-card-8/Property-1-Component-22__2078-2304.svg":Kt,"../assets/Varianten/Code-vibes-card-9/Property-1-Component-21__2117-1554.svg":Jt,"../assets/Varianten/Code-vibes-card-9/Property-1-Component-22__2117-1544.svg":Xt,"../assets/Varianten/Components/Match-card__2310-5742.svg":Qt,"../assets/Varianten/Components/Match-card__2317-5743.svg":en,"../assets/Varianten/Components/Match-card__2317-5744.svg":nn,"../assets/Varianten/Components/match-status-01__2310-5741.svg":an,"../assets/Varianten/DA-Projects-card-01/Property-1-Component-1__2197-2305.svg":sn,"../assets/Varianten/DA-Projects-card-01/Property-1-Component-2__2197-2306.svg":ln,"../assets/Varianten/DA-Projects-card-10/Property-1-Component-1__2197-3309.svg":dn,"../assets/Varianten/DA-Projects-card-10/Property-1-Component-2__2197-3356.svg":pn,"../assets/Varianten/DA-Projects-card-11/Property-1-Component-1__2197-3404.svg":hn,"../assets/Varianten/DA-Projects-card-11/Property-1-Component-2__2197-3451.svg":_n,"../assets/Varianten/DA-Projects-card-12/Property-1-Component-1__2197-3499.svg":yn,"../assets/Varianten/DA-Projects-card-12/Property-1-Component-2__2197-3546.svg":xn,"../assets/Varianten/DA-Projects-card-13/Property-1-Component-1__2197-3594.svg":Cn,"../assets/Varianten/DA-Projects-card-13/Property-1-Component-2__2197-3641.svg":Tn,"../assets/Varianten/DA-Projects-card-14/Property-1-Component-1__2197-3689.svg":Dn,"../assets/Varianten/DA-Projects-card-14/Property-1-Component-2__2197-3736.svg":kn,"../assets/Varianten/DA-Projects-card-15/Property-1-Component-1__2197-3784.svg":jn,"../assets/Varianten/DA-Projects-card-15/Property-1-Component-2__2197-3831.svg":Nn,"../assets/Varianten/DA-Projects-card-16/Property-1-Component-1__2197-3879.svg":Fn,"../assets/Varianten/DA-Projects-card-16/Property-1-Component-2__2197-3926.svg":Ln,"../assets/Varianten/DA-Projects-card-17/Property-1-Component-1__2197-4812.svg":zn,"../assets/Varianten/DA-Projects-card-17/Property-1-Component-2__2197-4838.svg":Vn,"../assets/Varianten/DA-Projects-card-18/Property-1-Component-1__2197-4865.svg":Un,"../assets/Varianten/DA-Projects-card-18/Property-1-Component-2__2197-4891.svg":Gn,"../assets/Varianten/DA-Projects-card-2/Property-1-Component-1__2197-2549.svg":qn,"../assets/Varianten/DA-Projects-card-2/Property-1-Component-2__2197-2596.svg":Yn,"../assets/Varianten/DA-Projects-card-3/Property-1-Component-1__2197-2644.svg":Zn,"../assets/Varianten/DA-Projects-card-3/Property-1-Component-2__2197-2691.svg":$n,"../assets/Varianten/DA-Projects-card-4/Property-1-Component-1__2197-2739.svg":tr,"../assets/Varianten/DA-Projects-card-4/Property-1-Component-2__2197-2786.svg":rr,"../assets/Varianten/DA-Projects-card-5/Property-1-Component-1__2197-2834.svg":ar,"../assets/Varianten/DA-Projects-card-5/Property-1-Component-2__2197-2881.svg":sr,"../assets/Varianten/DA-Projects-card-6/Property-1-Component-1__2197-2929.svg":lr,"../assets/Varianten/DA-Projects-card-6/Property-1-Component-2__2197-2976.svg":dr,"../assets/Varianten/DA-Projects-card-7/Property-1-Component-1__2197-3024.svg":pr,"../assets/Varianten/DA-Projects-card-7/Property-1-Component-2__2197-3071.svg":hr,"../assets/Varianten/DA-Projects-card-8/Property-1-Component-1__2197-3119.svg":_r,"../assets/Varianten/DA-Projects-card-8/Property-1-Component-2__2197-3166.svg":yr,"../assets/Varianten/DA-Projects-card-9/Property-1-Component-1__2197-3214.svg":xr,"../assets/Varianten/DA-Projects-card-9/Property-1-Component-2__2197-3261.svg":Cr,"../assets/Varianten/Game-card-1/Property-1-Component-1__2078-3738.svg":Tr,"../assets/Varianten/Game-card-1/Property-1-Component-2__2078-3739.svg":Dr,"../assets/Varianten/Game-card-10/Property-1-Component-1__2078-4282.svg":kr,"../assets/Varianten/Game-card-10/Property-1-Component-2__2078-4288.svg":jr,"../assets/Varianten/Game-card-11/Property-1-Component-1__2106-1706.svg":Nr,"../assets/Varianten/Game-card-11/Property-1-Component-2__2106-1712.svg":Fr,"../assets/Varianten/Game-card-12/Property-1-Component-1__2106-1721.svg":Lr,"../assets/Varianten/Game-card-12/Property-1-Component-2__2106-1727.svg":zr,"../assets/Varianten/Game-card-13/Property-1-Component-1__2106-1738.svg":Vr,"../assets/Varianten/Game-card-13/Property-1-Component-2__2106-1744.svg":Ur,"../assets/Varianten/Game-card-14/Property-1-Component-1__2161-3920.svg":Gr,"../assets/Varianten/Game-card-14/Property-1-Component-2__2161-3926.svg":qr,"../assets/Varianten/Game-card-15/Property-1-Component-1__2161-3933.svg":Yr,"../assets/Varianten/Game-card-15/Property-1-Component-2__2161-3939.svg":Zr,"../assets/Varianten/Game-card-16/Property-1-Component-1__2161-3946.svg":$r,"../assets/Varianten/Game-card-16/Property-1-Component-2__2161-3952.svg":ti,"../assets/Varianten/Game-card-17/Property-1-Component-1__2161-3959.svg":ri,"../assets/Varianten/Game-card-17/Property-1-Component-2__2161-3965.svg":ai,"../assets/Varianten/Game-card-18/Property-1-Component-1__2168-1931.svg":si,"../assets/Varianten/Game-card-18/Property-1-Component-2__2168-1937.svg":li,"../assets/Varianten/Game-card-2/Property-1-Component-1__2078-4164.svg":di,"../assets/Varianten/Game-card-2/Property-1-Component-2__2078-4170.svg":pi,"../assets/Varianten/Game-card-3/Property-1-Component-1__2078-4177.svg":hi,"../assets/Varianten/Game-card-3/Property-1-Component-2__2078-4183.svg":_i,"../assets/Varianten/Game-card-4/Property-1-Component-1__2078-4190.svg":yi,"../assets/Varianten/Game-card-4/Property-1-Component-2__2078-4196.svg":xi,"../assets/Varianten/Game-card-5/Property-1-Component-1__2078-4203.svg":Ci,"../assets/Varianten/Game-card-5/Property-1-Component-2__2078-4209.svg":Ti,"../assets/Varianten/Game-card-6/Property-1-Component-1__2078-4229.svg":Di,"../assets/Varianten/Game-card-6/Property-1-Component-2__2078-4235.svg":ki,"../assets/Varianten/Game-card-7/Property-1-Component-1__2078-4216.svg":ji,"../assets/Varianten/Game-card-7/Property-1-Component-2__2078-4222.svg":Ni,"../assets/Varianten/Game-card-8/Property-1-Component-1__2078-4242.svg":Fi,"../assets/Varianten/Game-card-8/Property-1-Component-2__2078-4248.svg":Li,"../assets/Varianten/Game-card-9/Property-1-Component-1__2078-4269.svg":zi,"../assets/Varianten/Game-card-9/Property-1-Component-2__2078-4275.svg":Vi,"../assets/Varianten/Pop-up-button/Property-1-Default__2168-2104.svg":Ui,"../assets/Varianten/Pop-up-button/Property-1-Hover__2168-2105.svg":Gi,"../assets/Varianten/Primary-button/Property-1-Default__2030-355.svg":qi,"../assets/Varianten/Primary-button/Property-1-hover__2030-357.svg":Yi,"../assets/Varianten/Radial-buttons/Property-1-choosen__2062-2557.svg":Zi,"../assets/Varianten/Radial-buttons/Property-1-default__2030-107.svg":$i,"../assets/Varianten/Theme-Visual/Property-1-DA-projects__2285-4173.svg":ta,"../assets/Varianten/Theme-Visual/Property-1-IT-logos__2285-4060.svg":ra,"../assets/Varianten/Theme-Visual/Property-1-foods__2285-4059.svg":aa,"../assets/Varianten/Theme-Visual/Property-1-gameing__2285-4061.svg":sa,"../assets/Varianten/button-Pop-up/Property-1-default__2168-2042.svg":la,"../assets/Varianten/button-Pop-up/Property-1-hover__2168-2041.svg":da,"../assets/Varianten/button-Pop-up-01/Property-1-default__2200-2311.svg":pa,"../assets/Varianten/button-Pop-up-01/Property-1-hover__2200-2310.svg":ha,"../assets/Varianten/button-Pop-up-02/Property-1-Default__2310-5687.svg":_a,"../assets/Varianten/button-Pop-up-02/Property-1-hover__2310-5686.svg":ya,"../assets/Varianten/button-Pop-up_04/Property-1-Default__2247-7687.svg":xa,"../assets/Varianten/button-Pop-up_04/Property-1-border__21730-4238.svg":Ca,"../assets/Varianten/button-Pop-up_04/Property-1-hover__2247-7686.svg":Ta,"../assets/Varianten/button-exit/Property-1-default__2197-5351.svg":Da,"../assets/Varianten/button-exit/Property-1-hover__2197-5350.svg":ka,"../assets/Varianten/button-exit-Code-vibes-theme/Property-1-Default__2106-1790.svg":ja,"../assets/Varianten/button-exit-Code-vibes-theme/Property-1-hover__2106-1789.svg":Na,"../assets/Varianten/button-exit-game-theme/Property-1-Default__2106-1772.svg":Fa,"../assets/Varianten/button-exit-game-theme/Property-1-hover__2106-1771.svg":La,"../assets/Varianten/button-exit_04/Property-1-Default__2247-7683.svg":za,"../assets/Varianten/button-exit_04/Property-1-border__21730-4232.svg":Va,"../assets/Varianten/button-exit_04/Property-1-hover__2247-7684.svg":Ua,"../assets/Varianten/chooen-settings-button/Property-1-default__2062-2747.svg":Ga,"../assets/Varianten/chooen-settings-button/Property-1-final-settings__2062-2746.svg":qa,"../assets/Varianten/food-card-01/Property-1-Component-2__2226-3664.svg":Ya,"../assets/Varianten/food-card-01/Property-1-Component-3__2226-3665.svg":Za,"../assets/Varianten/food-card-02/Property-1-Component-2__2226-3675.svg":$a,"../assets/Varianten/food-card-02/Property-1-Component-3__2226-3680.svg":to,"../assets/Varianten/food-card-03/Property-1-Component-2__2226-3686.svg":ro,"../assets/Varianten/food-card-03/Property-1-Component-3__2226-3691.svg":ao,"../assets/Varianten/food-card-04/Property-1-Component-2__2226-3697.svg":so,"../assets/Varianten/food-card-04/Property-1-Component-3__2226-3702.svg":lo,"../assets/Varianten/food-card-05/Property-1-Component-2__2226-3708.svg":fo,"../assets/Varianten/food-card-05/Property-1-Component-3__2226-3713.svg":mo,"../assets/Varianten/food-card-06/Property-1-Component-2__2226-3719.svg":go,"../assets/Varianten/food-card-06/Property-1-Component-3__2226-3724.svg":vo,"../assets/Varianten/food-card-07/Property-1-Component-2__2226-3730.svg":bo,"../assets/Varianten/food-card-07/Property-1-Component-3__2226-3735.svg":So,"../assets/Varianten/food-card-08/Property-1-Component-2__2226-3752.svg":wo,"../assets/Varianten/food-card-08/Property-1-Component-3__2226-3757.svg":Eo,"../assets/Varianten/food-card-09/Property-1-Component-2__2226-3818.svg":Oo,"../assets/Varianten/food-card-09/Property-1-Component-3__2226-3823.svg":Ao,"../assets/Varianten/food-card-10/Property-1-Component-2__2226-3796.svg":Mo,"../assets/Varianten/food-card-10/Property-1-Component-3__2226-3801.svg":Po,"../assets/Varianten/food-card-11/Property-1-Component-2__2226-3807.svg":Io,"../assets/Varianten/food-card-11/Property-1-Component-3__2226-3812.svg":Ro,"../assets/Varianten/food-card-12/Property-1-Component-2__2226-3829.svg":Bo,"../assets/Varianten/food-card-12/Property-1-Component-3__2226-3834.svg":Ho,"../assets/Varianten/food-card-13/Property-1-Component-2__2226-3774.svg":Wo,"../assets/Varianten/food-card-13/Property-1-Component-3__2226-3779.svg":Ko,"../assets/Varianten/food-card-14/Property-1-Component-2__2226-3741.svg":Jo,"../assets/Varianten/food-card-14/Property-1-Component-3__2226-3746.svg":Xo,"../assets/Varianten/food-card-15/Property-1-Component-2__2226-3763.svg":Qo,"../assets/Varianten/food-card-15/Property-1-Component-3__2226-3768.svg":es,"../assets/Varianten/food-card-16/Property-1-Component-2__2226-3785.svg":ns,"../assets/Varianten/food-card-16/Property-1-Component-3__2226-3790.svg":is,"../assets/Varianten/food-card-17/Property-1-Component-2__2226-3840.svg":os,"../assets/Varianten/food-card-17/Property-1-Component-3__2226-3845.svg":cs,"../assets/Varianten/food-card-18/Property-1-Component-2__2226-3851.svg":us,"../assets/Varianten/food-card-18/Property-1-Component-3__2226-3856.svg":fs,"../assets/Varianten/game-theme-component/Property-1-DA-projects__2285-4359.svg":ms,"../assets/Varianten/game-theme-component/Property-1-code-vibes__2285-4257.svg":gs,"../assets/Varianten/game-theme-component/Property-1-foods__2285-4530.svg":vs,"../assets/Varianten/game-theme-component/Property-1-gaming__2285-4259.svg":bs,"../assets/Varianten/secondary-button/Property-1-Default__2030-390.svg":Ss,"../assets/Varianten/secondary-button/Property-1-hover__2030-399.svg":ws,"../assets/Varianten/small-button/Property-1-default__2034-415.svg":Es,"../assets/Varianten/small-button/Property-1-disabled__2034-429.svg":Os,"../assets/Varianten/small-button/Property-1-hover__2034-414.svg":As}),Is={"code-vibes":`Code-vibes-card-`,"da-projects":`DA-Projects-card-`,food:`food-card-`,gaming:`Game-card-`},Ls={"code-vibes":21,"da-projects":1,food:2,gaming:1},Rs={"code-vibes":22,"da-projects":2,food:3,gaming:2}}));function Bs(e,t){return[{id:t*2,pairId:t,...e},{id:t*2+1,pairId:t,...e}]}function Vs(e,t){return e.slice(0,t).flatMap((e,t)=>Bs(e,t))}function Hs(e){let t=[...e];for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}var Us=e((()=>{}));function Ws(e){return Gs[e]}var Gs,Ks=e((()=>{Gs={"4x4":8,"4x6":12,"6x6":18}}));function qs(e){e.classList.add(`is-flipped`),e.setAttribute(`aria-pressed`,`true`),H.push(e)}function Js(e){e.classList.remove(`is-flipped`),e.setAttribute(`aria-pressed`,`false`)}function z(e,t){let n=Number(e.dataset.cardId);return t.find(e=>e.id===n)}function Ys(e,t,n){let r=z(e,n),i=z(t,n);return!!(r&&i&&r.pairId===i.pairId)}function Xs(e,t){e.classList.add(`is-matched`),t.classList.add(`is-matched`),e.disabled=!0,t.disabled=!0,H=[]}function Zs(){H.forEach(Js),H=[],W=null}function Qs(e){G=null,e.onMiss(),U=!1}function $s(e){let[t,n]=H;Xs(t,n),e.onMatch()}function ec(e){U=!0,W=window.setTimeout(()=>{Zs(),G=window.setTimeout(()=>Qs(e),lc)},cc)}function tc(e,t){let[n,r]=H;Ys(n,r,e)?$s(t):ec(t)}function nc(e){return!U&&!e.disabled&&!e.classList.contains(`is-flipped`)&&H.length<2}function rc(e){q&&nc(e)&&(qs(e),sc(e),H.length===2&&tc(K,q))}function ic(e){q?.canSelectCard?.()!==!1&&rc(e)}function B(){let e=document.querySelectorAll(`.game__card`);return Array.from(e).filter(nc)}function ac(e){rc(e)}function oc(e,t){V(),K=e,q=t,document.querySelectorAll(`.game__card`).forEach(e=>{e.addEventListener(`click`,()=>ic(e))})}function V(){W!==null&&window.clearTimeout(W),G!==null&&window.clearTimeout(G),W=null,G=null,H=[],U=!1,K=[],q=null}function sc(e){let t=z(e,K);t&&q?.onReveal?.(t.id,t.pairId)}var cc,lc,H,U,W,G,K,q,uc=e((()=>{cc=1e3,lc=600,H=[],U=!1,W=null,G=null,K=[],q=null}));function dc(e,t){J.some(t=>t.cardId===e)||J.push({cardId:e,pairId:t})}function fc(e){let t=J.filter(t=>e.includes(t.cardId));for(let e of t){let n=t.find(t=>t.cardId!==e.cardId&&t.pairId===e.pairId);if(n)return[e.cardId,n.cardId]}return null}function pc(){if(J.length===0)return;let e=Math.floor(Math.random()*J.length);J.splice(e,1)}function mc(){J=[]}function hc(e){return J.find(t=>t.cardId===e)}var J,gc=e((()=>{J=[]}));function _c(e){if(e.length!==0)return e[Math.floor(Math.random()*e.length)]}function vc(e){return B().find(t=>Number(t.dataset.cardId)===e)}function yc(){let e=fc(B().map(e=>Number(e.dataset.cardId)));return e?vc(e[0]):void 0}function bc(){if(Oc()){let e=yc();if(e)return e}return _c(B())}function xc(e){let t=hc(e);if(t)return B().find(e=>hc(Number(e.dataset.cardId))?.pairId===t.pairId)}function Sc(e){if(Oc()){let t=xc(e);if(t)return t}return _c(B())}function Cc(e){Q=null;let t=Sc(e);t&&ac(t)}function wc(){Q=null;let e=bc();if(!e)return;ac(e);let t=Number(e.dataset.cardId);Q=window.setTimeout(()=>Cc(t),Z)}function Tc(e){$=e}function Y(e=!1){X(),Dc();let t=e?Ac:kc;Q=window.setTimeout(wc,t)}function X(){Q!==null&&window.clearTimeout(Q),Q=null}function Ec(){X();let e=document.querySelector(`.game__card.is-flipped:not(.is-matched)`);if(e){let t=Number(e.dataset.cardId);Q=window.setTimeout(()=>Cc(t),Z)}else Y()}function Dc(){$===`medium`&&Math.random()<.5&&pc()}function Oc(){return $===`hard`||$===`medium`&&Math.random()<.5}var kc,Z,Ac,Q,$,jc=e((()=>{uc(),gc(),kc=1400,Z=700,Ac=1200,Q=null,$=`easy`}));t((()=>{n(),c(),ce(),he(),de(),De(),Ae(),Me(),Ve(),zs(),Us(),Ks(),uc(),T(),jc(),gc();var e=document.getElementById(`main-container`),t=1800,r=Re(),i=null,a=null,o=null;function l(){a!==null&&window.clearTimeout(a),o!==null&&window.clearTimeout(o),a=null,o=null}function u(){e&&(e.innerHTML=s(),document.getElementById(`start-button`)?.addEventListener(`click`,d))}function d(){e&&(e.innerHTML=oe(),ee(),f(),je(),se())}function ee(){document.getElementById(`back-button`)?.addEventListener(`click`,u)}function f(){document.getElementById(`play-button`)?.addEventListener(`click`,re)}function te(){return Hs(Vs(Fs(r.theme),Ws(r.boardSize)))}function p(e){let t=Ws(r.boardSize);mc(),i=ge(t,e)}function ne(e){let t=document.querySelector(`.coin-toss`),n=document.querySelector(`.coin-toss__message`);t?.classList.add(`is-finished`),t?.setAttribute(`data-winner`,String(e)),n&&(n.innerHTML=ke(e,r.gameMode)),a=null}function m(n){e&&(l(),e.innerHTML=Oe(),a=window.setTimeout(()=>ne(n),t),o=window.setTimeout(x,3e3))}function re(){r=Le(),Tc(r.botDifficulty);let e=C();p(e),m(e)}function ie(){if(!i)return;let e=w(i)===null,t=_e(i);X(),p(t),e?m(t):x()}function h(){if(!i)return;let e=document.querySelector(`.scoreboard`);e&&(e.outerHTML=ue(i,r.playerColor,r.gameMode))}function ae(){e&&i&&(X(),V(),e.innerHTML=Ee(i,r.playerColor,r.gameMode,r.theme),g(),_())}function g(){document.getElementById(`home-button`)?.addEventListener(`click`,le)}function _(){document.getElementById(`rematch-button`)?.addEventListener(`click`,ie)}function v(){i&&(ve(i),h(),be(i)?ae():S()&&Y(!0))}function y(){i&&(ye(i),h(),S()&&Y())}function b(e){oc(e,{onMatch:v,onMiss:y,onReveal:dc,canSelectCard:()=>!S()})}function x(){if(!e||!i)return;let t=te();e.innerHTML=me(t,r,i),b(t),pe(),S()&&Y()}function le(){X(),l(),V(),i=null,u()}function fe(){X(),l(),V(),i=null,d()}function pe(){let e=document.querySelector(`#exit-button`),t=document.querySelector(`#exit-dialog`),n=document.querySelector(`#cancel-exit-button`),r=document.querySelector(`#confirm-exit-button`);if(!e||!t||!n||!r){console.error(`Exit dialog elements are missing.`);return}let i=!1;e.addEventListener(`click`,()=>{X(),t.showModal()}),n.addEventListener(`click`,()=>{t.close()}),t.addEventListener(`close`,()=>{!i&&S()&&Ec()}),r.addEventListener(`click`,()=>{i=!0,t.close(),fe()})}function S(){return r.gameMode===`player-vs-bot`&&i?.currentPlayer===2}function E(){u()}E()}))();