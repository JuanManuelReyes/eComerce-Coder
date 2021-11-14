//Imports
//FireBase
import { collection, getDocs, query, where } from '@firebase/firestore';
//Diseño
import { Container, LinearProgress } from '@mui/material';
//React
import React, { useEffect, useState } from 'react';
//Se importa la Base de Datos
import { dataBase } from '../../firebase/firebase';
//Archivo Item List
import ItemList from '../itemList/ItemList';

const ItemListContainer = ({ match }) => {

    const categoryId = match.params.id
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        setIsLoading(true);
        setItems([]);

        const requestData = async () => {

            const queryConstraints = [];
            if (categoryId !== undefined) {
                queryConstraints.push(where('categoryId', '==', categoryId));
            }

            const q = query(collection(dataBase, 'cases'), ...queryConstraints);
            const itemsSnapshot = await getDocs(q);
            const itemsList = itemsSnapshot.docs
                .map((document) => ({ ...document.data(), id: document.id }));

            setItems(itemsList);
            setIsLoading(false);
            
            //Console de Prueba console.log (itemsList);

        }
        requestData();

    }, [categoryId])

    return (
        <>
            {isLoading && <LinearProgress />}
            <Container>
                <ItemList items={items} />
            </Container>
        </>
    );
}

export default ItemListContainer;