import React, { Component } from "react";
import "./App.css";
import SearchBar from "./component/SearchBar/SearchBar";
import Loader from "./component/Loader/Loader";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Button from "./component/Button/Button";
import ImageGallery from "./component/ImageGallery/ImageGallery";
import servicesApi from "./services/servicesApi";
import Modal from "./component/Modal/Modal";

class App extends Component {
  state = {
    cards: [],
    loader: false,
    error: null,
    searchQuery: "",
    page: 1,
    showModal: false,
    largeImage: "",
  };
  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;

    if (prevQuery !== nextQuery) {
      this.fetchArticles();
    }
    this.scrollTo();
  }

  fetchArticles = () => {
    const { searchQuery, page } = this.state;
    this.setState({
      loader: true,
    });
    servicesApi
      .fetchArticlesWithQuery(searchQuery, page)
      .then((cards) =>
        this.setState((prevState) => ({
          cards: [...prevState.cards, ...cards],
          page: prevState.page + 1,
        }))
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loader: false }));
  };

  heandlesFormSubmit = (query) => {
    this.setState({ searchQuery: query, page: 1, cards: [] });
  };

  openImage = ({ target }) => {
    const bigImage = target.dataset.source;
    this.setState({
      largeImage: bigImage,
    });
    this.toggleCard();
  };

  toggleCard = () => {
    this.setState((prev) => ({
      showModal: !prev.showModal,
    }));
  };

  scrollTo = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  render() {
    const { cards, loader, error, showModal, largeImage } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.heandlesFormSubmit} />
        {error && <p>Whoops, something went wrong</p>}
        {showModal && <Modal toggleCard={this.toggleCard} image={largeImage} />}
        {loader ? (
          <Loader />
        ) : (
          <ImageGallery cards={cards} openCard={this.openImage} />
        )}
        {cards.length > 0 && <Button loadMore={this.fetchArticles} />}
      </>
    );
  }
}
export default App;
