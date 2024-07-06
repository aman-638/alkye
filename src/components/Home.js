import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Slider from "./Slider";

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="p-8 pt-3">
        <h1 className="text-4xl md:text-6xl">Welcome Test</h1>
        <p className="text-2xl my-4 ml-1 md:ml-3">
          Hope you having a good day!
        </p>
        <section>
          <h2 className="text-3xl md:text-4xl mt-12 mb-4 ml-1 md:ml-3">
            Photography
          </h2>
          <Slider />
        </section>
        <section>
          <h2 className="text-3xl md:text-4xl mt-20 mb-4 ml-1 md:ml-3">
            Learning
          </h2>
          <Slider />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
