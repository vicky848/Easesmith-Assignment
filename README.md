1. Component-Based Structure:

The application is organized into reusable components like Header, ProductCard, ProductItem, AddToCartModal, ThankYouPage, Pagination, and Footer. This promotes modular development and simplifies the maintenance and scalability of the project.
2. State Management:

The App.js file manages the application's state using React's useState hook. The cartProducts array keeps track of the items added to the cart, while showCart controls the visibility of the cart modal. Functions like addToCart, toggleCartModel, and onDeleteItemCart are used to handle these functionalities.
3 .Routing:

The project uses react-router-dom for routing. The Router and Routes components are used to define routes for the home page and the thank-you page. When a user views a product, they are redirected to a thank-you page specific to the product.
4 .Product Display and Cart:

The ProductCard component fetches product data from a mock indoorPlants array and renders it using the ProductItem component. Users can add items to the cart or view product details.
The cart items are displayed in the AddToCartModal, and users can delete products from the cart using the onDeleteItemCart function.
5.Pagination:

The Pagination component manages the display of a limited number of products per page. Users can navigate between pages to view more products.
6 .Dynamic Thank You Page:

The ThankYouPage component dynamically renders the name of the product based on the URL parameter (:productName) using useParams from react-router-dom.
Challenges Faced
1 .Handling Product Data:

One of the challenges was managing product data and ensuring that each product was uniquely identified. Initially, there were duplicate id values in the indoorPlants array, which caused issues with rendering unique products. This was resolved by fixing the product data.
2 .Managing Cart State:

Managing the state of the cart items, especially deleting an item from the cart, required careful handling. The onDeleteItemCart function was implemented to filter out products based on their index and re-render the cart modal without the removed item.
3 .Responsive Design:

Ensuring that the layout of components such as the header, product cards, and cart modal were responsive was a focus. CSS styling adjustments were made for different screen sizes to ensure a good user experience across devices.
4 .Routing:

Implementing routing for the thank-you page was a bit challenging, as it needed to be dynamic. This was handled using useNavigate for redirection and useParams to capture the product name from the URL.


How to Run the Project 

1. Clone the Repository:

   git clone <repository-url>
   cd <repository-directory>

2. Install Dependencies:
   npm install

3. Run the Project:
   npm start


This will start the development server, and you can access the app at http://localhost:3000. 



4. Testing the Application:

Browse through the product listings on the homepage.

Click on "Add to Cart" to add products to the cart and view the cart by clicking on the cart icon.

Navigate to the thank-you page by clicking on "View Product" and see the dynamic URL-based product names.

Use the pagination buttons at the bottom to browse through more products


5.  Build for Production:
     npm run build


    

























# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) 






