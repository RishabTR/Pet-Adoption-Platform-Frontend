import HeaderUser from "./Header_User";
import Footer from "./Footer";
function Layout2({children}) {
  return (
    <>
      <HeaderUser />
      {children}
      <Footer/>
    </>
  );
}

export default Layout2;