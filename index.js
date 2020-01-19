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

function button(key) {

    if (key == 'up') {
        counter -= 1
    }
    else if (key == 'right') {

    }
    else if (key == 'down') {
        //change the focus to link-2
        counter += 1

    }
    else if (key == 'left') {

    }

    if (key === 'a') {
        document.getElementById(`link-${counter}`).click();
    }
    else if (key === 'b') {
        window.history.back()
    }

    if (counter === 0) {
        counter = 1;
    }
    else if (counter === 4) {
        counter = 3
    }

    event.preventDefault()
    console.log(key)
    document.getElementById(`link-${counter}`).focus();
}
