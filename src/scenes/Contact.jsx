import { useEffect } from 'react'
import LineGradient from '../components/LineGradient'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm({ defaultValues: { name: '', email: '', message: '' } })
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

  const onSubmit = async (data, e) => {
    e.preventDefault()
    let newKeyValuePairs = []
    Object.keys(data).map((key) => {
      newKeyValuePairs.push(key + '=' + data[key])
    })
    let yourDate = new Date()

    newKeyValuePairs.push('Date' + '=' + yourDate.toISOString().split('T')[0])
    let newFormDataString = newKeyValuePairs.join('&')

    try {
      await fetch(`${process.env.REACT_APP_GOOGLE_URL}`, {
        method: 'POST',
        redirect: 'follow',
        body: newFormDataString,
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
      })
        .then((response) => {
          // Check if the request was successful
          if (response) {
            alert('Message Sent!')
            return response // Assuming your script returns JSON response
          } else {
            throw new Error('Failed to submit the form.')
          }
        })
        .then((data) => {
          // Display a success message
        })
        .catch((error) => console.log(error))
      // const data = await response.json()
    } catch (error) {
      // Display Error that something went wrong
      alert('Failed to send, try changing your input values')
    }
  }
  const onError = (errors, e) => {
    alert('Failed to send, check required fields')
  }

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ name: '', email: '', message: '' })
    }
  }, [formState, reset])

  return (
    <section id="contact" className="contact mt-24 mb-12">
      {/* HEADINGS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex  justify-center w-full"
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-yellow">CONTACT INFO</span>
          </p>
          <div className="flex md:justify-center my-5">
            <LineGradient width="w-full" />
          </div>
        </div>
      </motion.div>
      {/* IMAGE */}
      <div className="md:flex md:justify-between gap-16 mt-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 flex justify-center"
        >
          <img src="../assets/contact-image.jpeg" alt="contact" />
        </motion.div>

        {/* FORM */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="alibasis-1/2 mt-10 md:mt-0 mr-0"
        >
          <form
            className="flex flex-col justify-evenly place-content-center mt-20"
            onSubmit={handleSubmit(onSubmit, onError)}
          >
            <div>
              <input
                className=" w-full md:1-auto bg-white text-black font-semibold placeholder-opaque-black p-3 mr-1 mb-1 rounded-md"
                placeholder="Name"
                {...register('name', { required: true, minLength: 2, maxLength: 100 })}
              />
              {errors.name && (
                <p className="text-red mt-1">
                  {errors.name.type === 'required' && 'This field is required.'}
                  {errors.name.type === 'maxLength' && 'Max length is 100 char.'}
                </p>
              )}
              <input
                className="w-full md:1-auto bg-white text-black font-semibold placeholder-opaque-black p-3 mb-1 rounded-md"
                placeholder="Email"
                {...register('email', {
                  required: true,
                  minLength: 2,
                  maxLength: 100,
                  pattern: {
                    value: emailRegex,
                    message: 'Enter a valid Email Address.',
                  },
                })}
              />
              {errors.email && (
                <p className="text-red mt-1">
                  {errors.email.type === 'required' && 'This field is required.'}
                  {errors.email.type === 'pattern' && 'Invalid email address.'}
                </p>
              )}
            </div>
            <textarea
              className="bg-white text-black font-semibold placeholder-opaque-black py-3 px-3 rounded-md"
              placeholder="Message"
              {...register('message', {
                required: true,
                minLength: 2,
                maxLength: 100,
              })}
            />
            {errors.message && (
              <p className="text-red mt-1">
                {errors.message.type === 'required' && 'This field is required.'}
                {errors.message.type === 'maxLength' && 'Max length is 2000 char.'}
              </p>
            )}

            <button
              className="p-2 bg-yellow font-semibold text-deep-blue mt-1 hover:bg-red hover:text-white transition duration-500 rounded-md"
              type="submit"
            >
              Send
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
