import logo from '../assets/logo.svg'
import { NavLink } from './NavLink'

export function Header() {
  return (
    <header className='flex items-center gap-5 py-2'>
      <a href="/">
        <img src={logo} alt="Logomarca do evento" />
      </a>

      <nav className='flex items-center gap-5'>
        <NavLink href='/eventos'>Eventos</NavLink>
        <NavLink href='/participantes'>Participantes</NavLink>
      </nav>
    </header>
  )
}