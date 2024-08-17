const users = [
    {
        name: "Hasnain Ahmed", 
        age: 25, 
        email: "Hasnainahmed09@gmail.com", 
        hobbies: ["Reading", "Swimming", "Gaming"],
        skills: ["JavaScript", "React", "Node.js"]
    },
    {
        name: "Ali khan", 
        age: 30, 
        email: "Alikhan22@gmail.com", 
        hobbies: ["Cooking", "Traveling", "Painting"],
        skills: ["Python", "Django", "Machine Learning"]
    },
    {
        name: "Sam Khan", 
        age: 22, 
        email: "samkhan11@gamil.com", 
        hobbies: ["Photography", "Cycling", "Music"],
        skills: ["HTML", "CSS", "JavaScript"]
    },
    {
        name: "Ahmed raza", 
        age: 28, 
        email: "Ahmedraza02@gmail.com", 
        hobbies: ["Yoga", "Reading", "Hiking"],
        skills: ["Ruby", "Rails", "SQL"]
    }
];

const userContainer = document.getElementById('userContainer');

users.forEach(user => {
    // Create card element
    const card = document.createElement('div');
    card.className = 'card';

    // Add user details
    const userName = document.createElement('h2');
    userName.textContent = user.name;
    card.appendChild(userName);

    const userAge = document.createElement('p');
    userAge.textContent = `Age: ${user.age}`;
    card.appendChild(userAge);

    const userEmail = document.createElement('p');
    userEmail.textContent = `Email: ${user.email}`;
    card.appendChild(userEmail);

    // Add hobbies table
    const hobbiesTitle = document.createElement('p');
    hobbiesTitle.textContent = 'Hobbies:';
    card.appendChild(hobbiesTitle);

    const hobbiesTable = document.createElement('table');
    hobbiesTable.className = 'nested-table';
    
    user.hobbies.forEach(hobby => {
        const hobbyRow = hobbiesTable.insertRow();
        const hobbyCell = hobbyRow.insertCell(0);
        hobbyCell.textContent = hobby;
    });
    card.appendChild(hobbiesTable);

    // Add skills table
    const skillsTitle = document.createElement('p');
    skillsTitle.textContent = 'Skills:';
    card.appendChild(skillsTitle);

    const skillsTable = document.createElement('table');
    skillsTable.className = 'nested-table';
    
    user.skills.forEach(skill => {
        const skillRow = skillsTable.insertRow();
        const skillCell = skillRow.insertCell(0);
        skillCell.textContent = skill;
    });
    card.appendChild(skillsTable);

    // Append card to container
    userContainer.appendChild(card);
});
