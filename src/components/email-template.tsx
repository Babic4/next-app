interface EmailTemplateProps {
	firstName: string
	text: string
}

export const EmailTemplate = ({ firstName, text }: EmailTemplateProps) => {
	return (
		<div>
			<h1>Welcome, {firstName}!</h1>
			<p>{text}</p>
		</div>
	)
}
