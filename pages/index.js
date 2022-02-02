import Head from "next/head";
import { getProductsInCollection } from "../lib/shopify";
import ProductList from "../components/ProductListMe";
import FeatureGrid from "../components/FeatureGrid";
import HeroMine from './../components/HeroMine';
import Reviews from './../components/Reviews';
import AlsoPurchased from "../components/AlsoPurchased";


export default function Home({ products }) {

console.log(products)

  return (
    <div className="text-3xl">
        <HeroMine />
        {/* <HeroEcom /> */}
        <ProductList products={products} />
        <Reviews />
        {/* <AlsoPurchased products={products}/> */}
        <FeatureGrid />
    </div>
  );
}



export async function getStaticProps() {
  const products = await getProductsInCollection()

  return {
    props: { products }, // will be passed to the page component as props
  }
}