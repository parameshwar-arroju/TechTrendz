import logo from "../assets/logo.jpeg";
import cart from "../assets/shopping-cart.png";
import './Header.css'

export function Header() {
    return (<>
        <nav class="navbar navbar-expand-lg fixed-top bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><img src={logo} alt="logo" className="logo image-fluid" /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        <a class="nav-link" href="#Products">Products</a>
                        <a class="nav-link" href="#Categories">Categories</a>
                    </div>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-dark" type="submit">Search</button>
                    </form>
                </div>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link pe-2" href="#Account">SignUp/SignIn</a>
                        <a class="nav-link pe-3" href="#Account"><img src={cart} alt="cart" className="cart" /></a>
                        <a class="btn  btn-outline-dark" href="https://github.com/parameshwar-arroju/TechTrendz" target="_blank">Github</a>
                    </div>
                </div>
            </div>
        </nav>
    </>
    );
}