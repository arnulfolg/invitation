import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

interface FormValues {
	fullName: string,
	confirmation: string
}

export default function ConfirmationForm() {
	
	const wpNumberLink: string = `https://wa.me/528331428255?text=`;

	const ConfirmationSchema = Yup.object().shape({
		fullName: Yup.string()
			.min(6, '¿Tu nombre tal vez es muy corto? Intenta con tu nombre completo.')
			.max(100, '¡Oh! Esto es inesperado, tal vez tu nombre es muy largo.')
			.required('Por favor ingresa tu nombre completo.'),
		confirmation: Yup.string().oneOf(['true', 'false'])
			.required('Por favor confirma si podrás asistir.')
	});

	const onSubmitAction = (values: FormValues) => {
		let newConfirmationMessage: string = '';

			if(values.confirmation === 'true') {
				newConfirmationMessage = ` ${wpNumberLink}
					¡Hola!, confirmo que Sí voy a asistir a la boda de Oyuky y Daniel.
					\nMi nombre es: ${values.fullName}`
			} else {
				newConfirmationMessage =  ` ${wpNumberLink}
					Hola, mi nombre es ${values.fullName}.
					\nLamento confirmar que no podré asistir a la boda de Oyuky y Daniel.`
			}

			window.open(newConfirmationMessage)
	}

	const FormInitialValues: FormValues = {
		fullName: '',
		confirmation: '',
	}

	return (
		<Formik
			initialValues={FormInitialValues}
			validationSchema={ConfirmationSchema}
			onSubmit={onSubmitAction}
			>
			{({ errors, touched }) => (
				<Form className='form_group'>
					<section className='form_section'>
						<label className='form_input_title' htmlFor="fullName">Nombre y Apellido</label>
						<Field type="text" id="fullName" name="fullName"/>
						{errors.fullName && touched.fullName ? (
							<span className='form_section__error'>{errors.fullName}</span>
						) : null}
					</section>

					<fieldset className='form_section'>
						<legend className='form_input_title'>¿Podrás asistir a la boda?</legend>
						<section className='form_section_radio'>
							<Field type="radio" id="si" name="confirmation" value="true"/>
							<label htmlFor="si">Sí</label>
						</section>
						<section className='form_section_radio'>
							<Field type="radio" id="no" name="confirmation" value="false"/>
							<label htmlFor="no">No</label>
						</section>
						{errors.confirmation && touched.confirmation ? (
							<span className='form_section__error'>{errors.confirmation}</span>
						) : null}
					</fieldset>

					<section className='form_section'>
						<button id='send_confirmation' className='button' type="submit">Confirmar asistencia por WhatsApp</button>
					</section>

				</Form>
			)}

		</Formik>
	)
}

