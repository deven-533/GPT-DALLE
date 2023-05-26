
import './App.css';

import Navbar from './components/Navbar';
import { Toaster } from 'react-hot-toast'
function App() {
  return (
    <>
    <div>
        <Toaster
          position='top-center'
          toastOptions={
            {
              success: {
                theme: {
                  primary:'green',
                }
              }
            }
          }
        >
        </Toaster>
      </div>
    <Navbar/>
  

    </>
  );
}

export default App;
