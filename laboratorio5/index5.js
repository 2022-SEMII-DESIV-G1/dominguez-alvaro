let candidates = [];

function addCandidate(name, color) {
    candidates.push({ name, color, points: 0 });
    renderCandidateList();
    renderPieChart();
}

function deleteCandidate(index) {
    candidates.splice(index, 1);
    renderCandidateList();
    renderPieChart();
}

function addPoints(index) {
    candidates[index].points++;
    renderCandidateList();
    renderPieChart(); // Se llama a renderPieChart() después de agregar puntos
}

function renderCandidateList() {
    const candidateListContainer = document.getElementById('candidateListContainer');
    candidateListContainer.innerHTML = '';
    candidates.forEach((candidate, index) => {
        const listItem = document.createElement('div');
        listItem.innerHTML = `
            <span style="color: ${candidate.color};">${candidate.name}</span> - Puntos: ${candidate.points}
            <button onclick="addPoints(${index})">Agregar Punto</button>
            <button onclick="deleteCandidate(${index})">Eliminar</button>
        `;
        candidateListContainer.appendChild(listItem);
    });
}

function renderPieChart() {
    const canvas = document.getElementById('pieChart');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const totalPoints = candidates.reduce((acc, candidate) => acc + candidate.points, 0);
    let startAngle = -0.5 * Math.PI;

    candidates.forEach((candidate, index) => {
        const sliceAngle = (candidate.points / totalPoints) * 2 * Math.PI;

        ctx.fillStyle = candidate.color;
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, canvas.height / 2);
        ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 3, startAngle, startAngle + sliceAngle);
        ctx.lineTo(canvas.width / 2, canvas.height / 2);
        ctx.fill();

        startAngle += sliceAngle;
    });
}

document.getElementById('addCandidateForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const candidateName = document.getElementById('candidateName').value;
    const candidateColor = document.getElementById('candidateColor').value;
    addCandidate(candidateName, candidateColor);
});

document.getElementById('candidateListContainer').addEventListener('click', function(event) {
    if (event.target && event.target.nodeName === 'BUTTON') {
        const index = event.target.dataset.index;
        if (index !== undefined) {
            deleteCandidate(parseInt(index));
        }
    }
});
