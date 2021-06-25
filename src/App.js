import {ChatEngine} from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';


const App = () => {

    return (
  <ChatEngine
      height= "100vh"
      projectID="95e95ded-0254-434d-ae2b-ab3c9296eeff"
      userName="pedrogui"
      userSecret="29102002p"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}

  />
    );
}

export default App;