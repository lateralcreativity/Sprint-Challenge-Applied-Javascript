// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

cardsEndPoint = document.querySelector('.cards-container');

function articleFetcher(topic) {
    axios.get('https://lambda-times-backend.herokuapp.com/articles')
        .then(resolve => {
            resolve.data.articles[`${topic}`].forEach(article => {
                cardsEndPoint.appendChild(Article(article));
            })
        })
        .catch(error => {
            console.log('Error', error);
        });
}

articleFetcher("javascript");
articleFetcher("bootstrap");
articleFetcher("technology");
articleFetcher("jquery");
articleFetcher("node");

function Article(resolve) {

    // Create elements
    const card = create('div');
    const headline = create('div');
    const author = create('div');
    const imgContainer = create('div');
    const authorImage = create('img');
    const authorName = create('span');

    // Add classes
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    // Fill with content
    headline.textContent = resolve.headline;
    authorImage.src = resolve.authorPhoto;
    authorName.textContent = resolve.authorName;

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    author.appendChild(authorName);
    imgContainer.appendChild(authorImage);

    return card;
}