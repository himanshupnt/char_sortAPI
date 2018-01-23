window.addEventListener("load", () => {
  const form = document.getElementById("sortify");

  const fetchAnddisplaySortedStr = async () => {
    const formData = new FormData(form);
    const response = await fetch("/sort", {
      method: "POST",
      body: formData
    });
    const json = await response.json();
    document.getElementById("sorted").innerHTML = `<p>Result - ${
      json.sorted
    }</p>`;
  };

  form.addEventListener("submit", async event => {
    event.preventDefault();
    return await fetchAnddisplaySortedStr();
  });
});
