var TITLE = "[Sion] Math Competition";var QUIZ_KEY = "quiz_sionmathcomp_10_2026-09-11_v1";var ATT_KEY = "quiz_sionmathcomp_10_att_2026-09-11_v1";var REPORT_ENDPOINT = 'https://script.google.com/macros/s/AKfycbzRYITi7Q4ttOMcqHPBQ_mfc1m-Oyk_ne-7OKeRGbR_WFEUAe9oCKiC9E7f3ymZWR6i/exec';var RAW_QUESTIONS = [{"stem": "In which row of Pascal's triangle do three consecutive entries occur that are in the ratio 3:4:5?", "opts": ["60", "58", "64", "62"], "ci": 3, "exp": "Setting up equations from the ratio condition C(n,k):C(n,k+1):C(n,k+2)=3:4:5 and solving yields n=62.", "tag": "Chapter 2", "tagcolor": "#1D9E75"}, {"stem": "What is the remainder when x<sup>44</sup> + x<sup>33</sup> + x<sup>22</sup> + x<sup>11</sup> + 1 is divided by x<sup>4</sup> + x<sup>3</sup> + x<sup>2</sup> + x + 1? (PMO)", "opts": ["5", "0", "1", "x + 1"], "ci": 1, "exp": "Let &omega; be a root of x<sup>4</sup>+x<sup>3</sup>+x<sup>2</sup>+x+1=0, so &omega;<sup>5</sup>=1. Then &omega;<sup>11</sup>=&omega;, &omega;<sup>22</sup>=&omega;<sup>2</sup>, &omega;<sup>33</sup>=&omega;<sup>3</sup>, and &omega;<sup>44</sup>=&omega;<sup>4</sup>, so the expression becomes &omega;<sup>4</sup>+&omega;<sup>3</sup>+&omega;<sup>2</sup>+&omega;+1=0 at every root. Since this holds at all four distinct roots of the degree-4 divisor, the remainder is 0.", "tag": "Chapter 4", "tagcolor": "#7b61ff"}, {"stem": "You have 8 cubes of size 1 through 8. A tower is to be built using all 8 cubes according to the following rules: a) Any cube may be the bottom cube in the tower. b) The cube immediately on top of a cube with size k must have size at most k + 2. How many different towers can be constructed?", "opts": ["1512", "972", "1440", "1458"], "ci": 3, "exp": "Build the tower one cube at a time by size, tracking how many \"slots\" are available for the next cube. Placing the smallest cubes first, each new cube can go on top of the current tower or be inserted so that a bigger cube ends up directly on top of it as long as the size gap of at most 2 is respected. Careful casework (or a recursive count building up from cube 1 to cube 8) on the number of valid insertion points at each stage gives a running product that totals 1458 distinct towers.", "tag": "Chapter 5", "tagcolor": "#E24B4A"}, {"stem": "Find the sum of the roots of the equation x<sup>2001</sup> + (<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>&minus;x)<sup>2001</sup> = 0, given that there are no multiple roots. (AIME)", "opts": ["1000", "500", "<span class=\"frac\"><span class=\"num\">1001</span><span class=\"den\">2</span></span>", "<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>"], "ci": 1, "exp": "If r is a root, so is <span style=\"display:inline-flex;flex-direction:column;text-align:center;vertical-align:middle;line-height:1.05;margin:0 2px;\"><span>1</span><span style=\"border-top:1.4px solid #111;\">2</span></span>&minus;r, and they pair to sum to <span style=\"display:inline-flex;flex-direction:column;text-align:center;vertical-align:middle;line-height:1.05;margin:0 2px;\"><span>1</span><span style=\"border-top:1.4px solid #111;\">2</span></span>. The equation reduces to a 2000th degree polynomial with 2000 roots, 1000 pairs each summing to <span style=\"display:inline-flex;flex-direction:column;text-align:center;vertical-align:middle;line-height:1.05;margin:0 2px;\"><span>1</span><span style=\"border-top:1.4px solid #111;\">2</span></span>, giving total sum = 1000&times;(<span style=\"display:inline-flex;flex-direction:column;text-align:center;vertical-align:middle;line-height:1.05;margin:0 2px;\"><span>1</span><span style=\"border-top:1.4px solid #111;\">2</span></span>) = 500.", "tag": "Chapter 2", "tagcolor": "#1D9E75"}, {"stem": "Fifteen chairs are evenly placed around a circular table on which are name cards for fifteen guests, also evenly spaced. The guests fail to notice these cards until after they have sat down, and it turns out that no one is sitting in front of his own card. Is it possible for the table to be rotated so that at least two of the guests are simultaneously sitting in front of their own cards?", "opts": ["impossible", "possible"], "ci": 1, "exp": "Consider the 15 possible rotations (by 1, 2, &hellip;, 15 positions). For each guest, exactly one rotation places them in front of their card. Summing over all 15 guests gives 15 guest-rotation pairs across 14 nontrivial rotations, so by Pigeonhole some rotation works for at least two guests simultaneously.", "tag": "Chapter 1", "tagcolor": "#185FA5"}, {"stem": "Pete bought a notebook containing 96 pages, and numbered them from 1 through 192. Victor tore out 25 pages of Pete&rsquo;s notebook, and added the 50 numbers he found on the pages. Could Victor get 1990 as the sum? (Russia)", "opts": ["yes", "no"], "ci": 1, "exp": "Each physical page has two sides numbered n and n+1 (consecutive integers) summing to 2n+1 (odd). The sum of 25 such pairs is the sum of 25 odd numbers, which is odd. Since 1990 is even, Victor could not get 1990.", "tag": "Chapter 1", "tagcolor": "#185FA5"}, {"stem": "Ben's clock reads 5:37. When is the next time the angle between the hour hand and the minute hand will be the same as it is now?", "opts": ["6:49", "6:10", "6:01", "6:23"], "ci": 3, "exp": "The answer is 6:23.", "tag": "Chapter 3", "tagcolor": "#f5a623"}, {"stem": "Rooster, Raven, and Cuckoo took part in a singing contest. Each judge voted for one of the three participants. Woodpecker counted 59 judges, with 15 judges voting for Rooster or Raven, 18 voting for Raven or Cuckoo, and 20 voting for Cuckoo or Rooster. Woodpecker counted poorly. However, each of the four numbers he counted above differed from reality by no more than 13. How many judges voted for Raven? (Moscow)", "opts": ["11 judges", "9 judges", "13 judges", "15 judges"], "ci": 2, "exp": "The answer is 13 judges.", "tag": "Chapter 3", "tagcolor": "#f5a623"}, {"stem": "For nonzero constants c and d, the equation<br><br>4x<sup>3</sup> &minus; 12x<sup>2</sup> + cx + d = 0<br><br>has two real roots which add to 0. Find <span class=\"frac\"><span class=\"num\">d</span><span class=\"den\">c</span></span>. (MA&Theta;)", "opts": ["-3", "-12", "3", "12"], "ci": 0, "exp": "Let the roots be p, &minus;p, and q. Their sum is q, which must equal <span style=\"display:inline-flex;flex-direction:column;text-align:center;vertical-align:middle;line-height:1.05;margin:0 2px;\"><span>12</span><span style=\"border-top:1.4px solid #111;\">4</span></span>=3. The sum of pairwise products is (p)(&minus;p)+pq+(&minus;p)q=&minus;p<sup>2</sup>, so c/4=&minus;p<sup>2</sup>, meaning c=&minus;4p<sup>2</sup>. The product of the roots is (p)(&minus;p)(q)=&minus;3p<sup>2</sup>, so &minus;d/4=&minus;3p<sup>2</sup>, meaning d=12p<sup>2</sup>. So d/c=12p<sup>2</sup>/(&minus;4p<sup>2</sup>)=&minus;3.", "tag": "Chapter 4", "tagcolor": "#7b61ff"}, {"stem": "A computer system considers a string of decimal digits a valid codeword if it contains an even number of 0s. Find a closed form for a<sub>n</sub>, the number of valid n-digit codewords.", "opts": ["<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>(9<sup>n</sup> + 10<sup>n</sup>)", "<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>(8<sup>n</sup> + 10<sup>n</sup>)", "8<sup>n</sup> + 10<sup>n</sup>", "<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>(10<sup>n</sup> &minus; 8<sup>n</sup>)"], "ci": 1, "exp": "Let a<sub>n</sub> count n-digit strings (digits 0&ndash;9) with an even number of 0s, and let b<sub>n</sub> count those with an odd number of 0s, so a<sub>n</sub>+b<sub>n</sub>=10<sup>n</sup>. Each string either starts with a nonzero digit (9 choices, keeping the parity of 0s the same as an (n&minus;1)-digit string) or a 0 (flipping the parity). This gives a<sub>n</sub>&minus;b<sub>n</sub> = 8<sup>n</sup> (this can be seen by tracking the difference d<sub>n</sub>=a<sub>n</sub>&minus;b<sub>n</sub>, which satisfies d<sub>n</sub>=8&middot;d<sub>n&minus;1</sub> since 8 of the 10 digit choices preserve the sign of the difference and the other 2 choices for digit 0 cancel, starting from d<sub>0</sub>=1, so d<sub>n</sub>=8<sup>n</sup>). Solving a<sub>n</sub>+b<sub>n</sub>=10<sup>n</sup> and a<sub>n</sub>&minus;b<sub>n</sub>=8<sup>n</sup> together gives a<sub>n</sub> = (<span style=\"display:inline-flex;flex-direction:column;text-align:center;vertical-align:middle;line-height:1.05;margin:0 2px;\"><span>1</span><span style=\"border-top:1.4px solid #111;\">2</span></span>)(8<sup>n</sup>+10<sup>n</sup>).", "tag": "Chapter 5", "tagcolor": "#E24B4A"}];var N = RAW_QUESTIONS.length;var ORDER_KEY = QUIZ_KEY + '_order_v1';
function shuffleArr(arr){
  var a = arr.slice();
  for(var i=a.length-1;i>0;i--){
    var j = Math.floor(Math.random()*(i+1));
    var t=a[i]; a[i]=a[j]; a[j]=t;
  }
  return a;
}
function identityOrder(){var o=[];for(var i=0;i<N;i++)o.push(i);return o;}
function isValidOrder(arr){
  if(!Array.isArray(arr) || arr.length===0) return false;
  for(var i=0;i<arr.length;i++){ if(typeof arr[i] !== 'number' || arr[i]<0 || arr[i]>=N) return false; }
  return true;
}
function loadOrder(){
  try{
    var raw = localStorage.getItem(ORDER_KEY);
    if(!raw) return null;
    var arr = JSON.parse(raw);
    if(!isValidOrder(arr)) throw new Error('bad');
    return arr;
  }catch(e){ try{localStorage.removeItem(ORDER_KEY);}catch(e2){} return null; }
}
function saveOrder(o){ try{ localStorage.setItem(ORDER_KEY, JSON.stringify(o)); }catch(e){} }

