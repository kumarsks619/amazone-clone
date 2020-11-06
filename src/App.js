import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import { useContext, useEffect } from 'react';
import { StateContext } from './ContextAPI';
import { auth, db } from './assets/firebase'



function App() {

  //following Context's value is a Reducer therefore it returns
  const [ , dispatch] = useContext(StateContext)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
          if(authUser) {
            //user is logged in
            db.collection("users")
                .doc(authUser.email)
                .get()
                .then((doc) => {
                    if(doc.data()?.basket !== undefined) {
                      dispatch({
                        type: 'SET_USER',
                        payload: {
                            user: authUser,
                            basket: doc.data().basket
                        }
                      })
                    }else {
                      dispatch({
                        type: 'SET_USER',
                        payload: {
                            user: authUser,
                            basket: []
                        }
                      })
                    }
                })
          }else {
            //user is logged out
            dispatch({
              type: 'SET_USER',
              payload: {
                  user: null,
                  basket: []
              }
            })
          }
        })
    return () => {
      unsubscribe()
    }
  }, [dispatch])

  

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          {/* below is default route if none is matched */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
