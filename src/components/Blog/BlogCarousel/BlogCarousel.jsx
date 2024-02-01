import React from 'react'
import { Carousel, Card } from 'react-bootstrap';

const BlogCarousel = ({ slides }) => {
    
    <Carousel>
        {slides.map((slide, index) => (
            <Carousel.Item key={index}>
                <div className="d-flex justify-content-around">
                    <Card>
                        <Card.Img variant="top" src={slide.image1} alt={`Card 1 of Slide ${index + 1}`} />
                        <Card.Body>
                            <Card.Title>{slide.title1}</Card.Title>
                            <Card.Text>{slide.description1}</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={slide.image1} alt={`Card 1 of Slide ${index + 1}`} />
                        <Card.Body>
                            <Card.Title>{slide.title1}</Card.Title>
                            <Card.Text>{slide.description1}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </Carousel.Item>
        ))}
    </Carousel>


}

export default BlogCarousel;