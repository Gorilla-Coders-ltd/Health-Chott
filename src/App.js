import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '../src/assets/images/logo-no-background.png'
import Mobile from '../src/assets/images/HealthChott.png'

const navigation = [
  { name: 'Services', href: '#' },
  { name: 'About Us', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Chott Bot', href: '#' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      {/* Starting of Header Tag(Navigation and Logo) */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="https" className="-m-1.5 p-1.5">
              <span className="sr-only">Health Chott</span>
              <img src={Logo}
                alt="Health Chott Logo"
                className="h-32 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="https" className="text-sm font-semibold leading-6 text-gray-900">
              Log in / Register <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="https" className="-m-1.5 p-1.5">
                <span className="sr-only">Health Chott</span>
                <img
                  src={Logo}
                  alt="Health Chott Logo"
                  className="h-32 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="https"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
      {/* Ending of Header Tag(Navigation and Logo) */}

      {/* Starting of Banner */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our First ChatBot To Assist you 24/7.{' '}
              <a href="https" className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" />
                Chat Now <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Data Platform to enrich your Health Records
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Empowering healthcare through seamless data integration, ensuring accurate and accessible health records for better patient care and outcomes.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="https" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        {/* <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div> */}


        <div class="container mx-auto px-4 -mt-16 mb-10">
          {/* <!-- Heading --> */}
            <h2 class="text-3xl font-bold text-center mb-8 mr-3">OUR MAIN SERVICES</h2>
            




          {/* <!-- Grid Layout for Cards --> */}
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {/* <!-- Card 1 --> */}
            <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="work">
                <img class="rounded-t-lg w-full" src="/docs/images/blog/image-1.jpg" alt="" />
              </a>
              <div class="p-5">
                <a href="work">
                  <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Emergency Blood and Platelet Donations</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Users can request and coordinate blood or platelet donations through the app, with location-based matching and real-time notifications to facilitate quick and effective donation processes.</p>
              </div>
            </div>

            {/* <!-- Repeat Card 1 for other cards --> */}
            <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="work">
                <img class="rounded-t-lg w-full" src="/docs/images/blog/image-1.jpg" alt="" />
              </a>
              <div class="p-5">
                <a href="work">
                  <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Centralized Health Records</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Secure storage and management of digital health records, allowing users to upload, access, and share their medical records with hospitals, employers, or educational institutions as needed.</p>
              </div>
            </div>

            {/* <!-- Repeat the above cards to create a total of 8 cards --> */}
            <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="work">
                <img class="rounded-t-lg w-full" src="/docs/images/blog/image-1.jpg" alt="" />
              </a>
              <div class="p-5">
                <a href="work">
                  <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Health Compatibility for Couples</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Couples can check their blood group and genotype compatibility to make informed decisions about health and family planning.</p>
              </div>
            </div>

            <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="work">
                <img class="rounded-t-lg w-full" src="/docs/images/blog/image-1.jpg" alt="" />
              </a>
              <div class="p-5">
                <a href="work">
                  <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Personalized First-Aid Assistance</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">A health chat AI (Chott bot) provides users with easy first-aid information and refers them to the nearest hospital or doctor for critical emergencies.</p>
              </div>
            </div>

            <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="work">
                <img class="rounded-t-lg w-full" src="/docs/images/blog/image-1.jpg" alt="" />
              </a>
              <div class="p-5">
                <a href="work">
                  <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Integration with Health Facilities</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Hospitals and clinics can access and update patient records within the app, streamlining patient care and administrative processes.</p>
              </div>
            </div>

            <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="work">
                <img class="rounded-t-lg w-full" src="/docs/images/blog/image-1.jpg" alt="" />
              </a>
              <div class="p-5">
                <a href="work">
                  <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Individual and Health Care Center Registration</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Allows individuals and healthcare centers to register on the app, with healthcare centers having access to a subscription-based database for managing locations and emergencies.</p>
              </div>
            </div>
            <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="work">
                <img class="rounded-t-lg w-full" src="/docs/images/blog/image-1.jpg" alt="" />
              </a>
              <div class="p-5">
                <a href="work">
                  <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Donation Requests for Individuals</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Individuals can register on the app for emergency purposes, allowing them to request blood or platelet donations even if their medical records haven’t been manually logged by a healthcare facility.</p>
              </div>
            </div>
            <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="work">
                <img class="rounded-t-lg w-full" src="/docs/images/blog/image-1.jpg" alt="" />
              </a>
              <div class="p-5">
                <a href="work">
                  <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Real-Time Health Notifications</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">The app provides real-time notifications to both donors and recipients, ensuring fast coordination and response during critical health emergencies, including donation availability and health alerts.</p>
              </div>
            </div>
          </div>
        </div>






        {/* Download Our App on Play Store or App Store */}

        <div class="w-full p-4 mb-10 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Healthcare Access Anytime, Anywhere</h5>
          <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Streamline your healthcare with Health Chott, available on iOS & Android. Download the app today and take control of your health.</p>
          <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
            <a href="work" class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
              <svg class="me-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
              <div class="text-left rtl:text-right">
                <div class="mb-1 text-xs">Download on the</div>
                <div class="-mt-1 font-sans text-sm font-semibold">App Store</div>
              </div>
            </a>
            <a href="work" class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
              <svg class="me-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path></svg>
              <div class="text-left rtl:text-right">
                <div class="mb-1 text-xs">Get in on</div>
                <div class="-mt-1 font-sans text-sm font-semibold">Google Play</div>
              </div>
            </a>
          </div>
        </div>
{/* Ending of Banner */}


<div class="flex justify-between items-center mx-auto">
  {/* <!-- Left Side - Health Chott (hidden on smaller screens with bounce animation) --> */}
  <div class="font-mono underline decoration-sky-500 text-left text-3xl font-bold text-gray-800 dark:text-black hidden lg:block animate-bounce-left">
    Health Chott
  </div>

  {/* <!-- Mobile Mockup with shadow and simple animation --> */}
  <div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl animate-pulse">
    <div class="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
    <div class="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
    <div class="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
    <div class="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
    <div class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800 shadow-2xl">
      <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png" class="dark:hidden w-[272px] h-[572px]" alt="" />
      <img src={Mobile} class="hidden dark:block w-[272px] h-[572px]" alt="Mobile App" />
    </div>
  </div>

  {/* <!-- Right Side - Mobile App (hidden on smaller screens with bounce animation) --> */}
  <div class="font-mono underline decoration-pink-500 text-right text-3xl font-bold text-gray-800 dark:text-black hidden lg:block animate-bounce-right">
    Mobile App
  </div>
</div>


          

      </div>
      

      {/* Footer */}
      <footer class="bg-white dark:bg-gray-900">
        <div class="mx-auto w-full max-w-screen-xl">
          <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="work" class=" hover:underline">Services</a>
                </li>
                <li class="mb-4">
                  <a href="work" class="hover:underline">About Us</a>
                </li>
                <li class="mb-4">
                  <a href="work" class="hover:underline">MarketPlace</a>
                </li>
                <li class="mb-4">
                  <a href="work" class="hover:underline">Chott Bot</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help center</h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="work" class="hover:underline">Discord Server</a>
                </li>
                <li class="mb-4">
                  <a href="work" class="hover:underline">Twitter</a>
                </li>
                <li class="mb-4">
                  <a href="work" class="hover:underline">Facebook</a>
                </li>
                <li class="mb-4">
                  <a href="work" class="hover:underline">Contact Us</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="work" class="hover:underline">Privacy Policy</a>
                </li>
                <li class="mb-4">
                  <a href="work" class="hover:underline">Licensing</a>
                </li>
                <li class="mb-4">
                  <a href="work" class="hover:underline">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Download</h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="work" class="hover:underline">iOS</a>
                </li>
                <li class="mb-4">
                  <a href="work" class="hover:underline">Android</a>
                </li>
                <li class="mb-4">
                  <a href="work" class="hover:underline">Windows</a>
                </li>
                <li class="mb-4">
                  <a href="work" class="hover:underline">MacOS</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
            <span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2024 <a href="https://gorillacoders.tech/">Health Chott Limited™</a>. All Rights Reserved.
            </span>
            <div class="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
              <a href="work" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                  <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
                </svg>
                <span class="sr-only">Facebook page</span>
              </a>
              <a href="work" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                  <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                </svg>
                <span class="sr-only">Discord community</span>
              </a>
              <a href="work" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                  <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd" />
                </svg>
                <span class="sr-only">Twitter page</span>
              </a>
              <a href="work" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                </svg>
                <span class="sr-only">GitHub account</span>
              </a>
              <a href="work" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd" />
                </svg>
                <span class="sr-only">Dribbble account</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
