import React from 'react';

function Navbar(){

    return <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#"><img src="https://static.wixstatic.com/media/c67cf8_01c5e5c77a5b4508ad013b89115b2f35~mv2.png/v1/fill/w_150,h_44,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Edvolve_Logo_Full_New.png" alt="" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item mx-2">
                        <a className="nav-link" href="#">Dashboard</a>
                    </li>
                    <li className="nav-item mx-2">
                        <a className="nav-link" href="#">Experience Zone</a>
                    </li>
                    <li className="nav-item mx-2">
                        <a className="nav-link" href="#">Learning Zone</a>
                    </li>
                    <li>
                        <form className="form-inline search-bar">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                    </li>
                </ul>
                <button className="btn btn-dark my-2 my-sm-0 discovery-zone-btn"><i class="fa-solid fa-play mx-1"></i>Discovery Zone</button>
                <a href="#"><img src="https://picsum.photos/50" alt="" style={{ borderRadius: '100%' }} className="profile"/></a> <span className='mx-2 profile-name' style={{ fontWeight: "bold" }}>Akash Chauhan</span>
                
            </div>
        </nav>
    </>
}

export default Navbar;