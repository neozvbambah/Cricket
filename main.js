
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

  function writeData() {
    set(ref(database, "/"), 
        myData
    );
    console.log(myData);
  }
//   Documents importing for DOM manupulation:::

  let match1btn2 = document.querySelector('.match1btn2');
  let m1firstscore = document.querySelector('.m1firstscore');
  let m1firstwickets = document.querySelector('.m1firstwickets');
  let m1firstover = document.querySelector('.m1firstover');
  let m1secondscore = document.querySelector('.m1secondscore');
  let m1secondwickets = document.querySelector('.m1secondwickets');
  let m1secondover = document.querySelector('.m1secondover');
  let match1btn4 = document.querySelector('.match1btn4');
  




// reading and writing on Html::::

  onValue(ref(database,'/' ), (snapshot) => {
    const matchDataBase = snapshot.val();
    console.log(matchDataBase);
    match1btn2.innerHTML = matchDataBase.Ongoing.Team1.name;
    m1firstscore.innerHTML = matchDataBase.Ongoing.Team1.runs;
    m1firstwickets.innerHTML= matchDataBase.Ongoing.Team1.wickets;
    m1firstover.innerHTML= matchDataBase.Ongoing.Team1.over;


    match1btn4.innerHTML = matchDataBase.Ongoing.Team2.name;
    m1secondscore.innerHTML = matchDataBase.Ongoing.Team2.runs;
    m1secondwickets.innerHTML= matchDataBase.Ongoing.Team2.wickets;
    m1secondover.innerHTML= matchDataBase.Ongoing.Team2.over;


  })
 
  // Adding Comments From DATABASE:::
  let commentDiv = document.querySelector('.comment');
  onValue(ref(database,'/Ongoing/Comments' ), (snapshot) => {
    const matchDataBase = snapshot.val();
    commentDiv.innerHTML = '';
    snapshot.forEach(function(element){

      commentDiv.innerHTML += `<div>${element.val().Time+" : "+element.val().Headline}</div>`;
      console.log(element.val().Time);

    })

  })


  let openPlayer1Drawer = false;
  let PlayerNames = document.querySelector('.PlayerNames');
  match1btn2.addEventListener('click',(e)=>{
    let teamChoosed = match1btn2.innerHTML;
    if(openPlayer1Drawer==false){
    PlayerNames.innerHTML = '<div><b>Players</b></div>';
    onValue(ref(database,'/Teams/'+teamChoosed+'/Players' ), (snapshot) => {
      const matchDataBase = snapshot.val();
      snapshot.forEach(function(element){
        PlayerNames.innerHTML += `<li>${element.val().name}`;
        console.log(element.val().name);
      })
    })
    openPlayer1Drawer = true;
    openPlayer2Drawer = false;
  }
  else{
    PlayerNames.innerHTML = '';
    openPlayer1Drawer = false;
  }
})


// For 2ndTEAM:::

let openPlayer2Drawer = false;
  match1btn4.addEventListener('click',(e)=>{
    let teamChoosed = match1btn4.innerHTML;
    if(openPlayer2Drawer==false){
    PlayerNames.innerHTML = '<div><b>Players</b></div>';
    onValue(ref(database,'/Teams/'+teamChoosed+'/Players' ), (snapshot) => {
      snapshot.forEach(function(element){
        PlayerNames.innerHTML += `<li>${element.val().name}`;
        console.log(element.val().name);
      })
    })
    openPlayer2Drawer = true;
    openPlayer1Drawer = false;
  }
  else{
    PlayerNames.innerHTML = '';
    openPlayer2Drawer = false;
  }
})