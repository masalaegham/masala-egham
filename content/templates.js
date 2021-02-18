/**
* ALL Templates Name: Templates
*/
var templates ={};

  /**
  * Template: Contacts Us
  */

  templates['contactUsTemplate'] = `<section class="breadcrumbs">
    <div class="container">

      <div class="d-flex justify-content-between align-items-center">
        <h2>Contact Us</h2>
        <!-- <ol>
          <li><a href="index.html">Home</a></li>
          <li>Inner Page</li>
        </ol> -->
      </div>

    </div>
  </section>
  <section id="contact-us" class="contact">
    <div class="container" data-aos="fade-up">

      <div class="section-title">
        <h2>Contact</h2>
        <p>Contact Us</p>
      </div>
    </div>

   
    <div class="container" data-aos="fade-up">

      <div class="row mt-5">

        <div class="col-lg-4">
          <div class="info">
            <div class="address">
              <i class="bi bi-geo-alt"></i>
              <h4>Location:</h4>
              <p><var>60, South Avenue, Tw20 8hq</var></p>
            </div>

            <div class="open-hours">
              <i class="bi bi-clock"></i>
              <h4>Open Hours:</h4>
              <p>
              Thursday - Tuesday:<br>
                <var>openingTimes</var>
              </p>
            </div>

            <div class="email">
              <i class="bi bi-envelope"></i>
              <h4>Email:</h4>
              <p><var>email</var></p>
            </div>

            <div class="phone">
              <i class="bi bi-phone"></i>
              <h4>Call:</h4>
              <p><var>phone</var></p>
            </div>

          </div>

        </div>

        <div class="col-lg-8 mt-5 mt-lg-0">

          <form action="forms/contact.php" method="post" role="form" class="php-email-form">
            <div class="row">
              <div class="col-md-6 form-group">
                <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required>
              </div>
              <div class="col-md-6 form-group mt-3 mt-md-0">
                <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required>
              </div>
            </div>
            <div class="form-group mt-3">
              <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required>
            </div>
            <div class="form-group mt-3">
              <textarea class="form-control" name="message" rows="8" placeholder="Message" required></textarea>
            </div>
            <div class="my-3">
              <div class="loading">Loading</div>
              <div class="error-message"></div>
              <div class="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div class="text-center"><button type="submit">Send Message</button></div>
          </form>

        </div>

      </div>

    </div>

    <div data-aos="fade-up">
    <iframe style="border:0; width: 100%; height: 350px;" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe>
  </div>

  </section>`;


/**
  * Template: Menu ------------------------
  * //copey below item and change item number like, item3 ,item3price, item3Iggre
  * 
  * <div class="col-lg-6 menu-item filter-starters">
        <img src="assets/img/menu/lobster-bisque.jpg" class="menu-img" alt="">
        <div class="menu-content">
          <a href="#"><var>item1</var></a><span><var>item1Price</var></span>
        </div>
        <div class="menu-ingredients">
        <var>item1Ingredient</var>
        </div>
      </div>
  * 
  */

 templates['menuTemplate'] = `<section class="breadcrumbs">
  <div class="container">

    <div class="d-flex justify-content-between align-items-center">
      <h2>Menu</h2>
      
    </div>

  </div>
  </section>

  <section id="menu" class="menu section-bg">
  <div class="container" data-aos="fade-up">

    <div class="section-title">
      <h2>Menu</h2>
      <p>Check Our Tasty Menu</p>
    </div>

    <div class="row" data-aos="fade-up" data-aos-delay="100">
      <div class="col-lg-12 d-flex justify-content-center">
        <ul id="menu-flters">
          <li data-filter="*" class="filter-active">All</li>
          <li data-filter=".filter-starters">Starters</li>
          <li data-filter=".filter-salads">Main menu</li>
          <li data-filter=".filter-specialty">Specialty</li>
        </ul>
      </div>
    </div>

    <div class="row menu-container" data-aos="fade-up" data-aos-delay="200">
    
      #MenuTemplateGen

    </div>

  </div>
  </section>`;

