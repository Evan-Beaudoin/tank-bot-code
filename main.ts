function straighten_out () {
    robotbit.Servo(robotbit.Servos.S1, 90)
}
function turn_left () {
    while (turn_left_value == 1) {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        -152,
        robotbit.Motors.M2A,
        255
        )
        basic.pause(400)
        turn_left_value = 0
    }
    robotbit.MotorStopAll()
}
function turn_right () {
    while (turn_right_value == 1) {
        robotbit.MotorRunDual(
        robotbit.Motors.M2A,
        -152,
        robotbit.Motors.M1A,
        255
        )
        basic.pause(400)
        turn_right_value = 0
    }
    robotbit.MotorStopAll()
}
let distance = 0
let turn_right_value = 0
let turn_left_value = 0
let M1_SPEED = 120
let M2_SPEED = 255
turn_left_value = 1
turn_right_value = 1
basic.forever(function () {
    straighten_out()
    basic.pause(1000)
    turn_right()
})
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
})
