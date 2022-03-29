import styled from 'styled-components'

export const Flex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
`

export const WrapperShadow = styled(Flex)`
    position: absolute;
    top: 10px;
    left: 10px;
    width: 100%;
    height: 100%;
    outline: 3px solid ${props => props.isDark ? "#8D8DAA": "#F7F7F7"};
    background: transparent;
    transition: all 0.3s 0s ease-in-out;
    z-index: 9;
`

export const WrapperButtonContent = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    background: ${props => props.isDark ? "#8D8DAA": "#F7F7F7"};
    color: ${props => props.isDark ? "#F7F7F7": "#8D8DAA"};
    padding: 1rem;
    transition: all 0.3s 0s ease-in-out;
    z-index: 99;
`

export const WrapperButton = styled(Flex)`
    position: relative;
    margin: 10px;
    transition: all 0.3s 0s ease-in-out;
    cursor: pointer;

    &:hover {
        ${WrapperButtonContent} {
            background: ${props => props.isDark ? '#F7F7F7' : '#8D8DAA'};
            color: ${props => props.isDark ? '#8D8DAA' : '#F7F7F7'};
        }
        ${WrapperShadow} {
            top: 0;
            left: 0;
        }
    }
`

export const WrapperText = styled(Flex)``

export const WrapperIcon = styled(Flex)`
    width: 30px;
    height: 30px;

    svg {
        width: 100%;
        height: 100%;
    }
`

export const WrapperCustomIcon = styled(Flex)`
    width: 30px;
    height: 30px;

    svg {
        width: 100%;
        height: 100%;
        fill: currentColor;
    }
`

