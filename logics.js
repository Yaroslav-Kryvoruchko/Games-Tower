let startLvlBuild = 0;
let startLvlWalls = 0;
let startMoney = 1000;
let buildsLvl = 0;
let wallsLvl = 0;

function MaxLvl() {
    if (startLvlBuild === 5 || startLvlWalls === 5) {
        alert("Max lvl")
    }
}

function BuildLogic() {
    if (startLvlBuild === 0) {
        const moneyDown = startMoney - 60;
        startMoney = moneyDown;
        startLvlBuild++;
        buildsLvl++;
        Output(moneyDown, buildsLvl);
        if (moneyDown < 0) {
            alert('NOT Enough money');
            moneyDown = 0;
        }
    } else if (startLvlBuild === 1) {
        const moneyDown = startMoney - 120;
        startMoney = moneyDown;
        startLvlBuild++;
        buildsLvl++;
        if (moneyDown < 0) {
            alert('NOT Enough money');
            moneyDown = 0;
        }
        Output(moneyDown, buildsLvl);
    } else if (startLvlBuild === 2) {
        const moneyDown = startMoney - 240;
        startMoney = moneyDown;
        startLvlBuild++;
        buildsLvl++;
        if (moneyDown < 0) {
            alert('NOT Enough money');
            moneyDown = 0;
        }
        Output(moneyDown, buildsLvl);
    } else if (startLvlBuild === 3) {
        const moneyDown = startMoney - 480;
        startMoney = moneyDown;
        startLvlBuild++;
        buildsLvl++;
        if (moneyDown < 0) {
            alert('NOT Enough money');
            moneyDown = 0;
        }
        Output(moneyDown, buildsLvl);
    } else if (startLvlBuild === 4) {
        const moneyDown = startMoney - 960;
        startMoney = moneyDown;
        startLvlBuild++;
        buildsLvl++;
        if (moneyDown < 0) {
            alert('NOT Enough money');
            moneyDown = 0;
        }
        MaxLvl();
        Output(moneyDown, buildsLvl);
    } 
}

function WallsLogic() {
    if (startLvlWalls === 0) {
        const moneyDown = startMoney - 40;
        startMoney = moneyDown;
        startLvlWalls++;
        wallsLvl++;
        Output(moneyDown, buildsLvl, wallsLvl);
        if (moneyDown < 0) {
            alert('NOT Enough money');
            moneyDown = 0;
        }
    } else if (startLvlWalls === 1) {
        const moneyDown = startMoney - 80;
        startMoney = moneyDown;
        startLvlWalls++;
        wallsLvl++;
        if (moneyDown < 0) {
            alert('NOT Enough money');
            moneyDown = 0;
        }
        Output(moneyDown, buildsLvl, wallsLvl);
    } else if (startLvlWalls === 2) {
        const moneyDown = startMoney - 160;
        startMoney = moneyDown;
        startLvlWalls++;
        wallsLvl++;
        if (moneyDown < 0) {
            alert('NOT Enough money');
            moneyDown = 0;
        }
        Output(moneyDown, buildsLvl, wallsLvl);
    } else if (startLvlWalls === 3) {
        const moneyDown = startMoney - 240;
        startMoney = moneyDown;
        startLvlWalls++;
        wallsLvl++;
        if (moneyDown < 0) {
            alert('NOT Enough money');
            moneyDown = 0;
        }
        Output(moneyDown, buildsLvl, wallsLvl);
    } else if (startLvlWalls === 4) {
        const moneyDown = startMoney - 480;
        startMoney = moneyDown;
        startLvlWalls++;
        wallsLvl++;
        if (moneyDown < 0) {
            alert('NOT Enough money');
            moneyDown = 0;
        }
        MaxLvl();
        Output(moneyDown, buildsLvl, wallsLvl);
    } 
}


BuildLvlUpBtn.addEventListener('click', BuildLogic);
WallsLvlUpBtn.addEventListener('click', WallsLogic);

function Output(moneys, buildLvl, wallLvl) {
    money.textContent = moneys;
    BuildLvl.textContent = buildLvl;
    WallsLvl.textContent = wallLvl;
}