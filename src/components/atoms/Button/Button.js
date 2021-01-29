import React from 'react';
import PropTypes from 'prop-types';

Button.propTypes = {
    children: PropTypes.string.isRequired, 
    className: PropTypes.string,
    type: PropTypes.string.isRequired, //bắt buộc người dùng điền type ghi gọi component
    onClick: PropTypes.func
};

Button.defaultProps = {
    children: "Default Children",
    className: "class",
    type: "button"
}

function Button(props) {
    const {children, className, type, onClick} = props;
    return (
        <div>
            <button class={className}
            type={type}
            onClick={onClick}>{children}</button>
        </div>
    );
}

export default Button;