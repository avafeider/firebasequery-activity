let team1 = {
  teamname: "Real Madrid",
  city: "Madrid",
  country: "Spain",
  topscorers: ["Ronaldo", "Benzema", "Hazard"],
  worldwidefansinmillions: 798,
};

let team2 = {
  teamname: "Barcelona",
  city: "Barcelona",
  country: "Spain",
  topscorers: ["Messi", "Suarez", "Puyol"],
  worldwidefansinmillions: 738,
};

let team3 = {
  teamname: "Manchester United",
  city: "Manchester",
  country: "England",
  topscorers: ["Contona", "Rooney", "Ronaldo"],
  worldwidefansinmillions: 755,
};

let team4 = {
  teamname: "Machester City",
  city: "Manchester",
  country: "England",
  topscorers: ["Sterling", "Aguero", "HHaaland"],
  worldwidefansinmillions: 537,
};

let team5 = {
  teamname: "Brazil National Team",
  city: "Not applicable",
  country: "Brazil",
  topscorers: ["Ronaldinho", "Cafu", "Bebeto"],
  worldwidefansinmillions: 950,
};
let team6 = {
  teamname: "Argentina National Team",
  city: "Not applicable",
  country: "Argentina",
  topscorers: ["Messi", "Batistuta", "Maradona"],
  worldwidefansinmillions: 888,
};

let team7 = {
  teamname: "Atletico Madrid",
  city: "Madrid",
  country: "Spain",
  topscorers: ["Aragones", "Griezmann", "Torez"],
  worldwidefansinmillions: 400,
};
// ADD DOCUMENTS TO DB
db.collection("teams").add(team1);

// Questions
// Q1
