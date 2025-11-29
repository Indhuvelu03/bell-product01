// ...existing imports...
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <Router>
      <Routes>
        {/* ...existing routes... */}
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}
