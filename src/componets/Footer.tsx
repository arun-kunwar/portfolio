
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";


function Footer() {
  return (
    <section className="bg-white py-5">
      <div className=" pt-7 w-[90%] h-[30vh] mx-auto  border-b-2 border-b-gray-200 border-t-2 border-t-gray-200 grid grid-cols-4">
        <div className="">
          <h1 className="font-bold text-2xl ">Arun Kunwar</h1>
          <p className="pt-5 text-gray-900 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
            suscipit aut possimus quis!
          </p>
        </div>

        <div className="pl-20">
          <h1 className="font-bold text-2xl">Explore</h1>
          <ul className="space-y-3 pt-5 text-gray-900">
            <li>Home</li>
            <li>About</li>
            <li>Portfilo</li>
            
          </ul>
        </div>
        <div className="pl-20">
          <h1 className="font-bold text-2xl">About</h1>
          <ul className="space-y-3 pt-5 text-gray-900">
            <li>Contacts</li>
            <li>Privacy Policy</li>
            <li>Terms & condition</li>
            
          </ul>
        </div>
        <div className="pl-5">
          <h1 className="font-bold text-2xl">Contacts</h1>
          <div className=" flex pt-5 space-x-5">
          <FaFacebook className="size-7"/>
          <FaInstagram className="size-7"/>
          <FaTwitter className="size-7"/>
          </div>
          
         
        </div>
      </div>
      <div>
        <p className=" text-gray-900 text-s pl-16 pt-2">
          &copy; 2023 Arun Kunwar. All rights reserved.
        </p>
      </div>
    </section>
  );
}

export default Footer;
