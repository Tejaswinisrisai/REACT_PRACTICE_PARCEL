import React from "react";
import ReactDOM from "react-dom/client";
import LOGO from "./Assets/LOGO.png";
import userIcon from "./Assets/UserIcon.png";
import SearchIcon from "./Assets/SearchIcon.png";

//Using React Element
// const h1= React.createElement("h1", {id :"title1",key:"1"}, "Title using React.creatElement Title1");
// const h2= React.createElement("h2", {id :"title2", key:"2"}, "Title using React.creatElement Title2");
// const h3= React.createElement("h3", {id :"title3", key:"3"}, "Title using React.creatElement Title3");
// const Div = React.createElement("div",{id:"title",key:"0"},[h1,h2,h3]);

//Using JSX Expression
// const Div = (
//     <div id="title">
//         <h1 id="title1">Title using JSX Title1</h1>
//         <h2 id="title2">Title using JSX Title2</h2>
//         <h3 id="title3">Title using JSX Title3</h3>
//     </div>
// );

//Using Functional Component
// const Div = () => {
//     return (
//         <div id="title">
//             <h1 id="title1">Title using Functional Component Title1</h1>
//             <h2 id="title2">Title using Functional Component Title2</h2>
//             <h3 id="title3">Title using Functional Component Title3</h3>
//         </div>
//     );
// }


//Using Functional components while passing the JSX expression as a variable
// const titletags =
//     (
//         <div>
//             <h1 id="title1">Title using Functional Component and passing tags as a variable Title1</h1>
//             <h2 id="title2">Title using Functional Component and passing tags as a variable Title2</h2>
//             <h3 id="title3">Title using Functional Component and passing tags as a variable Title3</h3>
//         </div>
//     );

// const Div = () => {
//     return (
//         <div id="title">
//             {titletags}
//         </div>
//     );
// }

//Component Composition
// const Titletags = () => {
//     return (
//         <div>
//             <h1 id="title1">Title using Functional Component and passing tags as a variable Title1</h1>
//             <h2 id="title2">Title using Functional Component and passing tags as a variable Title2</h2>
//             <h3 id="title3">Title using Functional Component and passing tags as a variable Title3</h3>
//         </div>
//     );
// }

// const Div = () => {
//     return (
//         <div id="title">
//             <Titletags />
//         </div>
//     );
// }

const Header = () => {
    return (<div id="header">
        <img src={LOGO} alt="Logo" id="logo" />
        <div id="searchBar">
            <img src={SearchIcon} alt="SearchIcon" id="SearchIcon" />
            <input type="name" name="username" id="searchInput" placeholder="       Search" />
        </div>
        <img src={userIcon} alt="user icon" id="userIcon" />
    </div>);
};

// const searchBarElement = document.getElementById('searchBar');

// searchBarElement.addEventListener('input',OnInputField);

// function OnInputField(){
//     const SearchIconElement = document.getElementById('SearchIcon'); 
//     SearchIconElement.style.display='none';
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(Div);
// root.render(<Div />);
root.render(<Header />);