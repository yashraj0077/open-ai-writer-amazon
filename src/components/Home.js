import React from "react";
import { Component } from  'react';
import Display from './Display';
import {Container, Row, Col, Carousel} from 'react-bootstrap';
import mainImage from '../main-image.jpg'


class Home extends Component {
    render () {
        return (
            <div>
                <br/>
                <Container>
                    <Carousel>
                        <Carousel.Item>
                            <img className="d-block w-100" src={mainImage} alt='Muliple people typing on keyboards'  />
                        </Carousel.Item>
                    </Carousel>
                    <br />
                    <br />
                    <h1>AI Writing Assistant</h1>
                    <p>Enter the future and let AI join your team. Choose your engine below </p>
                    <br />
                    <br />
                    <Row>
                        <Col>
                        <Display
                        header='Blog Titles'
                        title='Generate Unique Blog Titles'
                        text='Not sure what to write next? Simply enter a subject to generate a list of potential blog titles'
                        theLink='/blog-titles' />
                        </Col>
                        <Col>
                        <Display
                        header='Product Descriptions'
                        title='Create Compelling Product Descriptions'
                        text='Attract new customers with compelling AI-generated product descriptions. Just enter the product name and a sentence about your company'
                        theLink='/product-descriptions' />
                        </Col>
                        <Col>
                        <Display
                        header='Cold Emails'
                        title='Write Attention-Grabbing Cold Emails'
                        text='Not sure what to write next? Simply enter a subject to generate a list of potential blog titles'
                        theLink='/cold-emails' />
                        </Col>

                    </Row>
                </Container>
            </div>
        )
    }
}

export default Home 