// console.log('This is index javascript file');
// Data is an array of object which contains information about the candidate

const data = [
    {
        name: 'Rohan Das',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
        name: 'Sohan Das',
        age: 28,
        city: 'Mumbai',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/55.jpg'
    },

    {
        name: 'Zara Larson',
        age: 27,
        city: 'California',
        language: 'JavaScript',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/55.jpg'
    },
    {
        name: 'Aishwariya Ria',
        age: 47,
        city: 'Mumbai',
        language: '',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/women/65.jpg'
    },
    {
        name: 'Rohit Sharma',
        age: 37,
        city: 'Bangalore',
        language: 'Java',
        framework: 'nodejs',
        image: 'https://randomuser.me/api/portraits/men/55.jpg'
    },
]

function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ?
                { value: profiles[nextIndex++], done: false } :
                { done: true }
        }
    };
}
const candidates =cvIterator(data);

nextCv();

// Button listener for next button
const next = document.getElementById('next');
next.addEventListener('click',nextCv);


function nextCv(){
    const  currrentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile =document.getElementById('profile');
    if(currrentCandidate != undefined){
    image.innerHTML = `<img src="${currrentCandidate.image}">`;
    profile.innerHTML=`<ul class="list-group">
    <li class="list-group-item">Name :${currrentCandidate.name}</li>
    <li class="list-group-item">${currrentCandidate.age} years old</li>
    <li class="list-group-item"Lives in >${currrentCandidate.city}</li>
    <li class="list-group-item">Primarily works on ${currrentCandidate.language}</li>
    <li class="list-group-item">uses ${currrentCandidate.framework} framework </li>
    
  </ul>`
    }
    else{
        alert('End of application');
        window.location.reload();
    }
}

