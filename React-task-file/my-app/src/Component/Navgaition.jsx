import React from 'react'
import { Link } from 'react-router-dom/dist'

const Navgaition = () => {
  return (
    <div>
        <ul>
            <li><Link to="/ca">Componenet A</Link></li>
            <li><Link to="/cb">Componenet B</Link></li>
            <li><Link to="/cc">Componenet C</Link></li>
        </ul>
    </div>
  )
}

export default Navgaition