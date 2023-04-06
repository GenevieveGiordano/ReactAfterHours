import {Card, CardBody,} from 'reactstrap';
import { Link } from 'react-router-dom';
import {useState} from 'react';
// import WaterMark from '../app/img/WaterMark.png';

const StickerCards = ({sticker}) => {
  
    const {id, image, name, description } = sticker;
    return (
      
      <>
      <Link to={`${id}`} className='text-decoration-none'> 
        <Card>
            <div className='img-wrapper'>
                {/* <img src={WaterMark} className='card-img-overlay resize-img img-fluid d-flex p-0' alt='Water mark'/> */}
                <img className='text-decoration-none test-img img-fluid'  src={image} alt={name}/> 
            </div>
            
                <CardBody className='card-text text-center'>
                    <h3>{name}</h3>
                    <p>{description}</p>
                </CardBody> 
        </Card>
      </Link>
      </>
    );
  }
  
  export default StickerCards;

