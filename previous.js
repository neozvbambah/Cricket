  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";
  import { getDatabase, ref, set, onValue} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";
  import myData from './match.json' assert {type:'json'};
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDVKli-ztKD76Vj9We3-qcdV9UO1dYhsa8",
    authDomain: "cricket-b3d26.firebaseapp.com",
    databaseURL: "https://cricket-b3d26-default-rtdb.firebaseio.com",
    projectId: "cricket-b3d26",
    storageBucket: "cricket-b3d26.appspot.com",
    messagingSenderId: "198062150863",
    appId: "1:198062150863:web:22cb7dc0e2f9c98e8e13ba",
    measurementId: "G-DDY6HKG95V",
    databaseURL: "https://cricket-b3d26-default-rtdb.firebaseio.com/",

  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const database = getDatabase(app);


  //   Documents importing for DOM manupulation:::

  let match1btn2 = document.querySelector('.match1btn2');
  let m1firstscore = document.querySelector('.m1firstscore');
  let m1firstwickets = document.querySelector('.m1firstwickets');
  let m1firstover = document.querySelector('.m1firstover');
  let m1secondscore = document.querySelector('.m1secondscore');
  let m1secondwickets = document.querySelector('.m1secondwickets');
  let m1secondover = document.querySelector('.m1secondover');
  let match1btn4 = document.querySelector('.match1btn4');


  let match2btn2 = document.querySelector('.match2btn2');
  let m2firstscore = document.querySelector('.m2firstscore');
  let m2firstwickets = document.querySelector('.m2firstwickets');
  let m2firstover = document.querySelector('.m2firstover');
  let m2secondscore = document.querySelector('.m2secondscore');
  let m2secondwickets = document.querySelector('.m2secondwickets');
  let m2secondover = document.querySelector('.m2secondover');
  let match2btn4 = document.querySelector('.match2btn4');


  let match3btn2 = document.querySelector('.match3btn2');
  let m3firstscore = document.querySelector('.m3firstscore');
  let m3firstwickets = document.querySelector('.m3firstwickets');
  let m3firstover = document.querySelector('.m3firstover');
  let m3secondscore = document.querySelector('.m3secondscore');
  let m3secondwickets = document.querySelector('.m3secondwickets');
  let m3secondover = document.querySelector('.m3secondover');
  let match3btn4 = document.querySelector('.match3btn4');


  let match4btn2 = document.querySelector('.match4btn2');
  let m4firstscore = document.querySelector('.m4firstscore');
  let m4firstwickets = document.querySelector('.m4firstwickets');
  let m4firstover = document.querySelector('.m4firstover');
  let m4secondscore = document.querySelector('.m4secondscore');
  let m4secondwickets = document.querySelector('.m4secondwickets');
  let m4secondover = document.querySelector('.m4secondover');
  let match4btn4 = document.querySelector('.match4btn4');


  let match5btn2 = document.querySelector('.match5btn2');
  let m5firstscore = document.querySelector('.m5firstscore');
  let m5firstwickets = document.querySelector('.m5firstwickets');
  let m5firstover = document.querySelector('.m5firstover');
  let m5secondscore = document.querySelector('.m5secondscore');
  let m5secondwickets = document.querySelector('.m5secondwickets');
  let m5secondover = document.querySelector('.m5secondover');
  let match5btn4 = document.querySelector('.match5btn4');


  let match6btn2 = document.querySelector('.match6btn2');
  let m6firstscore = document.querySelector('.m6firstscore');
  let m6firstwickets = document.querySelector('.m6firstwickets');
  let m6firstover = document.querySelector('.m6firstover');
  let m6secondscore = document.querySelector('.m6secondscore');
  let m6secondwickets = document.querySelector('.m6secondwickets');
  let m6secondover = document.querySelector('.m6secondover');
  let match6btn4 = document.querySelector('.match6btn4');

  let match7btn2 = document.querySelector('.match7btn2');
  let m7firstscore = document.querySelector('.m7firstscore');
  let m7firstwickets = document.querySelector('.m7firstwickets');
  let m7firstover = document.querySelector('.m7firstover');
  let m7secondscore = document.querySelector('.m7secondscore');
  let m7secondwickets = document.querySelector('.m7secondwickets');
  let m7secondover = document.querySelector('.m7secondover');
  let match7btn4 = document.querySelector('.match7btn4');


