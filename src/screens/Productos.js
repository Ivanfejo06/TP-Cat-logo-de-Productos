import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Productos = () => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    
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
        productCard: {
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '10px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.2s, box-shadow 0.2s',
            cursor: 'pointer',
        },
        productCardHover: {
            transform: 'scale(1.05)',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        },
        productImage: {
            maxWidth: '100%',
            borderRadius: '8px',
        },
        productName: {
            margin: '10px 0 0',
            fontSize: '18px',
            fontWeight: 'bold',
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
                    <div
                        key={product.id}
                        style={styles.productCard}
                        onClick={() => navigate(`/detalle/${product.id}`)} // Redirige al detalle del producto
                        onMouseEnter={e => {
                            e.currentTarget.style.transform = styles.productCardHover.transform;
                            e.currentTarget.style.boxShadow = styles.productCardHover.boxShadow;
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = styles.productCard.boxShadow;
                        }}
                    >
                        <img src={product.image} alt={product.name} style={styles.productImage} />
                        <h3 style={styles.productName}>{product.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Productos;