import React from 'react';
import ReactDom from 'react-dom';

function BookStore() {
    return (
        <section>
            <Book />
        </section>
    )
}

const Book = () => {
    return <article>
    <Img></Img>
    <Title/>
    <Author/>
    </article>
}
const Img = () => <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbP9KQQ7BsbbhLVjofmvQ3vZS3Ge7YHaNh2OB2blVzT-kfdkIWK1_D3KqPri0&usqp=CAc" alt=""></img>

const Title = () => <h1>Great Stories to read</h1>
 const Author = () => <h3>Dr Joseph Murthy</h3>

export default BookStore
