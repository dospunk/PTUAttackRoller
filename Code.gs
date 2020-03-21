function onOpen(e) {
  //setup
  var ui = SpreadsheetApp.getUi();
  var menu = ui.createMenu("Roller Menu");
  
  //hey google please let me use functions with parameters here thanks
  menu.addItem("Roll Struggle", "attack1")
      .addItem("Roll Attack 2", "attack2")
      .addItem("Roll Attack 3", "attack3")
      .addItem("Roll Attack 4", "attack4")
      .addItem("Roll Attack 5", "attack5")
      .addItem("Roll Attack 6", "attack6")
      .addItem("Roll Attack 7", "attack7")
      .addItem("Roll Attack 8", "attack8")
      .addItem("Roll Attack 9", "attack9")
      .addItem("Roll Attack 10", "attack10")
      .addItem("Roll Attack 11", "attack11")
      .addToUi();
}

function attack1(){
  roller("E20:G20");
}

function attack2(){
  roller("E21:G21");
}

function attack3(){
  roller("E22:G22");
}

function attack4(){
  roller("E23:G23");
}

function attack5(){
  roller("E24:G24");
}

function attack6(){
  roller("E25:G25");
}

function attack7(){
  roller("E26:G26");
}

function attack8(){
  roller("E27:G27");
}

function attack9(){
  roller("E28:G28");
}

function attack10(){
  roller("E29:G29");
}

function attack11(){
  roller("E30:G30");
}


function roller(range){
  var sheet = SpreadsheetApp.getActiveSheet();
  var attack1data = sheet.getRange(range).getDisplayValues();
  var ui = SpreadsheetApp.getUi();
  
  var splitByPlus = attack1data[0][0].split("+");
  var diceNotation = splitByPlus[0];
  var addition1 = parseInt(splitByPlus[1]);
  
  var splitByD = diceNotation.split("d");
  var times = parseInt(splitByD[0]);
  var max = parseInt(splitByD[1]);
  
  var damage = 0;
  for(var i = 0; i < times; i++){
    damage += getRandomInt(1,max);
  }
  damage += addition1;
  
  if(attack1data[0][1] == "+"){
    damage += parseInt(attack1data[0][2]);
  } else {
    damage -= parseInt(attack1data[0][2]);
  }
  
  ui.alert(damage);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
