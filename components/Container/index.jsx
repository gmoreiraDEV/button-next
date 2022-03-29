import {WrapperContainer} from './styles'

const Container = ({children, isColumn, isDark}) => {
    return (
        <WrapperContainer isColumn={isColumn} isDark={isDark}>
            {children}
        </WrapperContainer>
    )
}

export default Container