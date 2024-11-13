// Task 1: Creating/Storing data
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
  topscorers: ["Sterling", "Aguero", "Haaland"],
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

// console.log(team1);

// db.collection("teams").add(team1);
// db.collection("teams").add(team2);
// db.collection("teams").add(team3);
// db.collection("teams").add(team4);
// db.collection("teams").add(team5);
// db.collection("teams").add(team6);
// db.collection("teams").add(team7);

// Task 2: Querying data
// Q1
db.collection("teams")
  .where("country", "==", "Spain")
  .get()
  .then((data) => {
    let mydocs = data.docs;
    if (mydocs.length == 0) {
      console.log("no team found");
      return;
    }
    mydocs.forEach((d) => {
      console.log(d.data().teamname);
    });
  });
// Q2
db.collection("teams")
  .where("city", "==", "Madrid")
  .where("country", "==", "Spain")
  .get()
  .then((data) => {
    let mydocs = data.docs;
    if (mydocs.length == 0) {
      console.log("no team found");
      return;
    }
    mydocs.forEach((d) => {
      console.log(d.data().teamname);
    });
  });

// q3

// q4
db.collection("teams")
  .where("country", "!=", "Spain")
  .get()
  .then((data) => {
    let mydocs = data.docs;
    if (mydocs.length == 0) {
      console.log("no team found");
      return;
    }
    mydocs.forEach((d) => {
      console.log(d.data().teamname);
    });
  });

// q5
db.collection("teams")
  .where("country", "not-in", ["Spain", "England"])
  .get()
  .then((data) => {
    let mydocs = data.docs;
    if (mydocs.length === 0) {
      console.log("No team found");
      return;
    }
    mydocs.forEach((d) => {
      console.log(d.data().teamname);
    });
  });

// q6
console.log("q6");
db.collection("teams")
  .where("country", "==", "Spain")
  .where("worldwidefansinmillions", ">", 700)
  .get()
  .then((data) => {
    let mydocs = data.docs;
    if (mydocs.length == 0) {
      console.log("no team found");
      return;
    }
    mydocs.forEach((d) => {
      console.log(d.data().teamname);
    });
  });

// q7
db.collection("teams")
  .where("worldwidefansinmillions", ">", 500)
  .where("worldwidefansinmillions", "<", 600)
  .get()
  .then((data) => {
    let mydocs = data.docs;
    if (mydocs.length == 0) {
      console.log("no team found");
      return;
    }
    mydocs.forEach((d) => {
      console.log(d.data().teamname);
    });
  });
// // q8
console.log("q8");
db.collection("teams")
  .where("topscorers", "array-contains", "Ronaldo")
  .get()
  .then((data) => {
    let mydocs = data.docs;
    if (mydocs.length == 0) {
      console.log("no team found");
      return;
    }
    mydocs.forEach((d) => {
      console.log(d.data().teamname);
    });
  });

// // q9
console.log("q9");
db.collection("teams")
  .where("topscorers", "array-contains-any", ["Ronaldo", "Maradona", "Messi"])
  .get()
  .then((data) => {
    let mydocs = data.docs;
    if (mydocs.length == 0) {
      console.log("no team found");
      return;
    }
    mydocs.forEach((d) => {
      console.log(d.data().teamname);
    });
  });

// Task 3: Updating data
// a1
db.collection("teams")
  .doc("jMWWk11FNLLoWDIlp6Dj")
  .update({ worldwidefansinmillions: 811, teamname: "Real Madrid FC" });

// a2
db.collection("teams")
  .doc("QDGYc1Uz947y4ljH5VOw")
  .update({ worldwidefansinmillions: 747, teamname: "FC Barcelona" });

// a3
db.collection("teams")
  .get()
  .then((mydata) => {
    let mydocs = mydata.docs;
    mydocs.forEach((d) => {
      if (d.id === "jMWWk11FNLLoWDIlp6Dj") {
        let scorers = d.data().topscorers;
        scorers.pop();
        scorers.push("Crispo");
        db.collection("teams")
          .doc("jMWWk11FNLLoWDIlp6Dj")
          .update({ topscorers: scorers });
      }
    });
  });

// a4
db.collection("teams")
  .get()
  .then((mydata) => {
    let mydocs = mydata.docs;
    mydocs.forEach((d) => {
      if (d.id === "QDGYc1Uz947y4ljH5VOw") {
        let scorers = d.data().topscorers;
        scorers.pop();
        scorers.push("Deco");
        db.collection("teams")
          .doc("QDGYc1Uz947y4ljH5VOw")
          .update({ topscorers: scorers });
      }
    });
  });

// b
let color = {
  "Real Madrid": {
    home: "White",
    away: "Black",
  },
  "FC Barcelona": {
    home: "Red",
    away: "Gold",
  },
};

db.collection("teams").doc("jMWWk11FNLLoWDIlp6Dj").update({
  color: color["Real Madrid"],
});

db.collection("teams").doc("QDGYc1Uz947y4ljH5VOw").update({
  color: color["FC Barcelona"],
});

// c
color["Real Madrid"].away = "Purple";

// d
color["FC Barcelona"].away = "Pink";

console.log(color);
