import { Col, Row, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

import React from 'react'

const BreadCrumbs = ({ current, detail }) => {
    return (
        <Row className=''>
            <Col className='col-2'>
            </Col>
                {/* when i figure it out get rid of col above entirely and col-8 below  */}
            <Col className='col-8 d-flex'>
                <Breadcrumb className='my-3'>

                    <BreadcrumbItem className=''><Link to='/'>Home</Link></BreadcrumbItem>
                    
                    {detail && (
                        <BreadcrumbItem>
                            <Link to='/Shop'>Shop</Link>
                        </BreadcrumbItem>
                    )}

                    <BreadcrumbItem active>{current}</BreadcrumbItem>
                
                </Breadcrumb>
                <hr />
            </Col>

            
        </Row>
    );
};

export default BreadCrumbs