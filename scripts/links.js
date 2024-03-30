const baseURL = "https://github.com/Zamarr0n/wdd230";

const linksURL = "https://Zamarr0n.github.io/wdd230/data/links.json"

async function getLinks(){
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
}

const displayLinks = (weeks) => {
    weeks.forEach(weekData => {
        const week = weekData.week;
        console.log(`Week: ${week}`);
    weekData.links.forEach(link => {
        const url = link.url;
        const title = link.title;
        console.log(` Title: ${title}`);
        console.log(`URL: ${url}`);
        });
    });
}

getLinks();


