fetch("data/projects.json")
  .then((res) => res.json())
  .then((data) => {
    const table = document.getElementById("projectTable");

    data.forEach((p) => {
      const row = `
<tr>
<td>${p.name}</td>
<td>${p.type}</td>
<td>${p.status}</td>
<td>${p.year}</td>
</tr>
`;

      table.innerHTML += row;
    });
  });
