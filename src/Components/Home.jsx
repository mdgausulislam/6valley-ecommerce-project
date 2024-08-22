import React from "react";
import Banner from "./Banner";
import FlashDeal from "./FlashDeal";
import FeatureProducts from "./FeatureProducts";
import CategoriesProduct from "./CategoriesProduct";
import FeaturedDeal from "./FeaturedDeal";
import TopSellers from "./TopSellers";
import LatestProducts from "./LatestProducts";
import NewArival from "./NewArival";

function Home() {
  return (
    <div>
      <Banner />
      <FlashDeal />
      <FeatureProducts />
      <CategoriesProduct />
      <FeaturedDeal />
      <TopSellers />
      <LatestProducts />
      <NewArival />
    </div>
  );
}

export default Home;
