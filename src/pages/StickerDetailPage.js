import { Row, Col, FormGroup, Label } from 'reactstrap';
import { useParams } from 'react-router-dom';

import { selectStickerById } from '../features/StickersSlice';
import BreadCrumbs from '../components/BreadCrumbs';
import StickerDetail from '../features/StickerDetail';

import {Formik, Field, Form} from 'formik';

const StickerDetailPage = () => {
    const { stickerId } = useParams(); //useParams is a Hook
    const sticker = selectStickerById(stickerId);

  return (
    <>
    
    <BreadCrumbs current={sticker.name} detail={true}/>
        <Row>
            <Col className='col-6 d-flex justify-content-end'>
            <StickerDetail sticker={sticker}/>
            </Col>
            
            <Col className='col-2 align-self-end border'>
                <Formik>
                    <Form className='text-center'>
                        <FormGroup>
                            <Label htmlFor="material">Material</Label>
                            <Field 
                            name='material' 
                            as='select'
                            className='form-control text-center'
                            >
                                <option>Sticker Paper</option>
                                <option>Printable Vinyl</option>
                                <option>Holographic Vinyl</option>
                                <option>Decal Layered Vinyl</option>
                            </Field>
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor="laminate">Laminate</Label>
                            <Field 
                            name='laminate' 
                            as='select'
                            className='form-control text-center'
                            >
                                <option>Matte</option>
                                <option>Glossy</option>
                                {/* add a tooltip to say durability */}
                            </Field>
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor="qty">Quantity</Label>
                            <Field 
                            name='qty' 
                            as='select'
                            className='form-control text-center'
                            >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </Field>
                        </FormGroup>
                    </Form>
                </Formik>
            </Col>
    
        </Row>
    </>
  )
}

export default StickerDetailPage