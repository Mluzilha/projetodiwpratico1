const cars = [

  {
    id:1,
    name:"Bugatti Chiron",
    brand:"Bugatti",
    image:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1400",
    description:"An icon of speed and engineering excellence.",
    speed:"420 km/h",
    power:"1500 HP",
    year:"2025",
    price:"$3 Million",
    featured:true,

    technologies:[
      "W16 Engine",
      "AI Stability System",
      "Carbon Fiber Chassis"
    ],

    advantages:[
      "Extreme top speed",
      "Luxury interior",
      "Legendary design"
    ],

    gallery:[
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200",
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=1200",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200"
    ]
  },

  {
    id:2,
    name:"Lamborghini Revuelto",
    brand:"Lamborghini",
    image:"https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1400",
    description:"Aggressive hybrid supercar with futuristic aerodynamics.",
    speed:"350 km/h",
    power:"1015 HP",
    year:"2025",
    price:"$600,000",
    featured:true,

    technologies:[
      "Hybrid V12",
      "Digital Cockpit",
      "Launch Control"
    ],

    advantages:[
      "Aggressive design",
      "Explosive acceleration",
      "Advanced hybrid system"
    ],

    gallery:[
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=1200",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1200"
    ]
  },

  {
    id:3,
    name:"McLaren 765LT",
    brand:"McLaren",
    image:"https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1400",
    description:"Track-focused supercar with lightweight performance.",
    speed:"330 km/h",
    power:"755 HP",
    year:"2024",
    price:"$400,000",
    featured:false,

    technologies:[
      "Carbon Monocoque",
      "Track Telemetry",
      "Active Aerodynamics"
    ],

    advantages:[
      "Lightweight body",
      "Precise handling",
      "Track performance"
    ],

    gallery:[
      "https://images.unsplash.com/photo-1494905998402-395d579af36f?w=1200"
    ]
  }

];


const carouselContent =
document.getElementById("carousel-content");

if(carouselContent){

  const featuredCars =
  cars.filter(car => car.featured);

  featuredCars.forEach((car,index)=>{

    carouselContent.innerHTML += `

      <div class="carousel-item ${index === 0 ? 'active' : ''}">

        <img src="${car.image}" class="d-block w-100">

        <div class="carousel-caption">

          <h3>${car.name}</h3>

          <p>${car.description}</p>

          <a
            href="detalhes.html?id=${car.id}"
            class="btn hero-btn mt-3"
          >
            View Details
          </a>

        </div>

      </div>
    `;
  });
}


const carsContainer =
document.getElementById("cars-container");

if(carsContainer){

  cars.forEach(car=>{

    carsContainer.innerHTML += `

      <div class="col-lg-4 col-md-6">

        <div class="car-card">

          <img src="${car.image}">

          <div class="card-body">

            <h3 class="card-title">
              ${car.name}
            </h3>

            <p class="card-text">
              ${car.description}
            </p>

            <a
              href="detalhes.html?id=${car.id}"
              class="btn hero-btn"
            >
              View Details
            </a>

          </div>

        </div>

      </div>
    `;
  });
}

const detailsContent =
document.getElementById("details-content");

if(detailsContent){

  const params =
  new URLSearchParams(window.location.search);

  const id =
  Number(params.get("id"));

  const car =
  cars.find(c => c.id === id);

  if(car){

    detailsContent.innerHTML = `

      <div class="row align-items-center g-5">

        <div class="col-lg-6">

          <img
            src="${car.image}"
            class="details-image"
          >

        </div>

        <div class="col-lg-6">

          <div class="specs-box">

            <h1 class="spec-title">
              ${car.name}
            </h1>

            <p class="mb-4">
              ${car.description}
            </p>

            <div class="spec-item">
              <strong>Brand:</strong> ${car.brand}
            </div>

            <div class="spec-item">
              <strong>Top Speed:</strong> ${car.speed}
            </div>

            <div class="spec-item">
              <strong>Power:</strong> ${car.power}
            </div>

            <div class="spec-item">
              <strong>Year:</strong> ${car.year}
            </div>

            <div class="spec-item">
              <strong>Price:</strong> ${car.price}
            </div>

            <h4 class="mt-5 mb-3">
              Technologies
            </h4>

            <ul class="tech-list">

              ${car.technologies.map(tech =>
                `<li>${tech}</li>`
              ).join('')}

            </ul>

            <h4 class="mt-4 mb-3">
              Advantages
            </h4>

            <ul class="advantages-list">

              ${car.advantages.map(adv =>
                `<li>${adv}</li>`
              ).join('')}

            </ul>

          </div>

        </div>

      </div>
    `;

    const galleryContainer =
    document.getElementById("gallery-container");

    car.gallery.forEach(photo=>{

      galleryContainer.innerHTML += `

        <div class="col-lg-4 col-md-6">

          <div class="gallery-card">

            <img src="${photo}">

          </div>

        </div>
      `;
    });
  }
}


window.addEventListener("load",()=>{

  const loader =
  document.getElementById("loader");

  if(loader){

    setTimeout(()=>{

      loader.style.display = "none";

    },800);

  }

});

const backToTop =
document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

  if(window.scrollY > 300){

    backToTop.style.display = "block";

  }else{

    backToTop.style.display = "none";

  }

});

backToTop.addEventListener("click",()=>{

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

});
