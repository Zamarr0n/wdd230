const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const card = document.getElementById("cards");
async function getProphetData(){
    const response = await fetch(url);
    if(response.ok){
        console.log('yes');
        const data = await response.json();
        console.table(data.prophets);
        // console.table(data.prophets[0].name);
        displayProphets(data.prophets);
        
    }
}

const displayProphets = (prophets) =>{
    prophets.forEach(prophet => {
        var section = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');
        let paragraph = document.createElement('p');
        let explanation = document.createElement('p');
        explanation.textContent = `Birthday and birthplace: `;
        paragraph.textContent = `${prophet.birthdate} ${prophet.birthplace}`
        fullName.textContent = `${prophet.name} ${prophet.lastname}`; 
        portrait.setAttribute("src",prophet.imageurl);
        portrait.setAttribute('alt',`Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute("width", '340');
        portrait.setAttribute("loading", 'lazy');
        portrait.setAttribute("height", '440');
        section.appendChild(fullName);
        section.appendChild(portrait);
        section.appendChild(explanation);
        section.appendChild(paragraph)
        card.appendChild(section);
    });
}


getProphetData();





