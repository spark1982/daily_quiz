var TITLE = "[Sion] Math Formula";var QUIZ_KEY = "quiz_sionmathformula_20_2026-09-11_v1";var ATT_KEY = "quiz_sionmathformula_20_att_2026-09-11_v1";var REPORT_ENDPOINT = 'https://script.google.com/macros/s/AKfycbzRYITi7Q4ttOMcqHPBQ_mfc1m-Oyk_ne-7OKeRGbR_WFEUAe9oCKiC9E7f3ymZWR6i/exec';var RAW_QUESTIONS = [{"stem": "Vertices of a left/right hyperbola are ____", "opts": ["(h, k ± b)", "(h ± c, k)", "(h, k ± a)", "(h ± a, k)"], "ci": 3, "exp": "The vertices of a left/right hyperbola are (h ± a, k).", "tag": "Algebra 2 Formulas", "tagcolor": "#185FA5"}, {"stem": "Law of Sines: $\\frac{a}{\\sin(A)} = \\frac{b}{\\sin(B)} = $ ?", "opts": ["$\\frac{c}{\\sin(C)}$", "$\\frac{c}{\\cos(C)}$", "$\\frac{c}{\\sin(A)}$", "$\\frac{\\sin(C)}{c}$"], "ci": 0, "exp": "The Law of Sines keeps every side over the sine of its opposite angle equal: $\\frac{a}{\\sin(A)} = \\frac{b}{\\sin(B)} = \\frac{c}{\\sin(C)}$.", "tag": "Trigonometry Formulas", "tagcolor": "#1D9E75"}, {"stem": "Law of Cosines: $c^2$ = ?", "opts": ["$a^2 - b^2 - 2ab\\cos(C)$", "$a^2 + b^2 - 2ab\\sin(C)$", "$a^2 + b^2 - 2ab\\cos(C)$", "$a^2 + b^2 + 2ab\\cos(C)$"], "ci": 2, "exp": "$c^2 = a^2 + b^2 - 2ab\\cos(C)$.", "tag": "Trigonometry Formulas", "tagcolor": "#1D9E75"}, {"stem": "Law of Cosines: $a^2$ = ?", "opts": ["$b^2 - c^2 - 2bc\\cos(A)$", "$b^2 + c^2 + 2bc\\cos(A)$", "$b^2 + c^2 - 2bc\\sin(A)$", "$b^2 + c^2 - 2bc\\cos(A)$"], "ci": 3, "exp": "$a^2 = b^2 + c^2 - 2bc\\cos(A)$.", "tag": "Trigonometry Formulas", "tagcolor": "#1D9E75"}, {"stem": "Vertices of an up/down hyperbola are ____", "opts": ["(h, k ± c)", "(h, k ± a)", "(h ± b, k)", "(h ± a, k)"], "ci": 1, "exp": "The vertices of an up/down hyperbola are (h, k ± a).", "tag": "Algebra 2 Formulas", "tagcolor": "#185FA5"}, {"stem": "$\\sin(\\frac{\\pi}{2} - \\theta)$ = ?", "opts": ["$\\cot(\\theta)$", "$\\sec(\\theta)$", "$\\sin(\\theta)$", "$\\cos(\\theta)$"], "ci": 3, "exp": "By the cofunction identity, $\\sin(\\frac{\\pi}{2} - \\theta) = \\cos(\\theta)$.", "tag": "Trigonometry Formulas", "tagcolor": "#1D9E75"}, {"stem": "In this notation, aᵢ represents the ____", "opts": ["General Formula", "Index", "Stopping Point", "Starting Point"], "ci": 0, "exp": "In sigma notation, aᵢ represents the General Formula being summed.", "tag": "Algebra 2 Formulas", "tagcolor": "#185FA5"}, {"stem": "Law of Cosines: $b^2$ = ?", "opts": ["$a^2 - c^2 - 2ac\\cos(B)$", "$a^2 + c^2 + 2ac\\cos(B)$", "$a^2 + c^2 - 2ac\\sin(B)$", "$a^2 + c^2 - 2ac\\cos(B)$"], "ci": 3, "exp": "$b^2 = a^2 + c^2 - 2ac\\cos(B)$.", "tag": "Trigonometry Formulas", "tagcolor": "#1D9E75"}, {"stem": "$\\tan(\\frac{\\pi}{2} - \\theta)$ = ?", "opts": ["$\\cot(\\theta)$", "$\\sin(\\theta)$", "$\\sec(\\theta)$", "$\\cos(\\theta)$"], "ci": 0, "exp": "By the cofunction identity, $\\tan(\\frac{\\pi}{2} - \\theta) = \\cot(\\theta)$.", "tag": "Trigonometry Formulas", "tagcolor": "#1D9E75"}, {"stem": "Asymptotes of a left/right hyperbola: y – k = ____(x – h)", "opts": ["±(a+b)", "±b/a", "±a/b", "±a·b"], "ci": 1, "exp": "The asymptotes of a left/right hyperbola are y – k = ±b/a(x – h).", "tag": "Algebra 2 Formulas", "tagcolor": "#185FA5"}, {"stem": "The transverse axis of a left/right hyperbola is ____", "opts": ["x = b", "x = h", "y = a", "y = k"], "ci": 3, "exp": "The transverse axis of a left/right hyperbola is y = k.", "tag": "Algebra 2 Formulas", "tagcolor": "#185FA5"}, {"stem": "Foci of a left/right hyperbola are ____", "opts": ["(h, k ± a)", "(h ± c, k)", "(h ± a, k)", "(h, k ± c)"], "ci": 1, "exp": "The foci of a left/right hyperbola are (h ± c, k).", "tag": "Algebra 2 Formulas", "tagcolor": "#185FA5"}, {"stem": "$\\cos(\\frac{\\pi}{2} - \\theta)$ = ?", "opts": ["$\\sec(\\theta)$", "$\\cot(\\theta)$", "$\\cos(\\theta)$", "$\\sin(\\theta)$"], "ci": 3, "exp": "By the cofunction identity, $\\cos(\\frac{\\pi}{2} - \\theta) = \\sin(\\theta)$.", "tag": "Trigonometry Formulas", "tagcolor": "#1D9E75"}, {"stem": "Equation of a left/right hyperbola: (x – h)²/a² – (y – k)²/b² = ____", "opts": ["0", "–1", "1", "b²"], "ci": 2, "exp": "The equation of a left/right hyperbola is (x – h)²/a² – (y – k)²/b² = 1.", "tag": "Algebra 2 Formulas", "tagcolor": "#185FA5"}, {"stem": "The transverse axis of an up/down hyperbola is ____", "opts": ["x = h", "y = k", "x = a", "y = b"], "ci": 0, "exp": "The transverse axis of an up/down hyperbola is x = h.", "tag": "Algebra 2 Formulas", "tagcolor": "#185FA5"}, {"stem": "$\\cot(\\frac{\\pi}{2} - \\theta)$ = ?", "opts": ["$\\cot(\\theta)$", "$\\sin(\\theta)$", "$\\cos(\\theta)$", "$\\tan(\\theta)$"], "ci": 3, "exp": "By the cofunction identity, $\\cot(\\frac{\\pi}{2} - \\theta) = \\tan(\\theta)$.", "tag": "Trigonometry Formulas", "tagcolor": "#1D9E75"}, {"stem": "$\\sec(\\frac{\\pi}{2} - \\theta)$ = ?", "opts": ["$\\sin(\\theta)$", "$\\csc(\\theta)$", "$\\cot(\\theta)$", "$\\cos(\\theta)$"], "ci": 1, "exp": "By the cofunction identity, $\\sec(\\frac{\\pi}{2} - \\theta) = \\csc(\\theta)$.", "tag": "Trigonometry Formulas", "tagcolor": "#1D9E75"}, {"stem": "Asymptotes of an up/down hyperbola: y – k = ____(x – h)", "opts": ["±b/a", "±a·b", "±(a+b)", "±a/b"], "ci": 3, "exp": "The asymptotes of an up/down hyperbola are y – k = ±a/b(x – h).", "tag": "Algebra 2 Formulas", "tagcolor": "#185FA5"}, {"stem": "In ∑(i=k to n) aᵢ, n represents the ____", "opts": ["Stopping Point", "General Formula", "Index", "Starting Point"], "ci": 0, "exp": "In sigma notation, n represents the Stopping Point of the sum.", "tag": "Algebra 2 Formulas", "tagcolor": "#185FA5"}, {"stem": "$\\csc(\\frac{\\pi}{2} - \\theta)$ = ?", "opts": ["$\\sin(\\theta)$", "$\\cot(\\theta)$", "$\\sec(\\theta)$", "$\\cos(\\theta)$"], "ci": 2, "exp": "By the cofunction identity, $\\csc(\\frac{\\pi}{2} - \\theta) = \\sec(\\theta)$.", "tag": "Trigonometry Formulas", "tagcolor": "#1D9E75"}];var N = RAW_QUESTIONS.length;var ORDER_KEY = QUIZ_KEY + '_order_v1';
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
window.postRenderHook = function(){
  if(window.renderMathInElement){
    renderMathInElement(document.getElementById('quiz-area'), {
      delimiters: [
        {left: "$$", right: "$$", display: true},
        {left: "$", right: "$", display: false}
      ],
      throwOnError: false
    });
  }
};
window.postRenderHook();
