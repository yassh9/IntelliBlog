import BlogList from "../components/BlogList"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import NewsLetter from "../components/NewsLetter"

const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            <BlogList />
            <NewsLetter />
            <Footer />
        </>
    )
}

export default Home
