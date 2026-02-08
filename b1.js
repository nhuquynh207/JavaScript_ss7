let playerIds = [];
let playerPositions = [];

let quantityPlayers = +prompt("Có bao nhiêu cầu thủ nhập vào đội bóng?");

for (let i = 0; i < quantityPlayers; i++) {
    let playerId = prompt("Nhập mã cầu thủ:");
    let playervt = +prompt("Nhập vị trí (1=Thủ môn, 2=Hậu vệ, 3=Tiền vệ, 4=Tiền đạo)");

    if (playerIds.includes(playerId)) {
        alert("Mã cầu thủ đã tồn tại");
        continue;
    }

    if (isNaN(playervt)) {
        alert("Chỉ được nhập số");
        continue;
    }

    let positionName = "";

    if (playervt === 1) positionName = "Thủ môn";
    else if (playervt === 2) positionName = "Hậu vệ";
    else if (playervt === 3) positionName = "Tiền vệ";
    else if (playervt === 4) positionName = "Tiền đạo";
    else {
        alert("Số vừa nhập không hợp lệ");
        continue;
    }

    playerIds.push(playerId);
    playerPositions.push(positionName);

    alert("Đã thêm cầu thủ thành công");
}

let totalPlayer = +prompt("Nhập vị trí muốn đếm (1: Thủ môn, 2: Hậu vệ, 3: Tiền vệ, 4: Tiền đạo)");

const printTeamRoster = () => {
    console.log("Đội bóng hiện tại:");
    for (let i = 0; i < playerIds.length; i++) {
        console.log(`${i + 1}. ${playerIds[i]} - ${playerPositions[i]}`);
    }
};

function findPlayersByPosition(position) {
    let positionName = "";

    if (position === 1) positionName = "Thủ môn";
    else if (position === 2) positionName = "Hậu vệ";
    else if (position === 3) positionName = "Tiền vệ";
    else if (position === 4) positionName = "Tiền đạo";
    else {
        console.log("Vị trí không hợp lệ");
        return;
    }

    let count = 0;
    console.log(`Danh sách cầu thủ ở vị trí ${positionName}:`);

    for (let i = 0; i < playerPositions.length; i++) {
        if (playerPositions[i] === positionName) {
            console.log(`- ${playerIds[i]}`);
            count++;
        }
    }

    console.log(`Tổng số cầu thủ ở vị trí ${positionName}: ${count}`);
}

printTeamRoster();
findPlayersByPosition(totalPlayer);
