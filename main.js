const reviews = [
  {
    id: 0,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 1,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 2,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 3,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

let currentReview = 0;
let randomNumber = 0;
const image = document.getElementById('img');
const author = document.getElementById('name');
const job = document.getElementById('job')
const description = document.getElementById('description');

function goRight() {
  if (currentReview < 3){
    currentReview += 1;
  }
  else {
    currentReview = 0;
  }
  updateReview();
}

function goLeft() {
  if (currentReview > 0){
    currentReview -= 1;
  }
  else {
    currentReview = 3;
  }
  updateReview();
}

function updateReview(){
 const item = reviews[currentReview];
 console.log(item);
 image.src = item.img;
 author.textContent = item.name;
 job.textContent = item.job;
 description.textContent = item.text;
}

function random(){
  let randomNumber = Math.floor(Math.random() * reviews.length);
  currentReview = randomNumber;
  updateReview();
  }
