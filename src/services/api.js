const baseUrl = 'https://eataly-test-dev.herokuapp.com/api/v1'

export async function getCart(cartId) {

    const response = await fetch(`${baseUrl}/cart/${cartId}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    });
    return await response.json();
}

export async function submitOrder(cartId, cartItems) {

    const body = {
        cart_id: cartId, 
        items: cartItems
    }

    console.log(JSON.stringify(body))

    const response = await fetch(`${baseUrl}/order`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
    });
    return await response.json();
}