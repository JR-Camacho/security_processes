import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

const MainLayout = ({ children }) => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-200">
      <header className="w-full">
        <NavBar />
      </header>
      <main className="w-full flex-grow">{children}</main>
      <Footer/>
    </div>
  );
};

export default MainLayout;
