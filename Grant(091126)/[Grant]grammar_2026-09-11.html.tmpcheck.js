var TITLE = "[Grant] Grammar";var QUIZ_KEY = "quiz_grantgrammar_24_2026-09-11_v1";var ATT_KEY = "quiz_grantgrammar_24_att_2026-09-11_v1";var REPORT_ENDPOINT = 'https://script.google.com/macros/s/AKfycbzRYITi7Q4ttOMcqHPBQ_mfc1m-Oyk_ne-7OKeRGbR_WFEUAe9oCKiC9E7f3ymZWR6i/exec';var RAW_QUESTIONS = [{"stem": "The students who studied hard for the final exam received excellent grades from their teacher.<br><span style=\"font-weight:400;font-style:italic;color:#555;font-size:0.9em;\">What is the SUBJECT of this sentence?</span>", "opts": ["The students", "the final exam", "their teacher", "excellent grades"], "ci": 0, "exp": "", "tag": "Subject & Verb Identification", "tagcolor": "#185FA5"}, {"stem": "He drives <u>trucks</u>.", "opts": ["Object", "Complement"], "ci": 0, "exp": "\"Trucks\" receives the action of \"drives.\" It is a direct object.", "tag": "Object vs Complement", "tagcolor": "#185FA5"}, {"stem": "<div style=\"font-size:0.85em;color:#888;font-weight:700;\">Original sentence:</div><div style=\"font-weight:700;color:#185FA5;\">They had barely left the building when the fire alarm sounded.</div><div style=\"margin-top:8px;font-weight:400;font-style:italic;color:#555;font-size:0.9em;\">Which sentence correctly inverts this sentence?</div>", "opts": ["Barely they had left the building when the fire alarm sounded.", "Barely had they left the building when the fire alarm sounded.", "Barely did they leave the building when the fire alarm sounded.", "Barely had they left the building that the fire alarm sounded."], "ci": 1, "exp": "\"Barely\" triggers inversion: \"Barely + had + they + left...\". The conjunction is \"when\" (not \"that\"), and past perfect \"had\" is correct. The correct form is: Barely had they left the building when the fire alarm sounded.", "tag": "Inversion", "tagcolor": "#185FA5"}, {"stem": "He drove me crazy.<br><span style=\"font-weight:400;font-style:italic;color:#555;font-size:0.9em;\">What is the <b>object</b> in this sentence?</span>", "opts": ["me", "crazy"], "ci": 0, "exp": "\"Me\" is the object (who was affected). \"Crazy\" is the objective complement (the resulting state).", "tag": "Objective Complement", "tagcolor": "#185FA5"}, {"stem": "What is the plural of <b>cod</b>?", "opts": ["cods", "coden", "cod", "codes"], "ci": 2, "exp": "cod → cod (no change — a type of fish)", "tag": "Irregular Plurals", "tagcolor": "#185FA5"}, {"stem": "She made him a sandwich.<br><span style=\"font-weight:400;font-style:italic;color:#555;font-size:0.9em;\">What is the <b>indirect object</b> in this sentence?</span>", "opts": ["him", "a sandwich"], "ci": 0, "exp": "\"Him\" is the indirect object (who received it). \"A sandwich\" is the direct object (what was made).", "tag": "Indirect / Direct Object", "tagcolor": "#185FA5"}, {"stem": "She <u>do</u> yoga every morning.", "opts": ["does", "dos", "doies", "doeds"], "ci": 0, "exp": "do → does (irregular spelling — pronounced 'duz')", "tag": "3rd Person Singular", "tagcolor": "#185FA5"}, {"stem": "She is <u>skate</u> at the ice rink.", "opts": ["skating", "skateing", "skatting", "skated"], "ci": 0, "exp": "skate → skating (drop the silent -e, then add -ing)", "tag": "Present Progressive", "tagcolor": "#185FA5"}, {"stem": "I ________ to Japan three times.", "opts": ["went", "have been"], "ci": 1, "exp": "No specific time given - counting experience up to now, so use present perfect: have been.", "tag": "Past vs Present Perfect", "tagcolor": "#185FA5"}, {"stem": "He _____ read every book on that shelf.", "opts": ["have", "had"], "ci": 0, "exp": "\"Have\" (has) is correct. This describes an accumulated experience up to now.", "tag": "Have vs Had", "tagcolor": "#185FA5"}, {"stem": "What is the past tense of <b>drive</b>?", "opts": ["drove", "drived", "driven", "droved"], "ci": 0, "exp": "The past tense of <b>drive</b> is <b>drove</b>.", "tag": "Irregular Verbs (Past Tense)", "tagcolor": "#185FA5"}, {"stem": "Which sentence below uses the bolded -ing word as a gerund (not part of a progressive verb tense)?", "opts": ["He is <b>drawing</b> a picture of his dog.", "He is skilled at <b>drawing</b> animals.", "She was <b>drawing</b> when the bell rang.", "They will be <b>drawing</b> during art class tomorrow."], "ci": 1, "exp": "In \"He is skilled at drawing animals,\" \"drawing\" is the object of the preposition \"at\" - a noun role - which makes it a gerund. In the other three sentences, \"drawing\" follows \"is / was / will be\" and is part of the progressive verb tense.", "tag": "Gerund vs Participle", "tagcolor": "#185FA5"}, {"stem": "<div style=\"font-size:0.85em;color:#888;font-weight:700;\">ACTIVE</div><div>The engineer <b>designed</b> the machine.</div><div style=\"margin-top:8px;font-size:0.85em;color:#888;font-weight:700;\">PASSIVE</div><div>The machine ______ by the engineer.</div><div style=\"margin-top:10px;font-weight:400;font-style:italic;color:#555;font-size:0.9em;\">Choose the correct verb form to complete the passive sentence.</div>", "opts": ["was designed", "were designed", "was designing", "was design"], "ci": 0, "exp": "The new subject \"the machine\" is singular and the action is in the past, so use was + the past participle \"designed\": was designed.", "tag": "Passive Voice", "tagcolor": "#185FA5"}, {"stem": "By the time your late shift ends tonight, the mall <span style=\"text-decoration:underline;\">______</span> .", "opts": ["had closed", "has closed", "will have closed", "closes"], "ci": 2, "exp": "\"will have closed\" is future perfect — the mall will be closed before your shift ends.", "tag": "Perfect Tense", "tagcolor": "#185FA5"}, {"stem": "Which group of adjectives is in the correct order?", "opts": ["six gold paper stars", "gold six paper stars", "paper six gold stars", "six paper gold stars"], "ci": 0, "exp": "Correct order: number (six) → color (gold) → material (paper) → noun\n✔ six gold paper stars", "tag": "Adjective Order", "tagcolor": "#185FA5"}, {"stem": "The brilliant scientist carefully analyzed the complex data she had collected during her extensive fieldwork.<br><span style=\"font-weight:400;font-style:italic;color:#555;font-size:0.9em;\">Which choice lists all the NOUNS in this sentence, and only the nouns?</span>", "opts": ["scientist, data", "scientist, carefully, data", "scientist", "data"], "ci": 0, "exp": "'Scientist' and 'data' are both nouns.", "tag": "Parts of Speech", "tagcolor": "#185FA5"}, {"stem": "The cat jumped _____ the fence and landed softly on the grass in the neighbor's yard.", "opts": ["over", "across", "under", "beside"], "ci": 0, "exp": "\"Over\" means passing above and to the other side of something. The cat cleared the height of the fence. \"Across\" would mean moving horizontally from side to side.", "tag": "Prepositions", "tagcolor": "#185FA5"}, {"stem": "<div>Present: <b>hurt</b> &rsaquo; Past: <b>hurt</b> &rsaquo; Past Participle: ______</div><div style=\"margin-top:8px;font-weight:400;font-style:italic;color:#555;font-size:0.9em;\">Choose the correct past participle form.</div>", "opts": ["hurted", "hurting", "hurten", "hurt"], "ci": 3, "exp": "'hurt' is an irregular verb. Its past participle is 'hurt'. Past perfect: had hurt.", "tag": "Past Perfect", "tagcolor": "#185FA5"}, {"stem": "Which of the following is a COMPLETE sentence?", "opts": ["Whenever the weather gets cold outside.", "The kite soared high above the trees.", "Broken into a thousand tiny pieces.", "Between the two tall buildings downtown."], "ci": 1, "exp": "\"The kite soared high above the trees.\" is a complete sentence — subject: 'The kite', predicate: 'soared'. The others are fragments: a 'Whenever' clause, a participial phrase, and a prepositional phrase.", "tag": "Complete Sentences", "tagcolor": "#185FA5"}, {"stem": "flat<br><span style=\"font-weight:400;color:#555;font-size:0.9em;\">Choose the correct comparative and superlative forms.</span>", "opts": ["flatter / flattest", "flater / flatest", "more flat / most flat", "flatt / flattest"], "ci": 0, "exp": "flat → flatter / flattest (short vowel + single consonant: double the -t)", "tag": "Comparative / Superlative", "tagcolor": "#185FA5"}, {"stem": "Which sentence uses punctuation and capitalization correctly?", "opts": ["The museum, which opened in 1987 displays artifacts from ancient egypt.", "The museum, which opened in 1987, displays artifacts from Ancient Egypt.", "The museum which opened in 1987, displays artifacts from ancient Egypt.", "The museum, which opened in 1987, displays artifacts from ancient egypt."], "ci": 1, "exp": "A nonessential clause (\"which opened in 1987\") must be set off by commas on both sides. \"Ancient Egypt\" refers to a specific historical civilization and is a proper noun — both words are capitalized.", "tag": "Punctuation & Capitalization", "tagcolor": "#185FA5"}, {"stem": "Which sentence below uses the bolded -ing word as a present participle (an adjective describing a noun)?", "opts": ["A bee is <b>buzzing</b> near the window.", "The <b>buzzing</b> bee landed on the flower.", "The bees were <b>buzzing</b> around the hive.", "That constant <b>buzzing</b> gave her a headache."], "ci": 1, "exp": "In \"The buzzing bee landed on the flower,\" \"buzzing\" comes directly before the noun \"bee\" and describes what the bee is doing - this adjective use of an -ing word is a present participle. In \"A bee is buzzing near the window\" and \"The bees were buzzing around the hive,\" \"buzzing\" is the main verb paired with \"is / were,\" making it part of the progressive tense. In \"That constant buzzing gave her a headache,\" \"buzzing\" is the subject of the sentence, functioning as a noun, so it is a gerund.", "tag": "Present Participle", "tagcolor": "#185FA5"}, {"stem": "Which sentence correctly matches the verb with the subject?", "opts": ["Mathematics are required for every science fair project.", "The news about the floods were broadcast throughout the day.", "Physics are a subject that many students find challenging.", "Mathematics is required for every science fair project."], "ci": 3, "exp": "\"Mathematics\" looks plural but is always treated as singular, so \"is\" is correct. \"Mathematics are\" is wrong. \"News\" is always singular — use \"was.\" \"Physics\" is always singular — use \"is.\"", "tag": "Subject-Verb Agreement", "tagcolor": "#185FA5"}, {"stem": "Which sentence uses the possessive form CORRECTLY?", "opts": ["The engine stopped because it's battery died.", "Is this seat yours or someone else's?", "Yours coat is hanging by the door.", "I saw Davids painting at the gallery."], "ci": 1, "exp": "<strong>\"yours\"</strong> and <strong>\"someone else's\"</strong> are both correct possessive forms used appropriately.<br>• <em>it's</em> = <em>it is</em>; the possessive is <em>its</em>.<br>• <em>Yours</em> is a standalone pronoun; it cannot precede a noun. Use <em>your coat</em>.<br>• <em>Davids</em> is missing the apostrophe — should be <em>David's</em>.", "tag": "Possessives", "tagcolor": "#185FA5"}];var N = RAW_QUESTIONS.length;var ORDER_KEY = QUIZ_KEY + '_order_v1';
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

