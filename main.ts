let away = 0
motorbit.freestyle(100, 100)
basic.forever(function () {
    away = sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P5)
    if (away < 8 && away != 0) {
        motorbit.freestyle(0, 0)
        basic.pause(300)
        motorbit.freestyle(-80, -80)
        basic.pause(600)
    } else if (away < 15) {
        if (randint(0, 99) < 50) {
            motorbit.freestyle(0, -80)
        } else {
            motorbit.freestyle(-80, 0)
        }
        basic.pause(300)
    } else {
        motorbit.freestyle(100, 100)
    }
})
