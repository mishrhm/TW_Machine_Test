import React from 'react';
import { Container } from 'react-bootstrap';
import { Navbar } from '../components/navBar';
import Welcome from '../components/welcome';
import { SliderHero } from '../components/sliderHero';
import { MainGrid } from '../components/mainGrid';
import { LoadMoreButton } from '../components/loadMoreButton';
import { Footer } from '../components/footer';


const HomePage: React.FC = () => {


    return (
        <Container className="py-4 bg-white min-vh-100 max-w-5xl">

            <Navbar></Navbar>

            <Welcome></Welcome>

            <SliderHero></SliderHero>

            <MainGrid></MainGrid>

            <LoadMoreButton></LoadMoreButton>

            <Footer></Footer>
        </Container>
    );
};

export default HomePage;