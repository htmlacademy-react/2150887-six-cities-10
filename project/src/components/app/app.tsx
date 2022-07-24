import { MainPage, MainPageProps } from '../../pages/main-page/main-page';


function App({placesNumber} : MainPageProps): JSX.Element {
  return (
    <MainPage
      placesNumber={placesNumber}
    />
  );
}

export default App;
