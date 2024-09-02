function activateBoost(type) {
    alert(type + " boost activated!");
}

function showTab(tabName) {
    let tabs = document.getElementsByClassName('tab-content');
    for (let tab of tabs) {
        tab.classList.remove('active');
    }
    document.getElementById(tabName).classList.add('active');
}

function inviteFriend() {
    let friendCount = document.getElementById('friendCount');
    friendCount.innerText = parseInt(friendCount.innerText) + 1;
}

function completeTask(taskType) {
    alert("Task " + taskType + " completed!");
}

function buyBoost(boostType) {
    alert(boostType + " purchased!");
}