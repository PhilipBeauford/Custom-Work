import Head from "next/head";
import { getProductsInCollection } from "../lib/shopify";
import ProductList from "../components/ProductListMe";
import HeroEcom from "../components/HeroEcom";
import FeatureGridImage from "../components/FeatureGridImage";
import FeatureGrid from "../components/FeatureGrid";
import HeroMine from './../components/HeroMine';


export default function Home({ products }) {

console.log(products)

  return (
    <div className="text-3xl">
        <HeroMine />
        {/* <HeroEcom /> */}
        <ProductList products={products} />
        <FeatureGrid />
        <FeatureGridImage />
    </div>
  );
}



export async function getStaticProps() {
  const products = await getProductsInCollection()

  return {
    props: { products }, // will be passed to the page component as props
  }
}