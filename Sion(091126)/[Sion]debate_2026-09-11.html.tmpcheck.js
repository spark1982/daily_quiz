var TITLE = "[Sion] Debate";var QUIZ_KEY = "quiz_siondebate_10_2026-09-11_v1";var ATT_KEY = "quiz_siondebate_10_att_2026-09-11_v1";var REPORT_ENDPOINT = 'https://script.google.com/macros/s/AKfycbzRYITi7Q4ttOMcqHPBQ_mfc1m-Oyk_ne-7OKeRGbR_WFEUAe9oCKiC9E7f3ymZWR6i/exec';var RAW_QUESTIONS = [{"contextLabel": "Consider the following claim based on seasonal statistics:", "context": "<span style=\"font-family:Georgia,'Times New Roman',serif;font-style:italic;font-size:1rem;color:#1a1a2e;\">&ldquo;Ice cream sales and shark attacks both increase in the summer. Therefore, buying ice cream causes shark attacks.&rdquo;</span>", "stem": "What logical fallacy is being committed?", "opts": ["Hasty Generalization &mdash; drawing a broad conclusion from a small or biased sample", "False Equivalence &mdash; treating two things as equally significant when they are actually very different", "Post Hoc Ergo Propter Hoc &mdash; assuming that because one event followed another, it was caused by it", "Cum Hoc Ergo Propter Hoc &mdash; assuming that because two things happen together, one must cause the other"], "ci": 3, "exp": "Ice cream sales and shark attacks likely both rise because of a hidden third factor &mdash; warmer weather bringing more people to the beach and to ice cream stands &mdash; not because one causes the other. Assuming that things which merely occur together must be causally linked is Cum Hoc Ergo Propter Hoc.", "hint": "Consider whether a third, hidden factor could explain why both things rise together at the same time."}, {"contextLabel": "During a discussion about higher education, a parent argues:", "context": "<span style=\"font-family:Georgia,'Times New Roman',serif;font-style:italic;font-size:1rem;color:#1a1a2e;\">&ldquo;My cousin never went to college and he's a millionaire now. College is obviously pointless.&rdquo;</span>", "stem": "What logical fallacy does this argument commit?", "opts": ["Post Hoc Ergo Propter Hoc &mdash; assuming that because one event followed another, it was caused by it", "Hasty Generalization &mdash; drawing a broad conclusion from a small or biased statistical sample", "Appeal to Authority &mdash; treating an expert's endorsement as proof a claim is true", "Anecdotal Evidence &mdash; drawing a broad conclusion from a single personal story instead of broader evidence"], "ci": 3, "exp": "The claim relies entirely on one memorable personal story about a single relative, rather than on broader evidence about how college graduates and non-graduates generally fare. Generalizing from one vivid personal anecdote is the definition of Anecdotal Evidence.", "hint": "Notice that the claim rests on a single memorable story about one person, not on broader evidence."}, {"contextLabel": "During a health class discussion, a student argues:", "context": "<span style=\"font-family:Georgia,'Times New Roman',serif;font-style:italic;font-size:1rem;color:#1a1a2e;\">&ldquo;Skipping your daily workout is just like a professional athlete skipping the Olympics &mdash; both are equally damaging to your fitness goals.&rdquo;</span>", "stem": "What is the flaw in this comparison?", "opts": ["Hasty Generalization &mdash; drawing a broad conclusion from a small or biased sample", "False Equivalence &mdash; treating two things as equally significant when they are actually very different in scale", "Slippery Slope &mdash; claiming one small step inevitably leads to an extreme, unproven chain of consequences", "Middle Ground Fallacy &mdash; assuming the truth must lie exactly between two opposing positions"], "ci": 1, "exp": "Missing one casual daily workout and an elite athlete missing the Olympics are vastly different in scale and consequence, yet the argument treats them as equally significant. Equating two things that differ enormously in importance is a False Equivalence.", "hint": "Compare the actual scale and stakes of the two situations being equated &mdash; are they really comparable?"}, {"contextLabel": "A believer in astrology explains why a reading sometimes seems wrong:", "context": "<span style=\"font-family:Georgia,'Times New Roman',serif;font-style:italic;font-size:1rem;color:#1a1a2e;\">&ldquo;Astrology doesn't work for skeptics because their negative energy interferes with the reading &mdash; but for true believers, it's completely accurate.&rdquo;</span>", "stem": "What logical fallacy is being committed?", "opts": ["Appeal to Ignorance &mdash; claiming something is true because it hasn't been proven false", "Special Pleading &mdash; inventing an unjustified exception to protect a claim from a counterexample", "No True Scotsman &mdash; redefining a category after the fact to exclude an inconvenient counterexample", "Begging the Question &mdash; assuming the very conclusion you're trying to prove as a premise"], "ci": 1, "exp": "Rather than acknowledging that astrology sometimes simply fails to work, the speaker invents a special, unjustified excuse (skeptics' \"negative energy\") that exists only to shield the original claim from being disproven. Inventing an ad hoc exception like this is Special Pleading.", "hint": "Watch for a convenient excuse that seems invented only to protect a claim from a case where it appears to fail."}, {"contextLabel": "During a conversation about diet choices:", "context": "<span style=\"font-family:Georgia,'Times New Roman',serif;font-style:italic;font-size:1rem;color:#1a1a2e;\">&ldquo;No real vegetarian would ever eat fish. My friend calls herself a vegetarian, but she eats fish sometimes &mdash; so she's not a REAL vegetarian.&rdquo;</span>", "stem": "What logical fallacy does the speaker commit in the reply?", "opts": ["Straw Man Fallacy &mdash; distorting an opponent's real position into an extreme, easier target", "No True Scotsman &mdash; redefining a category after the fact to exclude any inconvenient counterexample", "Equivocation &mdash; using a key word in two different senses within the same argument", "Ad Hominem &mdash; attacking the person's character instead of their argument"], "ci": 1, "exp": "Instead of reconsidering the original claim (\"no real vegetarian eats fish\") in light of a clear counterexample, the speaker simply narrows the definition of \"real vegetarian\" on the spot to conveniently exclude the exception. Redefining a category only to dodge a counterexample is No True Scotsman.", "hint": "Notice how the definition of the group quietly changes the moment a counterexample shows up."}, {"contextLabel": "Read the following joke-like argument someone makes about a parking ticket:", "context": "<span style=\"font-family:Georgia,'Times New Roman',serif;font-style:italic;font-size:1rem;color:#1a1a2e;\">&ldquo;The sign says 'Fine for parking here.' So parking here must be fine, which means it's perfectly allowed.&rdquo;</span>", "stem": "What logical fallacy is at play in this argument?", "opts": ["Begging the Question &mdash; assuming the very conclusion you're trying to prove as a premise", "Equivocation &mdash; using a key word in two different senses within the same argument", "Complex Question &mdash; a question that bakes in an unproven assumption as if it were already fact", "False Dilemma &mdash; presenting only two extreme options when other choices exist"], "ci": 1, "exp": "The word \"fine\" is first used to mean \"a monetary penalty\" (as on the sign) and then reinterpreted to mean \"acceptable\" or \"okay,\" even though these are two unrelated meanings of the same word. Sliding between two different meanings of one term within a single argument is Equivocation.", "hint": "Look closely at whether a single word is being used with two completely different meanings."}, {"contextLabel": "In an online post, someone claims:", "context": "<span style=\"font-family:Georgia,'Times New Roman',serif;font-style:italic;font-size:1rem;color:#1a1a2e;\">&ldquo;I believe this new supplement cures headaches instantly. Prove that it doesn't, or you have to accept that it works.&rdquo;</span>", "stem": "What is the flaw in this reasoning?", "opts": ["Appeal to Ignorance &mdash; claiming something is true simply because it hasn't been proven false", "Complex Question &mdash; a question that bakes in an unproven assumption as if it were already fact", "Hasty Generalization &mdash; drawing a broad conclusion from a small or biased sample", "Burden of Proof Fallacy &mdash; shifting the responsibility to disprove a claim onto the listener instead of the person making it"], "ci": 3, "exp": "Whoever makes a claim (that the supplement cures headaches) is normally responsible for providing evidence to support it. Demanding that the listener instead disprove the claim improperly shifts that responsibility, which is the Burden of Proof Fallacy.", "hint": "Think about whose job it normally is to provide evidence for a brand-new claim."}, {"contextLabel": "In a city council debate about a new recycling program, a resident objects:", "context": "<span style=\"font-family:Georgia,'Times New Roman',serif;font-style:italic;font-size:1rem;color:#1a1a2e;\">&ldquo;You shouldn't trust that recycling policy &mdash; it was first proposed by a company that makes plastic bottles, so it must be self-serving nonsense.&rdquo;</span>", "stem": "What logical fallacy does this argument commit?", "opts": ["Ad Hominem &mdash; attacking the person's character instead of their argument", "Genetic Fallacy &mdash; judging a claim based on where it came from rather than its actual merits", "Appeal to Authority &mdash; treating an expert's endorsement as proof a claim is true", "Straw Man Fallacy &mdash; distorting an opponent's real position into an extreme, easier target"], "ci": 1, "exp": "The resident dismisses the policy purely because of where the idea originated (a bottle company), without ever addressing whether the policy itself is actually sound or effective. Rejecting a claim based on its origin rather than its content is the Genetic Fallacy.", "hint": "Ask whether the argument evaluates the policy itself, or just where the idea came from."}, {"contextLabel": "In a discussion about standardized test results, someone argues:", "context": "<span style=\"font-family:Georgia,'Times New Roman',serif;font-style:italic;font-size:1rem;color:#1a1a2e;\">&ldquo;In a truly fair society everyone would have an equal chance to succeed, so the gap in test scores between these two schools must be entirely caused by unfair funding, and nothing else.&rdquo;</span>", "stem": "What logical fallacy is being committed here?", "opts": ["Cum Hoc Ergo Propter Hoc &mdash; assuming that because two things happen together, one must cause the other", "Moralistic Fallacy &mdash; assuming that because an outcome ought to be true, it must be true in reality", "Hasty Generalization &mdash; drawing a broad conclusion from a small or biased sample", "Naturalistic Fallacy &mdash; assuming that because something is natural, it must be good"], "ci": 1, "exp": "The argument starts from a moral ideal (society ought to give everyone an equal chance) and concludes that reality must already match that ideal in a specific way (funding alone explains the score gap), without actually investigating other possible causes. Moving from how things should be to a factual conclusion about how things are is the Moralistic Fallacy.", "hint": "Notice the argument moves from what should ideally be true to a specific claim about what is actually true, skipping the evidence in between."}, {"contextLabel": "At school, a student argues:", "context": "<span style=\"font-family:Georgia,'Times New Roman',serif;font-style:italic;font-size:1rem;color:#1a1a2e;\">&ldquo;Everyone at school already has the newest phone, so obviously it's the best one you could buy.&rdquo;</span>", "stem": "What logical fallacy is being used here?", "opts": ["Bandwagon Fallacy &mdash; assuming something is true or good simply because many people believe or do it", "Appeal to Authority &mdash; treating an expert's endorsement as proof a claim is true", "Hasty Generalization &mdash; drawing a broad conclusion from a small or biased sample", "Anecdotal Evidence &mdash; drawing a broad conclusion from a single personal story"], "ci": 0, "exp": "The popularity of the phone among classmates is used as though it were proof of the phone's quality, but how many people own something doesn't actually establish that it's the best option. Treating popularity as proof is the Bandwagon Fallacy.", "hint": "Ask whether popularity by itself is actual evidence that something is the best choice."}];var N = RAW_QUESTIONS.length;var ORDER_KEY = QUIZ_KEY + '_order_v1';
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
var hintShown = false;
function toggleHint(){
  hintShown = !hintShown;
  var hintBtn = document.getElementById('hint-btn');
  var hintBox = document.getElementById('hint-box');
  if(hintShown){ hintBox.classList.add('show'); hintBtn.textContent='Hide Hint'; }
  else { hintBox.classList.remove('show'); hintBtn.textContent='Show Hint'; }
}
window.toggleHint=toggleHint;

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

  var clabel = document.getElementById('context-label');
  if(q.contextLabel){ clabel.style.display='block'; clabel.textContent = q.contextLabel; } else { clabel.style.display='none'; }
  var cbox = document.getElementById('context-box');
  if(q.context){ cbox.style.display='block'; cbox.innerHTML = q.context; } else { cbox.style.display='none'; }

  document.getElementById('q-text').innerHTML = q.stem;

  hintShown = false;
  var hintBtn = document.getElementById('hint-btn');
  var hintBox = document.getElementById('hint-box');
  if(q.hint){
    hintBtn.style.display='inline-block';
    hintBtn.textContent='Show Hint';
    hintBox.innerHTML = q.hint;
    hintBox.classList.remove('show');
  } else {
    hintBtn.style.display='none';
    hintBox.classList.remove('show');
  }

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

