import React, { useState, useEffect } from 'react'

const DateTime = () => {
  const [dateTime, setDateTime] = useState('')

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date()
      
      const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
      const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
      
      const dayName = days[now.getDay()]
      const monthName = months[now.getMonth()]
      const date = now.getDate()
      
      let hours = now.getHours()
      const minutes = now.getMinutes()
      const ampm = hours >= 12 ? 'PM' : 'AM'
      
      hours = hours % 12
      hours = hours ? hours : 12
      
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes
      
      const formattedDateTime = `${dayName} ${monthName} ${date} ${hours}:${formattedMinutes} ${ampm}`
      setDateTime(formattedDateTime)
    }

    updateDateTime()
    const interval = setInterval(updateDateTime, 60000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      {dateTime}
    </div>
  )
}

export default DateTime
