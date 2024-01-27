'use client'

import { Message } from '@/components/Message/Message'
import { Button } from '@/components/UI/Button/Button'
import { Input } from '@/components/UI/Input/Input'
import { Textarea } from '@/components/UI/Textarea/Textarea'
import { useEffect, useState } from 'react'
import styles from './ContactForm.module.scss'

export const ContactForm = () => {
	const [name, setName] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [title, setTitle] = useState<string>('')
	const [text, setText] = useState<string>('')
	const [resText, setResText] = useState<string>('')
	const [type, setType] = useState<string>('')
	const [showMessage, setShowMessage] = useState<boolean>(false)

	// validation variable
	const [errName, setErrName] = useState<boolean>(false)
	const [errEmail, setErrEmail] = useState<boolean>(false)
	const [errTitle, setErrTitle] = useState<boolean>(false)
	const [errText, setErrText] = useState<boolean>(false)

	const inputName = {
		type: 'text',
		value: name,
		placeholder: 'Name',
	}

	const inputEmail = {
		type: 'text',
		value: email,
		placeholder: 'Email',
	}

	const inputTitle = {
		type: 'text',
		value: title,
		placeholder: 'Title',
	}

	const textareaInfo = {
		value: text,
		placeholder: 'Comment',
		rows: 5,
	}

	const changeName: React.ChangeEventHandler<HTMLInputElement> = e => {
		if (e.target.value.length <= 2) setErrName(true)
		else setErrName(false)
		setName(e.target.value)
	}

	const changeEmail: React.ChangeEventHandler<HTMLInputElement> = e => {
		if (e.target.value.length === 0) setErrEmail(true)
		else setErrEmail(false)
		if (!new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}').test(e.target.value))
			setErrEmail(true)
		else setErrEmail(false)
		setEmail(e.target.value)
	}

	const changeTitle: React.ChangeEventHandler<HTMLInputElement> = e => {
		if (e.target.value.length <= 6) setErrTitle(true)
		else setErrTitle(false)
		setTitle(e.target.value)
	}

	const changeText: React.ChangeEventHandler<HTMLInputElement> = e => {
		if (e.target.value.length <= 6) setErrText(true)
		else setErrText(false)
		setText(e.target.value)
	}

	function clearForm(): void {
		setName('')
		setEmail('')
		setTitle('')
		setText('')
	}

	const validation = (): boolean => {
		if (
			!(errName && errEmail && errText && errTitle) &&
			name !== '' &&
			email !== '' &&
			text !== '' &&
			title !== ''
		)
			return true
		return false
	}

	const sendEmail = (e: any) => {
		e.preventDefault()

		if (validation()) {
			let data = {
				name,
				email,
				text,
				title,
			}

			fetch('/api/send', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			})
				.then(response => {
					clearForm()
					return response.json()
				})
				.then(body => {
					setResText(body.message)
					setType('send')
					setShowMessage(true)
				})
				.catch(error => console.log(error))
		} else {
			console.log(122)
			setResText('Fill in the fields')
			setType('error')
			setShowMessage(true)
		}
	}

	useEffect(() => {
		const queryString = window.location.search
		if (queryString) {
			const urlParams = new URLSearchParams(queryString)
			setTitle(`Buy product - ${urlParams.get('title')}`)
		}
	}, [window.location.search])

	return (
		<>
			<Message
				text={resText}
				type={type}
				showMessage={showMessage}
				setTrigger={setShowMessage}
			/>
			<form onSubmit={sendEmail} className={styles.boxForm}>
				<h3>Contact Us</h3>
				<Input onChange={changeName} {...inputName} error={errName} min={2} />
				<Input onChange={changeEmail} {...inputEmail} error={errEmail} />
				<Input
					onChange={changeTitle}
					{...inputTitle}
					error={errTitle}
					min={6}
				/>
				<Textarea
					onChange={changeText}
					{...textareaInfo}
					error={errText}
					min={6}
				/>
				<Button
					type='submit'
					disabled={errName || errEmail || errText || errTitle}
				>
					Send
				</Button>
			</form>
		</>
	)
}
