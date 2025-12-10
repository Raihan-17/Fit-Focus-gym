import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-16 pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* LOGO + ABOUT */}
        <div>
          <h2 className="text-3xl font-extrabold tracking-wide text-red-100">
            EVO<span className="text-amber-500">GYM</span>
          </h2>

          <p className="mt-4 text-gray-400 leading-relaxed">
            The ultimate destination for those who strive for strength, power,
            and transformation. Elevate your fitness journey with expert coaches
            and world-class facilities.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-6">
            {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-amber-500 transition-all"
                >
                  <Icon className="text-white text-lg" />
                </a>
              )
            )}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-xl font-semibold text-red-100 mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-400">
            <li>
              <Link to="/" className="hover:text-amber-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/trainers" className="hover:text-amber-500 transition">
                Trainers
              </Link>
            </li>
            <li>
              <Link to="/classes" className="hover:text-amber-500 transition">
                Classes
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-amber-500 transition">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-amber-500 transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="text-xl font-semibold text-red-100 mb-4">Support</h3>
          <ul className="space-y-3 text-gray-400">
            <li>
              <Link to="/faq" className="hover:text-amber-500 transition">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/membership" className="hover:text-amber-500 transition">
                Membership Guide
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-amber-500 transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-amber-500 transition">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-xl font-semibold text-red-100 mb-4">
            Contact Info
          </h3>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-amber-500 text-xl" />
              <span>+1 234 567 890</span>
            </li>
            <li className="flex items-center gap-3">
              <MdEmail className="text-amber-500 text-xl" />
              <span>support@gymfit.com</span>
            </li>
            <li className="flex items-start gap-3">
              <MdLocationOn className="text-amber-500 text-xl" />
              <span>
                123 Strength Avenue <br /> Muscle City, USA
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-800 mt-14 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} FitNation. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
