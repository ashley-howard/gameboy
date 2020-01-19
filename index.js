let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

// const up = document.getElementById("up");
// const right = document.getElementById("right");
// const down = document.getElementById("down");
// const left = document.getElementById("left");

var counter = 1;

document.getElementById(`link-${counter}`).focus();

function dpad(direction) {

    if (direction == 'up') {
        counter -= 1
    }
    else if (direction == 'right') {

    }
    else if (direction == 'down') {
        //change the focus to link-2
        counter += 1

    }
    else if (direction == 'left') {

    }
    else {
        console.log('d pad error')
    }

    if (counter === 0) {
        counter = 1;
    }
    else if (counter === 4) {
        counter = 3
    }

    event.preventDefault()
    console.log(direction)
    document.getElementById(`link-${counter}`).focus();
}
