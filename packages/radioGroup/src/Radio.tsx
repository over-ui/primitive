import * as React from "react";

/* -------------------------------------------------------------------------------------------------
 * RadioContext
 * -----------------------------------------------------------------------------------------------*/
type RadioContextValue = { checked?: boolean; disabled?: boolean };

const RADIO_NAME = "Radio";

const RadioContext = React.createContext<RadioContextValue>({});

const RadioProvider = (props: RadioContextValue & { children: React.ReactNode }) => {
	const { children, ...context } = props;
	const value = context;

	return <RadioContext.Provider value={value}>{children}</RadioContext.Provider>;
};

const useRadioContext = () => {
	const context = React.useContext(RadioContext);

	return context;
};

/* -------------------------------------------------------------------------------------------------
 * ImplicitInput
 * -----------------------------------------------------------------------------------------------*/
type ImplicitInputProps = {
	checked: boolean;
	disabled?: boolean;
} & React.HTMLProps<HTMLInputElement>;

const ImplicitInput = (props: ImplicitInputProps) => {
	const { checked, ...inputProps } = props;

	return (
		<input
			type="radio"
			aria-hidden
			defaultChecked={checked}
			{...inputProps}
			tabIndex={-1}
			style={{
				...props.style,
				position: "absolute",
				pointerEvents: "none",
				opacity: 0,
				margin: 0,
			}}
		/>
	);
};

function getState(checked: Boolean) {
	return checked ? "checked" : "unchecked";
}