/**
  * Constants: About us --------------------------------------
  */

 templates['aboutTemplate'] = `<section class="breadcrumbs">
  <div class="container">

    <div class="d-flex justify-content-between align-items-center">
      <h2>About Us</h2>
      
    </div>

  </div>
  </section>
  <section id="About" class="about">
  <div class="container" data-aos="fade-up">

    <div class="row">
      <div class="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="100">
        <div class="about-img">
          <img src="assets/img/about.jpg" alt="">
        </div>
      </div>
      <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
        <h3><var>aboutUsHeader</var></h3>
        <p class="font-italic">
        <var>aboutUsContent</var>
        </p>
        <ul>
          <li><i class="bi bi-check-circle"></i> <var>aboutUsItem1</var></li>
          <li><i class="bi bi-check-circle"></i> <var>aboutUsItem2</var></li>
          <li><i class="bi bi-check-circle"></i> <var>aboutUsItem3</var></li>
        </ul>
        <p>
          <var>aboutUsBottomContent</var>
        </p>
      </div>
    </div>

  </div>
  </section>`;

  /**
  * Constants: Gallery
  */

 templates['galleryTemplate'] = `<section class="breadcrumbs">
  <div class="container">

    <div class="d-flex justify-content-between align-items-center">
      <h2>Gallery</h2>
      
    </div>

  </div>
  </section>
  <section id="Gallery" class="gallery">

  <div class="container" data-aos="fade-up">
    <div class="section-title">
      <h2>Gallery</h2>
      <p>Some photos from Our Restaurant</p>
    </div>
  </div>

  <div class="container-fluid" data-aos="fade-up" data-aos-delay="100">

    <div class="row g-0">

      <div class="col-lg-3 col-md-4">
        <div class="gallery-item">
          <a href="assets/img/gallery/gallery-1.jpg" class="gallery-lightbox" data-gall="gallery-item">
            <img src="assets/img/gallery/gallery-1.jpg" alt="" class="img-fluid">
          </a>
        </div>
      </div>


      <div class="col-lg-3 col-md-4">
        <div class="gallery-item">
          <a href="assets/img/gallery/gallery-1.jpg" class="gallery-lightbox" data-gall="gallery-item">
            <img src="assets/img/gallery/gallery-1.jpg" alt="" class="img-fluid">
          </a>
        </div>
      </div>

      <div class="col-lg-3 col-md-4">
        <div class="gallery-item">
          <a href="assets/img/gallery/gallery-2.jpg" class="gallery-lightbox" data-gall="gallery-item">
            <img src="assets/img/gallery/gallery-2.jpg" alt="" class="img-fluid">
          </a>
        </div>
      </div>

      <div class="col-lg-3 col-md-4">
        <div class="gallery-item">
          <a href="assets/img/gallery/gallery-3.jpg" class="gallery-lightbox" data-gall="gallery-item">
            <img src="assets/img/gallery/gallery-3.jpg" alt="" class="img-fluid">
          </a>
        </div>
      </div>

      <div class="col-lg-3 col-md-4">
        <div class="gallery-item">
          <a href="assets/img/gallery/gallery-4.jpg" class="gallery-lightbox" data-gall="gallery-item">
            <img src="assets/img/gallery/gallery-4.jpg" alt="" class="img-fluid">
          </a>
        </div>
      </div>

      <div class="col-lg-3 col-md-4">
        <div class="gallery-item">
          <a href="assets/img/gallery/gallery-5.jpg" class="gallery-lightbox" data-gall="gallery-item">
            <img src="assets/img/gallery/gallery-5.jpg" alt="" class="img-fluid">
          </a>
        </div>
      </div>

      <div class="col-lg-3 col-md-4">
        <div class="gallery-item">
          <a href="assets/img/gallery/gallery-6.jpg" class="gallery-lightbox" data-gall="gallery-item">
            <img src="assets/img/gallery/gallery-6.jpg" alt="" class="img-fluid">
          </a>
        </div>
      </div>

      <div class="col-lg-3 col-md-4">
        <div class="gallery-item">
          <a href="assets/img/gallery/gallery-7.jpg" class="gallery-lightbox" data-gall="gallery-item">
            <img src="assets/img/gallery/gallery-7.jpg" alt="" class="img-fluid">
          </a>
        </div>
      </div>

      <div class="col-lg-3 col-md-4">
        <div class="gallery-item">
          <a href="assets/img/gallery/gallery-8.jpg" class="gallery-lightbox" data-gall="gallery-item">
            <img src="assets/img/gallery/gallery-8.jpg" alt="" class="img-fluid">
          </a>
        </div>
      </div>

    </div>

  </div>
  </section>`;

  /**
  * Constants: HOME
  */

 templates['homeTemplate'] = `<section id="home" class="d-flex align-items-center">
 <div class="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay="100">
   <div class="row">
     <div class="col-lg-8">
     <h1><var>welcomeMsg1</var><span><var>brand</var></span></h1>
      <p><var>welcomeDesc</var><p>
       <div class="btns">
         <a href="#pages/menu" onclick="replacePageContent('menuTemplate')" class="btn-menu animated fadeInUp scrollto">Our Menu</a>
         <!-- <a href="#book-a-table" class="btn-book animated fadeInUp scrollto">Book a Table</a>
        -->
       </div>
     </div>
     <div class="col-lg-4 d-flex align-items-center justify-content-center position-relative" data-aos="zoom-in" data-aos-delay="200">
       <!-- <a href="https://www.youtube.com/watch?v=GlrxcuEDyF8" class="glightbox play-btn"></a>
      TODOPut your video and enable this link-->
     </div>

   </div>
 </div>
</section><!-- End Hero -->

 <!-- ======= Why Us Section ======= -->
 <section id="why-us" class="why-us">
   <div class="container" data-aos="fade-up">

     <div class="section-title">
       <h2>Why Us</h2>
       <p>Why Choose Our Restaurant</p>
     </div>

     <div class="row">

       <div class="col-lg-4">
         <div class="box" data-aos="zoom-in" data-aos-delay="100">
           <span>01</span>
           <h4><var>specHeader1</var></h4>
           <p><var>specDetails1</var></p>
         </div>
       </div>

       <div class="col-lg-4 mt-4 mt-lg-0">
         <div class="box" data-aos="zoom-in" data-aos-delay="200">
           <span>02</span>
           <h4><var>specHeader2</var></h4>
           <p><var>specDetails2</var></p>
         </div>
       </div>

       <div class="col-lg-4 mt-4 mt-lg-0">
         <div class="box" data-aos="zoom-in" data-aos-delay="300">
           <span>03</span>
           <h4><var>specHeader3</var></h4>
           <p><var>specDetails3</var></p>
         </div>
       </div>

     </div>

   </div>
 </section>`;

  /**
  * Constants: T&C
  */

 templates['tncTemplate'] = `<section class="breadcrumbs">
  <div class="container">

    <div class="d-flex justify-content-between align-items-center">
      <h2>Terms & Conditions</h2>
      
    </div>

  </div>
  </section>

  <section class="inner-page">
  <div class="container">
    <p> TODO Tnc details ----->
      <!-- Example about page TODO--- -->
    </p>
  </div>
  </section>`;

  /**
  * Constants: Privacy & Policy
  */
 
 templates['pnpTemplate'] = `<section class="breadcrumbs">
  <div class="container">

    <div class="d-flex justify-content-between align-items-center">
      <h2>Privacy & policy</h2>
      
    </div>

  </div>
  </section>

  <section class="inner-page">
  <div class="container">
    <p> TODO policy details ----->
      <!-- Example about page TODO--- -->
    </p>
  </div>
  </section>`;

/**
  * Constants: services
  */
 templates['servicesTemplate'] = `<section class="breadcrumbs">
  <div class="container">

    <div class="d-flex justify-content-between align-items-center">
      <h2>Services</h2>
      
    </div>

  </div>
  </section>

  <section class="inner-page">
  <div class="container">
    <p><var>serviceDetails</var>
      <!-- Example about page TODO--- -->
    </p>
  </div>
  </section>`;

/**
* Constants: Privacy content details
*/
constants.PRIVACY = "This is privacy content";
constants.PRIVACY1 = "+44-744855";
constants.PRIVACY2 = "raj@yahoo.com";