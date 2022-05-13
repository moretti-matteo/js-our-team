// Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html, stampare dinamicamente una card per ogni membro del team.
// BONUS:
// Utilizzare gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team: cliccando sul pulsante "add" viene creato un nuovo oggetto, il quale viene inserito nell'array iniziale e viene stampata una nuova card con tutte le informazioni inserite dall'utente.

const teamContainer = document.querySelector(".team-container");
const membersTeam = [
    {
        image: "img/wayne-barnett-founder-ceo.jpg",
        firstName: "Wayne Barnett",
        job: "Founder & CEO"
    },
    {
        image: "img/angela-caroll-chief-editor.jpg",
        firstName: "Angela Caroll",
        job: "Chief Editor"
    },
    {
        image: "img/walter-gordon-office-manager.jpg",
        firstName: "Walter Gordon",
        job: "Office Manager"
    },
    {
        image: "img/angela-lopez-social-media-manager.jpg",
        firstName: "Angela Lopez",
        job: "Social Media Manager"
    },
    {
        image: "img/scott-estrada-developer.jpg",
        firstName: "Scott Estrada",
        job: "Developer"
    },
    {
        image: "img/barbara-ramos-graphic-designer.jpg",
        firstName: "Barbara Ramos",
        job: "Graphic Designer"
    }
]

for (let i = 0; i < membersTeam.length; i++) {
    teamContainer.innerHTML += `
    <div class="team-card">
        <div class="card-image">
        <img
            src="${membersTeam[i].image}"
            alt="Wayne Barnett"/>
    </div>
    <div class="card-text">
        <h3>${membersTeam[i].firstName}</h3>
        <p>${membersTeam[i].job}</p>
    </div>
  </div>`
}