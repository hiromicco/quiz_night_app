import Header from './components/Header';
import Quiz from './pages/Quiz';
import './App.css'
import { QuizContextProvider } from './services/QuizContext';

function App() {
    
    return (
        <>
            <Header />
            <QuizContextProvider>
                <Quiz />
            </QuizContextProvider>
        </>
    )
}

export default App
