import React from 'react';
import PropTypes from 'prop-types';

const Button = React.memo(({
	text,
	onClick,
	type = 'button',
	className = '',
	disabled = false,
	variant = 'default',
	size = 'medium',
	icon,
	children,
	...rest
}) => {
	const buttonClasses = ['btn', `btn-${variant}`, `btn-${size}`, className]
		.filter(Boolean)
		.join(' ');

	return (
		<button
			type={type}
			className={buttonClasses}
			onClick={onClick}
			disabled={disabled}
			{...rest}
		>
			{icon && <span className="btn-icon">{icon}</span>}
			{children || text}
		</button>
	);
});

Button.propTypes = {
	text: PropTypes.string,
	onClick: PropTypes.func,
	type: PropTypes.oneOf(['button', 'submit', 'reset']),
	className: PropTypes.string,
	disabled: PropTypes.bool,
	variant: PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	icon: PropTypes.node,
	children: PropTypes.node,
};

Button.displayName = 'Button';

export default Button;