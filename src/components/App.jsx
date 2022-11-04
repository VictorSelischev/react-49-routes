import { Routes, Route, NavLink } from 'react-router-dom';
import { Container, Header, Logo, Link } from './App.styled';
import styled from 'styled-components';

import Home from 'page/Home';
import About from 'page/About';
import Products from 'page/Products';
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
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};
