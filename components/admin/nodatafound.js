import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

export default function nodatafound() {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta content="width=device-width, initial-scale=1.0" name="viewport" />

                <title>No data found</title>
                <meta content="" name="description" />
                <meta content="" name="keywords" />
                {/* <!-- Template Main CSS File --> */}
                <link href="/assets/admin/css/style.css" rel="stylesheet" />
                <link href="/assets/css/cust165.css" rel="stylesheet" />
            </Head>

                <main>
                    <div className="container">

                    <section className="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center textcenter">
                            <h1>404</h1>
                            <h2>The page you are looking for doesn't exist.</h2>
                            <img src="/assets/admin/img/not-found.svg" className="img-fluid py-5" alt="Page Not Found" />
                        <div className='margintop50px'>
                            <Link className="btn" href="/">Back to home</Link>
                            </div>
                        </section>

                    </div>
                </main>

        </>
    )
}