var order = loadOrder() || identityOrder();
if(!loadOrder()) saveOrder(order);
var pendingFreshMode = 'original';

function defaultState(){
  return { cur:0, answers:{}, showResults:false, timerTotalSec:null, timerStartedAt:null };
}
function loadState(){
  try{
    var raw = localStorage.getItem(QUIZ_KEY);
    if(!raw) return defaultState();
    var s = JSON.parse(raw);
    if(typeof s.cur !== 'number' || s.cur<0 || s.cur>=order.length) s.cur = 0;
    if(typeof s.answers !== 'object' || s.answers===null) s.answers = {};
    if(typeof s.showResults !== 'boolean') s.showResults = false;
    if(typeof s.timerTotalSec === 'undefined') s.timerTotalSec = null;
    if(typeof s.timerStartedAt === 'undefined') s.timerStartedAt = null;
    return s;
  }catch(e){ try{localStorage.removeItem(QUIZ_KEY);}catch(e2){} return defaultState(); }
}
function saveState(){ try{ localStorage.setItem(QUIZ_KEY, JSON.stringify(state)); }catch(e){} }

var state = loadState();
var timerInterval = null;

function getAttempts(){ try{ return parseInt(localStorage.getItem(ATT_KEY)||'0',10); }catch(e){ return 0; } }
function incAttempts(){ try{ localStorage.setItem(ATT_KEY, String(getAttempts()+1)); }catch(e){} }
function updateAttDisplay(){
  var el = document.getElementById('att-display');
  if(el) el.textContent = 'Total Attempts: ' + getAttempts();
}

