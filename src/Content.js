import React from 'react';

function Content(){

    return <>

        <div className="container pt-4">

            <p style={{ fontWeight: "bold" }}>Welcome Back, Akash!</p>
            <p>How are we Edvolving today?</p>

            <div className="row">

                <div className="col-lg-8">
                
                    <div className="row mt-4">
                        <div className="col-lg-4 col-6">
                            <div className="card">
                                <img className="card-img-top" src="https://picsum.photos/200" alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title"><i class="fa-solid fa-circle mr-1" style={{ color: "red", fontSize: "10px" }}></i>Live</h5>
                                    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <p style={{ color: 'grey' }}>by Edwin Diaz</p>
                                    <a href="#" className="btn btn-success btn-sm">Join Now</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-6">
                            <div className="card">
                                <img className="card-img-top" src="https://picsum.photos/201" alt="Card image" />
                                <div className="card-body">
                                    <h5 className="card-title">21 August 2022, 9 am</h5>
                                    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <p style={{ color: 'grey' }}>by John Doe</p>
                                    <a href="#" className="btn btn-light btn-sm">Remind Me</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-6">
                            <div className="card">
                                <img className="card-img-top" src="https://picsum.photos/202" alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">30 August 2022, 9 am</h5>
                                    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <p style={{ color: 'grey' }}>by Sam Curran</p>
                                    <a href="#" className="btn btn-light btn-sm">Remind Me</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-6">
                            <div className="card">
                                <img className="card-img-top" src="https://picsum.photos/203" alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">15 August 2022</h5>
                                    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <p style={{ color: 'grey' }}>by John Smith</p>
                                    <a href="#" className="btn btn-light btn-sm">Remind Me</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-6">
                            <div className="card">
                                <img className="card-img-top" src="https://picsum.photos/204" alt="Card image" />
                                <div className="card-body">
                                    <h5 className="card-title">21 August 2022, 9 am</h5>
                                    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <p style={{ color: 'grey' }}>by Andrew</p>
                                    <a href="#" className="btn btn-light btn-sm">Remind Me</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-6">
                            <div className="card">
                                <img className="card-img-top" src="https://picsum.photos/205" alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">30 August 2022, 9 am</h5>
                                    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <p style={{ color: 'grey' }}>by Robert</p>
                                    <a href="#" className="btn btn-light btn-sm">Remind Me</a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="col-lg-4 px-3">

                    <div id="stats-section">

                        <div className="row">
                            <div className="col-lg-4 stats"><p>12</p>Experience this week</div>
                            <div className="col-lg-4 stats"><p>24</p>Experiences overall</div>
                            <div className="col-lg-4 stats"><p>10</p>Courses this week</div>
                        </div>
                    </div>

                    <div>
                        <p style={{ fontWeight: "bold", margin: "30px 0 0 30px" }}>New mentors on Edvolve</p>
                        <div>
                            
                            <div className="col-lg-12 mentor">
                                <img src="https://picsum.photos/120" alt="" style={{ float: "left", marginRight: "20px" }}/>
                                <p style={{ fontWeight: "bold" }}>Ahila Pilai</p>
                                <p>It is a long established fact that a reader will be distracted by the readable content</p>
                                <p><a href="#">See Profile</a></p>
                            </div>
                        </div>

                        <div>
                            
                            <div className="col-lg-12 mentor">
                                <img src="https://picsum.photos/121" alt="" style={{ float: "left", marginRight: "20px" }}/>
                                <p style={{ fontWeight: "bold" }}>William Jones</p>
                                <p>It is a long established fact that a reader will be distracted by the readable content</p>
                                <p><a href="#">See Profile</a></p>
                            </div>
                        </div>

                        <div>
                            
                            <div className="col-lg-12 mentor">
                                <img src="https://picsum.photos/122" alt="" style={{ float: "left", marginRight: "20px" }}/>
                                <p style={{ fontWeight: "bold" }}>James Nisham</p>
                                <p>It is a long established fact that a reader will be distracted by the readable content</p>
                                <p><a href="#">See Profile</a></p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    </>
}

export default Content;