// reading and writing on Html::::

  onValue(ref(database,'/' ), (snapshot) => {
    const matchDataBase = snapshot.val();


    console.log(matchDataBase);
    match1btn2.innerHTML = matchDataBase.Saved.Match1.Team1.name;
    m1firstscore.innerHTML = matchDataBase.Saved.Match1.Team1.runs;
    m1firstwickets.innerHTML= matchDataBase.Saved.Match1.Team1.wickets;
    m1firstover.innerHTML= matchDataBase.Saved.Match1.Team1.over;

    match1btn4.innerHTML = matchDataBase.Saved.Match1.Team2.name;
    m1secondscore.innerHTML = matchDataBase.Saved.Match1.Team2.runs;
    m1secondwickets.innerHTML= matchDataBase.Saved.Match1.Team2.wickets;
    m1secondover.innerHTML= matchDataBase.Saved.Match1.Team2.over;


    match2btn2.innerHTML = matchDataBase.Saved.Match2.Team1.name;
    m2firstscore.innerHTML = matchDataBase.Saved.Match2.Team1.runs;
    m2firstwickets.innerHTML= matchDataBase.Saved.Match2.Team1.wickets;
    m2firstover.innerHTML= matchDataBase.Saved.Match2.Team1.over;

    match2btn4.innerHTML = matchDataBase.Saved.Match2.Team2.name;
    m2secondscore.innerHTML = matchDataBase.Saved.Match2.Team2.runs;
    m2secondwickets.innerHTML= matchDataBase.Saved.Match2.Team2.wickets;
    m2secondover.innerHTML= matchDataBase.Saved.Match2.Team2.over;



    match3btn2.innerHTML = matchDataBase.Saved.Match3.Team1.name;
    m3firstscore.innerHTML = matchDataBase.Saved.Match3.Team1.runs;
    m3firstwickets.innerHTML= matchDataBase.Saved.Match3.Team1.wickets;
    m3firstover.innerHTML= matchDataBase.Saved.Match3.Team1.over;

    match3btn4.innerHTML = matchDataBase.Saved.Match3.Team2.name;
    m3secondscore.innerHTML = matchDataBase.Saved.Match3.Team2.runs;
    m3secondwickets.innerHTML= matchDataBase.Saved.Match3.Team2.wickets;
    m3secondover.innerHTML= matchDataBase.Saved.Match3.Team2.over;



    match4btn2.innerHTML = matchDataBase.Saved.Match4.Team1.name;
    m4firstscore.innerHTML = matchDataBase.Saved.Match4.Team1.runs;
    m4firstwickets.innerHTML= matchDataBase.Saved.Match4.Team1.wickets;
    m4firstover.innerHTML= matchDataBase.Saved.Match4.Team1.over;

    match4btn4.innerHTML = matchDataBase.Saved.Match4.Team2.name;
    m4secondscore.innerHTML = matchDataBase.Saved.Match4.Team2.runs;
    m4secondwickets.innerHTML= matchDataBase.Saved.Match4.Team2.wickets;
    m4secondover.innerHTML= matchDataBase.Saved.Match4.Team2.over;



    match5btn2.innerHTML = matchDataBase.Saved.Match5.Team1.name;
    m5firstscore.innerHTML = matchDataBase.Saved.Match5.Team1.runs;
    m5firstwickets.innerHTML= matchDataBase.Saved.Match5.Team1.wickets;
    m5firstover.innerHTML= matchDataBase.Saved.Match5.Team1.over;

    match5btn4.innerHTML = matchDataBase.Saved.Match5.Team2.name;
    m5secondscore.innerHTML = matchDataBase.Saved.Match5.Team2.runs;
    m5secondwickets.innerHTML= matchDataBase.Saved.Match5.Team2.wickets;
    m5secondover.innerHTML= matchDataBase.Saved.Match5.Team2.over;

    

    match6btn2.innerHTML = matchDataBase.Saved.Match6.Team1.name;
    m6firstscore.innerHTML = matchDataBase.Saved.Match6.Team1.runs;
    m6firstwickets.innerHTML= matchDataBase.Saved.Match6.Team1.wickets;
    m6firstover.innerHTML= matchDataBase.Saved.Match6.Team1.over;

    match6btn4.innerHTML = matchDataBase.Saved.Match6.Team2.name;
    m6secondscore.innerHTML = matchDataBase.Saved.Match6.Team2.runs;
    m6secondwickets.innerHTML= matchDataBase.Saved.Match6.Team2.wickets;
    m6secondover.innerHTML= matchDataBase.Saved.Match6.Team2.over;


    match7btn2.innerHTML = matchDataBase.Saved.Match7.Team1.name;
    m7firstscore.innerHTML = matchDataBase.Saved.Match7.Team1.runs;
    m7firstwickets.innerHTML= matchDataBase.Saved.Match7.Team1.wickets;
    m7firstover.innerHTML= matchDataBase.Saved.Match7.Team1.over;

    match7btn4.innerHTML = matchDataBase.Saved.Match7.Team2.name;
    m7secondscore.innerHTML = matchDataBase.Saved.Match7.Team2.runs;
    m7secondwickets.innerHTML= matchDataBase.Saved.Match7.Team2.wickets;
    m7secondover.innerHTML= matchDataBase.Saved.Match7.Team2.over;


  })



  // ADDING HEADLINES :::

  let headline1Btn = document.querySelector('.headline1Btn');

  headline1Btn.addEventListener('click',(e)=>{

    let headline1span = document.querySelector('.headline1span');
  onValue(ref(database,'/Saved/Match1/Comments' ), (snapshot) => {
    const matchDataBase = snapshot.val();
    headline1span.innerHTML = '';
    snapshot.forEach(function(element){

      headline1span.innerHTML += `<div>${element.val().Time+" : "+element.val().Headline}</div>`;

    })

  })

  })

  // HeadlineBTN MATCH2:::
  let headline2Btn = document.querySelector('.headline2Btn');

  headline2Btn.addEventListener('click',(e)=>{

    let headline2span = document.querySelector('.headline2span');
  onValue(ref(database,'/Saved/Match2/Comments' ), (snapshot) => {
    const matchDataBase = snapshot.val();
    headline2span.innerHTML = '';
    snapshot.forEach(function(element){

      headline2span.innerHTML += `<div>${element.val().Time+" : "+element.val().Headline}</div>`;

    })

  })

  })

  // MATCH 3 HEADLINE BTN:::

  let headline3Btn = document.querySelector('.headline3Btn');

  headline3Btn.addEventListener('click',(e)=>{

    let headline3span = document.querySelector('.headline3span');
  onValue(ref(database,'/Saved/Match3/Comments' ), (snapshot) => {
    const matchDataBase = snapshot.val();
    headline3span.innerHTML = '';
    snapshot.forEach(function(element){

      headline3span.innerHTML += `<div>${element.val().Time+" : "+element.val().Headline}</div>`;

    })

  })

  })

  // MATCH 4 headline :::

  let headline4Btn = document.querySelector('.headline4Btn');

  headline4Btn.addEventListener('click',(e)=>{

    let headline4span = document.querySelector('.headline4span');
  onValue(ref(database,'/Saved/Match4/Comments' ), (snapshot) => {
    const matchDataBase = snapshot.val();
    headline4span.innerHTML = '';
    snapshot.forEach(function(element){

      headline4span.innerHTML += `<div>${element.val().Time+" : "+element.val().Headline}</div>`;

    })
  })
  })

  // MATCH 5 headline:::

  let headline5Btn = document.querySelector('.headline5Btn');

  headline5Btn.addEventListener('click',(e)=>{

    let headline5span = document.querySelector('.headline5span');
  onValue(ref(database,'/Saved/Match5/Comments' ), (snapshot) => {
    const matchDataBase = snapshot.val();
    headline5span.innerHTML = '';
    snapshot.forEach(function(element){

      headline5span.innerHTML += `<div>${element.val().Time+" : "+element.val().Headline}</div>`;

    })
  })
  })

  // MATCH 6 headline::::

  let headline6Btn = document.querySelector('.headline6Btn');

  headline6Btn.addEventListener('click',(e)=>{

    let headline6span = document.querySelector('.headline6span');
  onValue(ref(database,'/Saved/Match6/Comments' ), (snapshot) => {
    const matchDataBase = snapshot.val();
    headline6span.innerHTML = '';
    snapshot.forEach(function(element){

      headline6span.innerHTML += `<div>${element.val().Time+" : "+element.val().Headline}</div>`;

    })
  })
  })
  
  // MATCH 7 headline::::

  let headline7Btn = document.querySelector('.headline7Btn');

  headline7Btn.addEventListener('click',(e)=>{

    let headline7span = document.querySelector('.headline7span');
  onValue(ref(database,'/Saved/Match7/Comments' ), (snapshot) => {
    const matchDataBase = snapshot.val();
    headline7span.innerHTML = '';
    snapshot.forEach(function(element){

      headline7span.innerHTML += `<div>${element.val().Time+" : "+element.val().Headline}</div>`;

    })
  })
  })