function formatTime(sec){
  sec = Math.max(0, Math.round(sec));
  var m = Math.floor(sec/60), s = sec%60;
  return String(m).padStart(2,'0')+':'+String(s).padStart(2,'0');
}
function renderTimer(){
  var setupEl = document.getElementById('timerSetup');
  var runningEl = document.getElementById('timerRunning');
  var dispEl = document.getElementById('timerDisplay');
  if(!setupEl||!runningEl||!dispEl) return;
  if(!state.timerStartedAt){ setupEl.style.display='flex'; runningEl.style.display='none'; return; }
  setupEl.style.display='none'; runningEl.style.display='flex';
  var elapsed = (Date.now()-state.timerStartedAt)/1000;
  var remaining = state.timerTotalSec - elapsed;
  dispEl.classList.remove('warn','danger');
  if(remaining<=0){ dispEl.textContent="Time's Up"; dispEl.classList.add('danger'); stopTimerInterval(); return; }
  dispEl.textContent = formatTime(remaining);
  if(remaining <= state.timerTotalSec*0.1) dispEl.classList.add('danger');
  else if(remaining <= state.timerTotalSec*0.25) dispEl.classList.add('warn');
}
function startTimer(){
  var input = document.getElementById('timerMinutesInput');
  var minutes = parseFloat(input.value);
  if(!minutes || minutes<=0) minutes=20;
  state.timerTotalSec = Math.round(minutes*60);
  state.timerStartedAt = Date.now();
  saveState(); renderTimer(); startTimerInterval();
}
function startTimerInterval(){ stopTimerInterval(); timerInterval=setInterval(renderTimer,1000); }
function stopTimerInterval(){ if(timerInterval){clearInterval(timerInterval); timerInterval=null;} }
function resetTimer(){
  state.timerTotalSec = null; state.timerStartedAt = null;
  stopTimerInterval(); saveState(); renderTimer();
}

