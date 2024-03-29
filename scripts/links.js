const baseURL = "https://github.com/Zamarr0n/wdd230";

const linksURL = "https://Zamarr0n.github.io/wdd230/data/links.json"

async function getLinks(){
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
}
getLinks();


