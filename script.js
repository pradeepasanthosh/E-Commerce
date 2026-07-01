const products = [
{
    name:"Laptop",
    price:"₹50,000",
    image:"images/laptop.jpg"
},
{
    name:"Smartphone",
    price:"₹25,000",
    image:"images/smartphone.jpg"
},
{
    name:"Headphones",
    price:"₹3,000",
    image:"images/headphones.jpg"
},
{
    name:"Smart Watch",
    price:"₹5,000",
    image:"images/smartwatch.jpg"
},
{
    name:"Camera",
    price:"₹40,000",
    image:"images/camera.jpg"
},
{
    name:"Speaker",
    price:"₹4,000",
    image:"images/speaker.jpg"
}
];

const container = document.getElementById("productContainer");

function displayProducts(items){
    container.innerHTML="";

    items.forEach(product=>{
        container.innerHTML += `
        <div class="card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button>View Details</button>
        </div>
        `;
    });
}

displayProducts(products);

function searchProducts(){
    const search =
        document.getElementById("searchInput")
        .value
        .toLowerCase();

    const filtered = products.filter(product =>
        product.name.toLowerCase().includes(search)
    );

    displayProducts(filtered);
}

function showPage(pageId){
    document.querySelectorAll(".page")
    .forEach(page=>{
        page.style.display="none";
    });

    document.getElementById(pageId)
    .style.display="block";
