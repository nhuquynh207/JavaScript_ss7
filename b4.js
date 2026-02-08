let players = [
    "P001-Nguyễn Văn A-Thủ môn",
    "P002-Trần Thị B-Hậu vệ",
    "P003-Lê Văn C-Hậu vệ",
    "P004-Phạm Văn D-Tiền vệ",
    "P005-Hoàng Thị E-Tiền đạo",
    "P006-Vũ Minh F-Tiền đạo",
    "P007-Đặng Văn G-Thủ môn",
];

function printTeamRoster() {
    console.log("===== DANH SÁCH ĐỘI BÓNG =====");
    for (let i = 0; i < players.length; i++) {
        let parts = players[i].split("-");
        console.log(`${i + 1}. ${parts[0]} | ${parts[1]} | ${parts[2]}`);
    }
}

function countPlayerByPostion(players) {
    let counts = {};

    for (let i = 0; i < players.length; i++) {
        let parts = players[i].split("-");
        let position = parts[2];

        if (counts[position]) {
            counts[position]++;
        } else {
            counts[position] = 1;
        }
    }

    return counts;
}

function hasGoalkeeper() {
    for (let i = 0; i < players.length; i++) {
        let parts = players[i].split("-");
        if (parts[2] === "Thủ môn") {
            return true;
        }
    }
    return false;
}

printTeamRoster();
console.log("Số lượng cầu thủ theo vị trí:", countPlayerByPostion(players));
console.log("Đội có thủ môn không?", hasGoalkeeper());
