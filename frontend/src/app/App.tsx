import { Navbar } from '@/widgets/Navbar';
import { AppRouter } from './providers/Router';

function App() {
    return (
        <div className='app'>
            <Navbar />
            <AppRouter />
        </div>
    );
}

export default App;
