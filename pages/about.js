import Layout from '../components/layout'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <Layout>
      <motion.div
        key="about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="px-4"
      >
        <div className="mb-6 text-center text-gray-800 dark:text-white">
          Hi, I am Rajedra Dave, owner of Mukul Travel Agency. With my son Atharv Dave, I have been working in the travel industry for over 3 years. At New Mukul Travel Agency we try to provide a one stop solition for all travel related needs.
        </div>
        <div className="text-center text-gray-800 dark:text-white">
          We specialize in Taxi Rental, Tour Package Planning, Transport, Hotel Booking, E-ticket, Rail, Flight, Bus, Passport Visa, Money Transfer, Foreign Exchange, and many more. If you think our services can help you, please feel free to contact us using the links below. :)
        </div>
      </motion.div>
    </Layout>
  )
}
