let distance = 0
basic.forever(function () {
    if (distance < 10 && distance > 0) {
        robotbit.MotorStopAll()
    } else {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        255,
        robotbit.Motors.M2A,
        255
        )
    }
})
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    basic.showString("" + (distance))
})
