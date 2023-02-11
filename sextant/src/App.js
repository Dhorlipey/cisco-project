
import './App.css';
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';
import Pylon from './components/Pylon';
import Request from './components/Request';

function App() {
  return (
    <div className="App">
      <Banner bannerText="Sextant" />
      <Exhibit name="IPv4 Address">
        <Request address="https://api.ipify.org?format=json" />
      </Exhibit>
      <Exhibit name="IPv6 Address">
        <Request address="https://api64.ipify.org?format=json" />
      </Exhibit>
      <Exhibit name="Pylon Packet Latency">
        <Pylon />
      </Exhibit>
    </div>
  );
}

export default App;
