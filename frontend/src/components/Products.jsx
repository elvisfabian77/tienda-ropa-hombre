import '../styles/products.css'

function Products() {
  return (
    <section className="products">
      <h2>Productos destacados</h2>

      <div className="products-grid">
        <div className="product-card">
          <h3>Zapatilla Urbana</h3>
          <p>$79.99</p>
          <button>Ver producto</button>
        </div>

        <div className="product-card">
          <h3>Bota de Cuero</h3>
          <p>$129.99</p>
          <button>Ver producto</button>
        </div>

        <div className="product-card">
          <h3>Camisa Casual</h3>
          <p>$49.99</p>
          <button>Ver producto</button>
        </div>

        <div className="product-card">
          <h3>Zapato Formal</h3>
          <p>$99.99</p>
          <button>Ver producto</button>
        </div>
      </div>
    </section>
  )
}

export default Products
