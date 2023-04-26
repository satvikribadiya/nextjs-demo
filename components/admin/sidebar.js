import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export default function sidebar() {
    const router = useRouter()

  return (
      <aside id="sidebar" className="sidebar">

          <ul className="sidebar-nav" id="sidebar-nav">

              <li className="nav-item">
                  <Link className={router.pathname.includes('dashboard') ? "nav-link" : "nav-link collapsed"} href={process.env.ADMIN_BASE_URL + 'dashboard'}>
                      <i className="bi bi-grid"></i>
                      <span>Dashboard</span>
                  </Link>
              </li>

              <li className="nav-item">
                  <Link className={router.pathname.includes('profile') ? "nav-link" : "nav-link collapsed"} href={process.env.ADMIN_BASE_URL + 'profile'}>
                      <i className="bi bi-person"></i>
                      <span>Profile</span>
                  </Link>
              </li>

              <li className="nav-item">
                  <Link className={router.pathname.includes('faq') ? "nav-link" : "nav-link collapsed"}  href={process.env.ADMIN_BASE_URL + 'faq'}>
                      <i className="bi bi-question-circle"></i>
                      <span>F.A.Q</span>
                  </Link>
              </li>
              <li className="nav-item">
                  <Link className={router.pathname.includes('contact') ? "nav-link" : "nav-link collapsed"} href={process.env.ADMIN_BASE_URL + 'contact'}>
                      <i className="bi bi-envelope"></i>
                      <span>Contact</span>
                  </Link>
              </li>

          </ul>

      </aside>
  )
}
