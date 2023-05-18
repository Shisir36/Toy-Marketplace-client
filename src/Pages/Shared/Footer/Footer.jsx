
const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-600">
        <div className="container py-8 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-bold mb-4">ACME Industries Ltd.</h4>
              <p className="mb-2">Providing reliable tech since 1992</p>
            </div>
            <div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <h5 className="text-lg font-bold">SERVICES</h5>
                  <ul className="space-y-2">
                    <li>Branding</li>
                    <li>Design</li>
                    <li>Marketing</li>
                    <li>Advertisement</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-lg font-bold">COMPANY</h5>
                  <ul className="space-y-2">
                    <li>About us</li>
                    <li>Contact</li>
                    <li>Jobs</li>
                    <li>Press kit</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-lg font-bold">LEGAL</h5>
                  <ul className="space-y-2">
                    <li>Terms of use</li>
                    <li>Privacy policy</li>
                    <li>Cookie policy</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500">
            &copy; {new Date().getFullYear()} ACME Industries Ltd. All rights reserved.
          </div>
        </div>
      </footer>
  
    );
};

export default Footer;