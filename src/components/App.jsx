import { Routes, Route } from 'react-router-dom';
import { Container, Header, Logo, Link } from './App.styled';
// import styled from 'styled-components';

import { Mission } from './Mission';
import { Team } from './Team';
import { Reviews } from './Reviews';

import Home from 'page/Home';
import About from 'page/About';
import Products from 'page/Products';
import ProductDetails from 'page/ProductDetails';
import NotFound from 'page/NotFound';

// const StyledLink = styled(NavLink)`
// color: black;
// padding-right: 20px;

// &.active {
//   color: orange;
// }`;

export const App = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon">
            💻
          </span>{' '}
          GoMerch Store
        </Logo>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};
