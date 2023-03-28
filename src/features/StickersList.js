import StickerCards from './StickerCards';
import {Col, Row, } from 'reactstrap'
import { selectAllStickers } from "./StickersSlice";

const StickersList = () => {
  const stickers = selectAllStickers();
  return (


    <Row className="p-5">
        {stickers.map((sticker) => {
                        return (
                        <Col xl='3' lg='4' md='6' sm='12' className='mb-5' key={sticker.id}>
                                <StickerCards sticker={sticker} />
                        </Col>
                        );
                    })}
    </Row>
  );
}

export default StickersList;

