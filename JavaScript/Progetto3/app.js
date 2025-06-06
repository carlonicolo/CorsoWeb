async function getData() {
  const url = "https://jsonplaceholder.typicode.com/posts/1";
  try {
    // Effettua la richiesta GET
    const response = await fetch(url);
    // Verifica se la risposta è ok
    if (!response.ok) {
      throw new Error("Errore nella richiesta: " + response.status);
    }
    // Parsea la risposta JSON
    const data = await response.json();
    // Mostra i dati
    displayData(data);
  } catch (error) {
    // Gestione degli errori
    alert("Si è verificato un errore: " + error.message);
  }
}
// Funzione per visualizzare i dati ricevuti
function displayData(data) {
  const userList = document.getElementById("userList");
  // Pulisce l'area della lista precedente (se presente)
  userList.innerHTML = `
<div class="userItem">
<h3>${data.title}</h3>
<p>${data.body}</p>
</div>
`;
}
// Gestione del click sul bottone per caricare i dati
document.getElementById("loadDataBtn").addEventListener("click", function () {
  getData();
});
