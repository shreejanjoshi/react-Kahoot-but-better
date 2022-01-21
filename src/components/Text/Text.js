import { useState } from "react";

const Text = () => {
    const [color, setColor] = useState('blue');
    const handelColor = (params) => {
        setColor(params);
    };

    return (
        <div className="mt-20">
            {color}
            <button className="h-10 bg-blue-500 px-4 text-white" value='blue' onClick={e => setColor('blue')}>Blue</button>
            <button className="h-10 bg-red-500 px-4 text-white" value='red' onClick={e => setColor('red')}>Red</button>
            <button className="h-10 bg-green-500 px-4 text-white" value='green' onClick={e => setColor('green')}>Green</button>
        </div>
    );
};

export default Text;