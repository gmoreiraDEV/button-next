import Link from 'next/link'
import PropTypes from 'prop-types'
import { WrapperButton, WrapperButtonContent,  WrapperText, WrapperIcon, WrapperCustomIcon } from "./styles"

const Button = ({text, icon, customIcon, path, isDark}) => {
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
        </WrapperButton>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    icon: PropTypes.element,
    customIcon: PropTypes.element,
    path: PropTypes.string,
    isDark: PropTypes.bool
}

export default Button

