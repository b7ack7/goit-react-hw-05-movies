import { Suspense } from "react";
import { Outlet } from "react-router-dom"; 
import {ToastContainer} from 'react-toastify';
import { Loader } from "components/Loader";
import { Container, Header, Nav, Link } from "./SharedLayout.styled";

export const SharedLayout = () => {
    return (
        <Container>
            <Header>
                <Nav>
                    <Link to="/">Home</Link>
                    <Link to="/movies">Movies</Link>
                </Nav>
            </Header>
            <main>
                <Suspense fallback={<Loader/>}>
                <Outlet/>
                </Suspense>
                <ToastContainer theme="colored"/>
            </main>
        </Container>
    )
}