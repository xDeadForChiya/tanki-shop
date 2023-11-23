let cart = [];
if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'))
    drawCart()
}

$.ajax({
    url: `https://my-json-server.typicode.com/MrKopchick/ShopRepository/products`,
    dataType: 'json',
    success: (results) => {
        results.forEach(element => {
            $('#container').append(`
                <div class="product">
                    <img src="${element.photo_url}" >
                    <p>${element.name}</p>
                    <p>Description: ${element.description}</p>
                    <p>Price: ${element.price}</p>
                    <a href="profile.html?id=${element.author_id}">Seller Profile</a>
                    <br>
                    <button onclick= "addProduct(${element.id})">Buy</button>
                </div>
                ` )
            console.log(element);
        });

    },
    error: (err) => {
        console.log("хз чел, выруби комп бездпрь, иди поплач")
    }
});

$('#cart-button').click(() => {
    $('#cart-product').toggle()
})
function addProduct(id) {
    console.log(id);
    $.ajax({
        url: `https://my-json-server.typicode.com/MrKopchick/ShopRepository/products/${id}`,
        dataType: 'json',
        success: (result) => {
            cart.push(result);
            drawCart();
            localStorage.setItem('cart', JSON.stringify(cart))
        },
        error: (error) => {
            console.log(error);
        }
    })
}

function drawCart() {
    $('#cart-product').empty()
    cart.forEach(element => {
        $('#cart-product').append(`
        <div class="cart-products">
            <img src ="${element.photo_url}">
            <p>${element.name}</p>
            <p>Price: ${element.price}</p>
        </div>
        `)
    })
    $('#cart-product').append(`
    <button onclick="buyAll()">buy all</button>
    `)
}
function buyAll() {
    cart = []
    $('#cart-product').empty();
    $('#cart-product').append('spend your money pls:3');
    localStorage.setItem('cart', '[]')
}
