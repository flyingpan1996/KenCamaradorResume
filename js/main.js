const countUrl = 'https://uibyn278b8.execute-api.us-east-1.amazonaws.com/Prod'
const countElement = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
    fetch(countUrl)
        .then(res => res.json())
        .then(res => {
        countElement.innerHTML = res.visits;
    });
}

