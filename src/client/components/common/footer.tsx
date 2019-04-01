import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => (
  <footer className="footer">
    <div className="container footer-container">
      <p className="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nibh
        massa, tincidunt ut sodales a, ultricies eget lorem. Maecenas id ornare
        magna. Curabitur hendrerit augue massa, posuere iaculis mauris iaculis
        mattis. <Link to="/terms-of-service">Terms</Link>.
      </p>
    </div>
  </footer>
)
