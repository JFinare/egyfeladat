import Header from "./Components/Header";
import CatCard from "./Components/CatCard";

const cats = [
  {
    id: 1,
    name: "Mittens",
    image: "https://cdn2.thecatapi.com/images/in-CD5LH5.jpg",
    description: "A very cute and fluffy cat.",
  },
  {
    id: 2,
    name: "Whiskers",
    image: "https://cdn2.thecatapi.com/images/5txKBK89Y.jpg",
    description: "Loves to play with yarn.",
  },
  {
    id: 3,
    name: "Shadow",
    image: "https://cdn2.thecatapi.com/images/Z5Wd0A-r_.jpg",
    description: "Enjoys napping in the sun.",
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className="cat-container">
        {cats.map((cat) => (
          <CatCard
            key={cat.id}
            name={cat.name}
            image={cat.image}
            description={cat.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
