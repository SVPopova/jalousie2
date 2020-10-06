import React from "react";
import "./App.css";
import Header from "./landing/Header/Header";
import Main from "./landing/Main/Main";
import Footer from "./landing/Footer/Footer";
import { CatalogContext, numenclatura } from "../context/CatalogContext";
import Popup from "./landing/Popup/Popup";
import normalize from "../styles/normalize.css";
function App() {
  const [art, setArt] = React.useState("");
  const [isCatalogeOpen, setCatalogOpen] = React.useState(false);
  const [parentId, setParentId] = React.useState("");
  const [isPopupOpen, setPopupOpen] = React.useState(false);

  function closeCatalog() {
    setCatalogOpen(false);
    setArt("");
  }

  function handleClickCataloge(e) {
    if (e.target.id !== art) {
      setArt(e.target.id);
      setParentId(e.target.parentElement.parentElement.id);
    } else {
      setCatalogOpen(!isCatalogeOpen);
      setArt(e.target.id);
      setParentId(e.target.parentElement.parentElement.id);
      console.log(isCatalogeOpen);
      console.log(e.target.id);
      console.log(e.target.parentElement.parentElement.id);
    }
  }

  function handleClickPopupOpen() {
    setPopupOpen(!isPopupOpen);
  }

  function closePopup() {
    setPopupOpen(!isPopupOpen);
  }

  return (
    <div className="page">
      <CatalogContext.Provider value={numenclatura[art]}>
        <Header />
        <Main
          isOpen={isCatalogeOpen}
          onClick={handleClickCataloge}
          onClose={closeCatalog}
          parentId={parentId}
          boxId={art}
          onPopup={handleClickPopupOpen}
        />
        <Footer />
        <Popup onClose={closePopup} isOpen={isPopupOpen} />
      </CatalogContext.Provider>
    </div>
  );
}

export default App;