function render(){
  updateAttDisplay();
  var qa = document.getElementById('quiz-area');
  var rs = document.getElementById('results-screen');
  if(state.showResults){
    qa.style.display='none';
    rs.classList.add('show');
    renderResults();
    return;
  }
  qa.style.display='block';
  rs.classList.remove('show');

  var qi = order[state.cur];
  var q = RAW_QUESTIONS[qi];
  document.getElementById('q-num').textContent = 'Q' + (state.cur+1) + ' / ' + order.length;

  var badge = document.getElementById('tag-badge');
  if(q.tag){
    badge.style.display='inline-block';
    badge.textContent = q.tag;
    badge.style.background = q.tagcolor || '#185FA5';
  } else { badge.style.display='none'; }

  var pbox = document.getElementById('passage-box');
  if(q.passage){ pbox.style.display='block'; pbox.innerHTML = q.passage; } else { pbox.style.display='none'; }
  var cbox = document.getElementById('context-box');
  if(q.context){ cbox.style.display='block'; cbox.innerHTML = q.context; } else { cbox.style.display='none'; }

  document.getElementById('q-text').innerHTML = q.stem;

  var answered = state.answers[qi];
  var optDiv = document.getElementById('options');
  optDiv.innerHTML='';
  q.opts.forEach(function(optText, idx){
    var btn = document.createElement('button');
    btn.className='opt-btn';
    btn.innerHTML = optText;
    btn.disabled = answered !== undefined;
    if(answered !== undefined){
      if(idx === q.ci) btn.classList.add(answered===idx ? 'correct' : 'revealed');
      else if(answered === idx) btn.classList.add('wrong');
    }
    btn.onclick = function(){ chooseAnswer(idx); };
    optDiv.appendChild(btn);
  });

  var expDiv = document.getElementById('exp-box');
  if(answered !== undefined && answered !== q.ci){
    expDiv.style.display='block';
    expDiv.innerHTML = q.exp;
  } else {
    expDiv.style.display='none';
  }

  var nextBtn = document.getElementById('next-btn');
  nextBtn.textContent = (state.cur >= order.length-1) ? 'Show Results →' : 'Next →';

  updateNav();

}

