import React from 'react'
import { Link } from 'react-router-dom'

const User = () => {
  return (
    <div>User
         <Link to={"/"} title='Two'>
        <button>
          Go to App
        </button>
            </Link>
    </div>
  )
}

export default User