import "./App.css";
import { CounterView } from "./features/counter/CounterView";
import { PostsView } from "./features/posts/PostsView";

function App() {
  return (
    <div className="App">
      <h1> Counter App</h1>
      <CounterView />
      <h2> List of posts</h2>
      <PostsView />
    </div>
  );
}

export default App;