function updateNav(){
  var answered=0;
  for(var k=0;k<order.length;k++){ if(state.answers[order[k]]!==undefined) answered++; }
  document.getElementById('nav-count').textContent = answered + ' / ' + order.length;
  document.getElementById('prog-fill').style.width = (answered/order.length*100).toFixed(1)+'%';
  renderDots();
}
function renderDots(){
  var panel = document.getElementById('dot-panel');
  if(panel.style.display==='none') return;
  var html='';
  for(var pos=0; pos<order.length; pos++){
    var qi = order[pos];
    var bg = state.answers[qi]===undefined ? '#d7dde6' : (state.answers[qi]===RAW_QUESTIONS[qi].ci ? '#185FA5' : '#E24B4A');
    html += '<button class="dot" style="background:'+bg+';" onclick="goToQ('+pos+')">'+(pos+1)+'</button>';
  }
  var answered=0;
  for(var k=0;k<order.length;k++){ if(state.answers[order[k]]!==undefined) answered++; }
  if(answered===order.length){
    html += '<br><button class="results-pill" onclick="showResultsNow()">Results</button>';
  }
  panel.innerHTML = html;
}
function toggleJump(){
  var panel = document.getElementById('dot-panel');
  var btn = document.getElementById('jump-btn');
  if(panel.style.display==='none' || panel.style.display===''){
    panel.style.display='block'; btn.innerHTML='Hide &#9652;'; renderDots();
  } else {
    panel.style.display='none'; btn.innerHTML='Jump &#9662;';
  }
}
function goToQ(pos){
  state.cur = pos; state.showResults=false; saveState(); render();
}
function showResultsNow(){
  state.showResults = true; incAttempts(); saveState(); render(); reportResult();
}
function chooseAnswer(idx){
  var qi = order[state.cur];
  if(state.answers[qi] !== undefined) return;
  state.answers[qi] = idx;
  saveState(); render();
}
function goPrev(){
  if(state.cur>0){ state.cur--; saveState(); render(); }
}
function goNext(){
  if(state.cur < order.length-1){ state.cur++; saveState(); render(); }
  else { state.showResults=true; incAttempts(); saveState(); render(); reportResult(); }
}
function reportResult(){
  try{
    var correct=0, wrong=0, skipped=0;
    for(var pos=0; pos<order.length; pos++){
      var qi = order[pos];
      if(state.answers[qi]===undefined){ skipped++; continue; }
      if(state.answers[qi]===RAW_QUESTIONS[qi].ci) correct++; else wrong++;
    }
    var total = order.length;
    var childName = 'Unknown';
    if(TITLE.indexOf('[Sion]')===0) childName='Sion';
    else if(TITLE.indexOf('[Grant]')===0) childName='Grant';
    else if(TITLE.indexOf('[Both]')===0) childName='Both';
    else if(TITLE.indexOf('[Review]')===0) childName='Review';
    var payload = {
      child: childName,
      quizTitle: TITLE,
      quizKey: QUIZ_KEY,
      attemptNumber: getAttempts(),
      correct: correct, wrong: wrong, skipped: skipped, total: total,
      scorePercent: total>0 ? Math.round((correct/total)*1000)/10 : 0
    };
    fetch(REPORT_ENDPOINT, {
      method: 'POST',
      mode: 'no-cors',
      headers: {'Content-Type': 'text/plain;charset=utf-8'},
      body: JSON.stringify(payload)
    }).catch(function(){});
  }catch(e){}
}
function renderResults(){
  var correct=0, wrong=0, skipped=0;
  for(var pos=0; pos<order.length; pos++){
    var qi = order[pos];
    if(state.answers[qi]===undefined){ skipped++; continue; }
    if(state.answers[qi]===RAW_QUESTIONS[qi].ci) correct++; else wrong++;
  }
  document.getElementById('results-score').textContent = correct+' correct, '+wrong+' wrong, '+skipped+' skipped - out of '+order.length;
  var grid = document.getElementById('results-grid');
  grid.innerHTML='';
  for(var pos=0; pos<order.length; pos++){
    var qi = order[pos];
    var card = document.createElement('div');
    if(state.answers[qi]===undefined){
      card.className='r-card skipped';
      card.textContent='Q'+(pos+1)+' Skip';
    } else {
      var ok = state.answers[qi]===RAW_QUESTIONS[qi].ci;
      card.className='r-card '+(ok?'correct':'wrong');
      card.textContent='Q'+(pos+1)+' '+(ok?'OK':'X');
    }
    (function(p){ card.onclick=function(){ state.showResults=false; state.cur=p; saveState(); render(); }; })(pos);
    grid.appendChild(card);
  }
}
function retryWrong(){
  var wrong=[];
  for(var pos=0; pos<order.length; pos++){
    var qi = order[pos];
    if(state.answers[qi]!==undefined && state.answers[qi]!==RAW_QUESTIONS[qi].ci){
      wrong.push(qi);
    }
  }
  if(wrong.length===0) return;
  wrong.forEach(function(qi){ delete state.answers[qi]; });
  order = wrong;
  saveOrder(order);
  state.cur=0; state.showResults=false;
  saveState(); render(); renderTimer();
}
function copyRes(){
  var lines=[TITLE+' Results'];
  for(var pos=0; pos<order.length; pos++){
    var qi = order[pos];
    var a = state.answers[qi];
    var s='Q'+(pos+1)+': ';
    if(a===undefined) s+='Skipped';
    else s += (a===RAW_QUESTIONS[qi].ci ? 'Correct' : 'Wrong');
    lines.push(s);
  }
  var text = lines.join('\n');
  try{
    if(navigator.clipboard){ navigator.clipboard.writeText(text).catch(function(){}); }
    else { var ta=document.createElement('textarea'); ta.value=text; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta); }
  }catch(e){}
}
function saveWrongAnswers(){
  var wrongItems=[];
  for(var pos=0; pos<order.length; pos++){
    var qi = order[pos];
    var a = state.answers[qi];
    if(a!==undefined && a!==RAW_QUESTIONS[qi].ci){
      var q = RAW_QUESTIONS[qi];
      wrongItems.push({ question: q.stem, yourAnswer: q.opts[a], correctAnswer: q.opts[q.ci], explanation: q.exp });
    }
  }
  var blob = new Blob([JSON.stringify({title:TITLE, wrongAnswers:wrongItems}, null, 2)], {type:'application/json'});
  var url = URL.createObjectURL(blob);
  var a2 = document.createElement('a');
  a2.href = url; a2.download = QUIZ_KEY + '_wrong.json';
  document.body.appendChild(a2); a2.click(); document.body.removeChild(a2);
  URL.revokeObjectURL(url);
}
function openFreshModal(mode){
  pendingFreshMode = mode;
  var t = document.getElementById('freshModalTitle');
  var m = document.getElementById('freshModalText');
  if(mode==='random'){
    t.textContent='Start Fresh (Random Order)?';
    m.textContent='Questions will be reshuffled into a new random order, and all progress will be cleared. This cannot be undone.';
  } else {
    t.textContent='Start Fresh (Original Order)?';
    m.textContent='Questions will return to their original order, and all progress will be cleared. This cannot be undone.';
  }
  document.getElementById('freshModal').classList.add('show');
}
function openFreshModalOriginal(){ openFreshModal('original'); }
function openFreshModalRandom(){ openFreshModal('random'); }
function closeFreshModal(){ document.getElementById('freshModal').classList.remove('show'); }
function confirmFresh(){
  order = (pendingFreshMode==='random') ? shuffleArr(identityOrder()) : identityOrder();
  saveOrder(order);
  state = defaultState();
  saveState();
  resetTimer();
  closeFreshModal();
  render();
  renderTimer();
}

window.startTimer=startTimer;
window.toggleJump=toggleJump;
window.goToQ=goToQ;
window.showResultsNow=showResultsNow;
window.chooseAnswer=chooseAnswer;
window.goPrev=goPrev;
window.goNext=goNext;
window.retryWrong=retryWrong;
window.copyRes=copyRes;
window.saveWrongAnswers=saveWrongAnswers;
window.openFreshModalOriginal=openFreshModalOriginal;
window.openFreshModalRandom=openFreshModalRandom;
window.closeFreshModal=closeFreshModal;
window.confirmFresh=confirmFresh;

render();
renderTimer();
if(state.timerStartedAt) startTimerInterval();

