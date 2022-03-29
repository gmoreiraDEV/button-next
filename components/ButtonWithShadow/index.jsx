import PropTypes from 'prop-types'
import Link from 'next/link'
import { WrapperButton, WrapperButtonContent,  WrapperText, WrapperIcon, WrapperCustomIcon, WrapperShadow } from "./styles"

const ButtonWithShadow = ({text, icon, customIcon, path, isDark}) => {
    return( 
        <WrapperButton isDark={isDark}>
            <Link href={path}>
            <WrapperButtonContent isDark={isDark}>
                {icon && !customIcon && <WrapperIcon>{icon}</WrapperIcon>}
                {customIcon && !icon && 
                    <WrapperCustomIcon>{customIcon}</WrapperCustomIcon> 
                }
                <WrapperText>{text}</WrapperText>
            </WrapperButtonContent>
            </Link>
            <WrapperShadow isDark={isDark}  />
        </WrapperButton>
    )
}


ButtonWithShadow.propTypes = {
    text: PropTypes.string,
    icon: PropTypes.element,
    customIcon: PropTypes.element,
    path: PropTypes.string,
    isDark: PropTypes.bool
}

export default ButtonWithShadow