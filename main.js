// Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html, stampare dinamicamente una card per ogni membro del team.
// BONUS:
// Utilizzare gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team: cliccando sul pulsante "add" viene creato un nuovo oggetto, il quale viene inserito nell'array iniziale e viene stampata una nuova card con tutte le informazioni inserite dall'utente.

function createCard(member) {
    teamContainer.innerHTML += `
    <div class="team-card">
        <div class="card-image">
        <img
            src="img/${member.image}"
            alt="Wayne Barnett"/>
    </div>
    <div class="card-text">
        <h3>${member.firstName}</h3>
        <p>${member.role}</p>
    </div>
  </div>`
}

const addBtn = document.getElementById("addMemberButton").addEventListener("click", function () {

    let image = document.getElementById("image").value;
    let firstName = document.getElementById("name").value;
    let role = document.getElementById("role").value;


    if (image === "" || firstName === "" || role === "") {
        alert("Attenzione, uno o più campi non sono compliati");
    } else {

        member = {
            image: image,
            firstName: firstName,
            role: role
        }
        membersTeam.push(member);
        createCard(member);
        document.getElementById("image").value = "";
        document.getElementById("name").value = "";
        document.getElementById("role").value = "";
    }

})
const teamContainer = document.querySelector(".team-container");
const membersTeam = [
    {
        image: "wayne-barnett-founder-ceo.jpg",
        firstName: "Wayne Barnett",
        role: "Founder & CEO"
    },
    {
        image: "angela-caroll-chief-editor.jpg",
        firstName: "Angela Caroll",
        role: "Chief Editor"
    },
    {
        image: "walter-gordon-office-manager.jpg",
        firstName: "Walter Gordon",
        role: "Office Manager"
    },
    {
        image: "angela-lopez-social-media-manager.jpg",
        firstName: "Angela Lopez",
        role: "Social Media Manager"
    },
    {
        image: "scott-estrada-developer.jpg",
        firstName: "Scott Estrada",
        role: "Developer"
    },
    {
        image: "barbara-ramos-graphic-designer.jpg",
        firstName: "Barbara Ramos",
        role: "Graphic Designer"
    }
]



for (let i = 0; i < membersTeam.length; i++) {

    createCard(membersTeam[i]);

}