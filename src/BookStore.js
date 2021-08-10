import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

function BookStore() {
    return (
        <section className = "booklist">
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    )
}

const Book = () => {
    return <article>
    <Img></Img>
    <Title/>
    <Author/>
    <Price/>
    <Quality/>
    </article>
}
const Img = () => <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbP9KQQ7BsbbhLVjofmvQ3vZS3Ge7YHaNh2OB2blVzT-kfdkIWK1_D3KqPri0&usqp=CAc" alt=""></img>

const Title = () => <h1>Great Stories to read</h1>
 const Author = () => <h3>Dr Joseph Murthy</h3>
 const Price = () => <h4>Rs.125</h4>
 const Quality = () => <h5>Hardcover</h5>

export default BookStore
