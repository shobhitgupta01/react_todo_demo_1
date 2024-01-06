import { memo } from "react"

export const Header = memo(function ({title}){
    return <div>
        {title}
    </div>
});
