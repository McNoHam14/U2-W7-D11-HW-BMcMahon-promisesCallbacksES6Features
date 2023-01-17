// 563492ad6f917000010000014247499ec48b43cc862a0e9e17382be5

// {Authorization: "Bearer [YOUR API KEY]"}

// 1) When pressing on Load Images button, load the pictures from https://api.pexels.com/v1/search?query=[your-query]


// {Authorization: "Bearer [563492ad6f917000010000014247499ec48b43cc862a0e9e17382be5]"}

// console.log("page is linked")

const options = {
    method: "GET",
    headers: {
        Authorization: "Bearer 563492ad6f917000010000014247499ec48b43cc862a0e9e17382be5",
    }
}

const getImages = (query) => {
    fetch(`https://api.pexels.com/v1/search?query=${query}`, options)
    .then((response) => response.json())
    .then((data) => {console.log(data), changeCards(data);
    })
    .catch((err) => console.log(err));
}

getImages("space");
getImages("nature");

const changeCards = (data) => {
    let cardRow = document.querySelector("#cardRow");
    let arrayOfImages = data.photos;
    cardRow.innerHTML = "";
    for (let i = 0; i < dataArray.length; i++) {
        cardRow.innerHTML += `
        <div class='col col-3'>
        <div class="card">
            <img src="${singleBook.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${singleBook.title}</h5>
                <p class="card-text">${singleBook.category}, ${singleBook.asin}</p>
                <a href="#" class="btn btn-primary">${singleBook.price}</a>
            </div>
        </div>
    </div>`
}
}