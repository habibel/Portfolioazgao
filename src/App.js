import React, {useState , useEffect} from 'react';
import './App.css';
import Loadingpage from './components/LoadingComponent'
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import Home from './pages'
import Terms from './pages/terms'
import Cv from './pages/cv'
import project from './pages/project'

function App() {

    const [loading , setLoading ] = useState(false)
    useEffect(() => {
      setLoading(true);
      setTimeout(() =>{
        setLoading(false);
      },7000);
    },[]);
  
  return (

    <>
    
        {
      loading ? (<Loadingpage />):
      ( <Router>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path='/termsofservices' component={Terms}  />
            <Route path="/cv" component={Cv} />
            <Route path='/project' component={project} exact />
          </Switch>      
        </Router>
      )
    }

    
    
        {/* <Router>
         <Terms />
        </Router> */}

    </>
  );
}

export default App;
