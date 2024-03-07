const Footer = () => {
  return (
      <footer className="bg-black text-gray-400 py-12 ">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8 ">
              <div>
                  <h2 className="text-white text-lg font-semibold mb-4 ">About Us</h2>
                  <p className="mb-4">
                      Music School is a premier institution dedicated to teaching the art and science of music. We nurture talent from the ground up, fostering a vibrant community of musicians.
                  </p>
              </div>
              <div>
                  <h2 className="text-white text-lg font-semibold mb-4 ">Quick Links</h2>
                  <div className=" cursor-pointer">Home</div>
                  <div className=" cursor-pointer">About</div>
                  <div className=" cursor-pointer">Courses</div>
                  <div className=" cursor-pointer">Contact</div>
              </div>
              <div>
                  <h2 className="text-white text-lg font-semibold mb-4 ">Follow Us</h2>
                  <div className=" cursor-pointer">Facebook</div>
                  <div className=" cursor-pointer">Twitter</div>
                  <div className=" cursor-pointer">Contact</div>
              </div>
              <div>
              <h2 className="text-white text-lg font-semibold mb-4 ">Follow Us</h2>
                  <div>New Delhi, India</div>
                  <div>Delhi 10001</div>
                  <div>Email:pryncegupta@gmail.com</div>
                  <div>Phone:(+91)7091775353</div>
              </div>
          </div>
          <p className="text-center mt-10"> © 2024 Music School. All rights reserved</p>
    </footer>
  )
}

export default Footer
