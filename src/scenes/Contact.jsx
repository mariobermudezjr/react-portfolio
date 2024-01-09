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
    <section id="contact" className="contact mt-24 mb-24">
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
        className="flex  justify-start w-full"
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-yellow">CONTACT INFO</span>
          </p>
          <div className="flex md:justify-start my-5">
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
      </div>
      {/* FORM */}
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <input
          className="w-full bg-white text-black font-semibold placeholder-opaque-black p-3 mb-3"
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
          className="w-full bg-white text-black font-semibold placeholder-opaque-black p-3 mb-3"
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
        <textarea
          className="w-full bg-white text-black font-semibold placeholder-opaque-black p-3 mt-5"
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
          className="p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-500"
          type="submit"
        >
          SEND
        </button>
      </form>
    </section>
  )
}
// const {
//   register,
//   trigger,
//   handleSubmit,
//   formState: { errors },
// } = useForm()

// const onSubmit = async () => {
//   console.log('Outside of try')
//   // async request which may result error
//   try {
//     console.log('inside of try')
//     // await fetch()
//   } catch (e) {
//     console.log('inside of catch')
//     // handle your error
//   }
// }

// const onSubmitForm = async (e) => {
//   console.log('Values', e)
//   const isValid = await trigger()
//   if (!isValid) {
//     e.preventDefault()
//   }
// }

//   return (
//     <section id="contact" className="contact py-48">
//       {/* HEADINGS */}
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.5 }}
//         transition={{ duration: 0.5 }}
//         variants={{
//           hidden: { opacity: 0, x: 50 },
//           visible: { opacity: 1, x: 0 },
//         }}
//         className="flex justify-end w-full"
//       >
//         <div>
//           <p className="font-playfair font-semibold text-4xl">
//             <span className="text-yellow">CONTACT INFO</span>
//           </p>
//           <div className="flex md:justify-end my-5">
//             <LineGradient width="w-full" />
//           </div>
//         </div>
//       </motion.div>

//       {/* FORM & IMAGE */}
//       <div className="md:flex md:justify-between gap-16 mt-5">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.5 }}
//           variants={{
//             hidden: { opacity: 0, y: 50 },
//             visible: { opacity: 1, y: 0 },
//           }}
//           className="basis-1/2 flex justify-center"
//         >
//           <img src="../assets/contact-image.jpeg" alt="contact" />
//         </motion.div>

//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ delay: 0.2, duration: 0.5 }}
//           variants={{
//             hidden: { opacity: 0, y: 50 },
//             visible: { opacity: 1, y: 0 },
//           }}
//           className="basis-1/2 mt-10 md:mt-0"
//         >
//           <form
//             // target="_blank"
//             onSubmit={handleSubmit(onSubmit)}
//             // action="https://script.google.com/macros/s/AKfycbz_aHKLvz6LO3NT9y9HS9FuIlQ8NZadn2fHcn66HBaT7nheUKF3jJ6eaUN9piFKiD4l/exec"
//             // method="POST"
//           >
//             <input
//               className="w-full bg-white text-black font-semibold placeholder-opaque-black p-3"
//               type="text"
//               placeholder="Client Name"
//               name="Client Name"
//               {...register('Client Name', {
//                 required: true,
//                 minLength: 4,
//                 maxLength: 100,
//               })}
//             />
//             {errors.name && (
//               <p className="text-red mt-1">
//                 {errors.name.type === 'required' && 'This field is required.'}
//                 {errors.name.type === 'maxLength' && 'Max length is 100 char.'}
//               </p>
//             )}

//             <input
//               className="w-full bg-white text-black font-semibold placeholder-opaque-black p-3 mt-5"
//               type="text"
//               placeholder="Email"
//               name="Email"
//               {...register('Email', {
//                 required: true,
//                 pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//               })}
//             />
//             {errors.email && (
//               <p className="text-red mt-1">
//                 {errors.email.type === 'required' && 'This field is required.'}
//                 {errors.email.type === 'pattern' && 'Invalid email address.'}
//               </p>
//             )}

//             <textarea
//               className="w-full bg-white text-black font-semibold placeholder-opaque-black p-3 mt-5"
//               name="message"
//               placeholder="MESSAGE"
//               rows="4"
//               cols="50"
//               {...register('message', {
//                 required: true,
//                 minLength: 5,
//                 maxLength: 2000,
//               })}
//             />
//             {errors.message && (
//               <p className="text-red mt-1">
//                 {errors.message.type === 'required' && 'This field is required.'}
//                 {errors.message.type === 'maxLength' && 'Max length is 2000 char.'}
//               </p>
//             )}

//             <button
//               className="p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-500"
//               type="submit"
//             >
//               SEND ME A MESSAGE
//             </button>
//           </form>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

export default Contact
