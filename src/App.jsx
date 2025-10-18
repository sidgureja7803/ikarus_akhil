import EditorPanel from './components/EditorPanel';
import UIComponent from './components/UIComponent';

function App() {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <EditorPanel />
      <div className="flex-1 overflow-auto">
        <UIComponent />
      </div>
    </div>
  );
}

export default App;
