import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

const FirstBook ={
         title : " Great Stories to read " ,
         author : " Dr Joseph Murthy " ,
         img : " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGgureMg79tqeB3mgwK02Kawx8_Bg3SzOsS_qTwuGTTJT0Ygk-V7Oh0N5nl08&usqp=CAc ",

    }
    const SecondBook ={
        title : "Because life is a gift " ,
        author : " Disha " ,
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNLvc_7RJDyxEv0F_9ZbVAPW0P7RUvT0ac8nbM3ZieZw7cRbZgaFYIJkq1OQU8u7tB6jSsO1U&usqp=CAc",

   }
   const ThirdBook ={
    title : " Fear not be strong " ,
    author : " Swami Vivekanand " ,
    img : " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7UMloPLjPfclANwuOYIpwFhdsdsiQw7Y42XYklzdJSWdyFHLqotKiSnKjRQ&usqp=CAc ",

}
    function BookStore() {
    return (
        <section className = "booklist">
            <Book img={FirstBook.img} title={FirstBook.title} author={FirstBook.author} />
            <Book img={SecondBook.img} title={SecondBook.title} author={SecondBook.author} />
            <Book img={ThirdBook.img} title={ThirdBook.title} author={ThirdBook.author} />
        </section>
    )
}

const Book = (props) => {
    return (<article className='book'>
        <img src={props.img}></img>
        <h1>{props.title}</h1>
        <h3>{props.author}</h3>
         </article>
    );
}
export default BookStore
