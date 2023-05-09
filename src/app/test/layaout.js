import NavBar from "../../components/navBar";
import { Providers } from "../../redux/provider";

export default function TestLayout({ children }) {
    return (
      <section>
        <Providers>
            <NavBar/>
            {children}
        </Providers>
      </section>
    );
  }