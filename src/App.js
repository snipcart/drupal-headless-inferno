import { version, Component } from 'inferno';
import './registerServiceWorker';
import Logo from './logo';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      products: []
    }
  }

  componentDidMount() {
    fetch('https://drupal-snipcart.herokuapp.com/products?_format=json')
      .then(x => x.json())
      .then(x => this.setState({ products: x }));
  }

  render() {
    let products = this.state.products;

    return (
      <div className="App">
        <header className="App-header">
          <h1> Welcome to our Inferno powered store </h1>
        </header>

        <div class="products">
          {  products.map(x => (
            <div class="product-details">
              <img src={ `https://drupal-snipcart.herokuapp.com/${x.image}` }
                height='200'
                class="thumbnail"/>
              
              <div class="product-description">
              <p>{ x.name }</p>

              <button class="snipcart-add-item"
                data-item-name={ x.name }
                data-item-id={x.id }
                data-item-image={ `https://drupal-snipcart.herokuapp.com/${x.image}` }
                data-item-description={ x.description }
                data-item-url="https://drupal-snipcart.herokuapp.com/products?_format=json"
                data-item-price={ x.price }>
                Buy it for { x.price } $
              </button>
            </div>
          </div>)) 
        }
        </div>
      </div>
    );
  }
}

export default App;
