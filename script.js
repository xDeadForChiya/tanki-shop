$.ajax({
    url: `https://my-json-server.typicode.com/MrKopchick/ShopRepository/products`,
    dataType: 'json',
    success: (results) => {
        results.forEach(element => {
            $('#container').append(`
            <div class="product">
            <img src="${element.photo_url}">
            <p>${element.name}</p>
            <p>Description: ${element.description}</p>
            <p>Price: ${element.price}</p>
            <button>Buy</button>
            <a href="#">Seller profile <-- Tap</a>
            </div>
            `
            )
            console.log(element);
        });

    },
    error: (err) => {
        console.log("хз чел, иди поплач")
    }
})