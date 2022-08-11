import { db } from ".";
import { query, where, collection, getDocs} from 'firebase/firestore';


export const getProducts = (categoryId) => {
    return new Promise((resolve, reject) => {
        const collectionRef = categoryId ? ( 
            query(collection(db, 'products'), where('category', '==', categoryId))
        ) : ( collection(db, 'products') )

        getDocs(collectionRef).then(response => {
            const productsFormatted = response.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            resolve(productsFormatted)
        }).catch(error => {
            reject(error)
        })
    })
}