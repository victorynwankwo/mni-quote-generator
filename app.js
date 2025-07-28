function Header(){
  return(
    <header className = "top">
      <div className ="text">
        <h2>Vortex code</h2>
      </div>
      <div className ="link">
        <a href ="#">HOME</a>
        <a href="#">CONTACT</a>
        <a href="#">SERVICE</a>
        <a href="#">ABOUT</a>
      </div>
      <div className ="btn-wrapper">
        <button className ="login">LOGIN</button>
        <button className ="signup">SIGNUP</button>
      </div>
    </header>
  )
}

function Hero(){
  function handleClick(){
    const user = document.getElementById("username").value
    const quote = document.getElementById("quote").value

    if(!user || !quote){
      alert("You must fill both input fields")
      return
    }

    const namePart = user.trim().split(" ").map((e)=> e[0]).join("").toUpperCase().slice(0,2)
    const colorList = ["orange", "blue","green", "red", "indigo","brown","purple"]
    const color = colorList[Math.floor(Math.random() * colorList.length)]
    const date = new Date().toLocaleDateString()

    const post = { namePart, user, quote, date, color }

    const data = JSON.parse(localStorage.getItem("posts")) || []
    data.push(post)
    localStorage.setItem("posts", JSON.stringify(data))

    document.getElementById("username").value = ""
    document.getElementById("quote").value = ""

    renderApp()
  }

  return(
    <div className="input">
      <input type = "text" placeholder ="Enter Username" className ="user" id ="username"></input>
      <input type = "text" placeholder ="Enter Qoute" className ="quote" id= "quote"></input>
      <button className = "quote-btn" onClick = {handleClick}> ADD QUOTE</button>
    </div>
  )
}

function PostCard(props){
  function handleDelete(){
    const allPosts = JSON.parse(localStorage.getItem("posts")) || []
    allPosts.splice(props.index, 1)
    localStorage.setItem("posts", JSON.stringify(allPosts))
    renderApp()
  }

  return(
    <div className ="footer">
      <nav className ="card">
        <nav className ="buttton-for-quote" id ="profile" style={{background: props.color}}>
          <button className="firstname">{props.namePart}</button>
          <button className ="delete" onClick={handleDelete}>X</button>
        </nav>
        <nav className ="quote-text">
          <p>{props.quote}</p>
        </nav>
        <nav className ="date">
          <p>{props.date}</p>
        </nav>
      </nav>
    </div>
  )
}

function MyApp(){
  const posts = JSON.parse(localStorage.getItem("posts")) || []

  return(
    <div>
      <Header />
      <Hero />
      {posts.map((item, index) => (
        <PostCard 
          key={index}
          index={index}
          namePart={item.namePart}
          quote={item.quote}
          date={item.date}
          color={item.color}
        />
      ))}
    </div>
  )
}

function renderApp(){
  const container = document.getElementById('root')
  const root = ReactDOM.createRoot(container)
  root.render(<MyApp />)
}

renderApp()