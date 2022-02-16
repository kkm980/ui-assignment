import "./App.css"

import Message from './message/message';
import NavBar from './navBar/navBar';
import SenderBar from './senderBar/senderBar';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Message/>
    </div>
  );
}

export default App;
