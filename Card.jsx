import axios from "axios";
import React, {Component} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
class Cards extends Component{

    constructor(props) {
      super(props)
    
      this.state = {
         product :[],
      }
    }
    

    componentDidMount(){
        console.log('Inside componentDidMount')
        this.fetchUserDetails()
    }

    fetchUserDetails= async()=>{
        const productsData = await axios.get('https://fakestoreapi.com/products')
        console.log(productsData.data)
        this.setState({product : productsData.data})
    }

    render(){

        return(
            <>
    <div class="row">
  <div class="col"></div>
  <div class="col"></div>
  <div class="col"></div>

    <h3> Cards</h3>
    {this.state.product.map((product) => (
    <Card style={{ width: '18rem' }}
    key = {product.id}
    >
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
        {product.description}

        </Card.Text>
        <Button variant="primary">Price: {product.price}</Button>
        <br></br>
        <br></br>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>
    ))}
  </div>

            </>
        )

    }

}

export default Cards;