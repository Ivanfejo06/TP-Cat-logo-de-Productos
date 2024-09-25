import React from 'react';
import { useParams } from 'react-router-dom';

const Detalle = () => {
    const { id } = useParams();
    const producto = {
        id,
        name: `Producto ${id}`,
        description: `Descripción del Producto ${id}`,
        images: [`https://via.placeholder.com/300?text=Imagen+${id}`]
    };

    const styles = {
        container: {
            textAlign: 'center',
            padding: '20px',
            backgroundColor: '#f9f9f9',
        },
        productImage: {
            maxWidth: '100%',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            marginBottom: '20px',
        },
        productName: {
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '10px',
        },
        productDescription: {
            fontSize: '16px',
            marginBottom: '20px',
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.productName}>{producto.name}</h1>
            <p style={styles.productDescription}>{producto.description}</p>
            {producto.images.map((img, index) => (
                <img key={index} src={img} alt={`${producto.name} imagen ${index + 1}`} style={styles.productImage} />
            ))}
        </div>
    );
};

export default Detalle;