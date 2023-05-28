import './App.css';
import CustomerInfo from './components/CustomerInfo';
import AdditionalInformation from './components/AdditionalInformation';
import Header from './components/Header';
import AdminToComplete from './components/AdminToComplete';
import SubmitButton from './components/SubmitButton';
// import Dummy from './components/Dummy';

function App() {
  return (
    <div >
      <Header />
      <CustomerInfo />
      <AdditionalInformation />
      <AdminToComplete />
      {/* <Dummy /> */}
      <SubmitButton />

    </div>
    
  );
}

export default App;
