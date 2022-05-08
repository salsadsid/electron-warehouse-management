import React from 'react';

const Blogs = () => {
    return (
        <div className='container my-4'>
            <h2 className='text-center my-3'>Blogs</h2>
            <div className="row">

                <div className="col-10 m-2 card mx-auto">
                    <div className="card-body">
                        <h5 className="card-title">Difference between javascript and nodejs ?</h5>
                        <p className="card-text">Javascript is a Scripting language. It is a programming language. NodeJS is a cross-platform and open source Javascript runtime environment. NodeJS is not programming language. NodeJS is a server-side javascript runtime. Javascript mostly used in client side. Javascript used for frontend development. NodeJS used for backend development. Every browser can run Javascript. Google Chrome has powerful V8 engine to run Javascript.</p>
                    </div>
                </div>
                <div className="col-10 m-2 card mx-auto">
                    <div className="card-body">
                        <h5 className="card-title">Differences between sql and nosql databases?</h5>
                        <p className="card-text">
                            SQL means Relational database management system -RDBMS. NoSQL means Non-relational or distributed database system. SQL based on Structured Query Language-SQL. SQL is extremely poewrful language.In SQL data must follow same structure.It is restrictive. SQL is handy for vertically scalable data. NoSQL database is a document oriented database. It is flexible, not restrictive like SQL.It is handy for horizontally scalable data.
                        </p>
                    </div>
                </div>
                <div className="col-10 m-2 card mx-auto">
                    <div className="card-body">
                        <h5 className="card-title">What is the purpose of jwt and how does it work ?</h5>
                        <p className="card-text">
                            JWT - JSON Web Token - is an open standard used to share security information between two parties — a client and a server.JWT is used for transmit information between to parties.A JWT String made of three parts. 1. the header, 2. the payload, 3. the signature.It works in complex way. The server generates a token that certifies the user identity, and sends it to the client. The client will send the token back to the server for every subsequent request, so the server knows the request comes from a particular identity.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;