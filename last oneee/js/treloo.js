//Nav-links active onclick
const navLinkEls=document.querySelectorAll(".nav-link");

navLinkEls.forEach(navLinkEl =>{
    navLinkEl.addEventListener("click",()=>{
        document.querySelector(".active").classList.remove("active")
    navLinkEl.classList.add("active")
    });
});
//************************************************** */

//flight and hotel buttons
//flight and hotel button changing divs
var flightBtn=document.getElementById('flight-btn');
var hotelBtn=document.getElementById('hotel-btn');
var flightDiv=document.getElementById('flight-content');
var hotelDiv=document.getElementById('hotel-content');

flightBtn.addEventListener('click',()=>{
    flightDiv.style.display='flex'
    hotelDiv.style.display='none'
})
hotelBtn.addEventListener('click',()=>{
    flightDiv.style.display='none'
    hotelDiv.style.display='flex'
})
//flight and hotel button changing active class
const activeBooking=document.querySelectorAll(".buttons");
activeBooking.forEach(button =>{
    button.addEventListener("click",()=>{
        document.querySelector(".active").classList.remove("active")
        button.classList.add("active")
    });
});
/***************************************************************** */

//Offers
//offers activity
const offerLinks=document.querySelectorAll(".offer-link");

offerLinks.forEach(offerlink =>{
    offerlink.addEventListener("click",()=>{
        document.querySelector(".active").classList.remove("active")
        offerlink.classList.add("active")
    });
});

//offers changing cards
var teamBtn=document.getElementById('team-btn');
var coupleBtn=document.getElementById('couple-btn');
var familyBtn=document.getElementById('family-btn');
var teamDiv=document.getElementById('team-offers');
var coupleDiv=document.getElementById('couple-offers');
var familyDiv=document.getElementById('family-offers');

teamBtn.addEventListener('click',()=>{
    teamDiv.style.display='grid'
    coupleDiv.style.display='none'
    familyDiv.style.display='none'
})
coupleBtn.addEventListener('click',()=>{
    teamDiv.style.display='none'
    coupleDiv.style.display='grid'
    familyDiv.style.display='none'
})
familyBtn.addEventListener('click',()=>{
    teamDiv.style.display='none'
    coupleDiv.style.display='none'
    familyDiv.style.display='grid'
})
/****************************************************************** */
//BLOG
//blog activity
const blogLinks=document.querySelectorAll(".blog-link");

blogLinks.forEach(blogLink =>{
    blogLink.addEventListener("click",()=>{
        document.querySelector(".active").classList.remove("active")
        blogLink.classList.add("active")
    });
});

//blog div change
var popularLn=document.getElementById('pop-btn');
var adventureLn=document.getElementById('adv-btn');
var beachLn=document.getElementById('beach-btn');
var popularDiv=document.getElementById('popular-des');
var adventureDiv=document.getElementById('adventure-des');
var beachDiv=document.getElementById('beach-des');

popularLn.addEventListener('click',()=>{
    popularDiv.style.display='grid'
    adventureDiv.style.display='none'
    beachDiv.style.display='none'
})
adventureLn.addEventListener('click',()=>{
    popularDiv.style.display='none'
    adventureDiv.style.display='grid'
    beachDiv.style.display='none'
})
beachLn.addEventListener('click',()=>{
    popularDiv.style.display='none'
    adventureDiv.style.display='none'
    beachDiv.style.display='grid'
})



/*Testimonials */
//Testimonial Data
const testimonials=[
{
    testimonial:"Our trip to Morocco was truly a once in a lifetime experience and we are so grateful to everyone that made it happen seamlessly. Our travel planner, Jaouad,was increadible.",
    name:"-Vand D",
    cap:"Happy Treloo",
    image:"./image/person1.jpg",
    stars:"4.5"
},
{
    testimonial:"Our trip to Morocco was truly a once in a lifetime experience and we are so grateful to everyone that made it happen seamlessly. Our travel planner, Jaouad,was increadible.",
    name:"-Tru Vio",
    cap:"Happy Treloo",
    image:"./image/person2.jpg",
    stars:"4.9"
},
{
    testimonial:"Our trip to Morocco was truly a once in a lifetime experience and we are so grateful to everyone that made it happen seamlessly. Our travel planner, Jaouad,was increadible.",
    name:"-Tru Vio",
    cap:"Happy Treloo",
    image:"./image/person3.jpeg",
    stars:"3.9"
},
{
    testimonial:"Our trip to Morocco was truly a once in a lifetime experience and we are so grateful to everyone that made it happen seamlessly. Our travel planner, Jaouad,was increadible.",
    name:"-Tru Vio",
    cap:"Happy Treloo",
    image:"./image/person4.jpeg",
    stars:"3"
},
{
    testimonial:"Our trip to Morocco was truly a once in a lifetime experience and we are so grateful to everyone that made it happen seamlessly. Our travel planner, Jaouad,was increadible.",
    name:"-Tru Vio",
    cap:"Happy Treloo",
    image:"./image/person5.jpeg",
    stars:"5"
},
{
    testimonial:"Our trip to Morocco was truly a once in a lifetime experience and we are so grateful to everyone that made it happen seamlessly. Our travel planner, Jaouad,was increadible.",
    name:"-Tru Vio",
    cap:"Happy Treloo",
    image:"./image/person6.jpeg",
    stars:"4"
}
];

//current slide
let i=0;
//total number of slides
let j=testimonials.length/2;

let testimonialContainer = document.getElementById("testimonial-container")
let nextBtn=document.getElementById("next");
let prevBtn=document.getElementById("prev");

nextBtn.addEventListener( "click" ,()=>{
     i = (j + i + 1) % j;
     displayTestimonial();
});

prevBtn.addEventListener("click",()=>{
    i = (j + i - 1) % j;
    displayTestimonial();
})

let displayTestimonial=()=>{
    testimonialContainer.innerHTML=`
    <div class="box">

    <i class="fa-solid fa-quote-left first"></i>

    <div class="text">
        <blockquote>
           ${testimonials[i].testimonial}
        </blockquote>
        <p>${testimonials[i].name}</p>
        <p>${testimonials[i].cap}</p>
    </div>

    <div class="image">

        <img src=${testimonials[i].image} alt="">
        <span>
            <i class="fa-solid fa-star"></i>
            ${testimonials[i].stars}
        </span>

    </div>

</div>
    <div class="box">

    <i class="fa-solid fa-quote-left first"></i>

    <div class="text">
        <blockquote>
           ${testimonials[i+1].testimonial}
        </blockquote>
        <p>${testimonials[i+1].name}</p>
        <p>${testimonials[i+1].cap}</p>
    </div>

    <div class="image">

        <img src=${testimonials[i+1].image} alt="">
        <span>
            <i class="fa-solid fa-star"></i>
            ${testimonials[i+1].stars}
        </span>

    </div>

</div>
    `
};
window.onload=displayTestimonial;

//Travel and Contact
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

//msg after submition
document.getElementById("submit-button").addEventListener("click", function() {

    // show the popup notif.
    var notification = document.createElement("div");
    notification.innerHTML = "Data has been sent!";
    notification.classList.add("popup-notification");
    document.body.appendChild(notification);

    // remove the notif. after 2 secs
    setTimeout(function() {
        notification.remove();
    }, 2000);
});
// end of travel & contact
