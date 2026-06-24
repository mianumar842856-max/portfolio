

const posts = [

{
title:"1. Building My Digital Footprint",
image:"images/post1.jpg",
text:"Why documenting technical learning experiences is important for engineering students and future career opportunities."
},

{
title:"2. Installing WAMP and MySQL",
image:"images/post2.jpg",
text:"Setting up the first local database environment and understanding server technologies."
},

{
title:"3. Creating My First Database",
image:"images/post3.jpg",
text:"Learning SQL commands and creating tables using MySQL Workbench."
},

{
title:"4. WordPress and Databases",
image:"images/post4.jpg",
text:"Understanding how modern websites depend on relational databases."
},

{
title:"5. Database Driven Websites",
image:"images/post5.jpg",
text:"Building dynamic websites powered by database systems."
},

{
title:"6. ER Modeling",
image:"images/post6.jpg",
text:"Designing databases before implementation using ER diagrams."
},

{
title:"7. Keys and Constraints",
image:"images/post7.jpg",
text:"Understanding primary keys, foreign keys and referential integrity."
},

{
title:"8. SQL Data Manipulation",
image:"images/post8.jpg",
text:"Using INSERT, UPDATE, DELETE and SELECT queries."
},

{
title:"9. Relational Algebra",
image:"images/post9.jpg",
text:"Learning the mathematical foundation behind SQL."
},

{
title:"10. SQL Joins",
image:"images/post10.jpg",
text:"Combining data from multiple tables efficiently."
},

{
title:"11. Aggregate Functions",
image:"images/post11.jpg",
text:"Using COUNT, AVG, SUM and GROUP BY clauses."
},

{
title:"12. First and Second Normal Form",
image:"images/post12.jpg",
text:"Reducing redundancy and improving database quality."
},

{
title:"13. Third Normal Form",
image:"images/post13.jpg",
text:"Removing transitive dependencies from database schemas."
},

{
title:"14. Final Database Project",
image:"images/post14.jpg",
text:"Applying all semester concepts in one complete project."
},

{
title:"15. Lessons Learned During Exams",
image:"images/post15.jpg",
text:"Reflecting on time management, assignments and semester challenges."
}

];

const container = document.getElementById("posts-container");

posts.forEach(post => {

container.innerHTML += `

<div class="post-card">

<img src="${post.image}">

<h2>${post.title}</h2>

<p>${post.text}</p>

</div>

`;

});
```
