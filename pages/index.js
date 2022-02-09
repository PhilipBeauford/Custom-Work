import Head from "next/head";
import { getProductsInCollection } from "../lib/shopify";
import ProductList from "../components/ProductListMe";
import FeatureGrid from "../components/FeatureGrid";
import HeroMine from './../components/HeroMine';
import Reviews from './../components/Reviews';
import CartSlider from "../components/CartSlider";


export default function Home({ products }) {

console.log(products)

  return (
    <div className="text-3xl">
        <Head>
          <title>NextJS - TailWind - Shopify</title>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta httpEquiv="Content-Type" content="text/html; charset=ISO-8859-1" />
          <meta name="description" content="Modern eCommerce Utilizing NextJS, TailwindCSS/UI, Shopify & GraphQL. 
            Additional tech stack includes Storefront API, Static Site Generation, getStaticPaths, getStaticProps and more." />
          <meta property="og:title" content="NextJS - TailWind - Shopify" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://shopify-next-js-tailwind-lilac.vercel.app/" />
          {/* <meta property="og:image" content="./share.png" /> */}
          <meta property="og:description"
            content="Modern eCommerce Utilizing NextJS, TailwindCSS/UI, Shopify & GraphQL. 
            Additional tech stack includes Storefront API, Static Site Generation, getStaticPaths, getStaticProps and more." />
          <meta property="og:locale" content="en_US" />
          <meta property="og:site_name" content="NextJS - TailWind - Shopify" />
        </Head>
        <HeroMine />
        <ProductList products={products} />
        <FeatureGrid />
        <Reviews />
        
    </div>
  );
}



export async function getStaticProps() {
  const products = await getProductsInCollection()

  return {
    props: { products }, // will be passed to the page component as props
  }
}