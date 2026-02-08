let players = [];

let quantity = +prompt("Có bao nhiêu cầu thủ cần nhập vào đội bóng?");
while (!Number.isInteger(quantity) || quantity <= 0) {
    quantity = +prompt("Vui lòng nhập số nguyên dương:");
}

for (let i = 0; i < quantity; i++) {
    let id;
    let isDuplicate;

    do {
        isDuplicate = false;
        id = prompt("Nhập mã cầu thủ:");

        for (let j = 0; j < players.length; j++) {
            let parts = players[j].split("-");
            if (parts[0] === id) {
                alert("Mã cầu thủ đã tồn tại, nhập lại!");
                isDuplicate = true;
                break;
            }
        }
    } while (isDuplicate);

    let name;
    do {
        name = prompt("Nhập tên cầu thủ:");
        if (!name || name.trim() === "") {
            alert("Tên không được để trống!");
        }
    } while (!name || name.trim() === "");

    let posNumber;
    let position = "";
    do {
        posNumber = +prompt("Chọn vị trí (1=Thủ môn, 2=Hậu vệ, 3=Tiền vệ, 4=Tiền đạo):");

        if (posNumber === 1) position = "Thủ môn";
        else if (posNumber === 2) position = "Hậu vệ";
        else if (posNumber === 3) position = "Tiền vệ";
        else if (posNumber === 4) position = "Tiền đạo";
        else alert("Vị trí không hợp lệ!");
    } while (position === "");

    players.push(`${id}-${name}-${position}`);
}

function printTeamRoster() {
    console.log("===== DANH SÁCH ĐỘI BÓNG =====");
    for (let i = 0; i < players.length; i++) {
        let parts = players[i].split("-");
        console.log(`${i + 1}. Mã: ${parts[0]} | Tên: ${parts[1]} | Vị trí: ${parts[2]}`);
    }
}

function pushPlayer(id, name, positionNumber) {

    for (let i = 0; i < players.length; i++) {
        let parts = players[i].split("-");
        if (parts[0] === id) {
            console.log("Mã cầu thủ đã tồn tại!");
            return;
        }
    }
    if (!name || name.trim() === "") {
        console.log("Tên không hợp lệ!");
        return;
    }
    let position = "";
    if (positionNumber === 1) position = "Thủ môn";
    else if (positionNumber === 2) position = "Hậu vệ";
    else if (positionNumber === 3) position = "Tiền vệ";
    else if (positionNumber === 4) position = "Tiền đạo";
    else {
        console.log("Vị trí không hợp lệ!");
        return;
    }

    players.push(`${id}-${name}-${position}`);
    console.log("Đã thêm cầu thủ thành công!");
}

pushPlayer("P010", "Nguyễn Văn Z", 4);
printTeamRoster();