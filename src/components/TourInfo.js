import React, { useState, useContext} from "react";
import {connect} from "react-redux";
import * as FaIcons from "react-icons/fa";
import Link from "react-router-dom";



function NavTour() {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar =() =>setSidebar(!sidebar)

return (
  <>
  <IconContext.Provider value={{color: red}}>
  <div className ="navbar-tour">
    <Link to="#" className="menu-bars"><FaIcons.FaBars onClick={showSidebar}/></Link>
    </div>
    <nav className={sidebar ? "navTour-menu active" : "navTour-menu"}>
      <ul className="navTour-menu-items" onClick={showSidebar}>
        <li className="navTour-toggle">
          <Link to="#" className="menu-bars">

          </Link>
        </li>
        {Ventures.map((item,index) => {
          return ( 
            <li key={index} className={item,cname}>
            <Link to={item.path}>
            {item.icon}
            <span>{item.title}</span>
            </Link>
            </li>
          );
        })}
      </ul>
    </nav>
    </IconContext.Provider>
    </>
)

}
   

    <div class="tour-page">
        <div class="venture-menu">


        </div>


        <div class="pit-shell">
            <div class="planet-image-text">
                <div class="planet-image" id="pit1"><img src="./picture/sun.jpg" alt="picture of the sun" title="Sun">
                </div>
                <div class="planet-text">See that big light in the sky? No! Don't look at it! It's called the Sun. Surely you have noticed it before now. Current tours to the Sun have been suspended, but will resume again after we clear up a few lawsuits. It's a real hot item!

                </div>
            </div>
            <div class="planet-image-text">
                <div class="planet-image" id="pit2"><img src="./picture/mercury.jpg" alt="picture of the planet mercury" title="Mercury"></div>
                <div class="planet-text">Mercury Madness! See what all the fuss is about. Long warm days and cool dark night that last longer than anything you have experienced! Be the first among your friends to visit this cozy getaway. Do remember to bring sunscreen and sunglasses.
                    We aren't kidding.
                    <div class="top"><a href="#top">Back to Top</a></div>
                </div>

            </div>
            <div class="planet-image-text">
                <div class="planet-image" id="pit3"><img src="./picture/earth.jpg" alt="picture of the planet earth" title="Earth"></div>
                <div class="planet-text">Did you forget to purchase a round ticket? Book your tour back home today to get caught up on all your shows you have been missing. Your mail is piling up and some squatters are eyeing your property. Hurry back.
                    <div class="top"><a href="#top">Back to Top</a></div>
                </div>

            </div>
            <div class="planet-image-text">
                <div class="planet-image" id="pit4"><img src="./picture/moon_orig-1200x1200.jpg" alt="picture of the earth moon" title="Moon"></div>
                <div class="planet-text">You have spent many a night staring up at the moon, but now you can say hello up close! Greet your long-aquainted friend with in person greeting. See if the rumors are true about the cheese repositories. Spend your nights (and days, for
                    that matter) gazing up at the Earth for a change. Gain new perspective that has only been afforded astronauts until now. Book today.
                    <div class="top"><a href="#top">Back to Top</a></div>
                </div>

            </div>
            <div class="planet-image-text">
                <div class="planet-image" id="pit5"><img src="./picture/planet-mars.jpg" alt="picture of the planet mars" title="Mars"></div>
                <div class="planet-text">Is your favorite color red? Do we have a treat for you. Mars is just a click away for a reservation to the next tour. It's so close to Earth, you could wave to your friends. Mars has the most exciting reputation of all the planets in the
                    solar system. From Marvin the Martian (who seems always angry) to Ares/Mars, the god of war, bring your A game to meet your own personal martian.
                    <div class="top"><a href="#top">Back to Top</a></div>
                </div>

            </div>
            <div class="planet-image-text">
                <div class="planet-image" id="pit6"><img src="./picture/ganymede.jpg" alt="picture of the moon ganymede of jupiter" title="Ganymede"></div>

                <div class="planet-text">Ganymede is the largest moon in our solar system. Oxygen has been found in the atmosphere, but I would bring your own just in case someone else hogs it all. It is also rumored to hold enough water to sustain life (not saying what quality
                    of life, but that isn't the focus here). Get a close look at Jupiter and the red spot that keeps on spinning. You will be dizzy with wonder from this tour!
                    <div class="top"><a href="#top">Back to Top</a></div>
                </div>

            </div>
            <div class="planet-image-text">
                <div class="planet-image" id="pit7"><img src="./picture/Callisto.jpg" alt="picture of the moon callisto of jupiter" title="Callisto"></div>

                <div class="planet-text">Mysterious Callisto. Named after the mythological nymph that loved to spend her time with wild beasts. Ironically, you won't find any here. The surface is pock-marked with the remnants of meteor collisions, which is still beautiful in
                    its own way. Again, Jupiter is right above in the sky, and this view is hard to beat.
                    <div class="top"><a href="#top">Back to Top</a></div>
                </div>

            </div>
            <div class="planet-image-text">
                <div class="planet-image" id="pit8"><img src="./picture/titan.jpg" alt="picture of the moon titan of saturn" title="Titan"></div>
                <div class="planet-text">Have you ever wanted to visit Saturn? Well, no such luck, we don't have a tour there. But, we do have the next best thing, Titan! This moon resides in the most famous rings in the solar system. The KFC closed down on Titan, so you will
                    have to bring your own food.
                    <div class="top"><a href="#top">Back to Top</a></div>
                </div>

            </div>
            <div class="planet-image-text">
                <div class="planet-image" id="pit9"><img src="./picture/mimas.jpg" alt="picture of the moon mimas of saturn" title="Mimas"></div>
                <div class="planet-text">Have you ever wanted to visit the Deathstar? Were you aware our solar system had one of its very own? If LARPing is your thing, what better place to be than on Mimas, a.k.a. the Deathstar of the solar system? (it will catch on if enough
                    people start saying it. Feel free to join the cause)
                    <div class="top"><a href="#top">Back to Top</a></div>
                </div>

            </div>
            <div class="planet-image-text">
                <div class="planet-image" id="pit10"><img src="./picture/uranus.jpg" alt="picture of the planet uranus" title="Uranus"></div>

                <div class="planet-text">I mean, how could we not? Sure, we first included this on a dare. I mean, it's not like you can walk on the planet. The surface of Uranus is water, methane and other non-solids (snicker), but it rains diamonds here! Also, think of all
                    the jokes you could take to a whole new level when you show people your ticket. Travel insurance is encouraged with this tour. No refunds.
                    <div class="top"><a href="#top">Back to Top</a></div>
                </div>

            </div>
            <div class="planet-image-text">
                <div class="planet-image" id="pit11"><img src="./picture/pluto-natural-color.png" alt="picture of the dwarf planet pluto" title="Pluto"></div>

                <div class="planet-text">Are you a fan of the underdog? Been short-changed all your life? Guess what planet you have the most in common with? Pluto! Even though it is smaller than our Luna/Moon, it has five moons of its own. Make sure you wear at least two pairs
                    of socks and bring a head lamp for this trip. One year is equivalent to 248 Earth years, so on this planet, everyone is young!
                    <div class="top"><a href="#top">Back to Top</a></div>
                </div>

            </div>
        </div>
    </div>