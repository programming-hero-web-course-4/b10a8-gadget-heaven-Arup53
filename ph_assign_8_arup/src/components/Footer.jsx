function Footer() {
  return (
    <div className=" mt-12 py-12 flex flex-col justify-center items-center  gap-6 text-center bg-stone-200">
      <h3 className="text-xl font-bold my-2">Gadget Heaven</h3>
      <p className="text-sm text-gray-500 mb-12">
        Leading the way in cutting-edge technology and innovation.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div>
          <h3 className="text-base font-bold mb-6">Services</h3>
          <div className="flex flex-col gap-1">
            <p className="text-sm text-gray-500 ">Product Support</p>
            <p className="text-sm text-gray-500 ">Order Tracking</p>
            <p className="text-sm text-gray-500 ">Shipping & Delivery</p>
            <p className="text-sm text-gray-500 ">Returns</p>
          </div>
        </div>

        <div>
          <h3 className="text-base font-bold mb-6">Company</h3>
          <div className="flex flex-col gap-1">
            <p className="text-sm text-gray-500 ">About Us</p>
            <p className="text-sm text-gray-500 ">Careers</p>
            <p className="text-sm text-gray-500 ">Contact</p>
          </div>
        </div>

        <div>
          <h3 className="text-base font-bold mb-6">Legal</h3>
          <div className="flex flex-col gap-1">
            <p className="text-sm text-gray-500 ">Terms of Service</p>
            <p className="text-sm text-gray-500 ">Privacy Policy</p>
            <p className="text-sm text-gray-500 ">Cookie Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
