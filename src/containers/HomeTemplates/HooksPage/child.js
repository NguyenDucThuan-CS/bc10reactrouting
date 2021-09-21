import React, { memo } from 'react'

 function Child() {
     console.log("child");
    return (
        <div>
            Child component
        </div>
    )
}
 export default memo(Child);