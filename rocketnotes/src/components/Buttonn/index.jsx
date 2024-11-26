import { Container } from "./styles";

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