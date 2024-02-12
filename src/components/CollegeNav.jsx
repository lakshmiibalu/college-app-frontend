import React from 'react'
import { Link } from 'react-router-dom'

const CollegeNav = () => {
  return (
    <div>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/add">Add Student</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link active" aria-current="page" to="/viewall">View Students</Link>
        <Link class="nav-link" to="/viewmarks">View Marks</Link>
        <Link class="nav-link" to="/">Log Out</Link>
        
      </div>
    </div>
  </div>
</nav>


    </div>
  )
}

export default CollegeNav