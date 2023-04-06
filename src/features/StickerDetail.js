import { Card, CardImg, Col } from 'reactstrap';


import React from 'react';

const StickerDetail = ({sticker}) => {
    const { image, name} = sticker;

    return (
       <Col md='5' className='m-1'>
           <Card>
               <CardImg top src={image} alt={name}/>
           </Card>
       </Col>
           
    );
   };

export default StickerDetail;