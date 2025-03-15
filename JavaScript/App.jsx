import Random from "./Random";

function App() {
  let name = "Shiv";
  let fullName = () => {
    return "anand";
  };
  return (
    <>
      <div className="bg-white-700 hover:bg-red-50 text-[55px]  items-center flex-col text-center font-black text-gray-700">
        <h1>
          Hello world! {name}
          {fullName()}
        </h1>
      </div>
      <div>
        <Random />
      </div>
    </>
  );
}

export default App;
