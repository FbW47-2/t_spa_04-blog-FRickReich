import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Components/Header';

import Welcome from './Pages/Welcome';
import NewPost from './Pages/NewPost';
import Posts from './Pages/Posts';
import NotFound from './Pages/NotFound';

import './App.css';

function App()
{
    return (
        <>
            <BrowserRouter>
                <Header />

                <div className="Page">
                    <Switch>
                        <Route exact path="/" component={ Welcome } />
                        <Route exact path="/posts/new" component={ NewPost } />
                        <Route exact path="/posts" component={ Posts } />
                        <Route component={ NotFound } />
                    </Switch>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
