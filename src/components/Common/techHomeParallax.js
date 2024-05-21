import React, { Component } from 'react';
import "./techHomeParallax.scss";
import $ from 'jquery';



    //parallax scroll
    $(window).on("load scroll", function() {
      var parallaxElement = $(".parallax_scroll"),
        parallaxQuantity = parallaxElement.length;
      window.requestAnimationFrame(function() {
        for (var i = 0; i < parallaxQuantity; i++) {
          var currentElement = parallaxElement.eq(i),
            windowTop = $(window).scrollTop(),
            elementTop = currentElement.offset().top,
            elementHeight = currentElement.height(),
            viewPortHeight = window.innerHeight * 0.5 - elementHeight * 0.7,
            scrolled = windowTop - elementTop + viewPortHeight;
          currentElement.css({
            transform: "translate3d(0," + scrolled * -0.15 + "px, 0)"
          });
        }
      });
    });

  
    


class TechHomeParallax extends React.Component {
  render() {
    return (
      <div>
              <div>
                <div>
            
<div className="section" id="one" >



<div className="row" id="rowcard" >
  <div className="card column" id="missionone">
    <div className="card-img-overlay" id="id_card-img-overlay">
    <div className="card-body">
      <h4 className="card-title parallax_scroll" id="cardhone" >Research</h4>
      <div className="parallax_scroll" id="id_parallax_scrollone">
        <p  id="cardpone">
        We begin each project with quantitative and qualitative research to remove guesswork and learn exactly
        what your users want. After all, we can’t help you accomplish your goals without helping your customers
        accomplish theirs.</p>
      </div>

    </div>
    </div>
  </div>
</div>
</div>


<div className="section" id="two">


<div className="row" id="rowcard" >
  <div className="card column" id="missiontwo">

    <div className="card-img-overlay" id="id_card-img-overlay">
    <div className="card-body">
      <h4 className="card-title parallax_scroll" id="cardh"> 
      Strategy</h4>
      <div className="parallax_scroll" id="id_parallax_scroll" >
        <p  id="cardp" >
         When it comes to the success of your website, strategy is do-or-die.
         Crafting a detailed, research-based strategy is key when designing a user-centric experience.
         We won’t rest until we fully understand your business and your users.</p>
      </div>


    </div>
    </div>
  </div>
</div>
</div>




<div className="section" id="three">




<div className="row" id="rowcard" >
  <div className="card column" id="missionthree">

    <div className="card-img-overlay" id="id_card-img-overlay">
    <div className="card-body">
      <h4 className="card-title parallax_scroll" id="cardhthree">Design</h4>
      <div className="parallax_scroll" id="id_parallax_scrollthree" >
        <p  id="cardpthree" >
         Equipped with research and strategy, we design world-className experiences that attract,
         engage, and delight customers.
         Our UX design is painstakingly prototyped, refined over multiple iterations,
          and tested with real users.</p>
      </div>


    </div>
    </div>
  </div>
</div>
</div>
        </div>

      </div>

      </div>
    )
  }
}

export default TechHomeParallax
