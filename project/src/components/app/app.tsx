import { MainPage, MainPageProps } from '../../pages/main-page/MainPage';
import { Header } from '../header/Header';


function App({placesNumber} : MainPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />
      <MainPage
        placesNumber={placesNumber}
      />
    </div>
  );
}

export default App;
