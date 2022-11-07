import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// import { Mission } from './Mission';
// import { Team } from './Team';
// import { Reviews } from './Reviews';

import Home from 'page/Home';
import About from 'page/About';
import Products from 'page/Products';
import ProductDetails from 'page/ProductDetails';
import NotFound from 'page/NotFound';
import { SharedLayout } from './SharedLayout/SharedLayout';

// const StyledLink = styled(NavLink)`
// color: black;
// padding-right: 20px;

// &.active {
//   color: orange;
// }`;

export const App = () => {
  const Mission = lazy(() => import('./Mission'));
  const Team = lazy(() => import('./Team'));
  const Reviews = lazy(() => import('./Reviews'));

  return (
    <Suspense fallback={<div>Loading...</div>} >
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />

          <Route path="/about" element={<About />}>
            <Route path="mission" element={<Mission />} />
            <Route path="team" element={<Team />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
