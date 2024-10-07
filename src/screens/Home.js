import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard'; // Importa el nuevo componente

const Home = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const todosLosProductos = Array.from({ length: 20 }, (_, index) => ({
            id: index + 1,
            name: `Producto ${index + 1}`,
            image: `https://via.placeholder.com/150?text=Producto+${index + 1}`
        }));
        const randomProducts = todosLosProductos.sort(() => 0.5 - Math.random()).slice(0, 6);
        setProductos(randomProducts);
    }, []);

    const styles = {
        container: {
            textAlign: 'center',
            padding: '20px',
            backgroundColor: '#f9f9f9',
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
            transition: 'transform 0.2s',
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
            <h1>Bienvenido a nuestro Catálogo</h1>
            <div style={styles.productGrid}>
                {productos.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Home;