import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './store/hook';
import { selectIsLanguageLoading, selectLanguage, selectLanguageData, selectLanguageError, setLanguage } from './store/features/ui';
import ScreenLoading from './components/common/ScreenLoading';
import AppRoutes from './routes/AppRoutes ';
import { ScrollToTop } from './components/scroll-to-top';

const App = () => {

  const dispatch = useAppDispatch();
  const currentLanguage = useAppSelector(selectLanguage);
  const languageData = useAppSelector(selectLanguageData);
  const isLoading = useAppSelector(selectIsLanguageLoading);
  const error = useAppSelector(selectLanguageError);

  useEffect(() => {
    if (!languageData && !isLoading && !error) {
      dispatch(setLanguage(currentLanguage));
    }
  }, [dispatch, currentLanguage, languageData, isLoading, error]);

  if (isLoading) {
    return <ScreenLoading />;
  }

  return (
    <BrowserRouter>
      <AppRoutes />
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
