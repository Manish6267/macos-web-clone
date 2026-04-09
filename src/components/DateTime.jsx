import React, { useEffect, useState } from 'react'

const DateTime = () => {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const formatDateTime = (date) => {
    const weekdays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
    const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']

    const dayName = weekdays[date.getDay()]
    const dayNum = date.getDate() // no leading zero
    const monthName = months[date.getMonth()]

    let hours = date.getHours()
    const mins = date.getMinutes()
    const isPm = hours >= 12

    const period = isPm ? 'pm' : 'am'
    hours = hours % 12
    if (hours === 0) hours = 12

    const hourStr = String(hours).padStart(2, '0')
    const minStr = String(mins).padStart(2, '0')

    return `${dayName} ${dayNum}${monthName}  ${hourStr}:${minStr} ${period}`
  }

  return <div>{formatDateTime(now)}</div>
}

export default DateTime
