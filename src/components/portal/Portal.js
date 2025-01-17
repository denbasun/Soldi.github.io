import {useRef, useEffect, memo} from 'react'
import ReactDOM from 'react-dom';
const Portal = memo((props) =>{
    const nodeRef = useRef(document.createElement('div'))
    useEffect(()=>{
        // Insert a div into the body only when the component is mounted.
        const node = nodeRef.current;
        document.body.appendChild(node);
        // Remove the div when the component is unmounted.
        return () => {
            document.body.removeChild(node);
        };
    },[])
    return ReactDOM.createPortal(props.children, nodeRef.current);
})

export default Portal