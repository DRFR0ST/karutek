import React from 'react';
import { useItems } from '../api/hooks';
import { Card, Header, Container, About, Footer } from '../comps';

const ENTRIES_PER_PAGE = 10;

const Home = () => {
    const [posts] = useItems(ENTRIES_PER_PAGE);

    return <div className="Home">
        <Header />
        <About />
        <div className="Home__cards">
        {posts.map((e, i) => <Card key={e.id} {...e} leftAligned={Boolean(i%2 === 1)} featured={Boolean(i === 0)} />)}
        </div>
        <Footer />
    </div>
}

export default Home;