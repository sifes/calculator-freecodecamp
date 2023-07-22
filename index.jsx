function App() {
    const [output,setOutput] = React.useState('')
    const [answer, setAnswer] = React.useState('')

    function calcAndDisplay() {
        setAnswer(eval(output))
        setOutput(prev=>prev+'=')
    }

    function display(symbol) {
        if (output==='0'||output===0&&symbol===0||symbol==='0') return 
        if ((output+'').includes('.')&&symbol==='.') return 

        if (output===0) {
            setOutput(symbol)
            return
            
        }
        setOutput(prev=>prev+symbol)
        if (output[output.length-1]=='=') {
            if (/[0-9]./.test(symbol)) {
                setOutput(symbol)
            } else {
                setOutput(answer+symbol)
            }
            
        }
    }
    function clearAll() {
        setOutput(0)
        setAnswer(0)
    }

    
	return (
		<div className="container">
			<div className='calculator'>
				<div className='display column-4' >
					<div className='output' id='display'>{output}</div>
					<div className='input'>{answer}</div>
				</div>
                <button onClick={()=>clearAll()} className='button column-3' id='clear'>AC</button>
				<button onClick={()=>display('+')} className="button" id={'add'}>+</button>
				<button onClick={()=>display('1')} className="button" id={'one'}>{1}</button>
				<button onClick={()=>display('2')} className="button" id={'two'}>{2}</button>
				<button onClick={()=>display('3')} className="button" id={'three'}>{3}</button>
				<button onClick={()=>display('-')} className="button" id={'subtract'}>-</button>
				<button onClick={()=>display('4')} className="button" id={'four'}>{4}</button>
				<button onClick={()=>display('5')} className="button" id={'five'}>{5}</button>
				<button onClick={()=>display('6')} className="button" id={'six'}>{6}</button>
				<button onClick={()=>display('/')} className="button" id={'divide'}>/</button>
				<button onClick={()=>display('7')} className="button" id={'seven'}>{7}</button>
				<button onClick={()=>display('8')} className="button" id={'eight'}>{8}</button>
				<button onClick={()=>display('9')} className="button" id={'nine'}>{9}</button>
				<button onClick={()=>display('*')} className="button" id={'multiply'}>*</button>
                <button onClick={()=>display('.')} className='button' id='decimal'>.</button>
				<button onClick={()=>display('0')} className='button' id={'zero'}>{0}</button>
				<button onClick={()=>calcAndDisplay()} className='button column-2' id='equals'>=</button>
			</div>
		</div>
	);
}



ReactDOM.render(<App />, document.getElementById('root'));
