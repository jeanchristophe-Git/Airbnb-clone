import CardList from "../components/CardList"
import Categories from "../components/Categorie"
import Nav from "../components/Nav"
import Search from "../components/Search"
import Footer from "../components/Footer"
import LinksHome from "../components/LinksHome"

export default function Home() {
  return (
    <div className:"overflow-hidden">
      <Nav />
      <Search />
      <Categories />
      <CardList />
      <LinksHome />
      <Footer />
    <div/>
  )
}
