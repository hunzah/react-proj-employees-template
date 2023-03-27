import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/app-panel";

import './app.css';


function App() {
    return (
        <div className = "app">
            <AppInfo/>
            <SearchPanel/>
        </div>
    )
}

export default App;