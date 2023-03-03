import {addDoc, collection} from "firebase/firestore";
import {db} from "../firebase/config";
import products from '../data/accesorios.json';

const saveFromJSONToFirebase = async () => {
    try {
        products.forEach(async(product) => {
            const docRef = await addDoc(collection(db, "Products"), {
                title: product.title,
                price: product.price,
                stock: product.stock || 2,
                image: product.image,


            });
            console.log("Document written with ID: ", docRef.id);
        })
    } catch (error) {
        console.log(error)
    }
}

export default saveFromJSONToFirebase;