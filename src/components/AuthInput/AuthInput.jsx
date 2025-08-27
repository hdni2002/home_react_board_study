/** @jsxImportSource @emotion/react */
import * as s from "./styles";

function AuthInput({ type, placeholder, state, setState, disabled }) {
	const onChangeHandler = (e) => {
		setState(e.target.value);
	};

	return (
		<>
			<input
				css={s.input}
				type={type}
				value={state}
				placeholder={placeholder}
				onChange={onChangeHandler}
				disabled={disabled}
			/>
		</>
	);
}

export default AuthInput;