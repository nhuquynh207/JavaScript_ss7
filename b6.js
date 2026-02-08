let players = [
    "P001-Nguyễn Văn A-Thủ môn",
    "P002-Trần Thị B-Hậu vệ",
    "P003-Lê Văn C-Hậu vệ",
    "P004-Phạm Văn D-Tiền vệ",
    "P005-Hoàng Thị E-Tiền đạo",
    "P006-Vũ Minh F-Tiền đạo",
    "P007-Đặng Văn G-Thủ môn",
];
function getShortestPlayerName() {
    let shortestName = null;

    for (let i = 0; i < players.length; i++) {
        let parts = players[i].split("-");
        let name = parts[1].trim();

        if (shortestName === null || name.length < shortestName.length) {
            shortestName = name;
        }
    }

    return shortestName;
}
function countPlayersWithPositionLengthGreaterThan(length) {
    let count = 0;

    for (let i = 0; i < players.length; i++) {
        let parts = players[i].split("-");
        let position = parts[2].trim();

        if (position.length > length) {
            count++;
        }
    }

    return count;
}
console.log("Tên cầu thủ ngắn nhất:", getShortestPlayerName());
console.log("Số cầu thủ có tên vị trí dài hơn 7 ký tự:", countPlayersWithPositionLengthGreaterThan(7));
