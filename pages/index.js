import Head from "next/head";
import { getProductsInCollection } from "../lib/shopify";
import ProductList from "../components/ProductList";
import HeroEcom from "../components/HeroEcom";


export default function Home({ products }) {

console.log(products)

  return (
    <div className="text-3xl">
        <HeroEcom />
        <ProductList products={products} />
    </div>
  );
}



export async function getStaticProps() {
  const products = await getProductsInCollection()

  return {
    props: { products }, // will be passed to the page component as props
  }
}