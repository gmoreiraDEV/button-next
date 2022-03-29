import styled from 'styled-components'

export const WrapperContainer = styled.section`
    width: 100%;
    heigth: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: ${props => props.isColumn ? 'column' : 'row'};
    background: ${props => props.isDark ? '#3A3845' : '#FDF6EC'};
    padding: 1rem;
`