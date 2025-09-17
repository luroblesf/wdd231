const urlMembers = "https://luroblesf.github.io/wdd231/chamber/data/members.json";
const cards = document.querySelector("#cards");

async function getMembersData() {
    try {
        const response = await fetch(urlMembers);
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        displayMembers(data.members);
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}
getMembersData();

const displayMembers = (members) => {

    const filtered = members.filter(member =>
        member.membership === 'Gold Membership' || member.membership === 'Silver Membership');

    const selec = filtered.sort(() => 0.5 - Math.random()).slice(0, 3);

    selec.forEach((member) => {
        const card = document.createElement("section");
        const name = document.createElement("h2");
        const address = document.createElement("p");
        const phone = document.createElement("p");
        const web = document.createElement("p");
        const membershipLevel = document.createElement("p");
        const date = document.createElement("p");
        const portrait = document.createElement("img");


        name.textContent = `${member.name}`;
        address.textContent = `${member.address}`;
        phone.textContent = `${member.phone}`;
        web.textContent = `${member.website}`
        membershipLevel.textContent = `${member.membership}`
        date.textContent = `${member.since}`

        portrait.setAttribute("src", member.imageurl);
        portrait.setAttribute("alt", member.name);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "200");
        portrait.setAttribute("height", "300");

        card.appendChild(portrait);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(web);
        card.appendChild(membershipLevel);
        card.appendChild(date);
        
        cards.appendChild(card);
    });
};