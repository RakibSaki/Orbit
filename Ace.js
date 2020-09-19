let x, y, th;
let a, b, e, f;
let PI;
let delA, A, aveth;
function setup() {
    createCanvas(1000, 1000);
    PI = 3.141592653589793238462643383279502884;
    x = -200, y = 0, th = PI;
    a = 200, e = 0.2, f = a * e, b = sqrt((a * a) * (1 - (e * e)));
    A = 0, delA = TAU / (5 * 50), aveth = 2 * delA / (a * b);
}


function draw() {
    background(0);
    translate(width / 2, height / 2);
    noFill();
    stroke(150);
    ellipse(-f, 0, a * 2, b * 2);
    fill(200, 200, 10);
    noStroke();
    ellipse(0, 0, 60, 60);
    fill(10, 200, 0);
    ellipse(x - f, y, 20, 20);
    if (th) {
        setth();
        setxy();
    }

}

function findnextth() {
    let requiredA = A + delA;
    console.log('requiredA', requiredA);
    let upperassumption = th + 0;
    let lowerassumption = th + 0;
    while (thtoA(upperassumption) < requiredA) {
        upperassumption += aveth;
    }
    while (thtoA(lowerassumption) > requiredA) {
        lowerassumption -= aveth;
    }
    while (abs(upperassumption - lowerassumption) < aveth / 100) {
        let mid = (upperassumption + lowerassumption) / 2;
        if (thtoA(mid) < requiredA) {
            lowerassumption = mid;
        } else {
            upperassumption = mid;
        }
    }
    A = requiredA;
    th = (upperassumption + lowerassumption) / 2;
}

function setth() {
    th += 0.025;
}

function setxy() {
    x = a * cos(th);
    y = b * sin(th);
}

function thtoA(theta) {
    return ((((a * a) + (b * b)) / 4) * theta) + ((((a * a) - (b * b)) / 8) * sin(2 * theta)) + ((a * b * e / 2) * sin(theta));
}

function mouseClicked() {
    if (mouseX < width / 2) {
        e -= 0.2;
    } else {
        e += 0.2;
    }
    a = 200, f = a * e, b = sqrt((a * a) * (1 - (e * e)));

}