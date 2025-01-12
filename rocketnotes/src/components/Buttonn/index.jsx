import { Container } from "./styles";

import { Links } from "react-router-dom"

export function Buttonn({title, loading = false, ...rest}) {
    return (
        <Container 
        type="button"
        disabled={loading}
        {...rest}
        >
            {title}
            
        </Container>
    )
}