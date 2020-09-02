// Moduls
import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loader from "react-loader-spinner";

import { useSelector } from "react-redux";

// import Pagination from "@material-ui/lab/Pagination";

// My Components
// import { getTrending, request } from "./Components/helpers/request";

// CSS
import "./App.css";

// import Header from "./Components/Header/Header";
// import MovieDetailsPage from "./Components/MovieDetailsPage/MovieDetailsPage";
const MovieDetailsPage = lazy(() => import("./Components/MovieDetailsPage/MovieDetailsPage.js"));
const ActorsDetailsPage = lazy(() => import("./Components/ActorsDetailsPage/ActorsDetailsPage.js"));
const Header = lazy(() => import("./Components/Header/Header"));

// My Containers
// import Movies from "./Container/Movies/Movies";
// import Home from "./Container/Home/Home";
const Home = lazy(() => import("./Containers/Home/Home.js"));
const Movies = lazy(() => import("./Containers/Movies/Movies.js"));
const Favorite = lazy(() => import("./Containers/Favorite/Favorite.js"));

const App = () => {
  return (
    <div className="App">
      {useSelector((state) => state.loader) && (
        <span className="loader">
          <Loader type="Oval" color="#00BFFF" height={300} width={300} />
        </span>
      )}
      <Suspense fallback={<p>Compaling...</p>}>
        <Header />
        <main className="main">
          <Switch>
            <Route path="/" exact render={(props) => <Home {...props} />} />
            <Route path="/movies" exact render={(props) => <Movies {...props} />} />
            <Route path="/movies/favorite" exact render={(props) => <Favorite {...props} />} />
            <Route path="/movies/:id" render={(props) => <MovieDetailsPage {...props} />} />
            <Route path="/actors/:id" render={(props) => <ActorsDetailsPage {...props} />} />
            <Redirect to="/" />
          </Switch>
        </main>
      </Suspense>
    </div>
  );
};

// class App extends Component {
//   state = {
//     loader: true,
//   };
//   loaderToggle = (value) => {
//     this.setState({
//       loader: value,
//     });
//   };
//   render() {
//     return (
//       <div className="App">
//         {this.state.loader && (
//           <span className="loader">
//             <Loader type="Oval" color="#00BFFF" height={300} width={300} />
//           </span>
//         )}
//         <Suspense fallback={<p>Compaling...</p>}>
//           <Header />
//           <main className="main">
//             <Switch>
//               {/* <Route path="/" exact render={(props) => <Home {...props} {...this} />} /> */}
//               {/* <Route path="/movies" exact render={(props) => <Movies {...props} {...this} />} /> */}
//               {/* <Route path="/movies/favorite" exact render={(props) => <Favorite {...props} {...this} />} /> */}
//               {/* <Route path="/movies/:id" render={(props) => <MovieDetailsPage {...props} {...this} />} /> */}
//               <Route path="/actors/:id" render={(props) => <ActorsDetailsPage {...props} {...this} />} />
//               <Redirect to="/" />
//             </Switch>
//           </main>
//         </Suspense>
//       </div>
//     );
//   }
// }

export default App;
