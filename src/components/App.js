import {MainPage} from './MainPage/MainPage'
import { AppRouter } from '../routes/AppRouter';
import '../styles/app.scss';
import Header from './Header';

function App() {
  return (
    <div className="wrapper">  
      <Header />
      <AppRouter/>
    </div>
  );
}

export default App;