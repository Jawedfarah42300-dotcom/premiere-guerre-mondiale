// --- Sections ---
function showSection(id){
    document.querySelectorAll('.content').forEach(c=>c.style.display="none");
    document.getElementById(id).style.display="block";
    document.getElementById('subMenu').innerHTML="";
}

// --- Timeline ---
const events={
"1914": {text:"Assassinat de François-Ferdinand.", img:"https://upload.wikimedia.org/wikipedia/commons/5/5b/Assassination_of_Archduke_Franz_Ferdinand.jpg"},
"1915": {text:"Gallipoli.", img:"https://upload.wikimedia.org/wikipedia/commons/3/3e/GallipoliCampaign.jpg"},
"1916": {text:"Verdun & Somme.", img:"https://upload.wikimedia.org/wikipedia/commons/6/68/Bataille_de_Verdun.jpg"},
"1917": {text:"Entrée USA.", img:"https://upload.wikimedia.org/wikipedia/commons/9/99/US_troops_1917.jpg"},
"1918": {text:"Armistice.", img:"https://upload.wikimedia.org/wikipedia/commons/7/79/Armistice_11_Nov_1918.jpg"},
"1919": {text:"Traité de Versailles.", img:"https://upload.wikimedia.org/wikipedia/commons/3/3e/VersaillesTreaty.jpg"}
};
function showEventDetail(year){
    const d=events[year];
    document.getElementById("eventDetail").innerHTML=`<p>${d.text}</p><img src="${d.img}" class="image">`;
}

// --- Carte interactive ---
const battles={
"Verdun":{desc:"1916, bataille sanglante sur le front français.", img:"https://upload.wikimedia.org/wikipedia/commons/6/68/Bataille_de_Verdun.jpg"},
"Somme":{desc:"1916, bataille du front Ouest, pertes massives.", img:"https://upload.wikimedia.org/wikipedia/commons/f/fd/Bataille_de_la_Somme.jpg"},
"Marne":{desc:"1914, victoire des Alliés.", img:"https://upload.wikimedia.org/wikipedia/commons/1/12/Marne_Battle_1914.jpg"},
"Gallipoli":{desc:"1915, front Ottoman.", img:"https://upload.wikimedia.org/wikipedia/commons/3/3e/GallipoliCampaign.jpg"}
};
function showBattlePopup(name){
    const b=battles[name];
    document.getElementById("battlePopup").innerHTML=`<h3>${name}</h3><p>${b.desc}</p><img src="${b.img}" class="image">`;
}

// --- Quiz 30 questions futuriste ---
const quizQuestions=[
{question:"Année début guerre ?", options:["1914","1916","1918"], answer:"1914"},
{question:"Bataille longue et sanglante ?", options:["Verdun","Marne","Somme"], answer:"Verdun"},
{question:"Pays entre 1917 ?", options:["Allemagne","USA","Italie"], answer:"USA"},
{question:"Armistice ?", options:["1918","1917","1919"], answer:"1918"},
{question:"Traité fin guerre ?", options:["Versailles","Trianon","Saint-Germain"], answer:"Versailles"},
// ... compléter jusqu'à 30 questions
];

let quizIndex=0; let score=0;

function showQuiz(){
    const container=document.getElementById("quiz-container");
    const result=document.getElementById("quiz-result");
    const scoreEl=document.getElementById("quiz-score");
    if(quizIndex>=quizQuestions.length){
        container.innerHTML="<strong>Quiz terminé !</strong>";
        result.textContent=""; scoreEl.textContent=`Score final : ${score}/${quizQuestions.length}`;
        return;
    }
    const q=quizQuestions[quizIndex];
    let html=`<p>${q.question}</p>`;
    q.options.forEach(opt=>html+=`<button onclick="checkQuizAnswer('${opt}')">${opt}</button> `);
    container.innerHTML=html; result.textContent=""; scoreEl.textContent=`Question ${quizIndex+1} sur ${quizQuestions.length}`;
}

function checkQuizAnswer(selected){
    const q=quizQuestions[quizIndex];
    const result=document.getElementById("quiz-result");
    if(selected===q.answer){ result.textContent="Bonne réponse !"; result.style.color="#0f0"; score++; }
    else{ result.textContent=`Mauvaise réponse, bonne réponse : ${q.answer}`; result.style.color="#f00"; }
    quizIndex++; setTimeout(showQuiz,800);
}

// --- Révisions futuristes ---
const themes={
"causes":{"Nationalisme":"Fierté nationale","Impérialisme":"Course aux colonies","Assassinat":"François-Ferdinand"},
"batailles":{"Verdun":"1916, bataille sanglante","Somme":"1916, pertes massives","Marne":"1914, victoire alliée","Gallipoli":"1915"},
"alliances":{"Alliés":"France, UK, Russie, USA","Centraux":"Allemagne, Autriche-Hongrie, Empire Ottoman"},
"vie":{"Soldats":"Tranchées, conditions difficiles","Civils":"Rationnement","Technologies":"Gaz, mitrailleuses, avions"},
"consequences":{"Morts":"~17 millions","Traités":"Versailles et Saint-Germain","SDN":"Création pour paix"}
};

function loadSubTheme(theme){
    let html=`<h3>${theme.charAt(0).toUpperCase()+theme.slice(1)}</h3>`;
    const items=themes[theme];
    for(let key in items){ html+=`<strong>${key}:</strong> ${items[key]}<br>`; }
    document.getElementById('themeContent').innerHTML=html;
    let subMenuHtml="";
    for(let key in items){ subMenuHtml+=`<button onclick="alert('${items[key]}')">${key}</button><br>`; }
    document.getElementById('subMenu').innerHTML=subMenuHtml;
}

// --- Init ---
showSection('intro'); showQuiz();
