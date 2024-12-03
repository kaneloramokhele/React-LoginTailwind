import Form from "./components/Form"


function App() {

  return (
    <>
      <div className="flex w-full h-screen">
        <div className="w-full flex items-center justify-center lg:w-1/2">
          <Form/>
        </div>

        <div className="hidden lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
          <div className="w-60 h-60 bg-gradient-to-tr from-slate-900 to-blue-700 rounded-full"/>
        </div>
      </div>
    </>
  )
}

export default App
