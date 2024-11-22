import {useRef, useEffect, memo} from 'react'
import ReactDOM from 'react-dom';
const Portal = memo((props) =>{
    const nodeRef = useRef(document.createElement('div'))

    useEffect(()=>{
        // Вставляем div в body только при монтировании компонента
        const node = nodeRef.current;
        document.body.appendChild(node);

        // Удаляем div при размонтировании компонента
        return () => {
            document.body.removeChild(node);
        };
    },[])

    return ReactDOM.createPortal(props.children, nodeRef.current);
})

export default Portal