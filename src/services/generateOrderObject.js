/*import React from "react";*/

const generateOrderObject = ({
    nombre = "",
    email = "",
    telefono = "",
    cart = [],
    total = 0
}) => {
return {
    buyer: {
        nombre: nombre,
        email: email,
        telefono: telefono,
    },
    items: cart,
    total,
    createdAt: new Date().toLocaleString()
}
}

export default generateOrderObject;