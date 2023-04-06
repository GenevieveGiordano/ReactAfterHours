import BreadCrumbs from "../components/BreadCrumbs";
import StickersList from "../features/StickersList";


const ProductPage = () => {
  return (
        <>
        <BreadCrumbs current='Shop'/>
        <h1 className="text-center">IM THE SHOP PAGE</h1>
        <StickersList/>
        </>
  )
}

export default ProductPage;