import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
    return (
        <div>
            <Header />
            <section className='m-5 md:m-20'>
                {children}
            </section>
            <Footer />
        </div>
    )
}
