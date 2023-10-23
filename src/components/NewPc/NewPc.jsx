import { useState } from 'react';

export default function NewPc({ addPc }) {
    const [PC, setPC] = useState('');

    function handleAddPC() {
        addPc(PC);
        setPC('');
    }

    return (
        <>
            <h2>NewPC</h2>
            <input value={PC} onChange={(evt) => setPC(evt.target.value)} rows="4" cols="50" />
            <input type="text" />
            <button onClick={handleAddPC}>Add Post</button>
        </>
    );
}