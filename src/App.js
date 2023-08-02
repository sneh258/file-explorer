import React,{useState} from 'react';
import './App.css';
import Folder from './components/Folder';
import explorer from './data/folderData';
import useTraverseTree from './hooks/use-traverse-tree';

function App() {
  const [exporerData,setExplorerData]=useState(explorer);
  const {insertNode}=useTraverseTree();
  
  const handleInsertNode=(folderId,item,isFolder)=>{
    const finalTree=insertNode(exporerData,folderId,item,isFolder);
    setExplorerData(finalTree);

  }

  return (
    <div className="App">
      <Folder explorerData={exporerData} handleInsertNode={handleInsertNode}/>
    </div>
  );
}

export default App;
