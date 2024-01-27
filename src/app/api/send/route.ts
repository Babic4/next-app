import { NextResponse, type NextRequest } from 'next/server'
import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'

export async function POST(request: NextRequest) {
	const { email, name, text, title } = await request.json()

	const transport = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.MY_EMAIL,
			pass: process.env.MY_PASSWORD,
		},
	})

	const mailOptions: Mail.Options = {
		from: email,
		to: process.env.MY_EMAIL,
		// cc: email, (uncomment this line if you want to send a copy to the sender)
		subject: `Message from ${name} (${email})`,
		text: text,
		html: `<h1>${title}</h1><p>${text}</div><p>Sent from:${email}</p>`,
	}

	const sendMailPromise = () =>
		new Promise<string>((resolve, reject) => {
			transport.sendMail(mailOptions, function (err) {
				if (!err) {
					resolve('Email sent')
				} else {
					reject(err.message)
				}
			})
		})

	try {
		await sendMailPromise()
		return NextResponse.json({ message: 'Email sent' })
	} catch (err) {
		return NextResponse.json({ error: err }, { status: 500 })
	}
}

// export async function POST(request: Request) {
// 	try {
// 		const body = await request.json()
// 		const { name, email, text } = body
// 		// console.log(name, email, text)
// 		const data = await resend.emails.send({
// 			from: email,
// 			to: ['babich_dima@icloud.com'],
// 			subject: 'Hello world',
// 			react: EmailTemplate({ firstName: name, text: text }),
// 		})

// 		return Response.json(data)
// 	} catch (error) {
// 		return Response.json({ error })
// 	}
// }
