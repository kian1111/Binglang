import styled from "styled-components"

const StyledLoader = styled.div`

    display: inline-block;

    width: ${({size}) => size};
    height: ${({size}) => size};

    @keyframes animation {
        0% {
            stroke-dasharray: 1 98;
            stroke-dashoffset: -105;
        }
        50% {
            stroke-dasharray: 80 10;
            stroke-dashoffset: -160;
        }
        100% {
            stroke-dasharray: 1 98;
            stroke-dashoffset: -300;
        }
    }

    .spinner {
        transform-origin: center;
        animation-name: animation;
        animation-duration: 1.2s;
        animation-timing-function: cubic-bezier;
        animation-iteration-count: infinite;
    }
`

export const Loader = ({size="15rem", color="#000000"}) => {

    const style = {fill:"transparent", stroke:color, strokeWidth: "0.7rem", strokeLinecap: "round"}

    return (
        <StyledLoader size={size}>
            <svg viewBox="0 0 100 100">
                <defs>
                </defs>
                <circle className="spinner" style={style} cx="50" cy="50" r="45"/>
            </svg>
        </StyledLoader>
    )
}