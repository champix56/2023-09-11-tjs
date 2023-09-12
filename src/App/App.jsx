import React, { useEffect, useState } from "react";
import FlexW1G from "./components/layout/FlexW1G/FlexW1G";
import FlexH3G from "./components/layout/FlexH3G/FlexH3G";
import MemeForm from "./components/MemeForm/MemeForm";
import Footer from "./components/ui/Footer/Footer";
import Navbar from "./components/ui/Navbar/Navbar";
import Header from "./components/ui/Header/Header";
import MemeViewer from "./components/ui/MemeViewer/MemeViewer";
import { DummyMeme } from "./interfaces/common";
const App = () => {
  const [current, setcurrent] = useState(DummyMeme);
  const [images, setimages] = useState([
    {
      id: 0,
      url: "https://risibank.fr/cache/medias/0/12/1285/128588/full.png",
      w: 467,
      h: 348,
    },
  ]);
  useEffect(() => {
    fetch("http://localhost:7956/images")
      .then((resp) => resp.json())
      .then((a) => setimages(a));
  }, []);

  return (
    <div className="App">
      <FlexH3G>
        <Header></Header>
        <Navbar></Navbar>
        <FlexW1G>
          <MemeViewer
            meme={current}
            image={images.find((img) => img.id === current.imageId)}
            basePath=""
          ></MemeViewer>
          <MemeForm
            images={images}
            meme={current}
            onMemeChange={(newMeme) => {
              setcurrent(newMeme);
            }}
          ></MemeForm>
        </FlexW1G>
        <Footer></Footer>
      </FlexH3G>
    </div>
  );
};

export default App;
