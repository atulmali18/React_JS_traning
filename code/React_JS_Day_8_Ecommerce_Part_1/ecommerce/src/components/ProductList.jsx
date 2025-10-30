import React from 'react';
import { products,category } from './productData';
import ProductCard from './ProductCard';

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedData: 'All', // default show all products
    };
  }

  handleFilter = (category) => {
    this.setState({ selectedData: category });
  };

  render() {
    // Filter products based on selected category
    const filteredData =
      this.state.selectedData === 'All'
        ? products
        : products.filter((item) => item.category === this.state.selectedData);

    return (
      <div>
        {/* Category Filter Menu */}
        <ul className="list-inline text-center mb-4">
          {category.map((cat) => (
            <button
              key={cat}
              className={`list-inline-item px-3 py-1 rounded ${
                this.state.selectedData === cat ? 'bg-primary text-white' : 'bg-light'
              }`}
              style={{ cursor: 'pointer' }}
              onClick={() => this.handleFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </ul>

        {/* Product Grid */}
        <div className="row g-4">
          {filteredData.map((item) => (
            <div key={item.id} className="col-sm-6 col-md-4 col-lg-3">
              <ProductCard product={item} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ProductList;
