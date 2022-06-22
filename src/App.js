import CardPackage from "./components/CardPackage";

function App() {
  return (
    <div className="wrapper">
      <header className="header-wrapper">
        <h1>Ты сегодня покормил кота?</h1>
      </header>
      <main className="card-wrapper">
        <CardPackage />
      </main>
    </div>
  );
}

export default App;
