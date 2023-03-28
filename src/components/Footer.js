import { Col, Row, } from 'reactstrap';

const Footer = () => {
  return (
    <footer className='site-footer'>
        <Row>
            <Col className="text-center">
                <h5>Links</h5>
                <ul className="list-unstyled">
                    <li className="text-decoration-none">Home</li>
                    <li className="text-decoration-none">About</li>
                    <li className="text-decoration-none">Gallery</li>
                    <li className="text-decoration-none">Contact</li>
                </ul>
            </Col>
            <Col className="text-center">
                <h5>Socials</h5>
                <ul className="list-unstyled">
                    <li><a className="text-decoration-none" href="https://www.instagram.com/after.hours.ikana/">Ikana Instagram</a></li>
                    <li><a className="text-decoration-none" href="https://www.instagram.com/after_hours_society/">After Hours Instagram</a></li>
                    <li><a className="text-decoration-none" href="https://www.tiktok.com/@ikana.chan">Ikana TikTok</a></li>
                    <li><a className="text-decoration-none" href="https://www.etsy.com/shop/AfterHoursSociety">Etsy</a></li>
                </ul>
            </Col>
            <Col className="text-center">
                <h5>Contact Us</h5>
                <p>the.after.hours.society@gmail.com</p>
            </Col>
        </Row>
    </footer>
  );
};

export default Footer;