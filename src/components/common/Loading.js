import { TailSpin } from "react-loader-spinner";
import styled from "styled-components";

const SpinContainer = styled.div`
    position: absolute;
    top:25em;
    left: 50em;
`;
const Text = styled.p`
    margin-top: 15px;
    font-size: 28px;
    font-weight: 400;
    color: #f62459;
`

const Loading = () => {
    return (
        <SpinContainer>
            <TailSpin
                color="#f62459"
                height={90}
                width={90}
            />
            <Text>Loading...</Text>
        </SpinContainer>
    );
}

export default Loading;