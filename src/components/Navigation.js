import React from "react";
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Nav, Navbar} from 'react-bootstrap'
import logo from '../favicon.jpeg'

class Navigation extends Component {
    render (){
        return (
            <div>
                <Navbar bg='dark' variant="dark" sticky="top" expand='md' collapseOnSelect>
                <Navbar.Brand href='/'>
                    <img src= {logo} width='50px' alt='logo' />
                    Asia's AI Bloggers
                </Navbar.Brand>

                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link href='blog-titles'>Blog Titles</Nav.Link>
                        <Nav.Link href='product-descriptions'>Product Descriptions</Nav.Link>
                        <Nav.Link href='cold-emails'>Cold Emails</Nav.Link>
                    </Nav>


                </Navbar.Collapse>



                </Navbar>
            
            </div>
        )
    }
}

export default Navigation