// Rover Object Goes Here
// ======================

var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [],
};

// ======================

function turnLeft(rover) {
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case 'N':
      rover.direction = 'W';
      break;

    case 'W':
      rover.direction = 'S';
      break;

    case 'S':
      rover.direction = 'E';
      break;

    case 'E':
      rover.direction = 'N';
      break;

  }
}

function turnRight(rover) {
  console.log("turnRight was called!");
  switch (rover.direction) {
    case 'N':
      rover.direction = 'E';
      break;

    case 'E':
      rover.direction = 'S';
      break;

    case 'S':
      rover.direction = 'W';
      break;

    case 'W':
      rover.direction = 'N';
      break;
  }
}


function moveForward(rover) {
  console.log("moveForward was called");
  if (rover.direction == "N") {
    y = -1;
  }
  else if (rover.direction == "E") {
    x = 1;
  }
  else if (rover.direction == "S") {
    y = 1;
  }
  else if (rover.direction == "W") {
    x = -1;
  }
}


function moveRover(rover){
  var command = string("rffrfflfrff");
  if(command.indexOf == 'r'){
    turnRight;
  }
  else if(command.indexOf == 'f'){
    moveForward;
  }
   else if(command.indexOf == 'l'){
     turnLeft;
   }
}

