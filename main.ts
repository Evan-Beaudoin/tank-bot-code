function scan_right () {
    robotbit.Servo(robotbit.Servos.S1, 0)
    basic.pause(1000)
    for (let index = 0; index < 1; index++) {
        right_distance = distance
    }
    basic.pause(500)
}
function straighten_out () {
    robotbit.Servo(robotbit.Servos.S1, 90)
}
function turn_left () {
    turn_left_value = 1
    while (turn_left_value == 1) {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        -152,
        robotbit.Motors.M2A,
        255
        )
        basic.pause(500)
        turn_left_value = 0
    }
    robotbit.MotorStopAll()
}
function scan_left () {
    robotbit.Servo(robotbit.Servos.S1, 180)
    basic.pause(1000)
    for (let index = 0; index < 1; index++) {
        left_distance = distance
    }
    basic.pause(500)
}
function turn_right () {
    turn_right_value = 1
    while (turn_right_value == 1) {
        robotbit.MotorRunDual(
        robotbit.Motors.M2A,
        -152,
        robotbit.Motors.M1A,
        255
        )
        basic.pause(500)
        turn_right_value = 0
    }
    robotbit.MotorStopAll()
}
let turn_right_value = 0
let left_distance = 0
let turn_left_value = 0
let distance = 0
let right_distance = 0
let M1_SPEED = 120
let M2_SPEED = 255
basic.forever(function () {
    straighten_out()
    basic.pause(500)
    if (distance < 30 && distance > 0) {
        robotbit.MotorStopAll()
        basic.pause(1000)
        scan_left()
        basic.pause(1000)
        scan_right()
        basic.pause(1000)
        if (left_distance > right_distance) {
            turn_left()
        } else {
            turn_right()
        }
    } else {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        M1_SPEED,
        robotbit.Motors.M2A,
        M2_SPEED
        )
    }
})
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
})
