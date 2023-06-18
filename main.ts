basic.forever(function () {
    while (!(input.isGesture(Gesture.Shake))) {
        while (input.compassHeading() >= 30 && input.compassHeading() <= 330) {
            eurate.MotorRun(eurate.Motors.M1, eurate.Dir.CW, 100)
            eurate.MotorRun(eurate.Motors.M3, eurate.Dir.CW, 100)
            eurate.MotorRun(eurate.Motors.M2, eurate.Dir.CCW, 100)
            eurate.MotorRun(eurate.Motors.M4, eurate.Dir.CCW, 100)
        }
        eurate.motorStopAll()
        while (input.compassHeading() <= 30 && input.compassHeading() >= 330) {
            eurate.Move(
            100,
            eurate.TwoDDir.FW,
            500
            )
        }
    }
    eurate.motorStopAll()
})
