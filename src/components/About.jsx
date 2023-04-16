import React from "react";

function About() {
  return (
    <div className="about">
<main>

<section class="banner-section d-flex justify-content-center align-items-end">
    <div class="section-overlay"></div>

    <div class="container">
        <div class="row">

            <div class="col-lg-7 col-12">
                <h1 class="text-white mb-lg-0">About Us</h1>
            </div>

            <div class="col-lg-4 col-12 d-flex justify-content-lg-end align-items-center ms-auto">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb justify-content-center">
                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>

                        <li class="breadcrumb-item active" aria-current="page">About Us</li>
                    </ol>
                </nav>
            </div>

        </div>
    </div>
</section>


<section class="section-padding">
    <div class="container">
        <div class="row">

            <div class="col-lg-6 col-12">
                <img src="images/elogo.jfif" class="featured-image img-fluid"/>
            </div>

            <div class="col-lg-6 col-12">
                <div class="featured-block">
                    <h2 class="mb-4">Entrepreneurship Since 2018</h2>
                    <p>
                        <a href="#">E-Cell</a> is student chapter of Muffakham Jah College of Engineering & Technology, affiliated to Osmania University, Hyderabad.<br/> 
The Mission of the student club is to foster entrepreneurial thinking, promote business knowledge and inculcate confidence in every student. It involves establishment of one’s own enterprise, 
through the development of <strong>leadership</strong> skills,<strong>creativity</strong> and <strong>problem solving</strong>. To promote and facilitate the study and practice of entrepreneurship, connect students with experienced alumni and local entrepreneurs and turn them into dynamic business oriented young leaders.
We focus on 100% development of an idea and ensure it undergoes execution. Promoting Entrepreneurial culture is an oath we take every year at the NEN award ceremony.

                    </p>
                        <a class="custom-btn btn button button--atlas mt-3" href="contact.html">
                        <span>Get in touch</span>

                        <div class="marquee" aria-hidden="true">
                            <div class="marquee__inner">
                                <span>Get in touch</span>
                                <span>Get in touch</span>
                                <span>Get in touch</span>
                                <span>Get in touch</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

        </div>
    </div>
</section>


<section class="team-section section-padding section-bg">
    <div class="container">
        <div class="row">

            <div class="col-lg-12 col-12">
                <h2 class="mb-4">Meet People</h2>
            </div>

            <div class="col-lg-3 col-md-6 col-12 mb-lg-0 mb-md-5">
                <img src="images/teams/entre.jfif" class="team-image img-fluid"/>
            </div>

            <div class="col-lg-3 col-md-6 col-12 d-flex justify-content-lg-center mt-4 mt-lg-0 mt-md-0 mb-5 mb-lg-0">
                <div class="team-info mx-auto mx-lg-0">
                    <h4 class="mb-2">J</h4>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing tempor incididunt dolore magna</p>

                    <div class="border-top mt-3 pt-3">
                        <p class="d-flex mb-0">
                            <i class="bi-whatsapp me-2"></i>

                            <a href="tel: 110-220-9800">
                                110-220-9800
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-6 col-12">
                <img src="images/teams/entre.jfif" class="team-image img-fluid"/>
            </div>

            <div class="col-lg-3 col-md-6 col-12 d-flex justify-content-lg-center mt-4 mt-lg-0 mt-md-0">
                <div class="team-info mx-auto mx-lg-0">
                    <h4 class="mb-2">M</h4>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing tempor incididunt dolore magna</p>

                    <div class="border-top mt-3 pt-3">
                        <p class="d-flex mb-0">
                            <i class="bi-whatsapp me-2"></i>

                            <a href="tel: 110-220-9800">
                                110-220-9800
                            </a>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>


<section class="partners-section">
    <div class="container">
        <div class="row justify-content-center align-items-center">

            <div class="col-lg-12 col-12">
                <h4 class="partners-section-title bg-white shadow-lg">Trusted by </h4>
            </div>

            <div class="col-lg-2 col-md-4 col-6">
                <img src="images/partners/toprak-leasing.svg" class="partners-image img-fluid"/>
            </div>

            <div class="col-lg-2 col-md-4 col-6">
                <img src="images/partners/glorix.svg" class="partners-image img-fluid"/>
            </div>

            <div class="col-lg-2 col-md-4 col-6">
                <img src="images/partners/woocommerce.svg" class="partners-image img-fluid"/>
            </div>

            <div class="col-lg-2 col-md-4 col-6">
                <img src="images/partners/rolf-leasing.svg" class="partners-image img-fluid"/>
            </div>

            <div class="col-lg-2 col-md-4 col-6">
                <img src="images/partners/unilabs.svg" class="partners-image img-fluid"/>
            </div>

        </div>
    </div>
</section>
</main>
    </div>
  );
}

export default About;