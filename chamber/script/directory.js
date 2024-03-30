// const div = documet.querySelect("#cards-div");
const url = "https://Zamarr0n.github.io/wdd230/chamber/data/members.json";

async function getLink(){
    const respond = await fetch(url);
    const data = await respond.json();
    console.log(data);
    displayData(data.info);
}

const displayData = (data) => {
    data.forEach(element => {
        const name = element.name;
        console.log(name)
    });
}

getLink();




