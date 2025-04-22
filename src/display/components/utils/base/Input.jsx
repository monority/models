import React, { useState } from 'react';
import Icon from '../../components/utils/Icon';

const Input = ({ type, initialValue, name, defValue, placeholder }) => {
	const [value, setValue] = useState(initialValue || defValue || '');
	const [isFocused, setIsFocused] = useState(false);
	const [showPassword, setShowPassword] = useState(false);

	const isPassword = type === 'password';
	const inputType = isPassword && showPassword ? 'text' : type;

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	const handleFocus = () => {
		setIsFocused(true);
	};

	const handleBlur = () => {
		setIsFocused(false);
	};

	const togglePasswordVisibility = (e) => {
		e.preventDefault();
		setShowPassword(!showPassword);
	};

	return (
		<div className="form_element relative">
			<input
				type={inputType}
				value={value}
				name={name}
				id={name}
				onChange={handleChange}
				onFocus={handleFocus}
				onBlur={handleBlur}
				placeholder={placeholder}
				className='input_default'
				min={type === 'number' ? 1 : undefined}
				max={type === 'number' ? 8 : undefined}
			/>
			<label
				htmlFor={name}
				className={`label_default ${value && !isFocused ? 'label_disabled' : ''}`}
			>
			</label>

			{isPassword && (
				<button
					type="button"
					onClick={togglePasswordVisibility}
					className="password_toggle"
					aria-label={showPassword ? 'Hide password' : 'Show password'}>
					{showPassword ? (
						<Icon type="eye-off" size="2rem" />
					) : (
						<Icon type="eye" size="2rem" />
					)}
				</button>
			)}
		</div>
	);
};

export default Input;