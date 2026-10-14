var e=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},t=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n=e((()=>{}));function r(){return`
    <section class="home">
      <span class="home__icon" aria-hidden="true">🎮</span>

      <h1 class="home__title">Memory Game</h1>

      <p class="home__description">
        Find the matching pairs and challenge your friends!
      </p>

      <button
        class="home__start-button"
        id="start-button"
        type="button"
      >
        Start Game
      </button>
    </section>
  `}var i=e((()=>{}));function a(){return`
    <fieldset class="settings__group">
      <legend class="settings__label">Player Color</legend>

      <label class="settings__option">
        <input type="radio" name="player-color" value="blue" checked />
        Blue
      </label>

      <label class="settings__option">
        <input type="radio" name="player-color" value="orange" />
        Orange
      </label>
    </fieldset>
  `}function o(){return`
    <fieldset class="settings__group">
      <legend class="settings__label">Board Size</legend>

      <label class="settings__option">
        <input type="radio" name="board-size" value="4x4" checked />
        4 × 4
      </label>

      <label class="settings__option">
        <input type="radio" name="board-size" value="4x6" />
        4 × 6
      </label>

      <label class="settings__option">
        <input type="radio" name="board-size" value="6x6" />
        6 × 6
      </label>
    </fieldset>
  `}function s(){return`
    <fieldset class="settings__group">
      <legend class="settings__label">Card Theme</legend>

      <label class="settings__option">
        <input type="radio" name="card-theme" value="code-vibes" checked />
        Code Vibes
      </label>

      <label class="settings__option">
        <input type="radio" name="card-theme" value="da-projects" />
        DA Projects
      </label>

      <label class="settings__option">
        <input type="radio" name="card-theme" value="food" />
        Food
      </label>

      <label class="settings__option">
        <input type="radio" name="card-theme" value="gaming" />
        Gaming
      </label>
    </fieldset>
  `}function ee(){return`
    <section class="settings">
      <h1 class="settings__title">Game Settings</h1>

      <p class="settings__description">
        Customize your game before you start!
      </p>

      ${c()}
      ${l()}
      ${a()}
      ${o()}
      ${s()}

      <div class="settings__actions">
        <button id="back-button" type="button">Back to Home</button>
        <button id="play-button" type="button">Play Now</button>
      </div>
    </section>
  `}function c(){return`
    <fieldset class="settings__group">
      <legend>Game Mode</legend>

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
  `}function l(){return`
    <fieldset
    id="bot-difficulty-settings"
    class="settings__group"
    hidden
    disabled
    >
      <legend>Bot Difficulty</legend>

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
  `}var te=e((()=>{}));function u(e,t){return e===2&&t===`player-vs-bot`?`Bot`:`Player ${e}`}var d=e((()=>{}));function ne(e){return e===`blue`?`orange`:`blue`}function re(e,t){return t!==`player-vs-bot`||e.currentPlayer!==2?``:`
    <p class="scoreboard__thinking" role="status">
      <span>Bot is thinking</span>
      <span class="scoreboard__thinking-dots" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </p>
  `}function ie(e,t){return`
    <div class="scoreboard__turn">
      <p class="scoreboard__turn-label">${u(e.currentPlayer,t)}'s Turn</p>
      ${re(e,t)}
    </div>
  `}function f(e,t,n,r){return`
    <div class="scoreboard__player scoreboard__player--${n} ${r?`is-active`:``}">
      <h2 class="scoreboard__name">${e}</h2>
      <p class="scoreboard__score">${t}</p>
    </div>
  `}function ae(e,t,n){let r=ne(t),i=u(1,n),a=u(2,n);return`
    <div class="scoreboard" aria-live="polite">
      ${f(i,e.playerOneScore,t,e.currentPlayer===1)}
      ${ie(e,n)}
      ${f(a,e.playerTwoScore,r,e.currentPlayer===2)}
    </div>
  `}var oe=e((()=>{d()}));function se(e){return`
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
  `}function ce(e,t,n){return`
    <section class="game" data-theme="${t.theme}">
      <button id="exit-button" type="button">
        Exit Game
      </button>

      <h1 class="game__title">Memory Game</h1>

      ${ae(n,t.playerColor,t.gameMode)}

      <div class="game__board" data-size="${t.boardSize}">
        ${e.map(se).join(``)}
      </div>

      ${p()}
    </section>
  `}function p(){return`
    <dialog id="exit-dialog" class="exit-dialog">
      <h2 class="exit-dialog__title">Leave Game?</h2>

      <p class="exit-dialog__description">
        Are you sure you want to leave?
        Your current progress will be lost.
      </p>

      <div class="exit-dialog__actions">
        <button id="cancel-exit-button" type="button">
          Cancel
        </button>

        <button id="confirm-exit-button" type="button">
          Leave Game
        </button>
      </div>
    </dialog>
  `}var le=e((()=>{oe()}));function ue(){return Math.random()<.5?1:2}function de(e,t){return{currentPlayer:t,playerOneScore:0,playerTwoScore:0,matchedPairs:0,totalPairs:e}}function fe(e){return e.playerOneScore===e.playerTwoScore?ue():e.playerOneScore<e.playerTwoScore?1:2}function pe(e){e.currentPlayer===1?e.playerOneScore++:e.playerTwoScore++,e.matchedPairs++}function me(e){e.currentPlayer=e.currentPlayer===1?2:1}function he(e){return e.matchedPairs===e.totalPairs}function ge(e){return e.playerOneScore===e.playerTwoScore?null:e.playerOneScore>e.playerTwoScore?1:2}var _e=e((()=>{}));function ve(e){return e===`blue`?`orange`:`blue`}function ye(e,t){return e===1?t:ve(t)}function m(e,t){return`<h1 class="game-over__result">${e===null?`IT'S A DRAW!`:`${u(e,t).toUpperCase()} WINS!`}</h1>`}function be(e){return`
    <div class="game-over__icon" aria-hidden="true">
      ${e===null?`⚖️`:`🏆`}
    </div>
  `}function xe(e,t){let n=u(1,t),r=u(2,t);return`
    <div class="game-over__scores">
      <p>${n}: <strong>${e.playerOneScore}</strong></p>
      <p>${r}: <strong>${e.playerTwoScore}</strong></p>
    </div>
  `}function Se(){return`
    <div class="game-over__actions">
      <button id="rematch-button" type="button">
        Rematch
      </button>

      <button id="home-button" type="button">
        Back to Home
      </button>
    </div>
  `}function Ce(e,t,n){let r=ge(e);return`
    <section class="game-over" data-result="${r===null?`draw`:ye(r,t)}">
      ${m(r,n)}
      ${be(r)}

      <h2 class="game-over__subtitle">Final Score</h2>

      ${xe(e,n)}
      ${Se()}
    </section>
  `}var we=e((()=>{_e(),d()}));function Te(){return`
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
  `}function Ee(e,t){return`${u(e,t)} starts!`}var De=e((()=>{d()}));function h(){let e=document.querySelector(`#bot-difficulty-settings`),t=document.querySelector(`input[name="game-mode"][value="player-vs-bot"]`);e&&t&&(e.hidden=!t.checked,e.disabled=!t.checked)}function Oe(){document.querySelectorAll(`input[name="game-mode"]`).forEach(e=>{e.addEventListener(`change`,h)}),h()}var ke=e((()=>{})),g,Ae=e((()=>{g={playerColor:`blue`,boardSize:`4x4`,theme:`code-vibes`,gameMode:`player-vs-player`,botDifficulty:`easy`}}));function _(e){return document.querySelector(`input[name="${e}"]:checked`)?.value??null}function v(){return _(`player-color`)===`orange`?`orange`:`blue`}function je(){let e=_(`board-size`);return e===`4x6`||e===`6x6`?e:`4x4`}function Me(){let e=_(`card-theme`);return e===`food`||e===`gaming`||e===`da-projects`?e:`code-vibes`}function Ne(){return{playerColor:v(),boardSize:je(),theme:Me(),gameMode:y(),botDifficulty:Fe()}}function Pe(){return{...g}}function y(){return _(`game-mode`)===`player-vs-bot`?`player-vs-bot`:`player-vs-player`}function Fe(){let e=_(`bot-difficulty`);return e===`medium`||e===`hard`?e:`easy`}var Ie=e((()=>{Ae()})),b,Le=e((()=>{b=`/assets/Property-1-Component-21__2078-1193-DkVcOsIF.svg`})),x,Re=e((()=>{x=`/assets/Property-1-Component-22__2078-1194-DrOrlF--.svg`})),S,ze=e((()=>{S=`/assets/Property-1-Component-21__2117-1584-ButbmiG1.svg`})),C,Be=e((()=>{C=`/assets/Property-1-Component-22__2117-1572-EH1iwlHE.svg`})),w,Ve=e((()=>{w=`/assets/Property-1-Component-21__2117-1608-4xXZEOFE.svg`})),T,He=e((()=>{T=`/assets/Property-1-Component-22__2117-1599-Cnkdc65e.svg`})),E,Ue=e((()=>{E=`/assets/Property-1-Component-21__2117-1630-CHygEqmd.svg`})),D,We=e((()=>{D=`/assets/Property-1-Component-22__2117-1622-CULN-4fq.svg`})),O,Ge=e((()=>{O=`/assets/Property-1-Component-21__2161-2956-BAEGK2Rr.svg`})),k,Ke=e((()=>{k=`/assets/Property-1-Component-22__2161-2930-cktjklQm.svg`})),A,qe=e((()=>{A=`/assets/Property-1-Component-21__2161-3007-Kd2UEdC4.svg`})),j,Je=e((()=>{j=`/assets/Property-1-Component-22__2161-2993-B0OT03FT.svg`})),M,Ye=e((()=>{M=`/assets/Property-1-Component-21__2161-3036-CTTh5axk.svg`})),N,Xe=e((()=>{N=`/assets/Property-1-Component-22__2161-3022-CO5cjGD7.svg`})),P,Ze=e((()=>{P=`/assets/Property-1-Component-21__2161-3065-DuQmdiPr.svg`})),F,Qe=e((()=>{F=`/assets/Property-1-Component-22__2161-3051-CpWR79T7.svg`})),I,$e=e((()=>{I=`/assets/Property-1-Component-21__2161-3735-GRs8Fz4v.svg`})),L,et=e((()=>{L=`/assets/Property-1-Component-22__2161-3726-BrzYvuK4.svg`})),R,tt=e((()=>{R=`/assets/Property-1-Component-21__2161-3753-CMOB9_Fj.svg`})),nt,rt=e((()=>{nt=`/assets/Property-1-Component-22__2161-3745-ubDO6ud8.svg`})),it,at=e((()=>{it=`/assets/Property-1-Component-21__2078-2210-CE-a986e.svg`})),ot,st=e((()=>{ot=`/assets/Property-1-Component-22__2078-2202-BE0OjgIO.svg`})),ct,lt=e((()=>{ct=`/assets/Property-1-Component-21__2078-2227-m1JQ5dAM.svg`})),ut,dt=e((()=>{ut=`/assets/Property-1-Component-22__2078-2219-BzMxUq1i.svg`})),ft,pt=e((()=>{ft=`/assets/Property-1-Component-21__2078-2244-TO0DaieE.svg`})),mt,ht=e((()=>{mt=`/assets/Property-1-Component-22__2078-2236-hvjRpmkD.svg`})),gt,_t=e((()=>{gt=`/assets/Property-1-Component-21__2078-2261-Dr843E9O.svg`})),vt,yt=e((()=>{vt=`/assets/Property-1-Component-22__2078-2253-BMgln637.svg`})),bt,xt=e((()=>{bt=`/assets/Property-1-Component-21__2078-2278-fLn9g-Qd.svg`})),St,Ct=e((()=>{St=`/assets/Property-1-Component-22__2078-2270-CrdQOBMg.svg`})),wt,Tt=e((()=>{wt=`/assets/Property-1-Component-21__2078-2295-CYFD4-Z9.svg`})),Et,Dt=e((()=>{Et=`/assets/Property-1-Component-22__2078-2287-B9zMNSn3.svg`})),Ot,kt=e((()=>{Ot=`/assets/Property-1-Component-21__2078-2312-B5Yk3Zau.svg`})),At,jt=e((()=>{At=`/assets/Property-1-Component-22__2078-2304-cmS-Po7M.svg`})),Mt,Nt=e((()=>{Mt=`/assets/Property-1-Component-21__2117-1554-PoMrdCCG.svg`})),Pt,Ft=e((()=>{Pt=`/assets/Property-1-Component-22__2117-1544-DRM-8NE4.svg`})),It,Lt=e((()=>{It=`/assets/Match-card__2310-5742-CmWM-gL_.svg`})),Rt,zt=e((()=>{Rt=`/assets/Match-card__2317-5743-CDp7eRAS.svg`})),Bt,Vt=e((()=>{Bt=`/assets/Match-card__2317-5744-C3NPifyN.svg`})),Ht,Ut=e((()=>{Ht=`data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='124.0'%20height='124.0'%20viewBox='174.0%202410.0%20124.0%20124.0'%20fill='none'%20overflow='hidden'%3e%3cdefs%3e%3cclipPath%20id='clip34_2317_5746'%3e%3crect%20width='66'%20height='70'%20fill='white'%20transform='translate(203%202437)'%20/%3e%3c/clipPath%3e%3cfilter%20id='filter89_d_2317_5746'%20x='174'%20y='2410'%20width='136'%20height='136'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'%20/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'%20/%3e%3cfeOffset%20dx='6'%20dy='6'%20/%3e%3cfeGaussianBlur%20stdDeviation='4'%20/%3e%3cfeComposite%20in2='hardAlpha'%20operator='out'%20/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200.301961%200%200%200%200%200.835294%200%200%200%200%200.737255%200%200%200%200.3%200'%20/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_2317_5746'%20/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_2317_5746'%20result='shape'%20/%3e%3c/filter%3e%3c/defs%3e%3cg%20filter='url(%23filter89_d_2317_5746)'%3e%3crect%20width='120'%20height='120'%20transform='matrix(-1%200%200%201%20296%202412)'%20fill='white'%20shape-rendering='crispEdges'%20/%3e%3crect%20x='-2.5'%20y='2.5'%20width='115'%20height='115'%20transform='matrix(-1%200%200%201%20291%202412)'%20stroke='%234DD5BC'%20stroke-width='5'%20shape-rendering='crispEdges'%20/%3e%3cg%20clip-path='url(%23clip34_2317_5746)'%3e%3cpath%20d='M203.027%202448.72L235.461%202437.18L268.768%202448.51L263.375%202491.35L235.461%202506.78L207.983%202491.55L203.027%202448.72Z'%20fill='%23E23237'%20/%3e%3cpath%20d='M268.768%202448.51L235.461%202437.18V2506.78L263.375%202491.37L268.768%202448.51Z'%20fill='%23B52E31'%20/%3e%3cpath%20d='M235.512%202445.31L215.302%202490.19L222.852%202490.06L226.909%202479.94H245.039L249.482%202490.19L256.698%202490.32L235.512%202445.31ZM235.564%202459.69L242.394%202473.94H229.554L235.564%202459.69Z'%20fill='white'%20/%3e%3c/g%3e%3c/g%3e%3c/svg%3e`})),Wt,Gt=e((()=>{Wt=`/assets/Property-1-Component-1__2197-2305-UbujL8_F.svg`})),Kt,qt=e((()=>{Kt=`/assets/Property-1-Component-2__2197-2306-Ctx6FguI.svg`})),Jt,Yt=e((()=>{Jt=`/assets/Property-1-Component-1__2197-3309-Dgx5vbEd.svg`})),Xt,Zt=e((()=>{Xt=`/assets/Property-1-Component-2__2197-3356-DK_lTlmW.svg`})),Qt,$t=e((()=>{Qt=`/assets/Property-1-Component-1__2197-3404-IzblEXxu.svg`})),en,tn=e((()=>{en=`/assets/Property-1-Component-2__2197-3451-CcQene02.svg`})),nn,rn=e((()=>{nn=`/assets/Property-1-Component-1__2197-3499-Djn8fGnK.svg`})),an,on=e((()=>{an=`/assets/Property-1-Component-2__2197-3546-fHjXKxkW.svg`})),sn,cn=e((()=>{sn=`/assets/Property-1-Component-1__2197-3594-CbVkDiWn.svg`})),ln,un=e((()=>{ln=`/assets/Property-1-Component-2__2197-3641-BXu7i7h6.svg`})),dn,fn=e((()=>{dn=`/assets/Property-1-Component-1__2197-3689-CJf9kBSu.svg`})),pn,mn=e((()=>{pn=`/assets/Property-1-Component-2__2197-3736-3xEkfWXL.svg`})),hn,gn=e((()=>{hn=`/assets/Property-1-Component-1__2197-3784-CT9voezZ.svg`})),_n,vn=e((()=>{_n=`/assets/Property-1-Component-2__2197-3831-qXsFKo7R.svg`})),yn,bn=e((()=>{yn=`/assets/Property-1-Component-1__2197-3879-C13rjtUe.svg`})),xn,Sn=e((()=>{xn=`/assets/Property-1-Component-2__2197-3926-t7ZA0aVu.svg`})),Cn,wn=e((()=>{Cn=`/assets/Property-1-Component-1__2197-4812-Dh0yW-cs.svg`})),Tn,En=e((()=>{Tn=`/assets/Property-1-Component-2__2197-4838-ozmgvymW.svg`})),Dn,On=e((()=>{Dn=`/assets/Property-1-Component-1__2197-4865-DwV5DJZP.svg`})),kn,An=e((()=>{kn=`/assets/Property-1-Component-2__2197-4891-DeWqJK7e.svg`})),jn,Mn=e((()=>{jn=`/assets/Property-1-Component-1__2197-2549-DbPwB3sq.svg`})),Nn,Pn=e((()=>{Nn=`/assets/Property-1-Component-2__2197-2596-CuPupyvw.svg`})),Fn,In=e((()=>{Fn=`/assets/Property-1-Component-1__2197-2644-_xKXDH_r.svg`})),Ln,Rn=e((()=>{Ln=`/assets/Property-1-Component-2__2197-2691-DaLTTKMB.svg`})),zn,Bn=e((()=>{zn=`/assets/Property-1-Component-1__2197-2739-XvQGIRZJ.svg`})),Vn,Hn=e((()=>{Vn=`/assets/Property-1-Component-2__2197-2786--2aWqg4J.svg`})),Un,Wn=e((()=>{Un=`/assets/Property-1-Component-1__2197-2834-Hji53o3w.svg`})),Gn,Kn=e((()=>{Gn=`/assets/Property-1-Component-2__2197-2881-4CwALhKd.svg`})),qn,Jn=e((()=>{qn=`/assets/Property-1-Component-1__2197-2929-CHJRxWQx.svg`})),Yn,Xn=e((()=>{Yn=`/assets/Property-1-Component-2__2197-2976-CyY8rwQ-.svg`})),Zn,Qn=e((()=>{Zn=`/assets/Property-1-Component-1__2197-3024-CyAe680t.svg`})),$n,er=e((()=>{$n=`/assets/Property-1-Component-2__2197-3071-BEl-zRj_.svg`})),tr,nr=e((()=>{tr=`/assets/Property-1-Component-1__2197-3119-m4plzU-U.svg`})),rr,ir=e((()=>{rr=`/assets/Property-1-Component-2__2197-3166-Bv8E7LnG.svg`})),ar,or=e((()=>{ar=`/assets/Property-1-Component-1__2197-3214-CSNn5vaj.svg`})),sr,cr=e((()=>{sr=`/assets/Property-1-Component-2__2197-3261-CIXwdoHZ.svg`})),lr,ur=e((()=>{lr=`/assets/Property-1-Component-1__2078-3738-BvCsTnE2.svg`})),dr,fr=e((()=>{dr=`/assets/Property-1-Component-2__2078-3739-CVlizSV6.svg`})),pr,mr=e((()=>{pr=`/assets/Property-1-Component-1__2078-4282-D6yUD47s.svg`})),hr,gr=e((()=>{hr=`/assets/Property-1-Component-2__2078-4288-CgvQDgkU.svg`})),_r,vr=e((()=>{_r=`/assets/Property-1-Component-1__2106-1706-C2EHzjem.svg`})),yr,br=e((()=>{yr=`/assets/Property-1-Component-2__2106-1712-D3x4voMg.svg`})),xr,Sr=e((()=>{xr=`/assets/Property-1-Component-1__2106-1721-B8tx38or.svg`})),Cr,wr=e((()=>{Cr=`/assets/Property-1-Component-2__2106-1727-l5H8hN0l.svg`})),Tr,Er=e((()=>{Tr=`/assets/Property-1-Component-1__2106-1738-BLqKTIxf.svg`})),Dr,Or=e((()=>{Dr=`/assets/Property-1-Component-2__2106-1744-Cj617enI.svg`})),kr,Ar=e((()=>{kr=`/assets/Property-1-Component-1__2161-3920-BWnyxMKV.svg`})),jr,Mr=e((()=>{jr=`/assets/Property-1-Component-2__2161-3926-7eVI8Xix.svg`})),Nr,Pr=e((()=>{Nr=`/assets/Property-1-Component-1__2161-3933-DAIrTZBS.svg`})),Fr,Ir=e((()=>{Fr=`/assets/Property-1-Component-2__2161-3939-BDdhAn35.svg`})),Lr,Rr=e((()=>{Lr=`/assets/Property-1-Component-1__2161-3946-CtX_cTQQ.svg`})),zr,Br=e((()=>{zr=`/assets/Property-1-Component-2__2161-3952-DTwsEje4.svg`})),Vr,Hr=e((()=>{Vr=`/assets/Property-1-Component-1__2161-3959-sl8wWMUU.svg`})),Ur,Wr=e((()=>{Ur=`/assets/Property-1-Component-2__2161-3965-BERW7iHW.svg`})),Gr,Kr=e((()=>{Gr=`/assets/Property-1-Component-1__2168-1931-gdQT55gw.svg`})),qr,Jr=e((()=>{qr=`/assets/Property-1-Component-2__2168-1937-BJVU6PrU.svg`})),Yr,Xr=e((()=>{Yr=`/assets/Property-1-Component-1__2078-4164-CBxW7U4c.svg`})),Zr,Qr=e((()=>{Zr=`/assets/Property-1-Component-2__2078-4170-B3fAogFq.svg`})),$r,ei=e((()=>{$r=`/assets/Property-1-Component-1__2078-4177-Bg2DdRyE.svg`})),ti,ni=e((()=>{ti=`/assets/Property-1-Component-2__2078-4183-Cg2Zyp4h.svg`})),ri,ii=e((()=>{ri=`/assets/Property-1-Component-1__2078-4190-BMDiURnB.svg`})),ai,oi=e((()=>{ai=`/assets/Property-1-Component-2__2078-4196-CX8ReE3U.svg`})),si,ci=e((()=>{si=`/assets/Property-1-Component-1__2078-4203-CbxgLiVg.svg`})),li,ui=e((()=>{li=`/assets/Property-1-Component-2__2078-4209-CkpnOaxA.svg`})),di,fi=e((()=>{di=`/assets/Property-1-Component-1__2078-4229-K-IlEuGJ.svg`})),pi,mi=e((()=>{pi=`/assets/Property-1-Component-2__2078-4235-CyjyG9bJ.svg`})),hi,gi=e((()=>{hi=`/assets/Property-1-Component-1__2078-4216-2uwern0k.svg`})),_i,vi=e((()=>{_i=`/assets/Property-1-Component-2__2078-4222-CbOJu17R.svg`})),yi,bi=e((()=>{yi=`/assets/Property-1-Component-1__2078-4242-CQZltY5N.svg`})),xi,Si=e((()=>{xi=`/assets/Property-1-Component-2__2078-4248-JjKbZuaL.svg`})),Ci,wi=e((()=>{Ci=`/assets/Property-1-Component-1__2078-4269-ClTNHoOo.svg`})),Ti,Ei=e((()=>{Ti=`/assets/Property-1-Component-2__2078-4275-DI0f-UZD.svg`})),Di,Oi=e((()=>{Di=`/assets/Property-1-Default__2168-2104-DHWWdH6c.svg`})),ki,Ai=e((()=>{ki=`/assets/Property-1-Hover__2168-2105-BVGLdfp8.svg`})),z,ji=e((()=>{z=`/assets/Property-1-Default__2030-355-D0szYp2P.svg`})),Mi,Ni=e((()=>{Mi=`/assets/Property-1-hover__2030-357-DLnbJ_V6.svg`})),Pi,Fi=e((()=>{Pi=`/assets/Property-1-choosen__2062-2557-DiS2dtGp.svg`})),Ii,Li=e((()=>{Ii=`/assets/Property-1-default__2030-107-DK1B08sg.svg`})),Ri,zi=e((()=>{Ri=`/assets/Property-1-DA-projects__2285-4173-uo3aViPq.svg`})),Bi,Vi=e((()=>{Bi=`/assets/Property-1-IT-logos__2285-4060-BEx4OZPI.svg`})),Hi,Ui=e((()=>{Hi=`/assets/Property-1-foods__2285-4059-CBrDf4GJ.svg`})),Wi,Gi=e((()=>{Wi=`/assets/Property-1-gameing__2285-4061-DEeRcnfB.svg`})),Ki,qi=e((()=>{Ki=`/assets/Property-1-default__2168-2042-Dh9_TtIA.svg`})),Ji,Yi=e((()=>{Ji=`/assets/Property-1-hover__2168-2041-CzpG5LBJ.svg`})),Xi,Zi=e((()=>{Xi=`/assets/Property-1-default__2200-2311-CNjZAMLw.svg`})),Qi,$i=e((()=>{Qi=`/assets/Property-1-hover__2200-2310-B1Ez8tOz.svg`})),ea,ta=e((()=>{ea=`/assets/Property-1-Default__2310-5687-CkVRB0aO.svg`})),na,ra=e((()=>{na=`/assets/Property-1-hover__2310-5686-HHj7cEIa.svg`})),ia,aa=e((()=>{ia=`/assets/Property-1-Default__2247-7687-HQc1G1sZ.svg`})),oa,sa=e((()=>{oa=`/assets/Property-1-border__21730-4238-DB0IOuEX.svg`})),ca,la=e((()=>{ca=`/assets/Property-1-hover__2247-7686-DyWFRbVm.svg`})),ua,da=e((()=>{ua=`/assets/Property-1-default__2197-5351-B9TgVFdB.svg`})),fa,pa=e((()=>{fa=`/assets/Property-1-hover__2197-5350-BU_opStI.svg`})),ma,ha=e((()=>{ma=`/assets/Property-1-Default__2106-1790-DQFAHPqu.svg`})),ga,_a=e((()=>{ga=`/assets/Property-1-hover__2106-1789-ANgaLAyQ.svg`})),va,ya=e((()=>{va=`/assets/Property-1-Default__2106-1772-BlW5n947.svg`})),ba,xa=e((()=>{ba=`/assets/Property-1-hover__2106-1771-77rpSqKU.svg`})),Sa,Ca=e((()=>{Sa=`/assets/Property-1-Default__2247-7683-C_f7XSXi.svg`})),wa,Ta=e((()=>{wa=`/assets/Property-1-border__21730-4232-DDu6nHhp.svg`})),Ea,Da=e((()=>{Ea=`/assets/Property-1-hover__2247-7684-BqsD7zMS.svg`})),Oa,ka=e((()=>{Oa=`/assets/Property-1-default__2062-2747-CMC5CVVM.svg`})),Aa,ja=e((()=>{Aa=`/assets/Property-1-final-settings__2062-2746-HzWU577N.svg`})),Ma,Na=e((()=>{Ma=`/assets/Property-1-Component-2__2226-3664-BKIXXajG.svg`})),Pa,Fa=e((()=>{Pa=`/assets/Property-1-Component-3__2226-3665-ClobSw4i.svg`})),Ia,La=e((()=>{Ia=`/assets/Property-1-Component-2__2226-3675-9cvTsZ4l.svg`})),Ra,za=e((()=>{Ra=`/assets/Property-1-Component-3__2226-3680-B6dzEYS1.svg`})),Ba,Va=e((()=>{Ba=`/assets/Property-1-Component-2__2226-3686-goNAHoPB.svg`})),Ha,Ua=e((()=>{Ha=`/assets/Property-1-Component-3__2226-3691-BbIwUJza.svg`})),Wa,Ga=e((()=>{Wa=`/assets/Property-1-Component-2__2226-3697-CUohQFNv.svg`})),Ka,qa=e((()=>{Ka=`/assets/Property-1-Component-3__2226-3702-B7GRj6C_.svg`})),Ja,Ya=e((()=>{Ja=`/assets/Property-1-Component-2__2226-3708-C_IprcrX.svg`})),Xa,Za=e((()=>{Xa=`/assets/Property-1-Component-3__2226-3713-C1AqCj1a.svg`})),Qa,$a=e((()=>{Qa=`/assets/Property-1-Component-2__2226-3719-dgTiZ3u2.svg`})),eo,to=e((()=>{eo=`/assets/Property-1-Component-3__2226-3724-C0t50dXN.svg`})),no,ro=e((()=>{no=`/assets/Property-1-Component-2__2226-3730-b71ysPUA.svg`})),io,ao=e((()=>{io=`/assets/Property-1-Component-3__2226-3735-CA7PCBFL.svg`})),oo,so=e((()=>{oo=`/assets/Property-1-Component-2__2226-3752--mseDqEd.svg`})),co,lo=e((()=>{co=`/assets/Property-1-Component-3__2226-3757-DEiruuv1.svg`})),uo,fo=e((()=>{uo=`/assets/Property-1-Component-2__2226-3818-CtMI8l4C.svg`})),po,mo=e((()=>{po=`/assets/Property-1-Component-3__2226-3823-C1_Ny6-2.svg`})),ho,go=e((()=>{ho=`/assets/Property-1-Component-2__2226-3796-uoAXr1Yh.svg`})),_o,vo=e((()=>{_o=`/assets/Property-1-Component-3__2226-3801-H5n2JEuq.svg`})),yo,bo=e((()=>{yo=`/assets/Property-1-Component-2__2226-3807-1OuA7Sai.svg`})),xo,So=e((()=>{xo=`/assets/Property-1-Component-3__2226-3812-B1uB6OVP.svg`})),Co,wo=e((()=>{Co=`/assets/Property-1-Component-2__2226-3829-DULJJP4T.svg`})),To,Eo=e((()=>{To=`/assets/Property-1-Component-3__2226-3834-B5BGEEVT.svg`})),Do,Oo=e((()=>{Do=`/assets/Property-1-Component-2__2226-3774-Dwd3hB7g.svg`})),ko,Ao=e((()=>{ko=`/assets/Property-1-Component-3__2226-3779-D6-nITbd.svg`})),jo,Mo=e((()=>{jo=`/assets/Property-1-Component-2__2226-3741-81LLHVxq.svg`})),No,Po=e((()=>{No=`/assets/Property-1-Component-3__2226-3746-DE9c9992.svg`})),Fo,Io=e((()=>{Fo=`/assets/Property-1-Component-2__2226-3763-mY8RAf2n.svg`})),Lo,Ro=e((()=>{Lo=`/assets/Property-1-Component-3__2226-3768-DEWZRFiu.svg`})),zo,Bo=e((()=>{zo=`/assets/Property-1-Component-2__2226-3785-CXGTAwAP.svg`})),Vo,Ho=e((()=>{Vo=`/assets/Property-1-Component-3__2226-3790-D9OQdG2U.svg`})),Uo,Wo=e((()=>{Uo=`/assets/Property-1-Component-2__2226-3840-Civ1-YFv.svg`})),Go,Ko=e((()=>{Go=`/assets/Property-1-Component-3__2226-3845-M0R_Hoq8.svg`})),qo,Jo=e((()=>{qo=`/assets/Property-1-Component-2__2226-3851-D0ifdT41.svg`})),Yo,Xo=e((()=>{Yo=`/assets/Property-1-Component-3__2226-3856-CgKpLnfw.svg`})),Zo,Qo=e((()=>{Zo=`/assets/Property-1-DA-projects__2285-4359-yZpsGuLM.svg`})),$o,es=e((()=>{$o=`/assets/Property-1-code-vibes__2285-4257-DEg4916a.svg`})),ts,ns=e((()=>{ts=`/assets/Property-1-foods__2285-4530-CfK8Uwyc.svg`})),rs,is=e((()=>{rs=`/assets/Property-1-gaming__2285-4259-B_zbamv5.svg`})),as,os=e((()=>{as=`/assets/Property-1-Default__2030-390-CqpFGvwq.svg`})),ss,cs=e((()=>{ss=`/assets/Property-1-hover__2030-399-qy-T9MA0.svg`})),ls,us=e((()=>{ls=`/assets/Property-1-default__2034-415-z46_HVbD.svg`})),ds,fs=e((()=>{ds=`/assets/Property-1-disabled__2034-429-CDa0kaIH.svg`})),ps,ms=e((()=>{ps=`/assets/Property-1-hover__2034-414-COgFksb3.svg`}));function hs(e,t){let n=`Property-1-Component-${t}_`,r=e.find(e=>e.includes(n));return r?B[r]:null}function gs(e,t){let n=hs(e,bs[t]),r=hs(e,xs[t]);return!n||!r?null:{backImage:n,frontImage:r}}function _s(e,t){let n=e===`food`?String(t).padStart(2,`0`):String(t),r=`${ys[e]}${n}/`;return Object.keys(B).filter(e=>e.includes(r))}function vs(e){return Array.from({length:18},(e,t)=>t+1).flatMap(t=>{let n=gs(_s(e,t),e);return n?[n]:[]})}var B,ys,bs,xs,Ss=e((()=>{Le(),Re(),ze(),Be(),Ve(),He(),Ue(),We(),Ge(),Ke(),qe(),Je(),Ye(),Xe(),Ze(),Qe(),$e(),et(),tt(),rt(),at(),st(),lt(),dt(),pt(),ht(),_t(),yt(),xt(),Ct(),Tt(),Dt(),kt(),jt(),Nt(),Ft(),Lt(),zt(),Vt(),Ut(),Gt(),qt(),Yt(),Zt(),$t(),tn(),rn(),on(),cn(),un(),fn(),mn(),gn(),vn(),bn(),Sn(),wn(),En(),On(),An(),Mn(),Pn(),In(),Rn(),Bn(),Hn(),Wn(),Kn(),Jn(),Xn(),Qn(),er(),nr(),ir(),or(),cr(),ur(),fr(),mr(),gr(),vr(),br(),Sr(),wr(),Er(),Or(),Ar(),Mr(),Pr(),Ir(),Rr(),Br(),Hr(),Wr(),Kr(),Jr(),Xr(),Qr(),ei(),ni(),ii(),oi(),ci(),ui(),fi(),mi(),gi(),vi(),bi(),Si(),wi(),Ei(),Oi(),Ai(),ji(),Ni(),Fi(),Li(),zi(),Vi(),Ui(),Gi(),qi(),Yi(),Zi(),$i(),ta(),ra(),aa(),sa(),la(),da(),pa(),ha(),_a(),ya(),xa(),Ca(),Ta(),Da(),ka(),ja(),Na(),Fa(),La(),za(),Va(),Ua(),Ga(),qa(),Ya(),Za(),$a(),to(),ro(),ao(),so(),lo(),fo(),mo(),go(),vo(),bo(),So(),wo(),Eo(),Oo(),Ao(),Mo(),Po(),Io(),Ro(),Bo(),Ho(),Wo(),Ko(),Jo(),Xo(),Qo(),es(),ns(),is(),os(),cs(),us(),fs(),ms(),B=Object.assign({"../assets/Varianten/Code-vibes-card-1/Property-1-Component-21__2078-1193.svg":b,"../assets/Varianten/Code-vibes-card-1/Property-1-Component-22__2078-1194.svg":x,"../assets/Varianten/Code-vibes-card-10/Property-1-Component-21__2117-1584.svg":S,"../assets/Varianten/Code-vibes-card-10/Property-1-Component-22__2117-1572.svg":C,"../assets/Varianten/Code-vibes-card-11/Property-1-Component-21__2117-1608.svg":w,"../assets/Varianten/Code-vibes-card-11/Property-1-Component-22__2117-1599.svg":T,"../assets/Varianten/Code-vibes-card-12/Property-1-Component-21__2117-1630.svg":E,"../assets/Varianten/Code-vibes-card-12/Property-1-Component-22__2117-1622.svg":D,"../assets/Varianten/Code-vibes-card-13/Property-1-Component-21__2161-2956.svg":O,"../assets/Varianten/Code-vibes-card-13/Property-1-Component-22__2161-2930.svg":k,"../assets/Varianten/Code-vibes-card-14/Property-1-Component-21__2161-3007.svg":A,"../assets/Varianten/Code-vibes-card-14/Property-1-Component-22__2161-2993.svg":j,"../assets/Varianten/Code-vibes-card-15/Property-1-Component-21__2161-3036.svg":M,"../assets/Varianten/Code-vibes-card-15/Property-1-Component-22__2161-3022.svg":N,"../assets/Varianten/Code-vibes-card-16/Property-1-Component-21__2161-3065.svg":P,"../assets/Varianten/Code-vibes-card-16/Property-1-Component-22__2161-3051.svg":F,"../assets/Varianten/Code-vibes-card-17/Property-1-Component-21__2161-3735.svg":I,"../assets/Varianten/Code-vibes-card-17/Property-1-Component-22__2161-3726.svg":L,"../assets/Varianten/Code-vibes-card-18/Property-1-Component-21__2161-3753.svg":R,"../assets/Varianten/Code-vibes-card-18/Property-1-Component-22__2161-3745.svg":nt,"../assets/Varianten/Code-vibes-card-2/Property-1-Component-21__2078-2210.svg":it,"../assets/Varianten/Code-vibes-card-2/Property-1-Component-22__2078-2202.svg":ot,"../assets/Varianten/Code-vibes-card-3/Property-1-Component-21__2078-2227.svg":ct,"../assets/Varianten/Code-vibes-card-3/Property-1-Component-22__2078-2219.svg":ut,"../assets/Varianten/Code-vibes-card-4/Property-1-Component-21__2078-2244.svg":ft,"../assets/Varianten/Code-vibes-card-4/Property-1-Component-22__2078-2236.svg":mt,"../assets/Varianten/Code-vibes-card-5/Property-1-Component-21__2078-2261.svg":gt,"../assets/Varianten/Code-vibes-card-5/Property-1-Component-22__2078-2253.svg":vt,"../assets/Varianten/Code-vibes-card-6/Property-1-Component-21__2078-2278.svg":bt,"../assets/Varianten/Code-vibes-card-6/Property-1-Component-22__2078-2270.svg":St,"../assets/Varianten/Code-vibes-card-7/Property-1-Component-21__2078-2295.svg":wt,"../assets/Varianten/Code-vibes-card-7/Property-1-Component-22__2078-2287.svg":Et,"../assets/Varianten/Code-vibes-card-8/Property-1-Component-21__2078-2312.svg":Ot,"../assets/Varianten/Code-vibes-card-8/Property-1-Component-22__2078-2304.svg":At,"../assets/Varianten/Code-vibes-card-9/Property-1-Component-21__2117-1554.svg":Mt,"../assets/Varianten/Code-vibes-card-9/Property-1-Component-22__2117-1544.svg":Pt,"../assets/Varianten/Components/Match-card__2310-5742.svg":It,"../assets/Varianten/Components/Match-card__2317-5743.svg":Rt,"../assets/Varianten/Components/Match-card__2317-5744.svg":Bt,"../assets/Varianten/Components/match-status-01__2310-5741.svg":Ht,"../assets/Varianten/DA-Projects-card-01/Property-1-Component-1__2197-2305.svg":Wt,"../assets/Varianten/DA-Projects-card-01/Property-1-Component-2__2197-2306.svg":Kt,"../assets/Varianten/DA-Projects-card-10/Property-1-Component-1__2197-3309.svg":Jt,"../assets/Varianten/DA-Projects-card-10/Property-1-Component-2__2197-3356.svg":Xt,"../assets/Varianten/DA-Projects-card-11/Property-1-Component-1__2197-3404.svg":Qt,"../assets/Varianten/DA-Projects-card-11/Property-1-Component-2__2197-3451.svg":en,"../assets/Varianten/DA-Projects-card-12/Property-1-Component-1__2197-3499.svg":nn,"../assets/Varianten/DA-Projects-card-12/Property-1-Component-2__2197-3546.svg":an,"../assets/Varianten/DA-Projects-card-13/Property-1-Component-1__2197-3594.svg":sn,"../assets/Varianten/DA-Projects-card-13/Property-1-Component-2__2197-3641.svg":ln,"../assets/Varianten/DA-Projects-card-14/Property-1-Component-1__2197-3689.svg":dn,"../assets/Varianten/DA-Projects-card-14/Property-1-Component-2__2197-3736.svg":pn,"../assets/Varianten/DA-Projects-card-15/Property-1-Component-1__2197-3784.svg":hn,"../assets/Varianten/DA-Projects-card-15/Property-1-Component-2__2197-3831.svg":_n,"../assets/Varianten/DA-Projects-card-16/Property-1-Component-1__2197-3879.svg":yn,"../assets/Varianten/DA-Projects-card-16/Property-1-Component-2__2197-3926.svg":xn,"../assets/Varianten/DA-Projects-card-17/Property-1-Component-1__2197-4812.svg":Cn,"../assets/Varianten/DA-Projects-card-17/Property-1-Component-2__2197-4838.svg":Tn,"../assets/Varianten/DA-Projects-card-18/Property-1-Component-1__2197-4865.svg":Dn,"../assets/Varianten/DA-Projects-card-18/Property-1-Component-2__2197-4891.svg":kn,"../assets/Varianten/DA-Projects-card-2/Property-1-Component-1__2197-2549.svg":jn,"../assets/Varianten/DA-Projects-card-2/Property-1-Component-2__2197-2596.svg":Nn,"../assets/Varianten/DA-Projects-card-3/Property-1-Component-1__2197-2644.svg":Fn,"../assets/Varianten/DA-Projects-card-3/Property-1-Component-2__2197-2691.svg":Ln,"../assets/Varianten/DA-Projects-card-4/Property-1-Component-1__2197-2739.svg":zn,"../assets/Varianten/DA-Projects-card-4/Property-1-Component-2__2197-2786.svg":Vn,"../assets/Varianten/DA-Projects-card-5/Property-1-Component-1__2197-2834.svg":Un,"../assets/Varianten/DA-Projects-card-5/Property-1-Component-2__2197-2881.svg":Gn,"../assets/Varianten/DA-Projects-card-6/Property-1-Component-1__2197-2929.svg":qn,"../assets/Varianten/DA-Projects-card-6/Property-1-Component-2__2197-2976.svg":Yn,"../assets/Varianten/DA-Projects-card-7/Property-1-Component-1__2197-3024.svg":Zn,"../assets/Varianten/DA-Projects-card-7/Property-1-Component-2__2197-3071.svg":$n,"../assets/Varianten/DA-Projects-card-8/Property-1-Component-1__2197-3119.svg":tr,"../assets/Varianten/DA-Projects-card-8/Property-1-Component-2__2197-3166.svg":rr,"../assets/Varianten/DA-Projects-card-9/Property-1-Component-1__2197-3214.svg":ar,"../assets/Varianten/DA-Projects-card-9/Property-1-Component-2__2197-3261.svg":sr,"../assets/Varianten/Game-card-1/Property-1-Component-1__2078-3738.svg":lr,"../assets/Varianten/Game-card-1/Property-1-Component-2__2078-3739.svg":dr,"../assets/Varianten/Game-card-10/Property-1-Component-1__2078-4282.svg":pr,"../assets/Varianten/Game-card-10/Property-1-Component-2__2078-4288.svg":hr,"../assets/Varianten/Game-card-11/Property-1-Component-1__2106-1706.svg":_r,"../assets/Varianten/Game-card-11/Property-1-Component-2__2106-1712.svg":yr,"../assets/Varianten/Game-card-12/Property-1-Component-1__2106-1721.svg":xr,"../assets/Varianten/Game-card-12/Property-1-Component-2__2106-1727.svg":Cr,"../assets/Varianten/Game-card-13/Property-1-Component-1__2106-1738.svg":Tr,"../assets/Varianten/Game-card-13/Property-1-Component-2__2106-1744.svg":Dr,"../assets/Varianten/Game-card-14/Property-1-Component-1__2161-3920.svg":kr,"../assets/Varianten/Game-card-14/Property-1-Component-2__2161-3926.svg":jr,"../assets/Varianten/Game-card-15/Property-1-Component-1__2161-3933.svg":Nr,"../assets/Varianten/Game-card-15/Property-1-Component-2__2161-3939.svg":Fr,"../assets/Varianten/Game-card-16/Property-1-Component-1__2161-3946.svg":Lr,"../assets/Varianten/Game-card-16/Property-1-Component-2__2161-3952.svg":zr,"../assets/Varianten/Game-card-17/Property-1-Component-1__2161-3959.svg":Vr,"../assets/Varianten/Game-card-17/Property-1-Component-2__2161-3965.svg":Ur,"../assets/Varianten/Game-card-18/Property-1-Component-1__2168-1931.svg":Gr,"../assets/Varianten/Game-card-18/Property-1-Component-2__2168-1937.svg":qr,"../assets/Varianten/Game-card-2/Property-1-Component-1__2078-4164.svg":Yr,"../assets/Varianten/Game-card-2/Property-1-Component-2__2078-4170.svg":Zr,"../assets/Varianten/Game-card-3/Property-1-Component-1__2078-4177.svg":$r,"../assets/Varianten/Game-card-3/Property-1-Component-2__2078-4183.svg":ti,"../assets/Varianten/Game-card-4/Property-1-Component-1__2078-4190.svg":ri,"../assets/Varianten/Game-card-4/Property-1-Component-2__2078-4196.svg":ai,"../assets/Varianten/Game-card-5/Property-1-Component-1__2078-4203.svg":si,"../assets/Varianten/Game-card-5/Property-1-Component-2__2078-4209.svg":li,"../assets/Varianten/Game-card-6/Property-1-Component-1__2078-4229.svg":di,"../assets/Varianten/Game-card-6/Property-1-Component-2__2078-4235.svg":pi,"../assets/Varianten/Game-card-7/Property-1-Component-1__2078-4216.svg":hi,"../assets/Varianten/Game-card-7/Property-1-Component-2__2078-4222.svg":_i,"../assets/Varianten/Game-card-8/Property-1-Component-1__2078-4242.svg":yi,"../assets/Varianten/Game-card-8/Property-1-Component-2__2078-4248.svg":xi,"../assets/Varianten/Game-card-9/Property-1-Component-1__2078-4269.svg":Ci,"../assets/Varianten/Game-card-9/Property-1-Component-2__2078-4275.svg":Ti,"../assets/Varianten/Pop-up-button/Property-1-Default__2168-2104.svg":Di,"../assets/Varianten/Pop-up-button/Property-1-Hover__2168-2105.svg":ki,"../assets/Varianten/Primary-button/Property-1-Default__2030-355.svg":z,"../assets/Varianten/Primary-button/Property-1-hover__2030-357.svg":Mi,"../assets/Varianten/Radial-buttons/Property-1-choosen__2062-2557.svg":Pi,"../assets/Varianten/Radial-buttons/Property-1-default__2030-107.svg":Ii,"../assets/Varianten/Theme-Visual/Property-1-DA-projects__2285-4173.svg":Ri,"../assets/Varianten/Theme-Visual/Property-1-IT-logos__2285-4060.svg":Bi,"../assets/Varianten/Theme-Visual/Property-1-foods__2285-4059.svg":Hi,"../assets/Varianten/Theme-Visual/Property-1-gameing__2285-4061.svg":Wi,"../assets/Varianten/button-Pop-up/Property-1-default__2168-2042.svg":Ki,"../assets/Varianten/button-Pop-up/Property-1-hover__2168-2041.svg":Ji,"../assets/Varianten/button-Pop-up-01/Property-1-default__2200-2311.svg":Xi,"../assets/Varianten/button-Pop-up-01/Property-1-hover__2200-2310.svg":Qi,"../assets/Varianten/button-Pop-up-02/Property-1-Default__2310-5687.svg":ea,"../assets/Varianten/button-Pop-up-02/Property-1-hover__2310-5686.svg":na,"../assets/Varianten/button-Pop-up_04/Property-1-Default__2247-7687.svg":ia,"../assets/Varianten/button-Pop-up_04/Property-1-border__21730-4238.svg":oa,"../assets/Varianten/button-Pop-up_04/Property-1-hover__2247-7686.svg":ca,"../assets/Varianten/button-exit/Property-1-default__2197-5351.svg":ua,"../assets/Varianten/button-exit/Property-1-hover__2197-5350.svg":fa,"../assets/Varianten/button-exit-Code-vibes-theme/Property-1-Default__2106-1790.svg":ma,"../assets/Varianten/button-exit-Code-vibes-theme/Property-1-hover__2106-1789.svg":ga,"../assets/Varianten/button-exit-game-theme/Property-1-Default__2106-1772.svg":va,"../assets/Varianten/button-exit-game-theme/Property-1-hover__2106-1771.svg":ba,"../assets/Varianten/button-exit_04/Property-1-Default__2247-7683.svg":Sa,"../assets/Varianten/button-exit_04/Property-1-border__21730-4232.svg":wa,"../assets/Varianten/button-exit_04/Property-1-hover__2247-7684.svg":Ea,"../assets/Varianten/chooen-settings-button/Property-1-default__2062-2747.svg":Oa,"../assets/Varianten/chooen-settings-button/Property-1-final-settings__2062-2746.svg":Aa,"../assets/Varianten/food-card-01/Property-1-Component-2__2226-3664.svg":Ma,"../assets/Varianten/food-card-01/Property-1-Component-3__2226-3665.svg":Pa,"../assets/Varianten/food-card-02/Property-1-Component-2__2226-3675.svg":Ia,"../assets/Varianten/food-card-02/Property-1-Component-3__2226-3680.svg":Ra,"../assets/Varianten/food-card-03/Property-1-Component-2__2226-3686.svg":Ba,"../assets/Varianten/food-card-03/Property-1-Component-3__2226-3691.svg":Ha,"../assets/Varianten/food-card-04/Property-1-Component-2__2226-3697.svg":Wa,"../assets/Varianten/food-card-04/Property-1-Component-3__2226-3702.svg":Ka,"../assets/Varianten/food-card-05/Property-1-Component-2__2226-3708.svg":Ja,"../assets/Varianten/food-card-05/Property-1-Component-3__2226-3713.svg":Xa,"../assets/Varianten/food-card-06/Property-1-Component-2__2226-3719.svg":Qa,"../assets/Varianten/food-card-06/Property-1-Component-3__2226-3724.svg":eo,"../assets/Varianten/food-card-07/Property-1-Component-2__2226-3730.svg":no,"../assets/Varianten/food-card-07/Property-1-Component-3__2226-3735.svg":io,"../assets/Varianten/food-card-08/Property-1-Component-2__2226-3752.svg":oo,"../assets/Varianten/food-card-08/Property-1-Component-3__2226-3757.svg":co,"../assets/Varianten/food-card-09/Property-1-Component-2__2226-3818.svg":uo,"../assets/Varianten/food-card-09/Property-1-Component-3__2226-3823.svg":po,"../assets/Varianten/food-card-10/Property-1-Component-2__2226-3796.svg":ho,"../assets/Varianten/food-card-10/Property-1-Component-3__2226-3801.svg":_o,"../assets/Varianten/food-card-11/Property-1-Component-2__2226-3807.svg":yo,"../assets/Varianten/food-card-11/Property-1-Component-3__2226-3812.svg":xo,"../assets/Varianten/food-card-12/Property-1-Component-2__2226-3829.svg":Co,"../assets/Varianten/food-card-12/Property-1-Component-3__2226-3834.svg":To,"../assets/Varianten/food-card-13/Property-1-Component-2__2226-3774.svg":Do,"../assets/Varianten/food-card-13/Property-1-Component-3__2226-3779.svg":ko,"../assets/Varianten/food-card-14/Property-1-Component-2__2226-3741.svg":jo,"../assets/Varianten/food-card-14/Property-1-Component-3__2226-3746.svg":No,"../assets/Varianten/food-card-15/Property-1-Component-2__2226-3763.svg":Fo,"../assets/Varianten/food-card-15/Property-1-Component-3__2226-3768.svg":Lo,"../assets/Varianten/food-card-16/Property-1-Component-2__2226-3785.svg":zo,"../assets/Varianten/food-card-16/Property-1-Component-3__2226-3790.svg":Vo,"../assets/Varianten/food-card-17/Property-1-Component-2__2226-3840.svg":Uo,"../assets/Varianten/food-card-17/Property-1-Component-3__2226-3845.svg":Go,"../assets/Varianten/food-card-18/Property-1-Component-2__2226-3851.svg":qo,"../assets/Varianten/food-card-18/Property-1-Component-3__2226-3856.svg":Yo,"../assets/Varianten/game-theme-component/Property-1-DA-projects__2285-4359.svg":Zo,"../assets/Varianten/game-theme-component/Property-1-code-vibes__2285-4257.svg":$o,"../assets/Varianten/game-theme-component/Property-1-foods__2285-4530.svg":ts,"../assets/Varianten/game-theme-component/Property-1-gaming__2285-4259.svg":rs,"../assets/Varianten/secondary-button/Property-1-Default__2030-390.svg":as,"../assets/Varianten/secondary-button/Property-1-hover__2030-399.svg":ss,"../assets/Varianten/small-button/Property-1-default__2034-415.svg":ls,"../assets/Varianten/small-button/Property-1-disabled__2034-429.svg":ds,"../assets/Varianten/small-button/Property-1-hover__2034-414.svg":ps}),ys={"code-vibes":`Code-vibes-card-`,"da-projects":`DA-Projects-card-`,food:`food-card-`,gaming:`Game-card-`},bs={"code-vibes":21,"da-projects":1,food:2,gaming:1},xs={"code-vibes":22,"da-projects":2,food:3,gaming:2}}));function Cs(e,t){return[{id:t*2,pairId:t,...e},{id:t*2+1,pairId:t,...e}]}function ws(e,t){return e.slice(0,t).flatMap((e,t)=>Cs(e,t))}function Ts(e){let t=[...e];for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}var Es=e((()=>{}));function Ds(e){return Os[e]}var Os,ks=e((()=>{Os={"4x4":8,"4x6":12,"6x6":18}}));function As(e){e.classList.add(`is-flipped`),e.setAttribute(`aria-pressed`,`true`),W.push(e)}function js(e){e.classList.remove(`is-flipped`),e.setAttribute(`aria-pressed`,`false`)}function V(e,t){let n=Number(e.dataset.cardId);return t.find(e=>e.id===n)}function Ms(e,t,n){let r=V(e,n),i=V(t,n);return!!(r&&i&&r.pairId===i.pairId)}function Ns(e,t){e.classList.add(`is-matched`),t.classList.add(`is-matched`),e.disabled=!0,t.disabled=!0,W=[]}function Ps(){W.forEach(js),W=[],G=!1,K=null}function Fs(e){let[t,n]=W;Ns(t,n),e.onMatch()}function Is(e){G=!0,e.onMiss(),K=window.setTimeout(Ps,Ws)}function Ls(e,t){let[n,r]=W;Ms(n,r,e)?Fs(t):Is(t)}function Rs(e){return!G&&!e.disabled&&!e.classList.contains(`is-flipped`)&&W.length<2}function zs(e){J&&Rs(e)&&(As(e),Us(e),W.length===2&&Ls(q,J))}function Bs(e){J?.canSelectCard?.()!==!1&&zs(e)}function H(){let e=document.querySelectorAll(`.game__card`);return Array.from(e).filter(Rs)}function Vs(e){zs(e)}function Hs(e,t){U(),q=e,J=t,document.querySelectorAll(`.game__card`).forEach(e=>{e.addEventListener(`click`,()=>Bs(e))})}function U(){K!==null&&window.clearTimeout(K),K=null,W=[],G=!1,q=[],J=null}function Us(e){let t=V(e,q);t&&J?.onReveal?.(t.id,t.pairId)}var Ws,W,G,K,q,J,Gs=e((()=>{Ws=1e3,W=[],G=!1,K=null,q=[],J=null}));function Ks(e,t){Y.some(t=>t.cardId===e)||Y.push({cardId:e,pairId:t})}function qs(e){let t=Y.filter(t=>e.includes(t.cardId));for(let e of t){let n=t.find(t=>t.cardId!==e.cardId&&t.pairId===e.pairId);if(n)return[e.cardId,n.cardId]}return null}function Js(){if(Y.length===0)return;let e=Math.floor(Math.random()*Y.length);Y.splice(e,1)}function Ys(){Y=[]}function Xs(e){return Y.find(t=>t.cardId===e)}var Y,Zs=e((()=>{Y=[]}));function Qs(e){if(e.length!==0)return e[Math.floor(Math.random()*e.length)]}function $s(e){return H().find(t=>Number(t.dataset.cardId)===e)}function ec(){let e=qs(H().map(e=>Number(e.dataset.cardId)));return e?$s(e[0]):void 0}function tc(){if(cc()){let e=ec();if(e)return e}return Qs(H())}function nc(e){let t=Xs(e);if(t)return H().find(e=>Xs(Number(e.dataset.cardId))?.pairId===t.pairId)}function rc(e){if(cc()){let t=nc(e);if(t)return t}return Qs(H())}function ic(e){Q=null;let t=rc(e);t&&Vs(t)}function ac(){Q=null;let e=tc();if(!e)return;Vs(e);let t=Number(e.dataset.cardId);Q=window.setTimeout(()=>ic(t),uc)}function oc(e){$=e}function X(e=!1){Z(),sc();let t=e?dc:lc;Q=window.setTimeout(ac,t)}function Z(){Q!==null&&window.clearTimeout(Q),Q=null}function sc(){$===`medium`&&Math.random()<.5&&Js()}function cc(){return $===`hard`||$===`medium`&&Math.random()<.5}var lc,uc,dc,Q,$,fc=e((()=>{Gs(),Zs(),lc=1400,uc=700,dc=1200,Q=null,$=`easy`}));t((()=>{n(),i(),te(),le(),oe(),we(),De(),ke(),Ie(),Ss(),Es(),ks(),Gs(),_e(),fc(),Zs();var e=document.getElementById(`main-container`),t=1800,a=Pe(),o=null,s=null,c=null;function l(){s!==null&&window.clearTimeout(s),c!==null&&window.clearTimeout(c),s=null,c=null}function u(){e&&(e.innerHTML=r(),document.getElementById(`start-button`)?.addEventListener(`click`,d))}function d(){e&&(e.innerHTML=ee(),ne(),re(),Oe())}function ne(){document.getElementById(`back-button`)?.addEventListener(`click`,u)}function re(){document.getElementById(`play-button`)?.addEventListener(`click`,ve)}function ie(){return Ts(ws(vs(a.theme),Ds(a.boardSize)))}function f(e){let t=Ds(a.boardSize);Ys(),o=de(t,e)}function se(e){let t=document.querySelector(`.coin-toss`),n=document.querySelector(`.coin-toss__message`);t?.classList.add(`is-finished`),t?.setAttribute(`data-winner`,String(e)),n&&(n.innerHTML=Ee(e,a.gameMode)),s=null}function p(n){e&&(l(),e.innerHTML=Te(),s=window.setTimeout(()=>se(n),t),c=window.setTimeout(_,3e3))}function ve(){a=Ne(),oc(a.botDifficulty);let e=ue();f(e),p(e)}function ye(){if(!o)return;let e=ge(o)===null,t=fe(o);Z(),f(t),e?p(t):_()}function m(){if(!o)return;let e=document.querySelector(`.scoreboard`);e&&(e.outerHTML=ae(o,a.playerColor,a.gameMode))}function be(){e&&o&&(Z(),U(),e.innerHTML=Ce(o,a.playerColor,a.gameMode),xe(),Se())}function xe(){document.getElementById(`home-button`)?.addEventListener(`click`,v)}function Se(){document.getElementById(`rematch-button`)?.addEventListener(`click`,ye)}function h(){o&&(pe(o),m(),he(o)?be():y()&&X(!0))}function g(){o&&(me(o),m(),y()&&X())}function Ae(e){Hs(e,{onMatch:h,onMiss:g,onReveal:Ks,canSelectCard:()=>!y()})}function _(){if(!e||!o)return;let t=ie();e.innerHTML=ce(t,a,o),Ae(t),je(),y()&&X()}function v(){Z(),l(),U(),o=null,u()}function je(){let e=document.querySelector(`#exit-button`),t=document.querySelector(`#exit-dialog`),n=document.querySelector(`#cancel-exit-button`),r=document.querySelector(`#confirm-exit-button`);if(!e||!t||!n||!r){console.error(`Exit dialog elements are missing.`);return}let i=!1;e.addEventListener(`click`,()=>{Z(),t.showModal()}),n.addEventListener(`click`,()=>{t.close()}),t.addEventListener(`close`,()=>{!i&&y()&&X()}),r.addEventListener(`click`,()=>{i=!0,t.close(),v()})}function Me(){u()}function y(){return a.gameMode===`player-vs-bot`&&o?.currentPlayer===2}Me()}))();