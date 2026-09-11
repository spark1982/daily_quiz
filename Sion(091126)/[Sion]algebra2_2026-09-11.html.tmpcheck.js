var TITLE = "[Sion] Algebra 2";var QUIZ_KEY = "quiz_sionalgebra2_10_2026-09-11_v1";var ATT_KEY = "quiz_sionalgebra2_10_att_2026-09-11_v1";var REPORT_ENDPOINT = 'https://script.google.com/macros/s/AKfycbzRYITi7Q4ttOMcqHPBQ_mfc1m-Oyk_ne-7OKeRGbR_WFEUAe9oCKiC9E7f3ymZWR6i/exec';var RAW_QUESTIONS = [{"stem": "An arithmetic sequence has first term a&#8321; = 5 and common difference d = 3. Find the sum of the first 20 terms.", "opts": ["670", "700", "650", "620"], "ci": 0, "exp": "S&#8326;&#8320; = (20 &divide; 2)(2(5) + 19(3)) = 10(10 + 57) = 10(67) = 670."}, {"stem": "Which of the following is the vertex form of f(x) = x&sup2; &minus; 6x + 13?", "opts": ["f(x) = (x &minus; 6)&sup2; + 13", "f(x) = (x &minus; 3)&sup2; &minus; 4", "f(x) = (x &minus; 3)&sup2; + 4", "f(x) = (x + 3)&sup2; + 4"], "ci": 2, "exp": "Complete the square: x&sup2; &minus; 6x + 13 = (x&sup2; &minus; 6x + 9) + 4 = (x &minus; 3)&sup2; + 4."}, {"stem": "Solve for x: log&#8322;(x + 3) = 4", "opts": ["x = 19", "x = 5", "x = 8", "x = 13"], "ci": 3, "exp": "Rewrite in exponential form: x + 3 = 2&#8308; = 16. Subtract 3: x = 13."}, {"stem": "Multiply: (3 + 2i)(4 &minus; 5i)", "opts": ["22 + 7i", "2 &minus; 7i", "12 &minus; 7i", "22 &minus; 7i"], "ci": 3, "exp": "(3 + 2i)(4 &minus; 5i) = 12 &minus; 15i + 8i &minus; 10i&sup2; = 12 &minus; 7i &minus; 10(&minus;1) = 12 &minus; 7i + 10 = 22 &minus; 7i."}, {"stem": "In the right triangle below, the right angle is at the bottom-left vertex. What is sin(&theta;)?<br><svg width=\"200\" height=\"180\" viewBox=\"0 0 200 180\" style=\"display:block;margin:10px auto;\"><polygon points=\"30,150 150,150 30,100\" fill=\"none\" stroke=\"#333\" stroke-width=\"2\"/><rect x=\"30\" y=\"140\" width=\"10\" height=\"10\" fill=\"none\" stroke=\"#333\" stroke-width=\"1.5\"/><text x=\"90\" y=\"168\" font-size=\"13\" text-anchor=\"middle\" fill=\"#333\">12</text><text x=\"14\" y=\"128\" font-size=\"13\" text-anchor=\"middle\" fill=\"#333\">5</text><text x=\"98\" y=\"118\" font-size=\"13\" text-anchor=\"middle\" fill=\"#333\">13</text><text x=\"132\" y=\"140\" font-size=\"14\" text-anchor=\"middle\" fill=\"#185FA5\">&theta;</text></svg>", "opts": ["<span style=\"display:inline-flex;flex-direction:column;text-align:center;vertical-align:middle;line-height:1.05;margin:0 2px;\"><span>12</span><span style=\"border-top:1.4px solid #111;\">5</span></span>", "<span style=\"display:inline-flex;flex-direction:column;text-align:center;vertical-align:middle;line-height:1.05;margin:0 2px;\"><span>12</span><span style=\"border-top:1.4px solid #111;\">13</span></span>", "<span style=\"display:inline-flex;flex-direction:column;text-align:center;vertical-align:middle;line-height:1.05;margin:0 2px;\"><span>5</span><span style=\"border-top:1.4px solid #111;\">13</span></span>", "<span style=\"display:inline-flex;flex-direction:column;text-align:center;vertical-align:middle;line-height:1.05;margin:0 2px;\"><span>5</span><span style=\"border-top:1.4px solid #111;\">12</span></span>"], "ci": 2, "exp": "By the Pythagorean theorem, the hypotenuse is &radic;(12&sup2; + 5&sup2;) = &radic;169 = 13. The side opposite &theta; has length 5, so sin(&theta;) = <span style=\"display:inline-flex;flex-direction:column;text-align:center;vertical-align:middle;line-height:1.05;margin:0 2px;\"><span>5</span><span style=\"border-top:1.4px solid #111;\">13</span></span>."}, {"stem": "The graph of f(x) = <span style=\"display:inline-flex;flex-direction:column;text-align:center;vertical-align:middle;line-height:1.05;margin:0 2px;\"><span>1</span><span style=\"border-top:1.4px solid #111;\">x &minus; 4</span></span> is shown below, with its vertical asymptote marked. What is the domain of f(x)?<br><svg width=\"220\" height=\"190\" viewBox=\"0 0 220 190\" style=\"display:block;margin:10px auto;\"><line x1=\"20\" y1=\"90.0\" x2=\"220\" y2=\"90.0\" stroke=\"#999\" stroke-width=\"1\"/><line x1=\"53.3\" y1=\"10\" x2=\"53.3\" y2=\"170\" stroke=\"#999\" stroke-width=\"1\"/><line x1=\"120.0\" y1=\"10\" x2=\"120.0\" y2=\"170\" stroke=\"#E24B4A\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><text x=\"124.0\" y=\"20\" font-size=\"12\" fill=\"#E24B4A\">x = 4</text><polyline points=\"20.0,93.3 24.6,93.5 29.2,93.7 33.8,93.9 38.3,94.1 42.9,94.3 47.5,94.6 52.1,94.9 56.7,95.3 61.3,95.7 65.8,96.2 70.4,96.7 75.0,97.4 79.6,98.2 84.2,99.3 88.8,100.7 93.3,102.5 97.9,105.1 102.5,109.0 107.1,115.8 111.7,130.0\" fill=\"none\" stroke=\"#185FA5\" stroke-width=\"2\"/><polyline points=\"128.3,50.0 132.9,64.2 137.5,71.0 142.1,74.9 146.7,77.5 151.2,79.3 155.8,80.7 160.4,81.8 165.0,82.6 169.6,83.3 174.2,83.8 178.8,84.3 183.3,84.7 187.9,85.1 192.5,85.4 197.1,85.7 201.7,85.9 206.3,86.1 210.8,86.3 215.4,86.5 220.0,86.7\" fill=\"none\" stroke=\"#185FA5\" stroke-width=\"2\"/></svg>", "opts": ["All real numbers", "All real numbers except x = 0", "All real numbers except x = 4", "All real numbers greater than 4"], "ci": 2, "exp": "The function is undefined wherever the denominator equals zero. Since the graph shows a vertical asymptote at x = 4 (where the denominator x &minus; 4 = 0), the domain excludes only x = 4."}, {"stem": "Simplify: <span style=\"display:inline-flex;flex-direction:column;text-align:center;vertical-align:middle;line-height:1.05;margin:0 2px;\"><span>x&sup2; &minus; 9</span><span style=\"border-top:1.4px solid #111;\">x&sup2; &minus; x &minus; 12</span></span> (x &ne; &minus;3, 4)", "opts": ["<span style=\"display:inline-flex;flex-direction:column;text-align:center;vertical-align:middle;line-height:1.05;margin:0 2px;\"><span>x + 3</span><span style=\"border-top:1.4px solid #111;\">x + 4</span></span>", "<span style=\"display:inline-flex;flex-direction:column;text-align:center;vertical-align:middle;line-height:1.05;margin:0 2px;\"><span>x &minus; 3</span><span style=\"border-top:1.4px solid #111;\">x + 4</span></span>", "<span style=\"display:inline-flex;flex-direction:column;text-align:center;vertical-align:middle;line-height:1.05;margin:0 2px;\"><span>x + 3</span><span style=\"border-top:1.4px solid #111;\">x &minus; 4</span></span>", "<span style=\"display:inline-flex;flex-direction:column;text-align:center;vertical-align:middle;line-height:1.05;margin:0 2px;\"><span>x &minus; 3</span><span style=\"border-top:1.4px solid #111;\">x &minus; 4</span></span>"], "ci": 3, "exp": "Factor: numerator = (x&minus;3)(x+3), denominator = (x&minus;4)(x+3). Cancel the common factor (x+3): <span style=\"display:inline-flex;flex-direction:column;text-align:center;vertical-align:middle;line-height:1.05;margin:0 2px;\"><span>x &minus; 3</span><span style=\"border-top:1.4px solid #111;\">x &minus; 4</span></span>."}, {"stem": "Evaluate: log&#8325;(125)", "opts": ["3", "5", "25", "15"], "ci": 0, "exp": "log&#8325;(125) asks: 5 raised to what power gives 125? Since 5&sup3; = 125, log&#8325;(125) = 3."}, {"stem": "Write the equation of a parabola with vertex at the origin and focus at (0, 3).", "opts": ["x&sup2; = 6y", "x&sup2; = &minus;12y", "x&sup2; = 12y", "y&sup2; = 12x"], "ci": 2, "exp": "For a vertical parabola with vertex at the origin, the standard form is x&sup2; = 4py, where p is the distance from vertex to focus. Here p = 3, so x&sup2; = 4(3)y = 12y."}, {"stem": "If f(x) = x&sup2; + 2x and g(x) = 3x &minus; 1, find (f &compfn; g)(x).", "opts": ["9x&sup2; &minus; 1", "9x&sup2; + 1", "3x&sup2; &minus; 1", "9x&sup2; &minus; 6x + 1"], "ci": 0, "exp": "(f &compfn; g)(x) = f(g(x)) = (3x&minus;1)&sup2; + 2(3x&minus;1) = (9x&sup2; &minus; 6x + 1) + (6x &minus; 2) = 9x&sup2; &minus; 1."}];var N = RAW_QUESTIONS.length;var ORDER_KEY = QUIZ_KEY + '_order_v1';
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
  if(window.postRenderHook) window.postRenderHook();

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

