import StickerCards from './StickerCards';
import {Col, Row, } from 'reactstrap'
import { selectAllStickers } from "./StickersSlice";
import StickerModal from '../components/StickerModal';

const StickersList = ({stickerId}) => {
  const stickers = selectAllStickers(stickerId);
  return (


    <Row className="p-5">
      <Col className='col-2'>

      </Col>



{/* this nested row is why i can have the banners on the side */}
      <Col>
      <Row>
        {stickers.map((sticker) => {
                        return (
                        <>
                        {/* xl='2' lg='4' md='6' sm='12' */}
                        
                        <Col xl='3' className=' mb-5' key={sticker.id}>
                                <StickerCards sticker={sticker} />
                                <StickerModal stickerId={stickerId}/>
                        </Col>
                        
                        </>
                        
                        );
                    })}
      </Row>
      </Col>

      <Col className='col-2'>

      </Col>
    </Row>
  );
}

export default StickersList;

