import React from 'react'

export default function Footer({lenght}) {
    const today = new Date()
  return (
    <footer >
            <p>Copy Rights &copy; {today.getFullYear()} </p>
            <p>lenght is: {lenght} </p>
    </footer>
  )
}
