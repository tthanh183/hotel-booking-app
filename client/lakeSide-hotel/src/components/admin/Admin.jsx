import React from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {
  return (
    <section className='container mt-5'>
        <h2>Welcome to Admin Panel</h2>
        <hr/>
        <Link to={"/existing-rooms"}>Mange Rooms</Link>
        <br/>
        <Link to={"/existing-bookings"}>Mange Bookings</Link>
    </section>
  )
}

export default Admin