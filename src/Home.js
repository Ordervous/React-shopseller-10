// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'
// import Container from 'react-bootstrap/Container'
// import Stack from 'react-bootstrap/Stack'
// import { Link, Outlet } from "react-router-dom"
// import LoadingIndicator from './LoadingIndicator'

import Stack from 'react-bootstrap/Stack'
import CarouselFade from './Carousel'

function Home() {
    return (
        <Stack gap={3} className="col-md-10 mx-auto mt-3">
            <h1>Welcome Art Lovers</h1>
            <CarouselFade />
        </Stack>
    )


    // return (
    //     <>
    //         <Navbar bg="light" variant="light">
    //             <Container>
    //                 <Nav className="me-auto">
    //                     <Link to="/" className="nav-link">Home</Link>
    //                     <Link to="/products" className="nav-link">Products</Link>
    //                     <Link to="/products/new" className="nav-link">New Product</Link>
    //                 </Nav>
    //                 <Navbar.Text>
    //                     <LoadingIndicator />
    //                 </Navbar.Text>
    //             </Container>
    //         </Navbar>

    //         <Stack gap={3} className="col-md-10 mx-auto mt-3">
    //             <Outlet />
    //         </Stack>
    //     </>
    // )
}

export default Home