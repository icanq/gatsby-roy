import React, { useState, useEffect } from 'react'
import styles from './timer.scss'

const CountdownTimer = () => {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    var x = setInterval(function () {
      const countDownDate = new Date('Nov 27, 2021 08:00:00').getTime()

      // Get today's date and time
      var now = new Date().getTime()

      // Find the distance between now and the count down date
      var distance = countDownDate - now

      // Time calculations for days, hours, minutes and seconds
      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)))
      setHours(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      )
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000))

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x)
      }
    }, 1000)
  }, [])

  const renderCountDownValues = (data, text) => {
    return (
      <div className={styles.countdownTimeContainer}>
        <p style={{fontSize: "large"}}>{data} </p>
        <p style={{fontSize: "small"}}>{text}</p>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.countdownContainer} style={{display: "flex", justifyContent: "center"}}>
        {renderCountDownValues(days, 'Hari')}
        <p className={styles.slash}>/</p>
        {renderCountDownValues(hours, 'Jam')}
        <p className={styles.slash}>/</p>
        {renderCountDownValues(minutes, 'Menit')}
        <p className={styles.slash}>/</p>
        {renderCountDownValues(seconds, 'Detik')}
      </div>
    </div>
  )
}

export default CountdownTimer
