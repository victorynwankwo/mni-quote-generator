// // Reusable Button Component
//     const Button = ({ text, onClick, className }) => (
//       <button className={className} onClick={onClick}>{text}</button>
//     );

//     // Header Component
//     const Header = () => (
//       <header className="navbar">
//         <h2 className="site-title">Eflex Code</h2>
//         <nav className="nav-links">
//           <a href="#">Home</a>
//           <a href="#">About</a>
//           <a href="#">Services</a>
//           <a href="#">Contact</a>
//         </nav>
//         <div className="nav-buttons">
//           <Button text="Get Started" className="btn blue" />
//           <Button text="Login" className="btn outline" />
//         </div>
//       </header>
//     );

//     // UserInput Component
//     const UserInput = ({ onAddQuote }) => {
//       const [name, setName] = React.useState('');
//       const [quote, setQuote] = React.useState('');

//       const handleSubmit = () => {
//         if (!name.trim() || !quote.trim()) {
//           alert("Please enter both name and quote");
//           return;
//         }

//         const initials = name
//           .split(' ')
//           .map(part => part[0].toUpperCase())
//           .join('');

//         const newQuote = {
//           id: Date.now(),
//           name,
//           initials,
//           quote,
//           date: new Date().toLocaleDateString()
//         };

//         onAddQuote(newQuote);
//         setName('');
//         setQuote('');
//       };

//       return (
//         <div className="form-container">
//           <input
//             type="text"
//             className="input"
//             placeholder="Enter your Fullname"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <textarea
//             className="input"
//             placeholder="Enter your quote"
//             rows="4"
//             value={quote}
//             onChange={(e) => setQuote(e.target.value)}
//           ></textarea>
//           <Button text="Add Quote" className="btn full black" onClick={handleSubmit} />
//         </div>
//       );
//     };

//     // PostCard Component
//     const PostCard = ({ post, onDelete }) => (
//       <div className="quote-card">
//         <button className="close-btn" onClick={() => onDelete(post.id)}>x</button>
//         <div className="initials-circle">{post.initials}</div>
//         <h3>{post.name}</h3>
//         <p>{post.quote}</p>
//         <div className="date">{post.date}</div>
//       </div>
//     );

//     // Main App
//     const App = () => {
//       const [quotes, setQuotes] = React.useState(() => {
//         const saved = localStorage.getItem('quotes');
//         return saved ? JSON.parse(saved) : [];
//       });

//       const addQuote = (quote) => {
//         const updatedQuotes = [quote, ...quotes];
//         setQuotes(updatedQuotes);
//         localStorage.setItem('quotes', JSON.stringify(updatedQuotes));
//       };

//       const deleteQuote = (id) => {
//         const filtered = quotes.filter(q => q.id !== id);
//         setQuotes(filtered);
//         localStorage.setItem('quotes', JSON.stringify(filtered));
//       };

//       return (
//         <div>
//           <Header />
//           <UserInput onAddQuote={addQuote} />
//           <div className="quotes-list">
//             {quotes.map(post => (
//               <PostCard key={post.id} post={post} onDelete={deleteQuote} />
//             ))}
//           </div>
//         </div>
//       );
//     };

//     const root = ReactDOM.createRoot(document.getElementById('root'));
//     root.render(<App />);
  