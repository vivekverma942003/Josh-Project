// Sample data array containing card content
const cardData = [
    {
        image: "./Assets/projects-icon/project1.svg",
    },
    {
        image: "./Assets/projects-icon/project2.svg",
    },
    {
        image: "./Assets/projects-icon/project3.svg",
    },
    {
        image: "./Assets/projects-icon/project4.svg",
    },
    {
        image: "./Assets/projects-icon/project5.svg",
    },
    {
        image: "./Assets/projects-icon/project6.svg",
    }
];

// function to create the cards dynamically
function createCards() {
    //    now get the container where the cards will be stored
    const cardContainer = document.getElementById('card-container');

    //    use map function to  create the cards for each element in the html file
    const cardHTML = cardData.map((card) => {
        return `
            <div class="card">
                <img src="${card.image}" alt="${card.title}">
            </div>
        `;
    }).join('');  // Join to remove commas between array elements

    // now insert the generated cards into their container
    cardContainer.innerHTML = cardHTML;
}

// Call the function to create the cards when the page loads
createCards();

// Sample data for the cards of testimonials components

const testimonials = [
    {
        rating: "./Assets/Testimonials/rating.svg",
        title: "Amazing work",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...",
        image:"./Assets/Testimonials/profile.svg",
        name:"Vivek Verma",
        profile:"Graphic Designer"
    },
    {
        rating:"./Assets/Testimonials/rating.svg",
        title:"Quality Desgin",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...",
        image:"./Assets/Testimonials/profile1.svg",
        name:"Md Javed",
        profile:"Photographer"
    },
    {
        rating:"./Assets/Testimonials/rating.svg",
        title:"Smooth Service",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...",
        image:"./Assets/Testimonials/profile2.svg",
        name:"Atul Yadav",
        profile:"Business Man"
    },
    {
        rating:"./Assets/Testimonials/rating.svg",
        title:"Loved Ones",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...",
        image:"./Assets/Testimonials/profile.svg",
        name:"Vishal Verma",
        profile:"Software Developer"
    },
    {
        rating:"./Assets/Testimonials/rating.svg",
        title:"Too Good",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...",
        image:"./Assets/Testimonials/profile2.svg",
        name:"Rupant Rai",
        profile:"Data analyst"
    },
    {
        rating:"./Assets/Testimonials/rating.svg",
        title:"Amazing Work",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...",
        image:"./Assets/Testimonials/profile1.svg",
        name:"Md Javed",
        profile:"Desginer"
    }

]
function createTestimonials(){
    const testimonialsContainer=document.getElementById("testimonials-container");
    const cardTestimonials =testimonials.map((test)=>{
        return `
        <div class="swiper-slide">
        <div class="test-cards">
        <img src="${test.rating}">
        <h3>${test.title}</h3>
        <p>${test.description}</p>
        <div class="profile-info">
        <img src="${test.image}" class="test-image">
        <span><h4>${test.name}</h4>
        <h5>${test.profile}<h5><span>
        </div>
        </div>
        </div>
        `;
    }).join('');
    testimonialsContainer.innerHTML=cardTestimonials;
}
document.addEventListener('DOMContentLoaded', () => {
    createTestimonials();
    
    // Initialize Swiper after the content is added
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1, // Default to 1 slide for mobile
        spaceBetween: 10, // Default space between slides for mobile
        pagination: {
            el: '.swiper-pagination', // Ensure this matches your HTML
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });
});


// this is form validation code 

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    if(validateForm()){
        console.log("Name : " + document.getElementById("name").value);
        console.log("Email : " + document.getElementById("name").value);
        console.log("Subject : " + document.getElementById("name").value);
        console.log("Message : " + document.getElementById("name").value);
    };
});

function validateForm() {
    // Get form inputs
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    // Validate each field
    let isValid=true;
    isValid&=validateField(name, /^[a-zA-Z\s]{5,}$/, "Name must be at least 5 characters.");
    isValid&=validateField(email, /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Email is invalid.");
    isValid&=validateField(subject, /.+/, "Subject cannot be empty.");
    isValid&=validateField(message, /.+/, "Message cannot be empty.");

    return !!isValid;
}

function validateField(field, regex, errorMessage) {
    const small = field.nextElementSibling;
    if (!regex.test(field.value.trim())) {
        field.style.border = "2px solid red";
        small.innerText = errorMessage;
        small.style.visibility = "visible";
    } else {
        field.style.border = "2px solid green";
        small.style.visibility = "hidden";
        return true;
    }
}
