//Imports
//FireBase
import { doc, getDoc } from '@firebase/firestore';
//Diseño
import { Container, LinearProgress } from '@mui/material';
//React
import React, { useEffect, useState } from 'react';
//Se importa la Base de Datos
import { dataBase } from '../../firebase/firebase';
//Archivo ItemDetail
import ItemDetail from '../itemDetail/ItemDetail';

const ItemDetailContainer = ({ match }) => {

    const itemId = match.params.id;
    const [item, setItem] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        
        const requestData = async () => {
            const docRef = doc(dataBase, 'cases', itemId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const item = docSnap.data();
                const id = docSnap.id;

                setItem({...item, id});
                setIsLoading(false);
            }
        } 
        requestData();

    }, [itemId])

    return (
        <>
            {isLoading
                ? <LinearProgress />
                : 
                <Container sx={{ marginTop: 2 }}>
                    <ItemDetail item={item} />
                </Container>
            }
        </>
    );
}

export default ItemDetailContainer;