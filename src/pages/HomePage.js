import SiteAlert from "../components/SiteAlert";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StickersList from "../features/StickersList";

const HomePage = () => {
  return (
    <>
    <SiteAlert />
    <Header />
    <StickersList/>
    <Footer />
    </>
  )
}

export default HomePage;