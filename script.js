// Interaktive Karte mit Leaflet.js für Aufgabe 1
var map = L.map('map').setView([6.5244, 3.3792], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

var marker = L.marker([6.4541, 3.3947]).addTo(map)
  .bindPopup('<b>Lagos Island</b><br>Wirtschaftliches Zentrum.')
  .openPopup();

// Diagramm mit Chart.js für Bevölkerungswachstum in Aufgabe 2
var ctx = document.getElementById('populationChart');
if (ctx) {
  var chartCtx = ctx.getContext('2d');
  if (window.populationChart) {
    window.populationChart.destroy();
  }
  window.populationChart = new Chart(chartCtx, {
    type: 'line',
    data: {
      labels: ['2000', '2005', '2010', '2015'],
      datasets: [
        {
          label: 'Bevölkerungsentwicklung in Lagos',
          data: [8029000, 10600000, 13354000, 16086000],
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 2,
          fill: true
        },
        {
          label: 'Bevölkerungsentwicklung in Kinshasa',
          data: [4700000, 6300000, 7800000, 9500000],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 2,
          fill: true
        },
        {
          label: 'Bevölkerungsentwicklung in Abuja',
          data: [159900, 276500, 403700, 590400],
          backgroundColor: 'rgba(255, 159, 64, 0.2)',
          borderColor: 'rgba(255, 159, 64, 1)',
          borderWidth: 2,
          fill: true
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: false,
          ticks: {
            callback: function (value) {
              return value / 1000000 + ' Mio';
            }
          }
        }
      }
    }
  });
}

// Interaktives Spider-Diagramm für Aufgabe 3
var ctx2 = document.getElementById('sustainabilityChart');
if (ctx2) {
  var chartCtx2 = ctx2.getContext('2d');
  if (window.sustainabilityChart) {
    window.sustainabilityChart.destroy();
  }
  window.sustainabilityChart = new Chart(chartCtx2, {
    type: 'radar',
    data: {
      labels: ['Ökologie', 'Soziales', 'Ökonomie'],
      datasets: [{
        label: 'Eko Atlantic City',
        data: [3, 1, 4],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
        fill: true
      }]
    },
    options: {
      scales: {
        r: {
          suggestedMin: 0,
          suggestedMax: 5
        }
      }
    }
  });
}

// Slider für Vorher-Nachher-Bilder in Aufgabe 3
var slider = document.getElementById('slider');
if (slider) {
  var beforeImage = document.querySelector('.slider-image.before');
  var afterImage = document.querySelector('.slider-image.after');

  slider.addEventListener('input', function () {
    beforeImage.style.width = (100 - slider.value) + '%';
    afterImage.style.width = slider.value + '%';
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const svgContainer = document.querySelector("#conceptMap");
  if (!svgContainer) {
    console.error("SVG-Container mit der ID 'conceptMap' wurde nicht gefunden.");
    return;
  }

  const conceptData = {
    nodes: [
      { id: "Lagos", group: 1 },
      { id: "Potenziale", group: 2 },
      { id: "Herausforderungen", group: 3 },
      { id: "Innovation", group: 2 },
      { id: "Tech-Hubs", group: 2 },
      { id: "Nollywood", group: 2 },
      { id: "Bildung", group: 2 },
      { id: "Pan-Atlantic University", group: 2 },
      { id: "Internationale Schulen", group: 2 },
      { id: "Infrastrukturentwicklung", group: 2 },
      { id: "Eko Atlantic City", group: 2 },
      { id: "Lekki Deep Sea Port", group: 2 },
      { id: "Wirtschaftliches Wachstum", group: 2 },
      { id: "Dangote Ölraffinerie", group: 2 },
      { id: "Lekki Free Trade Zone", group: 2 },
      { id: "Klimawandel", group: 3 },
      { id: "Küstenüberschwemmungen", group: 3 },
      { id: "Erosion", group: 3 },
      { id: "Soziale Ungleichheit", group: 3 },
      { id: "Slumbildung", group: 3 },
      { id: "Einkommensdisparitäten", group: 3 },
      { id: "Verkehrsprobleme", group: 3 },
      { id: "Überlastete Straßen", group: 3 },
      { id: "Unzureichender öffentlicher Nahverkehr", group: 3 },
      { id: "Überbevölkerung", group: 3 },
      { id: "Schnelles Bevölkerungswachstum", group: 3 },
      { id: "Wohnraummangel", group: 3 },
    ],
    links: [
      { source: "Lagos", target: "Potenziale", value: 1, label: "bietet Chancen für" },
      { source: "Lagos", target: "Herausforderungen", value: 1, label: "ist geprägt von" },
      { source: "Potenziale", target: "Innovation", value: 1, label: "begünstigt" },
      { source: "Innovation", target: "Tech-Hubs", value: 1, label: "ermöglicht die Entwicklung von" },
      { source: "Innovation", target: "Nollywood", value: 1, label: "stärkt" },
      { source: "Potenziale", target: "Bildung", value: 1, label: "fördert den Zugang zu" },
      { source: "Bildung", target: "Pan-Atlantic University", value: 1, label: "inspiriert" },
      { source: "Bildung", target: "Internationale Schulen", value: 1, label: "trägt zur Qualität bei" },
      { source: "Potenziale", target: "Infrastrukturentwicklung", value: 1, label: "ermöglicht Fortschritte bei" },
      { source: "Infrastrukturentwicklung", target: "Eko Atlantic City", value: 1, label: "beeinflusst positiv" },
      { source: "Infrastrukturentwicklung", target: "Lekki Deep Sea Port", value: 1, label: "bringt Vorteile für" },
      { source: "Potenziale", target: "Wirtschaftliches Wachstum", value: 1, label: "trägt bei zu" },
      { source: "Wirtschaftliches Wachstum", target: "Dangote Ölraffinerie", value: 1, label: "unterstützt den Ausbau von" },
      { source: "Wirtschaftliches Wachstum", target: "Lekki Free Trade Zone", value: 1, label: "intensiviert" },
      { source: "Herausforderungen", target: "Klimawandel", value: 1, label: "zeigt sich in" },
      { source: "Klimawandel", target: "Küstenüberschwemmungen", value: 1, label: "führt zu" },
      { source: "Klimawandel", target: "Erosion", value: 1, label: "verstärkt die Auswirkungen von" },
      { source: "Herausforderungen", target: "Soziale Ungleichheit", value: 1, label: "spiegelt sich wider in" },
      { source: "Soziale Ungleichheit", target: "Slumbildung", value: 1, label: "verstärkt die Problematik von" },
      { source: "Soziale Ungleichheit", target: "Einkommensdisparitäten", value: 1, label: "verschärft" },
      { source: "Herausforderungen", target: "Verkehrsprobleme", value: 1, label: "zeigt sich in" },
      { source: "Verkehrsprobleme", target: "Überlastete Straßen", value: 1, label: "verschärft durch" },
      { source: "Verkehrsprobleme", target: "Unzureichender öffentlicher Nahverkehr", value: 1, label: "bedingt durch" },
      { source: "Herausforderungen", target: "Überbevölkerung", value: 1, label: "beinhaltet" },
      { source: "Überbevölkerung", target: "Schnelles Bevölkerungswachstum", value: 1, label: "bedingt durch" },
      { source: "Überbevölkerung", target: "Wohnraummangel", value: 1, label: "führt zu" },
    ],
  };
  
  const width = +svgContainer.getAttribute("width");
  const height = +svgContainer.getAttribute("height");

  // Zoom und Drag
  const zoom = d3.zoom().on("zoom", (event) => {
    svg.attr("transform", event.transform);
  });

  const svg = d3
    .select("#conceptMap")
    .call(zoom)
    .append("g");

  const color = d3.scaleOrdinal(d3.schemeCategory10);

  // Simulation
  const simulation = d3
    .forceSimulation(conceptData.nodes)
    .force(
      "link",
      d3.forceLink(conceptData.links).id((d) => d.id).distance(120)
    )
    .force("charge", d3.forceManyBody().strength(-500))
    .force("center", d3.forceCenter(width / 2, height / 2));

  // Links zeichnen
  const link = svg
    .append("g")
    .selectAll("line")
    .data(conceptData.links)
    .enter()
    .append("line")
    .attr("stroke-width", 2)
    .attr("stroke", "#999");

  // Nodes zeichnen
  const node = svg
    .append("g")
    .selectAll("circle")
    .data(conceptData.nodes)
    .enter()
    .append("circle")
    .attr("r", 10)
    .attr("fill", (d) => color(d.group))
    .call(
      d3
        .drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended)
    );

  // Labels für Nodes hinzufügen
  const nodeLabels = svg
    .append("g")
    .selectAll("text")
    .data(conceptData.nodes)
    .enter()
    .append("text")
    .text((d) => d.id)
    .attr("font-size", "12px")
    .attr("x", 12)
    .attr("y", 3);

  // Labels für Links hinzufügen
  const linkLabels = svg
    .append("g")
    .selectAll("text")
    .data(conceptData.links)
    .enter()
    .append("text")
    .text((d) => d.label)
    .attr("font-size", "10px")
    .attr("fill", "#666");

  // Update der Position bei jedem Tick
  simulation.on("tick", () => {
    link
      .attr("x1", (d) => d.source.x)
      .attr("y1", (d) => d.source.y)
      .attr("x2", (d) => d.target.x)
      .attr("y2", (d) => d.target.y);

    node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);

    nodeLabels.attr("x", (d) => d.x + 12).attr("y", (d) => d.y + 4);

    linkLabels
      .attr("x", (d) => (d.source.x + d.target.x) / 2)
      .attr("y", (d) => (d.source.y + d.target.y) / 2);
  });

  // Dragging-Event-Handler
  function dragstarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }

  function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
  }

  function dragended(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }
});