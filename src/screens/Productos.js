// Productos.js
import React, { useState } from 'react';
import ProductCard from '../components/ProductCard'; // Importa el nuevo componente

const Productos = () => {
    const [search, setSearch] = useState('');
    
    const productos = Array.from({ length: 20 }, (_, index) => ({
        id: index + 1,
        name: `Producto ${index + 1}`,
        image: `https://via.placeholder.com/150?text=Producto+${index + 1}`
    }));

    const filteredProducts = productos.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    const styles = {
        container: {
            textAlign: 'center',
            padding: '20px',
            backgroundColor: '#f9f9f9',
        },
        searchInput: {
            margin: '20px 0',
            padding: '10px',
            fontSize: '16px',
            borderRadius: '20px',
            border: '1px solid #ccc',
        },
        productGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
            gap: '20px',
            marginTop: '20px',
        },
    };

    return (
        <div style={styles.container}>
            <h1>Productos</h1>
            <input
                type="text"
                placeholder="Buscar productos..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={styles.searchInput}
            />
            <div style={styles.productGrid}>
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Productos;