window.addEventListener("load", () => {
  const form = document.getElementById("sortify");

  const fetchAnddisplaySortedStr = async () => {
    const formData = new FormData(form);
    const unsortedStr = formData.get("unsorted");
    const response = await fetch("/sort", {
      method: "POST",
      body: formData
    });
    const json = await response.json();
    const result = document.createElement("tr");
    result.innerHTML = `<td>${unsortedStr}</td><td>${json.sorted}</td>`;
    document.getElementById("results").appendChild(result);
  };

  form.addEventListener("submit", async event => {
    event.preventDefault();
    return await fetchAnddisplaySortedStr();
  });
});
