
// <> fragment có chức năng không phá vỡ cấu trúc của css

import './style.css'

const MyComponent = () => {
    return (
        <>
            <div>BAO PHAM & ERIC</div>
            <div className='child'>hahahaha</div>
        </>
    );
}

export default MyComponent;