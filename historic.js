import { getData } from "./firebase.js";

const dataList = document.getElementById("dataList");
const averageT = document.getElementById("averageT");
const averageH = document.getElementById("averageH");
const maxTemp = document.getElementById("maxTemp");
const minTemp = document.getElementById("minTemp");
const maxHum = document.getElementById("maxHum");
const minHum = document.getElementById("minHum");
const regNum = document.getElementById("regNum");

window.addEventListener("DOMContentLoaded", async () => {
  const data = [];
  getData((snapshot) => {
    let html = `<th>Temperatura</th>
      <th>Humedad</th>
      <th>Fecha</th>`;
    let avgT = 0;
    let avgH = 0;
    if (snapshot) {
      snapshot.forEach((doc) => data.push(doc));
      data.sort((a, b) => b.data().date - a.data().date);
      data.forEach((doc) => {
        html += `<tr>
                <td>${doc.data().temperature}</td>
                <td>${doc.data().humidity}</td>
                <td>${moment(doc.data().date.toDate()).format(
                  "MMM Do YY, h:mm:ss a"
                )}</td>
                </tr>`;
        dataList.innerHTML = html;
        avgT += Number(doc.data().temperature);
        avgH += Number(doc.data().humidity);
      });
      averageT.innerText = `Temperatura promedio: ${(
        avgT / data.length
      ).toFixed(2)}`;
      averageH.innerText = `Humedad promedio: ${(avgH / data.length).toFixed(
        2
      )}`;
      maxTemp.innerText = `Temperatura máxima: ${Math.max(
        ...data.map((doc) => doc.data().temperature)
      )}`;
      minTemp.innerText = `Temperatura mínima: ${Math.min(
        ...data.map((doc) => doc.data().temperature)
      )}`;
      maxHum.innerText = `Humedad máxima: ${Math.max(
        ...data.map((doc) => doc.data().humidity)
      )}`;
      minHum.innerText = `Humedad mínima: ${Math.min(
        ...data.map((doc) => doc.data().humidity)
      )}`;
      regNum.innerText = `Número de registros: ${data.length}`;
    }
  });
});
