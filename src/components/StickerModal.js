import {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, FormGroup, Label} from 'reactstrap';
import {Formik, Field, Form, ErrorMessage} from 'formik';

const StickerModal = ({stickerId}) => {

    const [modalOpen, setModalOpen] = useState(false);

    const handleSubmit = (values) => {
        const comment = {
            campsiteId: parseInt(stickerId),
            rating: values.rating,
            author: values.author,
            text: values.commentText,
        };
        console.log(comment);
        setModalOpen(false);
    }

  return (
    <>
    <Button outline onClick={() => setModalOpen(true)}>
        <i className='fa fa-pencil fa-lg' /> Add Comment
    </Button>
    <Modal isOpen={modalOpen}>
        <ModalHeader toggle={()=> setModalOpen(false)}>
            Add Comment
        </ModalHeader>
        <ModalBody>
            <Formik 
                initialValues={{
                    rating: undefined,
                    author: "",
                    commentText: "",
                    }} 
                onSubmit={handleSubmit}
                // validate={validateCommentForm}
                >
                        <Form>
                            <FormGroup>
                                <Label htmlFor="rating">Rating</Label>
                                <Field
                                    name='rating'
                                    as='select'
                                    className='form-control'
                                >
                                    <option disabled>Select...</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option selected>5</option>
                                </Field>
                                <ErrorMessage name='rating'>
                                    {(msg) => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="author">Your name</Label>
                                <Field
                                    name='author'
                                    placeholder='Your Name'
                                    className='form-control'
                                />
                                <ErrorMessage name='author'>
                                    {(msg) => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="commentText">Comment Text</Label>
                                <Field
                                    name='commentText'
                                    as='textarea'
                                    rows='12'
                                    className='form-control'
                                />
                                <ErrorMessage name='commentText'>
                                    {(msg) => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
                            </FormGroup>

                            <FormGroup>
                            <Button type='submit' color='primary'>
                                Submit
                            </Button>
                            </FormGroup>
                        </Form>

            </Formik>
        </ModalBody>
    </Modal>
    </>
  )
}
export default StickerModal