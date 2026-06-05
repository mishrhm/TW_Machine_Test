import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Navbar } from '../components/navBar';
import Welcome from '../components/welcome';
import { SliderHero } from '../components/sliderHero';
import { MainGrid } from '../components/mainGrid';
import { LoadMoreButton } from '../components/loadMoreButton';
import { Footer } from '../components/footer';
import { useAppDispatch } from '../app/hooks';
import { fetchCountries } from '../features/countries/countriesSlice';


const HomePage: React.FC = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchCountries());
    }, [dispatch]);


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