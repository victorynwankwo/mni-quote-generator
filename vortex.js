

// // function Header(){

// //     return(
// //     <header className = "top">
// //         <div className ="text">
// //             <h2>Vortex code</h2>
// //         </div>
// //         <div className ="link">
// //             <a href ="#">HOME</a>
// //             <a href="#">CONTACT</a>
// //             <a href="#">SERVICE</a>
// //             <a href="#">ABOUT</a>
// //         </div>
// //         <div className ="btn-wrapper">
// //             <button className ="login">LOGIN</button>
// //             <button className ="signup">SIGNUP</button>
// //         </div>
// //     </header> 

// //     )
// // }
// // function Hero(){
// //   function handleClick(){
// //     const user = document.getElementById("username").value
// //     const quote = document.getElementById("quote").value
// //     if(!user || !quote){
// //        alert("You must fill both input fields")
// //        const namePart = user.split(" ").map((e)=> e[0]).join(" ").slice(0,2).toUpperCase()

// //        const color = ["orange", "blue","green", "red", "indigo","brown","indigo"]
// //        const randomColor = Math.floor(Math.random() * color.length)
// //          profile.style.background = randomColor[color]
// //        return
// //     }
// //   }

// //     return(
// //        <div className="input">
// //         <input type = "text" placeholder ="Enter Username" className ="user" id ="username"></input>
// //         <input type = "text" placeholder ="Enter Qoute" className ="quote" id= "quote"></input>
// //          <button className = "quote-btn" onClick = {handleClick}> ADD QUOTE</button>
// //        </div>
// //     )
// // }
// // function PostCard(){

// //     return(
// //      <div className ="footer">
// //         <nav className ="card">
// //             <nav className ="buttton-for-quote"  id ="profile">
// //             <button className="firstname">ea</button>
// //             <button className ="delete">X</button>
// //            </nav>
// //            <nav className ="quote-text">
// //            <p>my quote is ab</p>
// //            </nav>
// //            <nav className ="date">
// //             <p>20/07/2025</p>
// //            </nav>
// //         </nav>
// //      </div>
// //     )
// // }





// // function MyApp() {
     
// //         return (
// //             <div>
// //        <Header />
// //        <Hero />
// //        <PostCard />
// //         <PostCard />
// //             </div>
       

// //         )
// //       }

// //       const container = document.getElementById('root');
// //       const root = ReactDOM.createRoot(container);
// //       root.render(<MyApp />);



// *{
//     box-sizing:border-box;
//     font-family: sans-serif;
//     margin: 0;
//     padding: 0;
// }
// .top{
//     width: 100%;
//     height: 70px;
//     background: black;
//     display: flex;
//     justify-content: space-around;
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
// }
// h2{
//     color: rgb(72, 9, 244);
//     font-weight: bolder;
//     font-size: 30px;
//     font-style: italic;
// }
// .text{
//     padding: 20px;
    
// }
// .link{
//     display: flex;
//     gap: 30px;
//      padding: 30px;
// }
// .btn-wrapper{
//      display: flex;
//      gap: 20px;
    
     
    
// }
// .login{
//     width: 70px;
//     height: 40px;
//     margin-top: 20px;
//     color:white ;
//     font-weight: bolder;
//     font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
//     background: blue;
//     border: none;
//     transform: scale(1);

// }
// .signup{
//    width: 70px;
//     height: 40px;
//     margin-top: 20px;
//     color:white;
//    background: transparent;
//     border: 1px solid blue;
//     font-weight:bolder ;
//     transform: scale(1);
// }
// .signup:hover{
//     transform: scaley(1.2);
//     background: blue;
// }
// .login:hover{
//     transform: scaley(1.2);
// }
// .link:hover{
//     transform: scaley(1.2);
    
// }
// .input{
//     display: flex;
//     justify-content: center;
//     flex-direction: column;
//     width: 100%;
    
//     margin-left: 60px;
//     margin-top: 50px;

// }
// .user{
//     width: 1000px;
//     height: 20px;
//     margin-bottom: 35px;
//     padding-left:10px ;
// }
// .quote{
//  width: 1000px;
//     height: 70px;
//     margin-bottom: 45px;

// }
// .quote-btn{
//    width: 1000px;
//     height: 20px;
//     margin-bottom: 35px;
//     padding-left:10px;
//     background: black;
//     color: white;
//     font-family: 'Times New Roman', Times, serif;
//     font-weight: bolder;
//     border: none;
//     cursor: pointer;
//     transform: scale(1);
// }
// .quote-btn:hover{
//     transform: scaley(1.2);
    
// }
// .footer{
//     width: 100%;
// overflow-x: auto;
   
//     height: 80vh;
  
   
// }
// .card{
//     width: 200px;
//     height: 270px;
//     background: #e0e5ec;
// /* box-shadow: inset 2px 2px 5px #babecc, inset -2px -2px 5px #fff;  */
//     /* padding-left: 10px; */
//     margin-left: 20px;
//     margin-top: 30px;
//     border-radius: 20px;

// }
// .buttton-for-quote{
//     display: flex;
//     justify-content: space-between;
//     padding: 5px;
// } 
// .firstname{
//     width: 30px;
//     border-radius: 100px;
//     color: black;
//     font-weight: bolder;
//     border: none;
//     background: blue;
// }
// .delete{
//     background: rgb(236, 19, 19);
//     width: 30px;
//     border-radius: 100px;
//      border: none;
// }
// .quote-text{
// display: flex;
// justify-content: center;

// padding: 60px
// }
// .date{
//     padding: 40px;
//     display: flex;
//     justify-content: end;
//     font-weight:bolder;

// }