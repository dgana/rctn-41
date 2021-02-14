import React from 'react';
import './SearchPage.css';
import { Button } from "@material-ui/core";
import SearchResult from './SearchResult';

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <p>300+ stays</p>
                <h1>Stays nearby</h1>
                <Button variant='outlined'>Cancellation Flexibility</Button>
                <Button variant='outlined'>Type of place</Button>
                <Button variant='outlined'>Price</Button>
                <Button variant='outlined'>Rooms and beds</Button>
                <Button variant='outlined'>More filters</Button>
            </div>
            <SearchResult 
                img="https://a0.muscache.com/im/pictures/0a8c977e-315c-4649-b80f-54ebdf3d0e36.jpg?aki_policy=x_large"
                location="Entire apartment in South Jakarta" 
                title="ADMIRAL SEMANGGI" 
                description="1 guest · 1 bedroom · 1 bed · 1.5 baths" 
                star={4.91} 
                price="$22 / night" 
            />

            <SearchResult 
                img="https://a0.muscache.com/im/pictures/f5c19977-c166-4c85-b34e-bfc4dbee860e.jpg?aki_policy=x_large"
                location="Entire apartment in Tebet" 
                title="Low Cost,Homely 1 bedroom apartment,Deals in desc." 
                description="2 guests · 1 bedroom · 1 bed · 1 bath" 
                star={4.80} 
                price="$18 / night" 
            />

            <SearchResult 
                img="https://a0.muscache.com/im/pictures/e6704362-7a55-4357-a0ed-c978b4f0e35a.jpg?aki_policy=large"
                location="Entire apartment in Tangerang" 
                title="Entire apartment hosted by Selena" 
                description="2 guests · 1 bedroom · 1 bed · 1 bath" 
                star={5.00} 
                price="$25 / night" 
            />

            <SearchResult 
                img="https://a0.muscache.com/im/pictures/f5ec3cd7-7592-4920-899d-ede4eec79e23.jpg?aki_policy=x_large"
                location="Entire condominium in Pinang" 
                title="Entire condominium hosted by Maui" 
                description="2 guests · 1 bedroom · 1 bed · 1 bath" 
                star={4.98} 
                price="$20 / night" 
            />

            <SearchResult 
                img="https://a0.muscache.com/im/pictures/25150e8f-0637-4152-b01d-7bbfc70bfaac.jpg?im_w=960"
                location="Resort-like Instagramable Staycation near Jakarta" 
                title="Entire apartment hosted by Lilis" 
                description="2 guests · 1 bedroom · 1 bed · 1 bath" 
                star={4.98} 
                price="$23 / night" 
            />
        </div>
    )
}

export default SearchPage
