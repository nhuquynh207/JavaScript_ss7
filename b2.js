let playerIds = ["P001", "P002", "P003", "P004", "P005"];
let playerNames = [
    "Nguyễn Văn A",
    "Trần Thị B",
    "Lê Văn C",
    "Phạm Văn D",
    "Hoàng Thị E",
];
let playerJerseyNumbers = [10, 7, 8, 9, 11];

let idUpdate = prompt("Nhập mã cầu thủ muốn cập nhật :");

if (playerIds.includes(idUpdate)) {
    let newName = prompt("Nhập tên mới cho cầu thủ:");

    let newNumber;
    do {
        newNumber = +prompt("Nhập số áo mới (1 - 99):");
        if (!Number.isInteger(newNumber) || newNumber < 1 || newNumber > 99) {
            alert("Số áo không hợp lệ, vui lòng nhập lại!");
        }
    } while (!Number.isInteger(newNumber) || newNumber < 1 || newNumber > 99);

    let result = updatePlayerNameAndJersey(idUpdate, newName, newNumber);

    if (result) {
        alert("Cập nhật thành công!");
        printTeamRoster();
    }
} else {
    alert("Không tìm thấy cầu thủ với mã này!");
}

function printTeamRoster() {
    console.log("===== DANH SÁCH CẦU THỦ =====");
    for (let i = 0; i < playerIds.length; i++) {
        console.log(
            `${i + 1}. Mã: ${playerIds[i]} - Tên: ${playerNames[i]} - Số áo: ${playerJerseyNumbers[i]}`
        );
    }
}

function updatePlayerNameAndJersey(playerId, newName, newNumber) {
    let index = playerIds.indexOf(playerId);

    if (index === -1) {
        return false; 
    }

    playerNames[index] = newName;
    playerJerseyNumbers[index] = newNumber;
    return true;
}
