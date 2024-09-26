import Link from "next/link";
import { Button } from "./button";
import Nav from "./Nav";

const Header = () => {
    return( 
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/* logo PRRRRR */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Reda <span className="text-accent">.</span>
                    </h1>
                </Link> 
            {/* Desktop Navigator*/}

                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                        <Button> Hire me </Button>
                    </Link>
                </div>

                {/* Mobile use */}
                <div className="xl:hidden"> mobile nav </div>
            </div> 
        </header>
    );
};

export default Header;