let playersList = [];
let goalsList = [];

function addPlayer(name,goal) {
    playersList.push(name);
    goalsList.push(goal);
}

function showSquad(){
    if(playersList.length === goalsList.length){
        for (let i = 0; i < playersList.length; i++) {
            console.log(`${i+1}. ${playersList[i]} - ${goalsList[i]} bàn`);
        }
    }else{
        alert("Dữ liệu không hợp lệ.Hãy kết thúc chương trình và nhập lại");
    }

    }


    /**
     * @description Hàm tính tổng bàn thắng của cả đội
     * @returns Tổng số bàn thắng
     * 
     */
const getTotalGoals = () => {
    let totalgoals = 0;
    for (let i = 0; i < goalsList.length; i++) {
        totalgoals += goalsList[i];
    }
    return totalgoals;
}

/**
 * Tìm kiếm cầu thủ có số bàn cao nhất
 * @returns Thông tin cầu thủ có số bàn thắng lớn nhất
 */
const findMostGoals= () => {
    let maxIndex=0;
    let max = goalsList[0];
    for (let i = 0; i < playersList.length; i++) {
        if(goalsList[i]>max){
            max = goalsList[i];
            maxIndex=i;
        }
        
    }
    return playersList[maxIndex];
}



let choice;
do {
    choice= +prompt(`
        MENU QUẢN LÝ ĐỘI BÓNG:
        1. Nhập cầu thủ
        2. Xem danh sách
        3. Tổng bàn thắng
        4. Xem vua phá lưới
        0. Thoát
        `)

    switch (choice) {
        case 1:
            const nameSoccer=prompt("Nhập tên cầu thủ:");
            const playerGoal=+prompt("Nhập số bàn thắng");
            addPlayer(nameSoccer,playerGoal);
            alert("Đã thêm cầu thủ");
            break;
        case 2:
            showSquad ();
            alert("Đã in toàn bộ danh sách đội bóng ở Console");
            break;
        case 3:
            //Gọi hàm
            const totalGoalsTeam=getTotalGoals();
            console.log("Tổng số bàn thắng của cả đội:",totalGoalsTeam);
            break;
        case 4:
            const maxGoals = findMostGoals();
            console.log("Cầu thủ có bàn thắng cao nhất trong mảng là:",maxGoals);
            
            break;
        case 0:
            alert("Thoát chương trình! Hẹn gặp lại");
            
            break;
    
        default:
            alert("Lựa chọn không hợp lệ")
            break;
    }
} while (choice!==0);
