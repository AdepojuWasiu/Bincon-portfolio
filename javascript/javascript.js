
document.querySelector(".close")
.addEventListener('click', () =>{
    document.querySelector(".drop-down").style.display = 'none'

});

document.querySelector(".menu")
.addEventListener('click', () =>{
    document.querySelector(".drop-down").style.display ='flex'

});

document.querySelector(".drop")
.addEventListener('click', () =>{
    document.querySelector(".drop-down").style.display ='none'

});

document.querySelector(".dropa")
.addEventListener('click', () =>{
    document.querySelector(".drop-down").style.display ='none'

});

document.querySelector(".dropb")
.addEventListener('click', () =>{
    document.querySelector(".drop-down").style.display ='none'

});

const projects = [
    {
        photo: "/assets/project-pic-1.png",
        description: 'Wasquo Coin'
    },
    {
        photo: "/assets/project-pic-2.png",
        description: 'My Portfolio'
    },
    {
        photo: "/assets/project-pic-3.png",
        description: 'Credit Card Detection'
    },
    {
        photo: "/assets/project-pic-5.png",
        description: 'Customer data Analysis'
    },
    {
        photo: "/assets/project-pic-6.png",
        description: 'Car Price Prediction'
    },
    {
        photo: "/assets/project-pic-8.jpg",
        description: 'NONAGON Telegram app'
    },



]

let projectH = "";

projects.forEach((project) => {
    projectH += `
                <div>
                    <img src="${project.photo}" alt="my_pics" width="300px" />
                    <h3>${project.description}</h3>
                </div>
        `;
});

document.querySelector(".project-pic").innerHTML = projectH;


const friends = [
    {
        photo: "/assets/friend.jpg",
        name: 'Adepoju Wasiu'
    },
    {
        photo: "/assets/friend-1.jpg",
        name: 'Afedia Victor'
    },
    {
        photo: "/assets/friend-2.jpg",
        name: 'Shomade Abdulazez'
    },
    {
        photo: "/assets/friend-3.jpg",
        name: 'Olarewaju Sodeeq'
    },
    {
        photo: "/assets/friend-4.jpg",
        name: 'Yusuf Mariam'
    },
    {
        photo: "/assets/friend-5.jpg",
        name: 'Oyebode victor'
    },

]

let friendHTML ="";

friends.forEach((friend) => {
    friendHTML += `
                <div>
                    <img src="${friend.photo}" alt="my_pics" width="300px" />
                    <h3>${friend.name}</h3>
                </div>
        `;
});

document.querySelector(".friend-pic").innerHTML = friendHTML;

