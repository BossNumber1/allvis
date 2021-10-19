import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta
                        name="keywords"
                        content="сайты на заказ, создание сайтов-визиток, сайты-визитки, сайт-визитка"
                    />
                    <meta
                        name="description"
                        content="Создание сайтов-визиток на заказ"
                    />
                    <link
                        rel="stylesheet"
                        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
