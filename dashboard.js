import { getData } from "./firebase.js";

const ctx = document.getElementById("myChart");

console.log(ctx);

window.addEventListener("DOMContentLoaded", async () => {
  let data = [];
  getData((snapshot) => {
    if (snapshot) {
      snapshot.forEach((doc) => data.push(doc));
      data.sort((a, b) => b.data().date - a.data().date);
      data = data.splice(0, 10);
      const temp = data.map((doc) => doc.data().temperature);
      const hum = data.map((doc) => doc.data().humidity);
      const date = data.map((doc) => doc.data().date.toDate());
      new Chart(ctx, {
        type: "line",
        data: {
          labels: date,
          datasets: [
            {
              label: "Temperatura",
              data: temp,
              borderWidth: 1,
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
            {
              label: "Humedad",
              data: hum,
              borderWidth: 1,
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  });
});
