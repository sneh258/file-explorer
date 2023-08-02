import React, { useState } from 'react'

function Folder({ explorerData ,handleInsertNode}) {

    const [expand, setExpand] = useState(false);
    const [showInput,setShowInput]=useState({
        visible:false,
        isFolder:null
    })

    const handleNewFolder=(e,t)=>{
        e.stopPropagation();
        setExpand(true)
        setShowInput({
            visible:true,
            isFolder:t
        });
    }

    const onAddFolder=(e)=>{
        if(e.keyCode===13 && e.target.value)
        {
            //add logic
            handleInsertNode(explorerData.id,e.target.value,showInput.isFolder)
            setShowInput({...showInput,visible:false})

        }

    }

    if (explorerData.isFolder) {
        return (
            <div style={{ marginTop: 5, paddingLeft: '20px' }}>
                <div className='folder' onClick={() => setExpand(!expand)}><span>🗂{explorerData.name}</span>
                    <div>
                        <button onClick={(e)=>handleNewFolder(e,true)}>Folder +</button>
                        <button onClick={(e)=>handleNewFolder(e,false)}>File +</button>
                    </div>
                </div>
                <div style={{ display: expand ? "block" : "none", paddingLeft: '35px' }}>
                    {
                        showInput.visible && (
                            <div className='inputContainer'>
                                <span>{showInput.isFolder?"🗂":"📄"}</span>
                                <input className='input'
                                autoFocus
                                onKeyDown={onAddFolder}
                                type={'text'}
                                onBlur={()=>setShowInput({...showInput,visible:false})}/>
                            </div>
                        )
                    }
                    {explorerData.items.map((exp) => {
                        return (<Folder handleInsertNode={handleInsertNode} explorerData={exp} />)
                    })}
                </div>
            </div>
        )
    }
    else {
        return <span className='file'>📄{explorerData.name}</span>
    }
}

export default Folder