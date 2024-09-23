import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

function NavBar() {
  return (
    <Navbar expand='lg' className='bg-body-tertiary flex flex-row p-2 text-white'>
      <Container>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav.Link className='px-4 hover:text-stone-400' href='/myItems'>
            My items
          </Nav.Link>
          <Nav.Link className='px-3 hover:text-stone-400' href='/addItem'>
            Add new item
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
