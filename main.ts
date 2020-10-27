let distance = sonar.ping(
DigitalPin.P1,
DigitalPin.P2,
PingUnit.Centimeters
)
basic.forever(function () {
    robotbit.Servo(robotbit.Servos.S1, 90)
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    150,
    robotbit.Motors.M2A,
    150
    )
    if (distance < 10) {
        robotbit.MotorStopAll()
        robotbit.Servo(robotbit.Servos.S1, 0)
    }
})
